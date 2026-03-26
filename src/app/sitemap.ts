import type { MetadataRoute } from "next";
import { productDiscovery } from "@/lib/holibob/api";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { getDestinationSync } from "@/config/destination";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = getDestinationSync();
  const BASE_URL = `https://${config.domain}`;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/tours`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Collection routes from config
  const collectionRoutes: MetadataRoute.Sitemap = config.collections.map((c) => ({
    url: `${BASE_URL}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic tour routes from Holibob API
  let tourRoutes: MetadataRoute.Sitemap = [];
  try {
    const allProducts: { id: string }[] = [];
    let seenIds: string[] = [];
    let hasMore = true;

    while (hasMore) {
      const result = await productDiscovery({
        where: { freeText: config.searchTerm },
        count: 20,
        seenProductIdList: seenIds,
      });
      if (result.products.length === 0) break;
      allProducts.push(...result.products);
      seenIds = allProducts.map((p) => p.id);
      hasMore = result.products.length === 20;
    }
    tourRoutes = allProducts.map((product) => ({
      url: `${BASE_URL}/tours/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error);
  }

  // Blog post routes
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...collectionRoutes, ...blogRoutes, ...tourRoutes];
}
