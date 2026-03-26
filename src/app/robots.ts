import type { MetadataRoute } from "next";
import { getDestinationSync } from "@/config/destination";

export default function robots(): MetadataRoute.Robots {
  const config = getDestinationSync();
  const baseUrl = `https://${config.domain}`;

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
