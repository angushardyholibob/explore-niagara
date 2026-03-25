"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

interface PageData {
  name: string;
  path: string;
  composite: number;
  content: number;
  schema: number;
  issues: number;
}

export default function PageScoreChart({ data }: { data: PageData[] }) {
  const sorted = [...data].sort((a, b) => a.composite - b.composite);

  return (
    <div style={{ width: "100%", height: Math.max(400, sorted.length * 36) }}>
      <ResponsiveContainer>
        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11, fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
            width={180}
          />
          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              fontSize: "13px",
              color: "#e2e8f0",
            }}
            formatter={(value: unknown, name: unknown) => {
              const labels: Record<string, string> = { composite: "Composite", content: "Content", schema: "Schema" };
              return [`${value}/100`, labels[String(name)] || String(name)];
            }}
          />
          <ReferenceLine x={95} stroke="#22c55e" strokeDasharray="6 4" strokeOpacity={0.4} />
          <Bar dataKey="composite" radius={[0, 6, 6, 0]} barSize={20}>
            {sorted.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.composite >= 95
                    ? "#22c55e"
                    : entry.composite >= 90
                      ? "#3b82f6"
                      : entry.composite >= 80
                        ? "#f59e0b"
                        : "#ef4444"
                }
                fillOpacity={0.7}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
