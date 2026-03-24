import { generateHolibobAuthHeaders } from "./auth";
import * as Q from "./queries";
import type {
  ProductDiscoveryParams,
  ProductDiscoveryResult,
  ProductDetail,
  DiscoveryProduct,
  Tour,
} from "./types";

const HOLIBOB_API_URL = process.env.HOLIBOB_API_URL!;
const API_KEY = process.env.HOLIBOB_API_KEY!;
const API_SECRET = process.env.HOLIBOB_API_SECRET!;

/** Execute a GraphQL query directly against Holibob (server-side only) */
async function query<T>(graphql: string, variables?: Record<string, unknown>): Promise<T> {
  const body = JSON.stringify({ query: graphql, variables });
  const headers = generateHolibobAuthHeaders(body, API_KEY, API_SECRET);

  const res = await fetch(HOLIBOB_API_URL, {
    method: "POST",
    headers,
    body,
    next: { revalidate: 300 }, // cache for 5 minutes
  });

  const json = await res.json();

  if (json.errors) {
    console.error("Holibob GraphQL errors:", JSON.stringify(json.errors));
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  return json.data as T;
}

// ─── Product Discovery ───

export async function productDiscovery(
  params: ProductDiscoveryParams = {}
): Promise<ProductDiscoveryResult> {
  const { where, when, who, what, seenProductIdList = [], count = 20 } = params;

  const variables: Record<string, unknown> = { seenProductIdList, count };
  if (where) variables.where = where;
  if (when) variables.when = when;
  if (who) variables.who = who;
  if (what) variables.what = what;

  const data = await query<{ productDiscovery: Record<string, unknown> }>(
    Q.PRODUCT_DISCOVERY,
    variables
  );

  const pd = data.productDiscovery;
  return {
    destination: pd?.selectedDestination as ProductDiscoveryResult["destination"],
    recommendedDestinations:
      (pd?.recommendedDestinationList as { nodes: { id: string; name: string }[] })?.nodes || [],
    recommendedTags:
      (pd?.recommendedTagList as { nodes: { id: string; name: string }[] })?.nodes || [],
    recommendedSearchTerms:
      (pd?.recommendedSearchTermList as { nodes: { searchTerm: string }[] })?.nodes || [],
    products:
      (pd?.recommendedProductList as { nodes: DiscoveryProduct[] })?.nodes || [],
  };
}

// ─── Product Detail ───

export async function getProduct(id: string): Promise<ProductDetail> {
  const data = await query<{ product: Record<string, unknown> }>(Q.GET_PRODUCT, { id });
  const p = data.product;

  // Flatten nested nodes
  const product = { ...p } as Record<string, unknown>;
  if ((product.contentList as { nodes?: unknown[] })?.nodes) {
    product.contentList = (product.contentList as { nodes: unknown[] }).nodes;
  }
  if ((product.categoryList as { nodes?: unknown[] })?.nodes) {
    product.categoryList = (product.categoryList as { nodes: unknown[] }).nodes;
  }
  if (product.reviewList) {
    const rl = product.reviewList as { nodes?: unknown[]; recordCount?: number };
    product.reviews = rl.nodes || [];
    product.reviewRecordCount = rl.recordCount || 0;
    delete product.reviewList;
  }

  return product as unknown as ProductDetail;
}

// ─── Data Transformation ───

export function transformProductToTour(product: DiscoveryProduct): Tour {
  // Duration parsing
  let durationMinutes = 0;
  const rawDuration = product.maxDuration;
  if (typeof rawDuration === "number") {
    durationMinutes = rawDuration;
  } else if (typeof rawDuration === "string") {
    const isoH = rawDuration.match(/(\d+)H/);
    const isoM = rawDuration.match(/(\d+)M/);
    if (isoH) durationMinutes += parseInt(isoH[1], 10) * 60;
    if (isoM) durationMinutes += parseInt(isoM[1], 10);
  }
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  let duration = "";
  if (hours > 0) duration += `${hours} hr${hours > 1 ? "s" : ""}`;
  if (minutes > 0) duration += `${duration ? " " : ""}${minutes} min`;
  if (!duration) duration = "Flexible";

  // Price from holibobGuidePrice
  const hp = product.holibobGuidePrice;
  const price = hp?.gross ? Math.round(hp.gross) : 0;
  const priceFormatted = hp?.grossFormattedText || null;

  // Image
  const images = product.imageList || [];
  const imageUrl = images[0]?.url || null;

  return {
    id: product.id,
    title: product.name,
    image: imageUrl,
    category: "Experience",
    rating: product.reviewRating ? Number(product.reviewRating.toFixed(1)) : 0,
    reviewCount: product.reviewCount || 0,
    price,
    priceFormatted,
    duration,
    description: product.description || "",
  };
}
