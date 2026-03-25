import { NextRequest, NextResponse } from "next/server";
import { readEvents, writeEvent, type AnalyticsEvent } from "@/lib/analytics/store";

// POST — record an event
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const event: AnalyticsEvent = {
      id: crypto.randomUUID(),
      type: body.type || "page_view",
      timestamp: new Date().toISOString(),
      path: body.path || "/",
      referrer: body.referrer || "",
      userAgent: req.headers.get("user-agent") || "",
      sessionId: body.sessionId || "",
      meta: body.meta,
    };
    writeEvent(event);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }
}

// GET — retrieve aggregated analytics data
export async function GET(req: NextRequest) {
  const events = readEvents();
  const range = req.nextUrl.searchParams.get("range") || "30"; // days
  const days = Math.min(parseInt(range, 10) || 30, 90);

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const filtered = events.filter((e) => new Date(e.timestamp) >= cutoff);

  // --- Aggregate metrics ---

  const pageViews = filtered.filter((e) => e.type === "page_view");
  const sessions = new Set(filtered.map((e) => e.sessionId));
  const bookingStarts = filtered.filter((e) => e.type === "booking_start");
  const bookingCompletes = filtered.filter((e) => e.type === "booking_complete");
  const searches = filtered.filter((e) => e.type === "search");

  // Revenue
  const totalRevenue = bookingCompletes.reduce((sum, e) => {
    return sum + parseFloat(e.meta?.bookingValue || "0");
  }, 0);

  // Daily breakdown
  const dailyMap = new Map<string, {
    views: number;
    sessions: Set<string>;
    bookings: number;
    revenue: number;
  }>();

  for (let d = days - 1; d >= 0; d--) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    const key = date.toISOString().slice(0, 10);
    dailyMap.set(key, { views: 0, sessions: new Set(), bookings: 0, revenue: 0 });
  }

  for (const e of filtered) {
    const key = e.timestamp.slice(0, 10);
    const day = dailyMap.get(key);
    if (!day) continue;
    if (e.type === "page_view") day.views++;
    day.sessions.add(e.sessionId);
    if (e.type === "booking_complete") {
      day.bookings++;
      day.revenue += parseFloat(e.meta?.bookingValue || "0");
    }
  }

  const daily = Array.from(dailyMap.entries()).map(([date, d]) => ({
    date,
    views: d.views,
    visitors: d.sessions.size,
    bookings: d.bookings,
    revenue: Math.round(d.revenue * 100) / 100,
  }));

  // Top pages
  const pageCounts = new Map<string, number>();
  for (const e of pageViews) {
    pageCounts.set(e.path, (pageCounts.get(e.path) || 0) + 1);
  }
  const topPages = Array.from(pageCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([path, views]) => ({ path, views }));

  // Referrer breakdown
  const refCounts = new Map<string, number>();
  for (const e of filtered) {
    if (!e.referrer) continue;
    let source = "Other";
    const r = e.referrer.toLowerCase();
    if (r.includes("google")) source = "Google";
    else if (r.includes("bing")) source = "Bing";
    else if (r.includes("facebook")) source = "Facebook";
    else if (r.includes("instagram")) source = "Instagram";
    else if (r.includes("tripadvisor")) source = "TripAdvisor";
    else if (r.includes("reddit")) source = "Reddit";
    else if (r.includes("t.co") || r.includes("twitter")) source = "X / Twitter";
    else if (r.includes("youtube")) source = "YouTube";
    refCounts.set(source, (refCounts.get(source) || 0) + 1);
  }
  const directCount = filtered.filter((e) => !e.referrer && e.type === "page_view").length;
  refCounts.set("Direct", directCount);

  const referrers = Array.from(refCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([source, count]) => ({ source, count }));

  // Device breakdown
  const devices = { mobile: 0, desktop: 0, tablet: 0 };
  const sessionDevices = new Map<string, string>();
  for (const e of filtered) {
    if (sessionDevices.has(e.sessionId)) continue;
    const ua = e.userAgent.toLowerCase();
    if (ua.includes("ipad") || ua.includes("tablet")) {
      sessionDevices.set(e.sessionId, "tablet");
      devices.tablet++;
    } else if (ua.includes("mobile") || ua.includes("android") || ua.includes("iphone")) {
      sessionDevices.set(e.sessionId, "mobile");
      devices.mobile++;
    } else {
      sessionDevices.set(e.sessionId, "desktop");
      devices.desktop++;
    }
  }

  // Hourly distribution
  const hourly = new Array(24).fill(0);
  for (const e of pageViews) {
    const h = new Date(e.timestamp).getHours();
    hourly[h]++;
  }

  // Top search terms
  const searchCounts = new Map<string, number>();
  for (const e of searches) {
    const q = e.meta?.query || "";
    if (q) searchCounts.set(q, (searchCounts.get(q) || 0) + 1);
  }
  const topSearches = Array.from(searchCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([query, count]) => ({ query, count }));

  // Bounce rate (sessions with only 1 page view)
  const sessionPageCounts = new Map<string, number>();
  for (const e of pageViews) {
    sessionPageCounts.set(e.sessionId, (sessionPageCounts.get(e.sessionId) || 0) + 1);
  }
  const singlePageSessions = Array.from(sessionPageCounts.values()).filter((c) => c === 1).length;
  const bounceRate = sessionPageCounts.size > 0
    ? Math.round((singlePageSessions / sessionPageCounts.size) * 100)
    : 0;

  // Avg pages per session
  const avgPagesPerSession = sessionPageCounts.size > 0
    ? Math.round((pageViews.length / sessionPageCounts.size) * 10) / 10
    : 0;

  // Previous period for comparison
  const prevCutoff = new Date(cutoff);
  prevCutoff.setDate(prevCutoff.getDate() - days);
  const prevFiltered = events.filter(
    (e) => new Date(e.timestamp) >= prevCutoff && new Date(e.timestamp) < cutoff
  );
  const prevPageViews = prevFiltered.filter((e) => e.type === "page_view").length;
  const prevSessions = new Set(prevFiltered.map((e) => e.sessionId)).size;
  const prevBookings = prevFiltered.filter((e) => e.type === "booking_complete").length;
  const prevRevenue = prevFiltered
    .filter((e) => e.type === "booking_complete")
    .reduce((s, e) => s + parseFloat(e.meta?.bookingValue || "0"), 0);

  return NextResponse.json({
    summary: {
      totalPageViews: pageViews.length,
      totalSessions: sessions.size,
      totalBookingStarts: bookingStarts.length,
      totalBookingCompletes: bookingCompletes.length,
      totalRevenue: Math.round(totalRevenue * 100) / 100,
      bounceRate,
      avgPagesPerSession,
      conversionRate:
        sessions.size > 0
          ? Math.round((bookingCompletes.length / sessions.size) * 10000) / 100
          : 0,
    },
    previous: {
      pageViews: prevPageViews,
      sessions: prevSessions,
      bookings: prevBookings,
      revenue: Math.round(prevRevenue * 100) / 100,
    },
    daily,
    topPages,
    referrers,
    devices,
    hourly,
    topSearches,
    range: days,
  });
}
