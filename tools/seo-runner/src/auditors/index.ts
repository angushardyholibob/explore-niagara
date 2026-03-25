import { CONFIG } from "../config.js";
import { auditHtml } from "./html-audit.js";
import { auditPageSpeed } from "./pagespeed.js";
import type { PageAudit, SiteAuditReport } from "../types.js";

/**
 * Run a full audit of all configured pages.
 * Combines HTML audit (custom) + PageSpeed Insights (Google API).
 */
export async function auditSite(baseUrl: string): Promise<SiteAuditReport> {
  const pages: PageAudit[] = [];
  const timestamp = new Date().toISOString();

  for (const path of CONFIG.auditPages) {
    const url = `${baseUrl}${path}`;
    console.log(`  Auditing ${path}...`);

    try {
      // Run HTML audit (always — it's free and fast)
      const htmlResult = await auditHtml(url, path);

      // Run PageSpeed Insights (optional — requires live URL or API key)
      let psiResult = {
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0,
        coreWebVitals: { lcp: null as number | null, cls: null as number | null, inp: null as number | null },
      };

      const isLive = baseUrl.startsWith("https://");
      if (isLive) {
        try {
          psiResult = await auditPageSpeed(url);
          // Rate limit: PSI allows ~1 request per second without API key
          await new Promise((r) => setTimeout(r, 1500));
        } catch (err) {
          console.log(`    ⚠ PageSpeed Insights failed for ${path}: ${err instanceof Error ? err.message : err}`);
        }
      }

      // Calculate composite score
      const scores = {
        performance: psiResult.performance,
        accessibility: psiResult.accessibility,
        bestPractices: psiResult.bestPractices,
        seo: psiResult.seo,
        contentSeo: htmlResult.contentScore,
        structuredData: htmlResult.structuredDataScore,
        composite: 0,
      };

      // If we don't have PSI data (local audit), use HTML scores only
      if (isLive) {
        scores.composite = Math.round(
          scores.seo * CONFIG.scoreWeights.seo +
          scores.contentSeo * CONFIG.scoreWeights.contentSeo +
          scores.performance * CONFIG.scoreWeights.performance +
          scores.structuredData * CONFIG.scoreWeights.structuredData +
          scores.accessibility * CONFIG.scoreWeights.accessibility
        );
      } else {
        // Local-only: weight content + structured data more heavily
        scores.composite = Math.round(
          scores.contentSeo * 0.6 +
          scores.structuredData * 0.4
        );
      }

      pages.push({
        url,
        path,
        timestamp,
        scores,
        issues: htmlResult.issues,
        coreWebVitals: psiResult.coreWebVitals,
        meta: htmlResult.meta,
      });
    } catch (err) {
      console.error(`  ✗ Failed to audit ${path}: ${err instanceof Error ? err.message : err}`);
    }
  }

  // Aggregate
  const compositeScore = pages.length > 0
    ? Math.round(pages.reduce((sum, p) => sum + p.scores.composite, 0) / pages.length)
    : 0;

  const totalIssues = {
    critical: pages.reduce((sum, p) => sum + p.issues.filter((i) => i.severity === "critical").length, 0),
    warning: pages.reduce((sum, p) => sum + p.issues.filter((i) => i.severity === "warning").length, 0),
    info: pages.reduce((sum, p) => sum + p.issues.filter((i) => i.severity === "info").length, 0),
  };

  return {
    siteUrl: baseUrl,
    timestamp,
    pages,
    compositeScore,
    totalIssues,
  };
}
