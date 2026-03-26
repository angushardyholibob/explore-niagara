import type { Metadata } from "next";
import { productDiscovery, transformProductToTour } from "@/lib/holibob/api";
import { collectionJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { defaultOgImage } from "@/lib/seo/metadata";
import { getDestinationSync } from "@/config/destination";
import TourCard from "@/components/TourCard";

const config = getDestinationSync();

const COLLECTIONS_MAP: Record<string, typeof config.collections[number]> = {};
for (const c of config.collections) {
  COLLECTIONS_MAP[c.slug] = c;
}

async function getCollectionTours(searchTerm: string) {
  try {
    const result = await productDiscovery({
      where: { freeText: config.searchTerm },
      what: { freeText: searchTerm },
      count: 12,
    });
    return result.products.map(transformProductToTour);
  } catch (error) {
    console.error(`Failed to fetch collection tours for "${searchTerm}":`, error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = COLLECTIONS_MAP[slug];
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: `${collection.name} Tours — ${config.name}`,
    description: collection.description,
    openGraph: {
      title: `${collection.name} Tours — ${config.name} | ${config.brandName}`,
      description: collection.description,
      images: [defaultOgImage],
    },
    alternates: {
      canonical: `https://${config.domain}/collections/${slug}`,
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = COLLECTIONS_MAP[slug];

  if (!collection) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-dark">Collection not found</h1>
      </div>
    );
  }

  const tours = await getCollectionTours(collection.searchTerm);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `https://${config.domain}` },
              { name: "Collections", url: `https://${config.domain}/collections` },
              { name: collection.name, url: `https://${config.domain}/collections/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionJsonLd(collection.name, collection.description, slug, tours)
          ),
        }}
      />

      <section className="bg-gradient-to-br from-[#0a3d5c] via-[#0b6b96] to-primary py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {collection.name}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {collection.description}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tours.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No tours found for this collection. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
