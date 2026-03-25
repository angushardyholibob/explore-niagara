import { Command } from "commander";
import chalk from "chalk";
import { CONFIG } from "./config.js";
import { auditSite } from "./auditors/index.js";
import { printReport } from "./reporter/scorer.js";
import { saveAuditReport, loadSummary } from "./reporter/history.js";

const program = new Command();

program
  .name("seo-runner")
  .description("Automated SEO audit and improvement tool for explore-niagara.com")
  .version("1.0.0");

// ─── Audit Command ───

program
  .command("audit")
  .description("Run a full SEO audit of the site")
  .option("--url <url>", "Base URL to audit", CONFIG.localUrl)
  .option("--save", "Save the audit report to history", false)
  .action(async (opts) => {
    const baseUrl = opts.url;
    console.log(chalk.bold(`\n🔍 Running SEO audit against ${baseUrl}...\n`));

    const report = await auditSite(baseUrl);
    printReport(report);

    if (opts.save) {
      saveAuditReport(report);
      console.log(chalk.green("  ✓ Audit report saved to history/\n"));
    }
  });

// ─── Run Command (full loop) ───

program
  .command("run")
  .description("Run the SEO improvement loop")
  .option("--once", "Run a single iteration only", false)
  .option("--max-iterations <n>", "Maximum iterations", String(CONFIG.maxIterations))
  .option("--url <url>", "Base URL to audit", CONFIG.localUrl)
  .action(async (opts) => {
    const maxIterations = opts.once ? 1 : parseInt(opts.maxIterations, 10);
    console.log(chalk.bold(`\n🔄 Starting SEO improvement loop (max ${maxIterations} iterations)...\n`));

    // Dynamic import to avoid loading heavy deps for audit-only
    const { runLoop } = await import("./loop.js");
    await runLoop(opts.url, maxIterations);
  });

// ─── History Command ───

program
  .command("history")
  .description("View SEO score history")
  .action(() => {
    const summary = loadSummary();

    if (summary.length === 0) {
      console.log(chalk.yellow("\n  No iteration history found. Run `seo-runner run` first.\n"));
      return;
    }

    console.log(chalk.bold("\n  SEO Score History:"));
    console.log("  " + "─".repeat(60));
    console.log(
      "  " +
      "Iter".padEnd(6) +
      "Date".padEnd(22) +
      "Score".padEnd(8) +
      "Critical".padEnd(10) +
      "Warnings".padEnd(10) +
      "Status"
    );
    console.log("  " + "─".repeat(60));

    for (const entry of summary) {
      const scoreColor = entry.compositeScore >= 90 ? chalk.green : entry.compositeScore >= 70 ? chalk.yellow : chalk.red;
      console.log(
        "  " +
        String(entry.iteration).padEnd(6) +
        new Date(entry.timestamp).toLocaleDateString().padEnd(22) +
        scoreColor(String(entry.compositeScore).padEnd(8)) +
        chalk.red(String(entry.issues.critical).padEnd(10)) +
        chalk.yellow(String(entry.issues.warning).padEnd(10)) +
        entry.status
      );
    }

    // Score trend
    if (summary.length >= 2) {
      const first = summary[0].compositeScore;
      const last = summary[summary.length - 1].compositeScore;
      const delta = last - first;
      const direction = delta > 0 ? chalk.green(`+${delta}`) : delta < 0 ? chalk.red(`${delta}`) : chalk.gray("±0");
      console.log(`\n  Trend: ${direction} points over ${summary.length} iterations\n`);
    } else {
      console.log();
    }
  });

program.parse();
