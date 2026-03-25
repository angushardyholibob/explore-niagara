import { NextResponse } from "next/server";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-dynamic";

const HISTORY_DIR = join(process.cwd(), "tools/seo-runner/history");

export async function GET() {
  try {
    const files = readdirSync(HISTORY_DIR)
      .filter((f) => f.startsWith("audit-") && f.endsWith(".json"))
      .sort();

    const audits = files.map((file) => {
      const raw = readFileSync(join(HISTORY_DIR, file), "utf-8");
      const data = JSON.parse(raw);
      return {
        file,
        timestamp: data.timestamp,
        compositeScore: data.compositeScore,
        totalIssues: data.totalIssues,
        pages: data.pages.map((p: Record<string, unknown>) => ({
          path: p.path,
          scores: p.scores,
          issues: (p.issues as Array<Record<string, unknown>>)?.length || 0,
          meta: {
            title: (p.meta as Record<string, unknown>)?.title,
            titleLength: (p.meta as Record<string, unknown>)?.titleLength,
            descriptionLength: (p.meta as Record<string, unknown>)?.descriptionLength,
            wordCount: (p.meta as Record<string, unknown>)?.wordCount,
            h1Count: (p.meta as Record<string, unknown>)?.h1Count,
            internalLinkCount: (p.meta as Record<string, unknown>)?.internalLinkCount,
            jsonLdTypes: (p.meta as Record<string, unknown>)?.jsonLdTypes,
            hasOgImage: (p.meta as Record<string, unknown>)?.hasOgImage,
          },
        })),
      };
    });

    // Also return the latest audit's full issues for the detail view
    const latest = files.length > 0
      ? JSON.parse(readFileSync(join(HISTORY_DIR, files[files.length - 1]), "utf-8"))
      : null;

    const latestIssues = latest?.pages?.flatMap((p: Record<string, unknown>) =>
      ((p.issues as Array<Record<string, string>>) || []).map((issue) => ({
        ...issue,
        page: p.path,
      }))
    ) || [];

    return NextResponse.json({
      audits,
      latestIssues,
      totalAudits: audits.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load audit history", details: String(error) },
      { status: 500 }
    );
  }
}
