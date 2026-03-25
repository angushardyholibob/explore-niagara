import { CONFIG } from "../config.js";

interface PSIResult {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  coreWebVitals: {
    lcp: number | null;
    cls: number | null;
    inp: number | null;
  };
}

/**
 * Calls Google PageSpeed Insights API to get Lighthouse scores.
 * Free tier: no API key needed for low volume, API key raises quota to 25k/day.
 */
export async function auditPageSpeed(url: string): Promise<PSIResult> {
  // Build URL manually since we need duplicate 'category' params
  let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`;

  if (CONFIG.psiApiKey) {
    apiUrl += `&key=${CONFIG.psiApiKey}`;
  }

  const res = await fetch(apiUrl);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PageSpeed Insights API error (${res.status}): ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  const categories = data.lighthouseResult?.categories || {};
  const audits = data.lighthouseResult?.audits || {};

  // Extract Core Web Vitals
  const lcp = audits["largest-contentful-paint"]?.numericValue ?? null;
  const cls = audits["cumulative-layout-shift"]?.numericValue ?? null;
  const inp = audits["interaction-to-next-paint"]?.numericValue ?? null;

  return {
    performance: Math.round((categories.performance?.score ?? 0) * 100),
    accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((categories["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((categories.seo?.score ?? 0) * 100),
    coreWebVitals: {
      lcp: lcp ? Math.round(lcp) : null,
      cls: cls ? parseFloat(cls.toFixed(3)) : null,
      inp: inp ? Math.round(inp) : null,
    },
  };
}
