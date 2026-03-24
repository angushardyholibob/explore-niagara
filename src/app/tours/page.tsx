import { productDiscovery, transformProductToTour } from "@/lib/holibob/api";
import TourCard from "@/components/TourCard";
import LoadMoreTours from "@/components/LoadMoreTours";

export const dynamic = "force-dynamic";

export default async function ToursPage() {
  const result = await productDiscovery({
    where: { freeText: "Niagara Falls" },
    count: 20,
  });

  const tours = result.products.map(transformProductToTour);
  const tags = result.recommendedTags;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            All Experiences
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Browse all available tours and experiences in Niagara Falls. Book
            online for instant confirmation and flexible cancellation.
          </p>
        </div>

        {/* Tags from API */}
        {tags.length > 0 && (
          <div className="flex gap-3 mb-8 flex-wrap">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              All
            </span>
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {tours.length >= 20 && (
          <LoadMoreTours
            initialSeenIds={result.products.map((p) => p.id)}
          />
        )}
      </div>
    </div>
  );
}
