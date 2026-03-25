import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo/metadata";
import { productDiscovery, transformProductToTour } from "@/lib/holibob/api";
import ToursClient from "./ToursClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Tours & Experiences in Niagara Falls",
  description:
    "Browse and book the best tours and experiences in Niagara Falls. Maid of the Mist, Cave of the Winds, jet boats, wine tours and more.",
  openGraph: {
    title: "All Tours & Experiences in Niagara Falls | Explore Niagara",
    description:
      "Browse and book the best tours, activities, and experiences in Niagara Falls.",
    images: [defaultOgImage],
  },
  alternates: {
    canonical: "https://explore-niagara.com/tours",
  },
};

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const searchTerm = q || "Niagara Falls";

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
