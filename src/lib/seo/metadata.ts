const BASE_URL = "https://explore-niagara.com";

/**
 * Default OG image to include in all page metadata.
 * This ensures child pages inherit the OG image even when they override openGraph.
 */
export const defaultOgImage = {
  url: `${BASE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Explore Niagara — Best Tours & Attractions in Niagara Falls",
};
