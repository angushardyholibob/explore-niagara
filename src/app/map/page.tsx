import type { Metadata } from "next";
import { productDiscovery } from "@/lib/holibob/api";
import ExperienceMap from "@/components/ExperienceMap";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience Map — Explore Niagara",
  description:
    "See all Niagara Falls tours and experiences on an interactive map. Find activities near you and plan your visit.",
  openGraph: {
    title: "Experience Map | Explore Niagara",
    description:
      "Browse Niagara Falls tours and experiences on an interactive map.",
  },
  alternates: {
    canonical: "https://explore-niagara.com/map",
  },
};

export default async function MapPage() {
  // Fetch up to 40 experiences in two batches (API max 20 per request)
  const first = await productDiscovery({
    where: { freeText: "Niagara Falls" },
    count: 20,
  });
  const seenIds = first.products.map((p) => p.id);
  const second = await productDiscovery({
    where: { freeText: "Niagara Falls" },
    count: 20,
    seenProductIdList: seenIds,
  });
  const allProducts = [...first.products, ...second.products];

  const experiences = allProducts
    .filter((p) => p.geoCoordinate?.latitude && p.geoCoordinate?.longitude)
    .map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description || "",
      latitude: p.geoCoordinate!.latitude,
      longitude: p.geoCoordinate!.longitude,
      price: p.holibobGuidePrice?.grossFormattedText || null,
      image: p.imageList?.[0]?.url || null,
      rating: p.reviewRating || 0,
      reviewCount: p.reviewCount || 0,
    }));

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-dark">
                Experience Map
              </h1>
              <p className="text-sm text-gray-500">
                Explore tours and attractions across Niagara Falls
              </p>
            </div>
          </div>
          <Link
            href="/tours"
            className="hidden sm:inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            View as list &rarr;
          </Link>
        </div>

        {/* Map */}
        <ExperienceMap experiences={experiences} />

        {/* Below map: quick links */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Want to browse all experiences?
          </p>
          <Link
            href="/tours"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </div>
  );
}
