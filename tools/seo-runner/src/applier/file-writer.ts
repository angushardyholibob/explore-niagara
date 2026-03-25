import { readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import { CONFIG } from "../config.js";
import type { ImprovementTask } from "../types.js";

/**
 * Apply improvement tasks to source files.
 * Returns the list of successfully applied tasks.
 */
export function applyChanges(tasks: ImprovementTask[]): ImprovementTask[] {
  const projectRoot = resolve(CONFIG.projectRoot);
  const applied: ImprovementTask[] = [];

  for (const task of tasks) {
    const fullPath = join(projectRoot, task.filePath);

    try {
      if (task.before === "") {
        // Append mode (e.g., new blog post — append before closing bracket)
        const content = readFileSync(fullPath, "utf-8");
        const newContent = content + "\n" + task.after;
        writeFileSync(fullPath, newContent);
        applied.push(task);
        console.log(`    ✓ Applied: ${task.description}`);
      } else {
        // Find-and-replace mode
        const content = readFileSync(fullPath, "utf-8");

        if (!content.includes(task.before)) {
          console.log(`    ⚠ Skipped (no match): ${task.description}`);
          continue;
        }

        const newContent = content.replace(task.before, task.after);
        writeFileSync(fullPath, newContent);
        applied.push(task);
        console.log(`    ✓ Applied: ${task.description}`);
      }
    } catch (err) {
      console.error(`    ✗ Failed to apply: ${task.description} — ${err instanceof Error ? err.message : err}`);
    }
  }

  return applied;
}
