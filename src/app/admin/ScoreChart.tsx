"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";

interface ChartData {
  name: string;
  date: string;
  composite: number;
  critical: number;
  warnings: number;
}

export default function ScoreChart({ data }: { data: ChartData[] }) {
  if (data.length < 2) {
    // Show single data point as a big number instead of a chart
    const point = data[0];
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="text-6xl font-bold text-blue-400">{point.composite}</div>
          <div className="text-sm text-gray-400 mt-2">Current composite score — more data points will show a trend line</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickLine={false}
            ticks={[0, 25, 50, 75, 95, 100]}
          />
          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              fontSize: "13px",
              color: "#e2e8f0",
            }}
            formatter={(value: unknown) => [`${value}/100`, "Score"]}
          />
          {/* Target line at 95 */}
          <ReferenceLine
            y={95}
            stroke="#22c55e"
            strokeDasharray="6 4"
            strokeOpacity={0.5}
            label={{
              value: "Target: 95",
              position: "right",
              fill: "#22c55e",
              fontSize: 11,
              opacity: 0.7,
            }}
          />
          <Area
            type="monotone"
            dataKey="composite"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#scoreGradient)"
            dot={{ fill: "#3b82f6", stroke: "#1e293b", strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
