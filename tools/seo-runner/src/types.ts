// ─── Audit Types ───

export interface PageAudit {
  url: string;
  path: string;
  timestamp: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    contentSeo: number;
    structuredData: number;
    composite: number;
  };
  issues: SEOIssue[];
  coreWebVitals: {
    lcp: number | null;
    cls: number | null;
    inp: number | null;
  };
  meta: PageMeta;
}

export interface PageMeta {
  title: string;
  titleLength: number;
  description: string;
  descriptionLength: number;
  h1Count: number;
  h1Text: string[];
  imageCount: number;
  imagesWithoutAlt: number;
  internalLinkCount: number;
  externalLinkCount: number;
  canonicalUrl: string | null;
  hasOgTitle: boolean;
  hasOgDescription: boolean;
  hasOgImage: boolean;
  hasTwitterCard: boolean;
  jsonLdTypes: string[];
  wordCount: number;
}

export interface SEOIssue {
  severity: "critical" | "warning" | "info";
  category: "meta" | "content" | "technical" | "structured-data" | "performance";
  message: string;
  recommendation: string;
  affectedElement?: string;
}

// ─── Score Report ───

export interface SiteAuditReport {
  siteUrl: string;
  timestamp: string;
  pages: PageAudit[];
  compositeScore: number;
  totalIssues: { critical: number; warning: number; info: number };
}

// ─── AI Improvement Tasks ───

export type ImprovementType =
  | "meta-title"
  | "meta-description"
  | "og-image"
  | "new-blog-post"
  | "expand-content"
  | "structured-data"
  | "alt-text"
  | "heading-fix"
  | "internal-link"
  | "breadcrumb";

export interface ImprovementTask {
  type: ImprovementType;
  filePath: string;
  description: string;
  expectedImpact: "high" | "medium" | "low";
  before: string;
  after: string;
}

// ─── Iteration History ───

export interface IterationRecord {
  iteration: number;
  timestamp: string;
  beforeScores: SiteAuditReport;
  afterScores: SiteAuditReport | null;
  changes: ImprovementTask[];
  prUrl: string | null;
  status: "pending-review" | "merged" | "reverted" | "skipped";
}
