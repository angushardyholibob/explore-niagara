import type { Metadata } from "next";
import AnalyticsDashboard from "./AnalyticsDashboard";

export const metadata: Metadata = {
  title: "Traffic Analytics | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  return <AnalyticsDashboard />;
}
