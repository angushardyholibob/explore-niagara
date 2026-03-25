import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { CONFIG } from "../config.js";
import type { IterationRecord, SiteAuditReport } from "../types.js";

function historyPath(iteration: number): string {
  return join(CONFIG.historyDir, `iteration-${iteration}.json`);
}

function summaryPath(): string {
  return join(CONFIG.historyDir, "summary.json");
}

export function getNextIteration(): number {
  if (!existsSync(CONFIG.historyDir)) return 1;
  const files = readdirSync(CONFIG.historyDir).filter((f) =>
    f.startsWith("iteration-") && f.endsWith(".json")
  );
  if (files.length === 0) return 1;
  const nums = files.map((f) => parseInt(f.replace("iteration-", "").replace(".json", ""), 10));
  return Math.max(...nums) + 1;
}

export function saveIteration(record: IterationRecord): void {
  writeFileSync(historyPath(record.iteration), JSON.stringify(record, null, 2));
  updateSummary(record);
}

export function loadIteration(iteration: number): IterationRecord | null {
  const path = historyPath(iteration);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf-8"));
}

export function saveAuditReport(report: SiteAuditReport): void {
  const path = join(CONFIG.historyDir, `audit-${Date.now()}.json`);
  writeFileSync(path, JSON.stringify(report, null, 2));
}

interface SummaryEntry {
  iteration: number;
  timestamp: string;
  compositeScore: number;
  issues: { critical: number; warning: number; info: number };
  status: string;
}

function updateSummary(record: IterationRecord): void {
  const path = summaryPath();
  let summary: SummaryEntry[] = [];
  if (existsSync(path)) {
    summary = JSON.parse(readFileSync(path, "utf-8"));
  }

  summary.push({
    iteration: record.iteration,
    timestamp: record.timestamp,
    compositeScore: record.beforeScores.compositeScore,
    issues: record.beforeScores.totalIssues,
    status: record.status,
  });

  writeFileSync(path, JSON.stringify(summary, null, 2));
}

export function loadSummary(): SummaryEntry[] {
  const path = summaryPath();
  if (!existsSync(path)) return [];
  return JSON.parse(readFileSync(path, "utf-8"));
}
