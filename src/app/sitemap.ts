import type { MetadataRoute } from "next";
import { productDiscovery } from "@/lib/holibob/api";
import { BLOG_POSTS } from "@/lib/blog/posts";

const BASE_URL = "https://explore-niagara.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Collection routes
  const collections = [
    "maid-of-the-mist",
    "cave-of-the-winds",
    "jet-boats",
    "experience-niagara",
  ];
  const collectionRoutes: MetadataRoute.Sitemap = collections.map((slug) => ({
    url: `${BASE_URL}/collections/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic tour routes from Holibob API
  let tourRoutes: MetadataRoute.Sitemap = [];
  try {
    // Holibob API limits to 20 per request — paginate to get all products
    const allProducts: { id: string }[] = [];
    let seenIds: string[] = [];
    let hasMore = true;

    while (hasMore) {
      const result = await productDiscovery({
        where: { freeText: "Niagara Falls" },
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
