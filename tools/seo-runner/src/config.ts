export const CONFIG = {
  siteUrl: process.env.SITE_URL || "https://explore-niagara.com",
  localUrl: process.env.LOCAL_URL || "http://localhost:3000",

  // Pages to audit (relative paths)
  auditPages: [
    "/",
    "/tours",
    "/about",
    "/blog",
    "/blog/top-10-things-to-do-niagara-falls",
    "/blog/maid-of-the-mist-complete-guide",
    "/blog/niagara-falls-winter-guide",
    "/blog/niagara-wine-trail-food-guide",
    "/blog/best-time-to-visit-niagara-falls",
    "/blog/niagara-falls-with-kids",
    "/collections/maid-of-the-mist",
    "/collections/cave-of-the-winds",
    "/collections/jet-boats",
    "/collections/experience-niagara",
    "/privacy",
  ],

  // Composite score weights (must sum to 1.0)
  scoreWeights: {
    seo: 0.25,
    contentSeo: 0.25,
    performance: 0.20,
    structuredData: 0.15,
    accessibility: 0.15,
  },

  // Target score to stop the loop
  targetCompositeScore: 95,

  // Max iterations before hard stop
  maxIterations: 20,

  // Max changes per iteration
  maxChangesPerIteration: 5,

  // Plateau detection: stop if score improves less than this for N iterations
  plateauThreshold: 1,
  plateauIterations: 3,

  // Circuit breaker: revert if any score drops by more than this
  revertThreshold: 5,

  // Ideal meta tag lengths
  meta: {
    titleMin: 30,
    titleMax: 60,
    descriptionMin: 120,
    descriptionMax: 160,
  },

  // Content thresholds
  content: {
    minWordCount: 300,
    blogMinWordCount: 1000,
    minInternalLinks: 3,
    maxKeywordDensity: 0.02,
  },

  // PageSpeed Insights API
  psiApiKey: process.env.GOOGLE_PSI_API_KEY || "",

  // Claude API
  anthropicApiKey: process.env.ANTHROPIC_API_KEY || "",
  analysisModel: "claude-sonnet-4-20250514",
  contentModel: "claude-opus-4-20250514",

  // Project root (relative to this tool)
  projectRoot: "../../",

  // History directory
  historyDir: new URL("../history", import.meta.url).pathname,
};
