"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle,
  BarChart3,
  Activity,
  FileText,
  RefreshCw,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import ScoreChart from "./ScoreChart";
import PageScoreChart from "./PageScoreChart";

interface PageData {
  path: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    contentSeo: number;
    structuredData: number;
    composite: number;
  };
  issues: number;
  meta: {
    title: string;
    titleLength: number;
    descriptionLength: number;
    wordCount: number;
    h1Count: number;
    internalLinkCount: number;
    jsonLdTypes: string[];
    hasOgImage: boolean;
  };
}

interface AuditSnapshot {
  file: string;
  timestamp: string;
  compositeScore: number;
  totalIssues: { critical: number; warning: number; info: number };
  pages: PageData[];
}

interface Issue {
  severity: "critical" | "warning" | "info";
  category: string;
  message: string;
  recommendation: string;
  page: string;
}

interface DashboardData {
  audits: AuditSnapshot[];
  latestIssues: Issue[];
  totalAudits: number;
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "pages" | "issues">("overview");

  useEffect(() => {
    fetch("/api/seo")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (!data || data.audits.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">No Audit Data</h2>
          <p className="text-gray-400">Run <code className="bg-gray-800 px-2 py-1 rounded text-sm">npm run seo:audit -- --save</code> to generate data.</p>
        </div>
      </div>
    );
  }

  const latest = data.audits[data.audits.length - 1];
  const previous = data.audits.length > 1 ? data.audits[data.audits.length - 2] : null;
  const first = data.audits[0];
  const scoreDelta = previous ? latest.compositeScore - previous.compositeScore : 0;
  const totalDelta = latest.compositeScore - first.compositeScore;

  const criticalIssues = data.latestIssues.filter((i) => i.severity === "critical");
  const warningIssues = data.latestIssues.filter((i) => i.severity === "warning");
  const infoIssues = data.latestIssues.filter((i) => i.severity === "info");

  // Chart data for score over time
  const chartData = data.audits.map((a, i) => ({
    name: `Audit ${i + 1}`,
    date: new Date(a.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    composite: a.compositeScore,
    critical: a.totalIssues.critical,
    warnings: a.totalIssues.warning,
  }));

  // Per-page data for the latest audit
  const pageData = latest.pages.map((p) => ({
    name: p.path === "/" ? "Home" : p.path.replace(/^\//, "").replace(/\//g, " / "),
    path: p.path,
    composite: p.scores.composite,
    content: p.scores.contentSeo,
    schema: p.scores.structuredData,
    issues: p.issues,
    wordCount: p.meta.wordCount,
    hasOgImage: p.meta.hasOgImage,
  }));

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold">SEO Dashboard</h1>
              <p className="text-xs text-gray-400">explore-niagara.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">
              Last audit: {new Date(latest.timestamp).toLocaleString()}
            </span>
            <Link
              href="/admin/analytics"
              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              Traffic Analytics <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href="/"
              target="_blank"
              className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              View site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Composite Score */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-5">
            <div className="text-xs text-blue-300/70 font-medium mb-1">Composite Score</div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">{latest.compositeScore}</span>
              <span className="text-lg text-gray-400 mb-1">/100</span>
            </div>
            {scoreDelta !== 0 && (
              <div className={`flex items-center gap-1 mt-2 text-sm ${scoreDelta > 0 ? "text-green-400" : "text-red-400"}`}>
                {scoreDelta > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {scoreDelta > 0 ? "+" : ""}{scoreDelta} since last audit
              </div>
            )}
            {totalDelta > 0 && data.audits.length > 2 && (
              <div className="text-xs text-gray-500 mt-1">+{totalDelta} total improvement</div>
            )}
          </div>

          {/* Critical Issues */}
          <div className={`border rounded-2xl p-5 ${criticalIssues.length === 0 ? "bg-green-600/10 border-green-500/20" : "bg-red-600/10 border-red-500/20"}`}>
            <div className={`text-xs font-medium mb-1 ${criticalIssues.length === 0 ? "text-green-300/70" : "text-red-300/70"}`}>Critical Issues</div>
            <div className="text-4xl font-bold">{criticalIssues.length}</div>
            {criticalIssues.length === 0 ? (
              <div className="flex items-center gap-1 mt-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" /> All clear
              </div>
            ) : (
              <div className="flex items-center gap-1 mt-2 text-sm text-red-400">
                <AlertCircle className="w-4 h-4" /> Needs attention
              </div>
            )}
          </div>

          {/* Warnings */}
          <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-2xl p-5">
            <div className="text-xs text-yellow-300/70 font-medium mb-1">Warnings</div>
            <div className="text-4xl font-bold">{warningIssues.length}</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-yellow-400">
              <AlertTriangle className="w-4 h-4" /> {warningIssues.length} to review
            </div>
          </div>

          {/* Pages Audited */}
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-2xl p-5">
            <div className="text-xs text-purple-300/70 font-medium mb-1">Pages Audited</div>
            <div className="text-4xl font-bold">{latest.pages.length}</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-purple-400">
              <FileText className="w-4 h-4" /> {data.totalAudits} total audits
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white/5 rounded-xl p-1 w-fit">
          {(["overview", "pages", "issues"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "overview" ? "Score Trend" : tab === "pages" ? "Page Breakdown" : "Issues"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Score Trend Chart */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-1">SEO Ranking Strength</h2>
              <p className="text-sm text-gray-400 mb-6">Composite score over time across all audits</p>
              <ScoreChart data={chartData} />
            </div>

            {/* Issues Trend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-4">Issues Over Time</h2>
                <div className="space-y-3">
                  {chartData.map((d, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-16">{d.date}</span>
                      <div className="flex-1 flex gap-2">
                        <div
                          className="h-6 bg-red-500/30 rounded-md flex items-center px-2 text-xs text-red-300"
                          style={{ width: `${Math.max(d.critical * 8, d.critical > 0 ? 30 : 0)}px` }}
                        >
                          {d.critical > 0 ? d.critical : ""}
                        </div>
                        <div
                          className="h-6 bg-yellow-500/30 rounded-md flex items-center px-2 text-xs text-yellow-300"
                          style={{ width: `${Math.max(d.warnings * 4, 30)}px` }}
                        >
                          {d.warnings}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-500/30" /> Critical</div>
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-yellow-500/30" /> Warnings</div>
                </div>
              </div>

              {/* Score Breakdown (latest) */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-4">Score Breakdown (Latest)</h2>
                <div className="space-y-4">
                  {[
                    { label: "Content SEO", value: Math.round(latest.pages.reduce((s, p) => s + p.scores.contentSeo, 0) / latest.pages.length), weight: "25%", color: "blue" },
                    { label: "Structured Data", value: Math.round(latest.pages.reduce((s, p) => s + p.scores.structuredData, 0) / latest.pages.length), weight: "15%", color: "purple" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300">{item.label}</span>
                        <span className="text-sm font-bold">{item.value}/100 <span className="text-xs text-gray-500 font-normal">({item.weight})</span></span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.value >= 90 ? "bg-green-500" : item.value >= 70 ? "bg-yellow-500" : "bg-red-500"}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-gray-500 mt-2">
                    Performance, Accessibility, and Lighthouse SEO scores available when auditing against a live URL (not localhost).
                  </p>
                </div>
              </div>
            </div>

            {/* Changes Log */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">Audit History</h2>
              <div className="space-y-3">
                {data.audits.map((audit, i) => {
                  const prev = i > 0 ? data.audits[i - 1] : null;
                  const delta = prev ? audit.compositeScore - prev.compositeScore : 0;
                  return (
                    <div key={audit.file} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                        audit.compositeScore >= 90 ? "bg-green-600/20 text-green-400" :
                        audit.compositeScore >= 80 ? "bg-yellow-600/20 text-yellow-400" :
                        "bg-red-600/20 text-red-400"
                      }`}>
                        {audit.compositeScore}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          Audit #{i + 1}
                          {delta !== 0 && (
                            <span className={`ml-2 text-xs ${delta > 0 ? "text-green-400" : "text-red-400"}`}>
                              {delta > 0 ? "+" : ""}{delta} pts
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(audit.timestamp).toLocaleString()} · {audit.pages.length} pages · {audit.totalIssues.critical} critical · {audit.totalIssues.warning} warnings
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "pages" && (
          <div className="space-y-6">
            {/* Per-page chart */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-1">Page Scores</h2>
              <p className="text-sm text-gray-400 mb-6">Composite score per page (latest audit)</p>
              <PageScoreChart data={pageData} />
            </div>

            {/* Page detail table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-3 text-xs text-gray-400 font-medium">Page</th>
                    <th className="text-center px-3 py-3 text-xs text-gray-400 font-medium">Score</th>
                    <th className="text-center px-3 py-3 text-xs text-gray-400 font-medium">Content</th>
                    <th className="text-center px-3 py-3 text-xs text-gray-400 font-medium">Schema</th>
                    <th className="text-center px-3 py-3 text-xs text-gray-400 font-medium">Words</th>
                    <th className="text-center px-3 py-3 text-xs text-gray-400 font-medium">OG Image</th>
                    <th className="text-center px-3 py-3 text-xs text-gray-400 font-medium">Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {latest.pages.map((page) => (
                    <tr key={page.path} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-6 py-3">
                        <span className="font-medium text-gray-200">{page.path}</span>
                      </td>
                      <td className="text-center px-3 py-3">
                        <ScoreBadge score={page.scores.composite} />
                      </td>
                      <td className="text-center px-3 py-3">
                        <ScoreBadge score={page.scores.contentSeo} />
                      </td>
                      <td className="text-center px-3 py-3">
                        <ScoreBadge score={page.scores.structuredData} />
                      </td>
                      <td className="text-center px-3 py-3 text-gray-400">
                        {page.meta.wordCount.toLocaleString()}
                      </td>
                      <td className="text-center px-3 py-3">
                        {page.meta.hasOgImage ? (
                          <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="text-center px-3 py-3 text-gray-400">{page.issues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "issues" && (
          <div className="space-y-4">
            {/* Issue filters */}
            <div className="flex gap-3 text-sm">
              <span className="text-gray-400">{data.latestIssues.length} total issues:</span>
              <span className="text-red-400">{criticalIssues.length} critical</span>
              <span className="text-yellow-400">{warningIssues.length} warnings</span>
              <span className="text-gray-500">{infoIssues.length} info</span>
            </div>

            {/* Critical */}
            {criticalIssues.length > 0 && (
              <IssueSection title="Critical" issues={criticalIssues} color="red" icon={<AlertCircle className="w-4 h-4" />} />
            )}

            {criticalIssues.length === 0 && (
              <div className="bg-green-600/10 border border-green-500/20 rounded-2xl p-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <div className="font-bold text-green-300">No Critical Issues</div>
                  <div className="text-sm text-green-400/70">All critical SEO issues have been resolved.</div>
                </div>
              </div>
            )}

            {/* Warnings */}
            {warningIssues.length > 0 && (
              <IssueSection title="Warnings" issues={warningIssues} color="yellow" icon={<AlertTriangle className="w-4 h-4" />} />
            )}

            {/* Info */}
            {infoIssues.length > 0 && (
              <IssueSection title="Info" issues={infoIssues} color="gray" icon={<Info className="w-4 h-4" />} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 90 ? "text-green-400 bg-green-400/10" : score >= 70 ? "text-yellow-400 bg-yellow-400/10" : "text-red-400 bg-red-400/10";
  return (
    <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold ${color}`}>
      {score}
    </span>
  );
}

function IssueSection({ title, issues, color, icon }: { title: string; issues: Issue[]; color: string; icon: React.ReactNode }) {
  const colorMap: Record<string, string> = {
    red: "border-red-500/20 bg-red-600/5",
    yellow: "border-yellow-500/20 bg-yellow-600/5",
    gray: "border-white/10 bg-white/5",
  };
  const textMap: Record<string, string> = {
    red: "text-red-400",
    yellow: "text-yellow-400",
    gray: "text-gray-400",
  };

  return (
    <div className={`border rounded-2xl overflow-hidden ${colorMap[color]}`}>
      <div className={`px-6 py-3 border-b border-white/10 flex items-center gap-2 ${textMap[color]}`}>
        {icon}
        <span className="font-bold text-sm">{title} ({issues.length})</span>
      </div>
      <div className="divide-y divide-white/5">
        {issues.map((issue, i) => (
          <div key={i} className="px-6 py-3 flex items-start gap-4">
            <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded font-mono shrink-0 mt-0.5">
              {issue.page}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-200">{issue.message}</div>
              <div className="text-xs text-gray-500 mt-1">{issue.recommendation}</div>
            </div>
            <span className="text-xs text-gray-600 shrink-0">{issue.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
