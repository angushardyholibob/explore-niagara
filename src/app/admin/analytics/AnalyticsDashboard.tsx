"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  Eye,
  Users,
  ShoppingCart,
  DollarSign,
  BarChart3,
  Activity,
  Search,
  Monitor,
  Smartphone,
  Tablet,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  MousePointer,
  Target,
} from "lucide-react";
import TrafficChart from "./TrafficChart";
import HourlyChart from "./HourlyChart";

interface AnalyticsData {
  summary: {
    totalPageViews: number;
    totalSessions: number;
    totalBookingStarts: number;
    totalBookingCompletes: number;
    totalRevenue: number;
    bounceRate: number;
    avgPagesPerSession: number;
    conversionRate: number;
  };
  previous: {
    pageViews: number;
    sessions: number;
    bookings: number;
    revenue: number;
  };
  daily: {
    date: string;
    views: number;
    visitors: number;
    bookings: number;
    revenue: number;
  }[];
  topPages: { path: string; views: number }[];
  referrers: { source: string; count: number }[];
  devices: { mobile: number; desktop: number; tablet: number };
  hourly: number[];
  topSearches: { query: string; count: number }[];
  range: number;
}

function Delta({ current, previous, suffix = "" }: { current: number; previous: number; suffix?: string }) {
  if (previous === 0) return null;
  const pct = Math.round(((current - previous) / previous) * 100);
  if (pct === 0) return <span className="text-xs text-gray-500">0%</span>;
  const up = pct > 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${up ? "text-green-400" : "text-red-400"}`}>
      {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {up ? "+" : ""}
      {pct}%{suffix}
    </span>
  );
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState(30);
  const [chartMetric, setChartMetric] = useState<"views" | "visitors" | "bookings" | "revenue">("views");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics?range=${range}`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [range]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">No Analytics Data</h2>
          <p className="text-gray-400">
            Run <code className="bg-gray-800 px-2 py-1 rounded text-sm">npx tsx src/lib/analytics/seed.ts</code> to generate demo data.
          </p>
        </div>
      </div>
    );
  }

  const { summary, previous, daily, topPages, referrers, devices, hourly, topSearches } = data;
  const totalDevices = devices.mobile + devices.desktop + devices.tablet;
  const totalReferrals = referrers.reduce((s, r) => s + r.count, 0);

  // Booking funnel
  const funnelSteps = [
    { label: "Visitors", value: summary.totalSessions, color: "bg-blue-500" },
    { label: "Tour Clicks", value: Math.round(summary.totalSessions * 0.08), color: "bg-indigo-500" },
    { label: "Booking Started", value: summary.totalBookingStarts, color: "bg-purple-500" },
    { label: "Booking Completed", value: summary.totalBookingCompletes, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Traffic Analytics</h1>
              <p className="text-xs text-gray-400">explore-niagara.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Range selector */}
            <div className="flex gap-1 bg-white/5 rounded-lg p-1">
              {[7, 14, 30].map((d) => (
                <button
                  key={d}
                  onClick={() => setRange(d)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    range === d ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
            <Link
              href="/admin"
              className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              SEO Dashboard <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href="/"
              target="_blank"
              className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1"
            >
              View site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KpiCard
            label="Page Views"
            value={summary.totalPageViews.toLocaleString()}
            icon={<Eye className="w-5 h-5" />}
            color="blue"
            delta={<Delta current={summary.totalPageViews} previous={previous.pageViews} />}
          />
          <KpiCard
            label="Unique Visitors"
            value={summary.totalSessions.toLocaleString()}
            icon={<Users className="w-5 h-5" />}
            color="purple"
            delta={<Delta current={summary.totalSessions} previous={previous.sessions} />}
          />
          <KpiCard
            label="Bookings"
            value={summary.totalBookingCompletes.toString()}
            icon={<ShoppingCart className="w-5 h-5" />}
            color="green"
            delta={<Delta current={summary.totalBookingCompletes} previous={previous.bookings} />}
          />
          <KpiCard
            label="Revenue"
            value={`$${summary.totalRevenue.toLocaleString()}`}
            icon={<DollarSign className="w-5 h-5" />}
            color="amber"
            delta={<Delta current={summary.totalRevenue} previous={previous.revenue} />}
          />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MiniKpi label="Bounce Rate" value={`${summary.bounceRate}%`} icon={<MousePointer className="w-4 h-4" />} />
          <MiniKpi label="Pages / Session" value={summary.avgPagesPerSession.toString()} icon={<BarChart3 className="w-4 h-4" />} />
          <MiniKpi label="Conversion Rate" value={`${summary.conversionRate}%`} icon={<Target className="w-4 h-4" />} />
          <MiniKpi
            label="Avg. Booking Value"
            value={summary.totalBookingCompletes > 0
              ? `$${Math.round(summary.totalRevenue / summary.totalBookingCompletes)}`
              : "$0"
            }
            icon={<DollarSign className="w-4 h-4" />}
          />
        </div>

        {/* Traffic Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold">Traffic Overview</h2>
              <p className="text-sm text-gray-400">Daily {chartMetric} over the last {range} days</p>
            </div>
            <div className="flex gap-1 bg-white/5 rounded-lg p-1">
              {(["views", "visitors", "bookings", "revenue"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setChartMetric(m)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors capitalize ${
                    chartMetric === m ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <TrafficChart data={daily} metric={chartMetric} />
        </div>

        {/* Middle row: Funnel + Devices + Hourly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Booking Funnel */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-4 text-gray-300">Booking Funnel</h3>
            <div className="space-y-3">
              {funnelSteps.map((step, i) => {
                const pct = funnelSteps[0].value > 0 ? (step.value / funnelSteps[0].value) * 100 : 0;
                const dropoff = i > 0 && funnelSteps[i - 1].value > 0
                  ? Math.round(((funnelSteps[i - 1].value - step.value) / funnelSteps[i - 1].value) * 100)
                  : 0;
                return (
                  <div key={step.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">{step.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{step.value.toLocaleString()}</span>
                        {i > 0 && dropoff > 0 && (
                          <span className="text-[10px] text-red-400/70">-{dropoff}%</span>
                        )}
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${step.color}`}
                        style={{ width: `${Math.max(pct, 2)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-4 text-gray-300">Devices</h3>
            <div className="space-y-4">
              {[
                { label: "Mobile", value: devices.mobile, icon: <Smartphone className="w-4 h-4" />, color: "bg-blue-500" },
                { label: "Desktop", value: devices.desktop, icon: <Monitor className="w-4 h-4" />, color: "bg-purple-500" },
                { label: "Tablet", value: devices.tablet, icon: <Tablet className="w-4 h-4" />, color: "bg-emerald-500" },
              ].map((d) => {
                const pct = totalDevices > 0 ? Math.round((d.value / totalDevices) * 100) : 0;
                return (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="text-gray-400">{d.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">{d.label}</span>
                        <span className="text-xs font-bold">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${d.color}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 w-12 text-right">{d.value.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>

            {/* Device donut visual */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  {totalDevices > 0 && (() => {
                    const mPct = (devices.mobile / totalDevices) * 100;
                    const dPct = (devices.desktop / totalDevices) * 100;
                    const tPct = (devices.tablet / totalDevices) * 100;
                    return (
                      <>
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3b82f6" strokeWidth="3"
                          strokeDasharray={`${mPct} ${100 - mPct}`} strokeDashoffset="0" />
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="3"
                          strokeDasharray={`${dPct} ${100 - dPct}`} strokeDashoffset={`${-mPct}`} />
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3"
                          strokeDasharray={`${tPct} ${100 - tPct}`} strokeDashoffset={`${-(mPct + dPct)}`} />
                      </>
                    );
                  })()}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{totalDevices.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Peak Hours */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-4 text-gray-300">Traffic by Hour</h3>
            <HourlyChart data={hourly} />
          </div>
        </div>

        {/* Bottom row: Top Pages + Referrers + Searches */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Pages */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-4 text-gray-300">Top Pages</h3>
            <div className="space-y-2.5">
              {topPages.slice(0, 10).map((p, i) => (
                <div key={p.path} className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-600 w-4 text-right">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-300 truncate font-mono">{p.path}</div>
                    <div className="h-1 bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-500/60"
                        style={{ width: `${(p.views / topPages[0].views) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{p.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Referrer Sources */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-4 text-gray-300">Traffic Sources</h3>
            <div className="space-y-3">
              {referrers.slice(0, 8).map((r) => {
                const pct = totalReferrals > 0 ? Math.round((r.count / totalReferrals) * 100) : 0;
                return (
                  <div key={r.source} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-300">{r.source}</span>
                        <span className="text-[10px] text-gray-500">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-indigo-500/60"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 w-10 text-right">{r.count.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Searches */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold mb-4 text-gray-300 flex items-center gap-2">
              <Search className="w-4 h-4" /> Top Searches
            </h3>
            {topSearches.length > 0 ? (
              <div className="space-y-2.5">
                {topSearches.map((s, i) => (
                  <div key={s.query} className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-600 w-4 text-right">{i + 1}</span>
                    <span className="flex-1 text-xs text-gray-300 truncate">{s.query}</span>
                    <span className="text-xs text-gray-500">{s.count}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500">No search data yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  icon,
  color,
  delta,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  delta: React.ReactNode;
}) {
  const colorMap: Record<string, string> = {
    blue: "from-blue-600/20 to-blue-800/10 border-blue-500/20",
    purple: "from-purple-600/20 to-purple-800/10 border-purple-500/20",
    green: "from-emerald-600/20 to-emerald-800/10 border-emerald-500/20",
    amber: "from-amber-600/20 to-amber-800/10 border-amber-500/20",
  };
  const iconColorMap: Record<string, string> = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    green: "text-emerald-400",
    amber: "text-amber-400",
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-2xl p-5`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 font-medium">{label}</span>
        <span className={iconColorMap[color]}>{icon}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      {delta}
    </div>
  );
}

function MiniKpi({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
      <div className="text-gray-500">{icon}</div>
      <div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
        <div className="text-sm font-bold">{value}</div>
      </div>
    </div>
  );
}
