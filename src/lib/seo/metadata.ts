import { getDestinationSync } from "@/config/destination";

export function getBaseUrl() {
  const config = getDestinationSync();
  return `https://${config.domain}`;
}

/**
 * Default OG image to include in all page metadata.
 */
export function getDefaultOgImage() {
  const config = getDestinationSync();
  const BASE_URL = `https://${config.domain}`;
  return {
    url: `${BASE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${config.brandName} — ${config.seo.defaultTitle}`,
  };
}

// Keep a static export for backwards compat during migration
export const defaultOgImage = {
  get url() { return getDefaultOgImage().url; },
  width: 1200,
  height: 630,
  get alt() { return getDefaultOgImage().alt; },
};
