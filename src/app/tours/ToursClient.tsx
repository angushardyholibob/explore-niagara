"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, ArrowUpDown, Loader2 } from "lucide-react";
import TourCard from "@/components/TourCard";
import type { Tour } from "@/lib/holibob/types";

type SortOption = "default" | "price-asc" | "price-desc" | "rating" | "name";

interface ToursClientProps {
  initialTours: Tour[];
  tags: { id: string; name: string }[];
  initialSeenIds: string[];
  searchQuery: string;
}

export default function ToursClient({
  initialTours,
  tags,
  initialSeenIds,
  searchQuery,
}: ToursClientProps) {
  const router = useRouter();
  const [tours, setTours] = useState<Tour[]>(initialTours);
  const [extraTours, setExtraTours] = useState<Tour[]>([]);
  const [seenIds, setSeenIds] = useState(initialSeenIds);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialTours.length >= 20);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("default");
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Combine initial + loaded tours
  const allTours = useMemo(() => [...tours, ...extraTours], [tours, extraTours]);

  // Filter by tag (client-side filter on title/description)
  const filtered = useMemo(() => {
    if (!activeTag) return allTours;
    const tag = tags.find((t) => t.id === activeTag);
    if (!tag) return allTours;
    const term = tag.name.toLowerCase();
    return allTours.filter(
      (t) =>
        t.title.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term) ||
        t.category.toLowerCase().includes(term)
    );
  }, [allTours, activeTag, tags]);

  // Sort
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "rating":
        return arr.sort((a, b) => b.rating - a.rating);
      case "name":
        return arr.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return arr;
    }
  }, [filtered, sort]);

  async function loadMore() {
    setLoading(true);
    try {
      const res = await fetch("/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query ProductDiscovery($where: ProductDiscoveryWhere, $seenProductIdList: [ID!], $count: Int) {
            productDiscovery(where: $where) {
              recommendedProductList(seenProductIdList: $seenProductIdList, count: $count) {
                nodes {
                  id name description reviewCount reviewRating maxDuration
                  holibobGuidePrice { gross grossFormattedText currency }
                  imageList { id url type }
                }
              }
            }
          }`,
          variables: {
            where: { freeText: searchQuery || "Niagara Falls" },
            seenProductIdList: seenIds,
            count: 20,
          },
        }),
      });

      const json = await res.json();
      const products = json.data?.productDiscovery?.recommendedProductList?.nodes || [];

      if (products.length === 0) {
        setHasMore(false);
        return;
      }

      // Reuse same transform as server
      const { transformProductToTour } = await import("@/lib/holibob/api");
      const newTours = products.map(transformProductToTour);

      setExtraTours((prev) => [...prev, ...newTours]);
      setSeenIds((prev) => [...prev, ...products.map((p: { id: string }) => p.id)]);
      if (products.length < 20) setHasMore(false);
    } catch (err) {
      console.error("Failed to load more:", err);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (localSearch.trim()) {
      router.push(`/tours?q=${encodeURIComponent(localSearch.trim())}`);
    } else {
      router.push("/tours");
    }
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            {searchQuery ? `Results for "${searchQuery}"` : "All Experiences"}
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Browse all available tours and experiences in Niagara Falls. Book
            online for instant confirmation and flexible cancellation.
          </p>
        </div>

        {/* Search + Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search tours..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
              aria-label="Search tours"
            />
          </form>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm border border-gray-200 rounded-xl px-3 py-2.5 bg-white focus:outline-none focus:border-primary"
              aria-label="Sort tours"
            >
              <option value="default">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Filter Tags */}
        {tags.length > 0 && (
          <div className="flex gap-2 mb-8 flex-wrap" role="group" aria-label="Filter by category">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTag === null
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All ({allTours.length})
            </button>
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-4">
          {sorted.length} experience{sorted.length !== 1 ? "s" : ""} found
        </p>

        {/* Tour Grid */}
        <h2 className="sr-only">Available Tours</h2>
        {sorted.length === 0 ? (
          <div className="text-center py-16">
            <SlidersHorizontal className="w-10 h-10 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No tours match your current filters.</p>
            <button
              onClick={() => { setActiveTag(null); setSort("default"); }}
              className="mt-3 text-primary text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && !activeTag && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading more tours...
                </>
              ) : (
                "Load More Experiences"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
