/**
 * Generates realistic demo analytics data for the past 30 days.
 * Run with: npx tsx src/lib/analytics/seed.ts
 */
import fs from "fs";
import path from "path";
import type { AnalyticsEvent } from "./store";
import { getDestinationSync } from "@/config/destination";

const DATA_DIR = path.join(process.cwd(), "data", "analytics");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");

const config = getDestinationSync();

const PAGES = [
  { path: "/", weight: 25 },
  { path: "/tours", weight: 20 },
  { path: "/blog", weight: 10 },
  ...config.blogPosts.map((p, i) => ({ path: `/blog/${p.slug}`, weight: 8 - i })),
  ...config.collections.map((c, i) => ({ path: `/collections/${c.slug}`, weight: 6 - i })),
  { path: "/about", weight: 4 },
  { path: "/map", weight: 5 },
  { path: "/tours/tour-detail-1", weight: 8 },
  { path: "/tours/tour-detail-2", weight: 6 },
  { path: "/tours/tour-detail-3", weight: 5 },
  { path: "/privacy", weight: 1 },
];

const REFERRERS = [
  { source: "", weight: 30 }, // direct
  { source: "https://www.google.com/", weight: 35 },
  { source: "https://www.google.co.uk/", weight: 5 },
  { source: "https://www.bing.com/", weight: 4 },
  { source: "https://www.facebook.com/", weight: 8 },
  { source: "https://www.instagram.com/", weight: 6 },
  { source: "https://www.tripadvisor.com/", weight: 5 },
  { source: "https://www.reddit.com/", weight: 3 },
  { source: "https://t.co/", weight: 2 },
  { source: "https://www.youtube.com/", weight: 2 },
];

const USER_AGENTS = [
  { ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile Safari", device: "mobile", weight: 42 },
  { ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36", device: "desktop", weight: 28 },
  { ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36", device: "desktop", weight: 12 },
  { ua: "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36", device: "mobile", weight: 10 },
  { ua: "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile Safari", device: "tablet", weight: 5 },
  { ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0", device: "desktop", weight: 3 },
];

const SEARCH_TERMS = config.searchTerms;

function weightedRandom<T extends { weight: number }>(items: T[]): T {
  const total = items.reduce((s, i) => s + i.weight, 0);
  let r = Math.random() * total;
  for (const item of items) {
    r -= item.weight;
    if (r <= 0) return item;
  }
  return items[items.length - 1];
}

function randomId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function generateEvents(): AnalyticsEvent[] {
  const events: AnalyticsEvent[] = [];
  const now = new Date();

  for (let daysAgo = 29; daysAgo >= 0; daysAgo--) {
    const date = new Date(now);
    date.setDate(date.getDate() - daysAgo);
    date.setHours(0, 0, 0, 0);

    // Traffic varies by day of week (weekends slightly lower) and trends upward
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const trendMultiplier = 1 + (29 - daysAgo) * 0.015; // gradual growth
    const baseVisitors = isWeekend ? 80 : 120;
    const dailyVisitors = Math.round(
      baseVisitors * trendMultiplier * (0.85 + Math.random() * 0.3)
    );

    for (let v = 0; v < dailyVisitors; v++) {
      const sessionId = randomId();
      const ua = weightedRandom(USER_AGENTS);
      const referrer = weightedRandom(REFERRERS);

      // Each visitor views 1-5 pages
      const pageViews = 1 + Math.floor(Math.random() * Math.random() * 5);
      const hour = Math.floor(Math.random() * 24);
      const minute = Math.floor(Math.random() * 60);

      const sessionTime = new Date(date);
      sessionTime.setHours(hour, minute, Math.floor(Math.random() * 60));

      // First page view (entry page)
      const entryPage = weightedRandom(PAGES);
      events.push({
        id: randomId(),
        type: "page_view",
        timestamp: sessionTime.toISOString(),
        path: entryPage.path,
        referrer: referrer.source,
        userAgent: ua.ua,
        sessionId,
      });

      // Subsequent page views
      for (let p = 1; p < pageViews; p++) {
        const nextTime = new Date(sessionTime.getTime() + p * (15000 + Math.random() * 120000));
        const nextPage = weightedRandom(PAGES);
        events.push({
          id: randomId(),
          type: "page_view",
          timestamp: nextTime.toISOString(),
          path: nextPage.path,
          referrer: "",
          userAgent: ua.ua,
          sessionId,
        });
      }

      // 8% of visitors click on a tour
      if (Math.random() < 0.08) {
        events.push({
          id: randomId(),
          type: "tour_click",
          timestamp: new Date(sessionTime.getTime() + 30000 + Math.random() * 60000).toISOString(),
          path: `/tours/tour-${Math.floor(Math.random() * 10)}`,
          referrer: "",
          userAgent: ua.ua,
          sessionId,
        });
      }

      // 3% start a booking
      if (Math.random() < 0.03) {
        const bookingTime = new Date(sessionTime.getTime() + 60000 + Math.random() * 120000);
        events.push({
          id: randomId(),
          type: "booking_start",
          timestamp: bookingTime.toISOString(),
          path: `/tours/tour-${Math.floor(Math.random() * 5)}/book`,
          referrer: "",
          userAgent: ua.ua,
          sessionId,
        });

        // 40% of started bookings complete
        if (Math.random() < 0.4) {
          events.push({
            id: randomId(),
            type: "booking_complete",
            timestamp: new Date(bookingTime.getTime() + 180000 + Math.random() * 300000).toISOString(),
            path: `/tours/tour-${Math.floor(Math.random() * 5)}/book`,
            referrer: "",
            userAgent: ua.ua,
            sessionId,
            meta: {
              bookingValue: (25 + Math.random() * 175).toFixed(2),
              currency: "USD",
            },
          });
        }
      }

      // 5% use search
      if (Math.random() < 0.05) {
        events.push({
          id: randomId(),
          type: "search",
          timestamp: new Date(sessionTime.getTime() + 5000 + Math.random() * 30000).toISOString(),
          path: "/tours",
          referrer: "",
          userAgent: ua.ua,
          sessionId,
          meta: { query: SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)] },
        });
      }
    }
  }

  return events;
}

// Main
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const events = generateEvents();
fs.writeFileSync(EVENTS_FILE, JSON.stringify(events));
console.log(`Seeded ${events.length} analytics events over 30 days`);
console.log(`  Page views: ${events.filter((e) => e.type === "page_view").length}`);
console.log(`  Tour clicks: ${events.filter((e) => e.type === "tour_click").length}`);
console.log(`  Booking starts: ${events.filter((e) => e.type === "booking_start").length}`);
console.log(`  Booking completes: ${events.filter((e) => e.type === "booking_complete").length}`);
console.log(`  Searches: ${events.filter((e) => e.type === "search").length}`);
