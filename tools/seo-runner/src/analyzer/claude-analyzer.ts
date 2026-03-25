import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join, resolve } from "path";
import { CONFIG } from "../config.js";
import { SYSTEM_PROMPT, buildAnalysisPrompt } from "./prompts.js";
import { loadSummary } from "../reporter/history.js";
import type { SiteAuditReport, ImprovementTask } from "../types.js";

// Key source files the AI can modify
const MODIFIABLE_FILES = [
  "src/app/layout.tsx",
  "src/lib/seo/json-ld.ts",
  "src/lib/blog/posts.ts",
  "src/app/page.tsx",
  "src/app/tours/page.tsx",
  "src/app/about/page.tsx",
  "src/app/blog/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/collections/[slug]/page.tsx",
  "src/app/privacy/page.tsx",
  "src/components/Hero.tsx",
  "src/components/Footer.tsx",
];

/**
 * Send audit report to Claude and get back improvement tasks.
 */
export async function analyzeAudit(report: SiteAuditReport): Promise<ImprovementTask[]> {
  if (!CONFIG.anthropicApiKey) {
    console.log("  ⚠ No ANTHROPIC_API_KEY set. Skipping AI analysis.");
    return [];
  }

  const client = new Anthropic({ apiKey: CONFIG.anthropicApiKey });
  const projectRoot = resolve(CONFIG.projectRoot);

  // Read source files
  const sourceFiles: Record<string, string> = {};
  for (const file of MODIFIABLE_FILES) {
    const fullPath = join(projectRoot, file);
    try {
      sourceFiles[file] = readFileSync(fullPath, "utf-8");
    } catch {
      // File might not exist (e.g., dynamic routes)
    }
  }

  // Build prompt
  const auditJson = JSON.stringify(
    {
      compositeScore: report.compositeScore,
      totalIssues: report.totalIssues,
      pages: report.pages.map((p) => ({
        path: p.path,
        scores: p.scores,
        issues: p.issues,
        meta: p.meta,
      })),
    },
    null,
    2
  );

  const history = loadSummary();
  const historyJson = JSON.stringify(history.slice(-5), null, 2);

  const userPrompt = buildAnalysisPrompt(auditJson, historyJson, sourceFiles);

  console.log("  Analyzing with Claude...");

  const response = await client.messages.create({
    model: CONFIG.analysisModel,
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userPrompt }],
  });

  // Extract JSON from response
  const text = response.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("");

  // Parse JSON (handle markdown code fences)
  let jsonStr = text.trim();
  if (jsonStr.startsWith("```")) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  try {
    const tasks: ImprovementTask[] = JSON.parse(jsonStr);

    // Validate and limit
    const validated = tasks
      .filter((t) => t.type && t.filePath && t.description && t.after)
      .slice(0, CONFIG.maxChangesPerIteration);

    console.log(`  Found ${validated.length} improvement tasks`);
    return validated;
  } catch (err) {
    console.error("  ✗ Failed to parse AI response:", err instanceof Error ? err.message : err);
    console.error("  Raw response:", text.slice(0, 500));
    return [];
  }
}
