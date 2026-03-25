import chalk from "chalk";
import { CONFIG } from "./config.js";
import { auditSite } from "./auditors/index.js";
import { analyzeAudit } from "./analyzer/claude-analyzer.js";
import { applyChanges } from "./applier/file-writer.js";
import { createPR } from "./applier/git.js";
import { printReport } from "./reporter/scorer.js";
import { getNextIteration, saveIteration, loadSummary } from "./reporter/history.js";
import type { IterationRecord } from "./types.js";

/**
 * Run the SEO improvement loop.
 */
export async function runLoop(baseUrl: string, maxIterations: number): Promise<void> {
  let consecutivePlateau = 0;

  for (let i = 0; i < maxIterations; i++) {
    const iteration = getNextIteration();
    console.log(chalk.bold(`\n━━━ Iteration ${iteration} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`));

    // 1. AUDIT
    console.log(chalk.blue("  Phase 1: Auditing..."));
    const report = await auditSite(baseUrl);
    printReport(report);

    // Check if target already met
    if (report.compositeScore >= CONFIG.targetCompositeScore) {
      console.log(chalk.green.bold(`\n  ✓ Target score of ${CONFIG.targetCompositeScore} reached! (${report.compositeScore}/100)\n`));
      saveIteration({
        iteration,
        timestamp: report.timestamp,
        beforeScores: report,
        afterScores: null,
        changes: [],
        prUrl: null,
        status: "skipped",
      });
      break;
    }

    // Check plateau
    const history = loadSummary();
    if (history.length >= CONFIG.plateauIterations) {
      const recent = history.slice(-CONFIG.plateauIterations);
      const improvement = recent[recent.length - 1].compositeScore - recent[0].compositeScore;
      if (improvement < CONFIG.plateauThreshold) {
        consecutivePlateau++;
        if (consecutivePlateau >= CONFIG.plateauIterations) {
          console.log(chalk.yellow(`\n  ⚠ Score plateaued for ${CONFIG.plateauIterations} iterations. Stopping.\n`));
          break;
        }
      } else {
        consecutivePlateau = 0;
      }
    }

    // 2. ANALYZE
    console.log(chalk.blue("\n  Phase 2: Analyzing with AI..."));
    const tasks = await analyzeAudit(report);

    if (tasks.length === 0) {
      console.log(chalk.yellow("  No improvements suggested. Stopping."));
      saveIteration({
        iteration,
        timestamp: report.timestamp,
        beforeScores: report,
        afterScores: null,
        changes: [],
        prUrl: null,
        status: "skipped",
      });
      break;
    }

    // Print suggested improvements
    console.log(chalk.blue("\n  Suggested improvements:"));
    for (const task of tasks) {
      const impactColor = task.expectedImpact === "high" ? chalk.red : task.expectedImpact === "medium" ? chalk.yellow : chalk.gray;
      console.log(`    ${impactColor(`[${task.expectedImpact}]`)} ${task.description} (${task.filePath})`);
    }

    // 3. IMPROVE
    console.log(chalk.blue("\n  Phase 3: Applying changes..."));
    const applied = applyChanges(tasks);

    if (applied.length === 0) {
      console.log(chalk.yellow("  No changes could be applied. Stopping."));
      saveIteration({
        iteration,
        timestamp: report.timestamp,
        beforeScores: report,
        afterScores: null,
        changes: [],
        prUrl: null,
        status: "skipped",
      });
      break;
    }

    // 4. APPLY (create PR)
    console.log(chalk.blue("\n  Phase 4: Creating PR..."));
    let prUrl: string | null = null;
    try {
      prUrl = await createPR(iteration, applied, report);
    } catch (err) {
      console.log(chalk.yellow(`  ⚠ PR creation failed: ${err instanceof Error ? err.message : err}`));
      console.log(chalk.yellow("  Changes are applied locally. Commit manually if desired."));
    }

    // Save iteration record
    const record: IterationRecord = {
      iteration,
      timestamp: report.timestamp,
      beforeScores: report,
      afterScores: null, // Filled in by `measure` command after merge
      changes: applied,
      prUrl,
      status: prUrl ? "pending-review" : "skipped",
    };
    saveIteration(record);

    console.log(chalk.green(`\n  ✓ Iteration ${iteration} complete.`));
    if (prUrl) {
      console.log(chalk.green(`    PR: ${prUrl}`));
    }
    console.log(`    Changes: ${applied.length}, Before score: ${report.compositeScore}/100\n`);
  }
}
