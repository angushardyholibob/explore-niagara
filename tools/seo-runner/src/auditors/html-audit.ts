import * as cheerio from "cheerio";
import { CONFIG } from "../config.js";
import type { PageMeta, SEOIssue } from "../types.js";

/**
 * Fetches a page and audits its HTML for SEO issues.
 * This is the most valuable "free" auditor — no API keys needed.
 */
export async function auditHtml(
  url: string,
  path: string
): Promise<{ meta: PageMeta; issues: SEOIssue[]; contentScore: number; structuredDataScore: number }> {
  const res = await fetch(url, {
    headers: { "User-Agent": "ExploreNiagara-SEO-Auditor/1.0" },
  });
  const html = await res.text();
  const $ = cheerio.load(html);
  const issues: SEOIssue[] = [];

  // ─── Title ───
  const title = $("title").first().text().trim();
  const titleLength = title.length;

  if (titleLength === 0) {
    issues.push({ severity: "critical", category: "meta", message: "Missing page title", recommendation: "Add a unique <title> tag" });
  } else if (titleLength < CONFIG.meta.titleMin) {
    issues.push({ severity: "warning", category: "meta", message: `Title too short (${titleLength} chars, min ${CONFIG.meta.titleMin})`, recommendation: "Expand the title to 50-60 characters" });
  } else if (titleLength > CONFIG.meta.titleMax) {
    issues.push({ severity: "warning", category: "meta", message: `Title too long (${titleLength} chars, max ${CONFIG.meta.titleMax})`, recommendation: "Shorten the title to under 60 characters" });
  }

  // ─── Meta Description ───
  const description = $('meta[name="description"]').attr("content") || "";
  const descriptionLength = description.length;

  if (descriptionLength === 0) {
    issues.push({ severity: "critical", category: "meta", message: "Missing meta description", recommendation: "Add a meta description of 120-160 characters" });
  } else if (descriptionLength < CONFIG.meta.descriptionMin) {
    issues.push({ severity: "warning", category: "meta", message: `Meta description too short (${descriptionLength} chars, min ${CONFIG.meta.descriptionMin})`, recommendation: `Expand to at least ${CONFIG.meta.descriptionMin} characters` });
  } else if (descriptionLength > CONFIG.meta.descriptionMax) {
    issues.push({ severity: "warning", category: "meta", message: `Meta description too long (${descriptionLength} chars, max ${CONFIG.meta.descriptionMax})`, recommendation: `Shorten to under ${CONFIG.meta.descriptionMax} characters` });
  }

  // ─── H1 Tags ───
  const h1Elements = $("h1");
  const h1Count = h1Elements.length;
  const h1Text = h1Elements.map((_, el) => $(el).text().trim()).get();

  if (h1Count === 0) {
    issues.push({ severity: "critical", category: "content", message: "Missing H1 tag", recommendation: "Add exactly one H1 tag per page" });
  } else if (h1Count > 1) {
    issues.push({ severity: "warning", category: "content", message: `Multiple H1 tags found (${h1Count})`, recommendation: "Use exactly one H1 per page" });
  }

  // ─── Heading Hierarchy ───
  const headings = $("h1, h2, h3, h4, h5, h6");
  let prevLevel = 0;
  headings.each((_, el) => {
    const level = parseInt(el.tagName.replace("h", ""), 10);
    if (level > prevLevel + 1 && prevLevel > 0) {
      issues.push({
        severity: "warning",
        category: "technical",
        message: `Skipped heading level: H${prevLevel} → H${level}`,
        recommendation: `Don't skip heading levels. Use H${prevLevel + 1} instead of H${level}`,
        affectedElement: $(el).text().trim().slice(0, 50),
      });
    }
    prevLevel = level;
  });

  // ─── Images & Alt Text ───
  const images = $("img");
  const imageCount = images.length;
  let imagesWithoutAlt = 0;
  images.each((_, el) => {
    const alt = $(el).attr("alt");
    if (!alt || alt.trim() === "") {
      imagesWithoutAlt++;
    }
  });

  if (imagesWithoutAlt > 0) {
    issues.push({
      severity: "warning",
      category: "technical",
      message: `${imagesWithoutAlt} image(s) missing alt text`,
      recommendation: "Add descriptive alt text to all images",
    });
  }

  // ─── Links ───
  const links = $("a[href]");
  let internalLinkCount = 0;
  let externalLinkCount = 0;

  links.each((_, el) => {
    const href = $(el).attr("href") || "";
    if (href.startsWith("/") || href.includes("explore-niagara.com")) {
      internalLinkCount++;
    } else if (href.startsWith("http")) {
      externalLinkCount++;
    }
  });

  const isBlog = path.startsWith("/blog/") && path !== "/blog";
  const isContentPage = isBlog || path === "/about";
  if (isContentPage && internalLinkCount < CONFIG.content.minInternalLinks) {
    issues.push({
      severity: "warning",
      category: "content",
      message: `Only ${internalLinkCount} internal links (min ${CONFIG.content.minInternalLinks})`,
      recommendation: "Add contextual internal links to related tours and collections",
    });
  }

  // ─── Canonical URL ───
  const canonicalUrl = $('link[rel="canonical"]').attr("href") || null;
  if (!canonicalUrl) {
    issues.push({ severity: "warning", category: "technical", message: "Missing canonical URL", recommendation: "Add a <link rel='canonical'> tag" });
  }

  // ─── Open Graph ───
  const hasOgTitle = !!$('meta[property="og:title"]').attr("content");
  const hasOgDescription = !!$('meta[property="og:description"]').attr("content");
  const hasOgImage = !!$('meta[property="og:image"]').attr("content");
  const hasTwitterCard = !!$('meta[name="twitter:card"]').attr("content");

  if (!hasOgTitle) issues.push({ severity: "warning", category: "meta", message: "Missing og:title", recommendation: "Add Open Graph title meta tag" });
  if (!hasOgDescription) issues.push({ severity: "warning", category: "meta", message: "Missing og:description", recommendation: "Add Open Graph description meta tag" });
  if (!hasOgImage) issues.push({ severity: "critical", category: "meta", message: "Missing og:image", recommendation: "Add a 1200x630 Open Graph image" });
  if (!hasTwitterCard) issues.push({ severity: "warning", category: "meta", message: "Missing Twitter Card", recommendation: "Add twitter:card meta tag" });

  // ─── JSON-LD Structured Data ───
  const jsonLdScripts = $('script[type="application/ld+json"]');
  const jsonLdTypes: string[] = [];

  jsonLdScripts.each((_, el) => {
    try {
      const data = JSON.parse($(el).html() || "{}");
      if (data["@type"]) jsonLdTypes.push(data["@type"]);
    } catch {
      issues.push({ severity: "warning", category: "structured-data", message: "Invalid JSON-LD found", recommendation: "Fix the malformed JSON-LD script" });
    }
  });

  if (jsonLdTypes.length === 0 && path !== "/privacy") {
    issues.push({ severity: "warning", category: "structured-data", message: "No JSON-LD structured data found", recommendation: "Add relevant Schema.org structured data" });
  }

  // Check for missing structured data fields
  jsonLdScripts.each((_, el) => {
    try {
      const data = JSON.parse($(el).html() || "{}");
      if (data["@type"] === "Article") {
        if (!data.author) issues.push({ severity: "warning", category: "structured-data", message: "Article JSON-LD missing 'author'", recommendation: "Add author field to Article schema" });
        if (!data.dateModified) issues.push({ severity: "info", category: "structured-data", message: "Article JSON-LD missing 'dateModified'", recommendation: "Add dateModified field" });
        if (!data.image) issues.push({ severity: "warning", category: "structured-data", message: "Article JSON-LD missing 'image'", recommendation: "Add image field to Article schema" });
      }
      if (data["@type"] === "Organization" && (!data.sameAs || data.sameAs.length === 0)) {
        issues.push({ severity: "info", category: "structured-data", message: "Organization sameAs is empty", recommendation: "Add social media profile URLs to sameAs" });
      }
    } catch { /* already reported above */ }
  });

  // Check for BreadcrumbList
  if (path !== "/" && !jsonLdTypes.includes("BreadcrumbList")) {
    issues.push({ severity: "info", category: "structured-data", message: "No BreadcrumbList structured data", recommendation: "Add BreadcrumbList JSON-LD for better SERP display" });
  }

  // ─── Word Count ───
  const bodyText = $("main").text() || $("body").text();
  const wordCount = bodyText.split(/\s+/).filter((w) => w.length > 0).length;

  const minWords = isBlog ? CONFIG.content.blogMinWordCount : CONFIG.content.minWordCount;
  if (wordCount < minWords) {
    issues.push({
      severity: isBlog ? "warning" : "info",
      category: "content",
      message: `Low word count: ${wordCount} words (target: ${minWords}+)`,
      recommendation: "Add more substantive content to the page",
    });
  }

  // ─── Content SEO Score (0-100) ───
  let contentScore = 100;
  // Title
  if (titleLength === 0) contentScore -= 20;
  else if (titleLength < CONFIG.meta.titleMin || titleLength > CONFIG.meta.titleMax) contentScore -= 5;
  // Description
  if (descriptionLength === 0) contentScore -= 20;
  else if (descriptionLength < CONFIG.meta.descriptionMin || descriptionLength > CONFIG.meta.descriptionMax) contentScore -= 5;
  // H1
  if (h1Count === 0) contentScore -= 15;
  else if (h1Count > 1) contentScore -= 5;
  // Alt text
  if (imageCount > 0 && imagesWithoutAlt > 0) contentScore -= Math.min(15, imagesWithoutAlt * 3);
  // Internal links
  if (isContentPage && internalLinkCount < CONFIG.content.minInternalLinks) contentScore -= 10;
  // Word count
  if (wordCount < minWords) contentScore -= 10;
  // Canonical
  if (!canonicalUrl) contentScore -= 5;

  contentScore = Math.max(0, contentScore);

  // ─── Structured Data Score (0-100) ───
  let structuredDataScore = 100;
  if (jsonLdTypes.length === 0 && path !== "/privacy") structuredDataScore -= 30;
  const sdIssues = issues.filter((i) => i.category === "structured-data");
  structuredDataScore -= sdIssues.filter((i) => i.severity === "critical").length * 15;
  structuredDataScore -= sdIssues.filter((i) => i.severity === "warning").length * 10;
  structuredDataScore -= sdIssues.filter((i) => i.severity === "info").length * 3;
  if (!hasOgTitle || !hasOgDescription) structuredDataScore -= 10;
  if (!hasOgImage) structuredDataScore -= 10;
  structuredDataScore = Math.max(0, structuredDataScore);

  const meta: PageMeta = {
    title,
    titleLength,
    description,
    descriptionLength,
    h1Count,
    h1Text,
    imageCount,
    imagesWithoutAlt,
    internalLinkCount,
    externalLinkCount,
    canonicalUrl,
    hasOgTitle,
    hasOgDescription,
    hasOgImage,
    hasTwitterCard,
    jsonLdTypes,
    wordCount,
  };

  return { meta, issues, contentScore, structuredDataScore };
}
