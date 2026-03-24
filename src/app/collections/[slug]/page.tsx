import type { Metadata } from "next";
import TourCard from "@/components/TourCard";

const COLLECTION_DATA: Record<
  string,
  {
    title: string;
    description: string;
    tours: Array<{
      id: string;
      title: string;
      image: null;
      category: string;
      rating: number;
      reviewCount: number;
      price: number;
    }>;
  }
> = {
  "maid-of-the-mist": {
    title: "Maid of the Mist",
    description:
      "Experience the iconic Maid of the Mist boat tour and get up close to the thundering Niagara Falls.",
    tours: [
      { id: "m1", title: "Maid of the Mist Classic Tour", image: null, category: "Boat Tours", rating: 4.8, reviewCount: 2340, price: 29.5 },
      { id: "m2", title: "Maid of the Mist Sunset Experience", image: null, category: "Boat Tours", rating: 4.9, reviewCount: 876, price: 45.0 },
      { id: "m3", title: "Maid of the Mist + Falls Walking Tour", image: null, category: "Combo", rating: 4.7, reviewCount: 543, price: 55.0 },
    ],
  },
  "cave-of-the-winds": {
    title: "Cave of the Winds",
    description:
      "Feel the raw power of Niagara Falls from the Hurricane Deck at Cave of the Winds.",
    tours: [
      { id: "c1", title: "Cave of the Winds Adventure Pass", image: null, category: "Walking Tours", rating: 4.7, reviewCount: 1856, price: 26.0 },
      { id: "c2", title: "Cave of the Winds Night Tour", image: null, category: "Night Tours", rating: 4.6, reviewCount: 432, price: 35.0 },
    ],
  },
  "jet-boats": {
    title: "Jet Boats",
    description:
      "Get your adrenaline pumping with high-speed jet boat rides through the Niagara Gorge.",
    tours: [
      { id: "j1", title: "Niagara Jet Boat Ride", image: null, category: "Jet Boats", rating: 4.9, reviewCount: 987, price: 74.0 },
      { id: "j2", title: "Whirlpool Jet Boat - Wet Jet", image: null, category: "Jet Boats", rating: 4.8, reviewCount: 654, price: 79.0 },
    ],
  },
  "experience-niagara": {
    title: "Experience Niagara",
    description:
      "Multi-attraction passes and all-inclusive experiences to make the most of your visit.",
    tours: [
      { id: "e1", title: "Niagara Falls All-Inclusive Pass", image: null, category: "Multi-Attraction", rating: 4.7, reviewCount: 765, price: 120.0 },
      { id: "e2", title: "Full Day Niagara Experience", image: null, category: "Full Day", rating: 4.8, reviewCount: 543, price: 150.0 },
      { id: "e3", title: "Niagara Falls & Wine Country Combo", image: null, category: "Combo", rating: 4.6, reviewCount: 321, price: 135.0 },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = COLLECTION_DATA[slug];
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: `${collection.title} Tours — Niagara Falls`,
    description: collection.description,
    openGraph: {
      title: `${collection.title} Tours — Niagara Falls | Explore Niagara`,
      description: collection.description,
    },
    alternates: {
      canonical: `https://explore-niagara.com/collections/${slug}`,
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = COLLECTION_DATA[slug];

  if (!collection) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-dark">Collection not found</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a3d5c] via-[#0b6b96] to-[#0289c1] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {collection.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {collection.description}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
