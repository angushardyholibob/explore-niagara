import chalk from "chalk";
import type { SiteAuditReport, PageAudit } from "../types.js";

/**
 * Print a formatted audit report to the terminal.
 */
export function printReport(report: SiteAuditReport): void {
  console.log("\n" + chalk.bold("═══════════════════════════════════════════════════"));
  console.log(chalk.bold("  SEO AUDIT REPORT"));
  console.log(chalk.bold("═══════════════════════════════════════════════════"));
  console.log(`  Site: ${report.siteUrl}`);
  console.log(`  Date: ${new Date(report.timestamp).toLocaleString()}`);
  console.log(`  Pages audited: ${report.pages.length}`);
  console.log();

  // Overall score
  const score = report.compositeScore;
  const scoreColor = score >= 90 ? chalk.green : score >= 70 ? chalk.yellow : chalk.red;
  console.log(`  Composite Score: ${scoreColor(chalk.bold(score + "/100"))}`);
  console.log();

  // Issue summary
  const { critical, warning, info } = report.totalIssues;
  console.log(`  Issues: ${chalk.red(critical + " critical")}  ${chalk.yellow(warning + " warnings")}  ${chalk.gray(info + " info")}`);
  console.log();

  // Per-page breakdown
  console.log(chalk.bold("  Page Scores:"));
  console.log("  " + "─".repeat(70));

  for (const page of report.pages) {
    printPageSummary(page);
  }

  console.log();

  // Top issues
  const allIssues = report.pages.flatMap((p) =>
    p.issues.map((i) => ({ ...i, page: p.path }))
  );
  const criticalIssues = allIssues.filter((i) => i.severity === "critical");
  const warningIssues = allIssues.filter((i) => i.severity === "warning");

  if (criticalIssues.length > 0) {
    console.log(chalk.red.bold("  Critical Issues:"));
    for (const issue of criticalIssues) {
      console.log(`    ${chalk.red("✗")} [${issue.page}] ${issue.message}`);
      console.log(`      → ${chalk.gray(issue.recommendation)}`);
    }
    console.log();
  }

  if (warningIssues.length > 0) {
    console.log(chalk.yellow.bold("  Warnings (top 10):"));
    for (const issue of warningIssues.slice(0, 10)) {
      console.log(`    ${chalk.yellow("⚠")} [${issue.page}] ${issue.message}`);
      console.log(`      → ${chalk.gray(issue.recommendation)}`);
    }
    if (warningIssues.length > 10) {
      console.log(`    ... and ${warningIssues.length - 10} more`);
    }
    console.log();
  }

  console.log(chalk.bold("═══════════════════════════════════════════════════\n"));
}

function printPageSummary(page: PageAudit): void {
  const s = page.scores;
  const composite = s.composite;
  const scoreColor = composite >= 90 ? chalk.green : composite >= 70 ? chalk.yellow : chalk.red;
  const issueCount = page.issues.length;

  const scores = [
    s.seo > 0 ? `SEO:${s.seo}` : null,
    s.performance > 0 ? `Perf:${s.performance}` : null,
    `Content:${s.contentSeo}`,
    `Schema:${s.structuredData}`,
    s.accessibility > 0 ? `A11y:${s.accessibility}` : null,
  ].filter(Boolean).join("  ");

  console.log(
    `  ${scoreColor(String(composite).padStart(3))}  ${page.path.padEnd(45)} ${chalk.gray(scores)}  ${issueCount > 0 ? chalk.yellow(`${issueCount} issues`) : chalk.green("✓")}`
  );
}
