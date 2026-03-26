import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo/metadata";
import { productDiscovery, transformProductToTour } from "@/lib/holibob/api";
import { getDestinationSync } from "@/config/destination";
import ToursClient from "./ToursClient";

export const dynamic = "force-dynamic";

const config = getDestinationSync();

export const metadata: Metadata = {
  title: `All Tours & Experiences in ${config.name}`,
  description:
    `Browse and book the best tours and experiences in ${config.name}.`,
  openGraph: {
    title: `All Tours & Experiences in ${config.name} | ${config.brandName}`,
    description:
      `Browse and book the best tours, activities, and experiences in ${config.name}.`,
    images: [defaultOgImage],
  },
  alternates: {
    canonical: `https://${config.domain}/tours`,
  },
};

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const searchTerm = q || config.searchTerm;

  const result = await productDiscovery({
    where: { freeText: searchTerm },
    count: 20,
  });

  const tours = result.products.map(transformProductToTour);
  const tags = result.recommendedTags;
  const initialSeenIds = result.products.map((p) => p.id);

  return (
    <ToursClient
      initialTours={tours}
      tags={tags}
      initialSeenIds={initialSeenIds}
      searchQuery={q || ""}
    />
  );
}
