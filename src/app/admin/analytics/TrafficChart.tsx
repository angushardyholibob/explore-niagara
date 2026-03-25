"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DailyData {
  date: string;
  views: number;
  visitors: number;
  bookings: number;
  revenue: number;
}

export default function TrafficChart({
  data,
  metric,
}: {
  data: DailyData[];
  metric: "views" | "visitors" | "bookings" | "revenue";
}) {
  const config: Record<string, { color: string; label: string; format: (v: number) => string }> = {
    views: { color: "#3b82f6", label: "Page Views", format: (v) => v.toLocaleString() },
    visitors: { color: "#8b5cf6", label: "Visitors", format: (v) => v.toLocaleString() },
    bookings: { color: "#10b981", label: "Bookings", format: (v) => v.toString() },
    revenue: { color: "#f59e0b", label: "Revenue", format: (v) => `$${v.toFixed(0)}` },
  };

  const c = config[metric];

  const formatted = data.map((d) => ({
    ...d,
    label: new Date(d.date + "T12:00:00").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={formatted} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id={`grad-${metric}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c.color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={c.color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickLine={false}
            interval={Math.floor(formatted.length / 7)}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickLine={false}
            tickFormatter={(v) => (metric === "revenue" ? `$${v}` : v.toLocaleString())}
          />
          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              fontSize: "13px",
              color: "#e2e8f0",
            }}
            formatter={(value: unknown) => [c.format(Number(value)), c.label]}
            labelFormatter={(label) => label}
          />
          <Area
            type="monotone"
            dataKey={metric}
            stroke={c.color}
            strokeWidth={2.5}
            fill={`url(#grad-${metric})`}
            dot={false}
            activeDot={{ r: 5, stroke: c.color, strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
