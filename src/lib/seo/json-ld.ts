import type { ProductDetail, Tour } from "@/lib/holibob/types";
import { getDestinationSync } from "@/config/destination";

function getBase() {
  const config = getDestinationSync();
  return { url: `https://${config.domain}`, name: config.brandName, email: config.email };
}

export function websiteJsonLd() {
  const { url, name } = getBase();
  const config = getDestinationSync();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description: config.seo.defaultDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/tours?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  const { url, name, email } = getBase();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: `${url}/logo.webp`,
    contactPoint: {
      "@type": "ContactPoint",
      email,
      contactType: "customer service",
    },
  };
}

export function tourJsonLd(product: ProductDetail) {
  const { url } = getBase();
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: product.name,
    description: product.description,
    url: `${url}/tours/${product.id}`,
    image: product.imageList?.[0]?.url,
  };

  if (product.place) {
    jsonLd.address = {
      "@type": "PostalAddress",
      addressLocality: product.place.cityName,
      addressCountry: product.place.countryName,
    };
  }

  if (product.geoCoordinate) {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: product.geoCoordinate.latitude,
      longitude: product.geoCoordinate.longitude,
    };
  }

  if (product.reviewCount > 0) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.reviewRating,
      reviewCount: product.reviewCount,
      bestRating: 5,
    };
  }

  return jsonLd;
}

export function tourProductJsonLd(product: ProductDetail) {
  const { url } = getBase();
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.imageList?.[0]?.url,
    url: `${url}/tours/${product.id}`,
  };

  if (product.guidePrice > 0) {
    jsonLd.offers = {
      "@type": "Offer",
      price: product.guidePrice,
      priceCurrency: product.guidePriceCurrency || "USD",
      availability: "https://schema.org/InStock",
      url: `${url}/tours/${product.id}`,
    };
  }

  if (product.reviewCount > 0) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.reviewRating,
      reviewCount: product.reviewCount,
      bestRating: 5,
    };
  }

  return jsonLd;
}

export function collectionJsonLd(
  title: string,
  description: string,
  slug: string,
  tours: Tour[]
) {
  const { url } = getBase();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: `${url}/collections/${slug}`,
    numberOfItems: tours.length,
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristAttraction",
        name: tour.title,
        url: `${url}/tours/${tour.id}`,
        ...(tour.image ? { image: tour.image } : {}),
      },
    })),
  };
}

export function blogPostJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  isoDate: string;
}) {
  const { url, name } = getBase();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${url}/blog/${post.slug}`,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: { "@type": "Organization", name, url },
    image: `${url}/opengraph-image`,
    publisher: {
      "@type": "Organization",
      name,
      logo: { "@type": "ImageObject", url: `${url}/logo.webp` },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
