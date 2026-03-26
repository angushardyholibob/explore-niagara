"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import TourCard from "./TourCard";
import type { Tour } from "@/lib/holibob/types";
import { getDestinationSync } from "@/config/destination";

const config = getDestinationSync();

export default function FeaturedTours() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch("/api/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `query ProductDiscovery($where: ProductDiscoveryWhere, $count: Int) {
              productDiscovery(where: $where) {
                recommendedProductList(count: $count) {
                  nodes {
                    id name description reviewCount reviewRating maxDuration
                    holibobGuidePrice { gross grossFormattedText currency }
                    imageList { id url type }
                  }
                }
              }
            }`,
            variables: {
              where: { freeText: config.searchTerm },
              count: 8,
            },
          }),
        });

        const json = await res.json();
        const products = json.data?.productDiscovery?.recommendedProductList?.nodes || [];

        const mapped: Tour[] = products.map((p: Record<string, unknown>) => {
          const hp = p.holibobGuidePrice as { gross: number; grossFormattedText: string } | null;
          const images = (p.imageList as { url: string }[]) || [];
          const raw = p.maxDuration as string;
          let duration = "Flexible";
          if (raw) {
            const h = raw.match(/(\d+)H/);
            const m = raw.match(/(\d+)M/);
            const mins = (h ? parseInt(h[1]) * 60 : 0) + (m ? parseInt(m[1]) : 0);
            if (mins > 0) {
              const hrs = Math.floor(mins / 60);
              const rm = mins % 60;
              duration = hrs > 0 ? `${hrs} hr${hrs > 1 ? "s" : ""}` : "";
              if (rm > 0) duration += `${duration ? " " : ""}${rm} min`;
            }
          }
          return {
            id: p.id as string,
            title: p.name as string,
            image: images[0]?.url || null,
            category: "Experience",
            rating: p.reviewRating ? Number((p.reviewRating as number).toFixed(1)) : 0,
            reviewCount: (p.reviewCount as number) || 0,
            price: hp?.gross ? Math.round(hp.gross) : 0,
            priceFormatted: hp?.grossFormattedText || null,
            duration,
            description: (p.description as string) || "",
          };
        });

        setTours(mapped);
      } catch (err) {
        console.error("Failed to fetch featured tours:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
              Top Tours
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Our most popular experiences in {config.name}
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex gap-6 overflow-hidden pb-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="shrink-0 w-[300px] h-[360px] bg-gray-100 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tours.map((tour) => (
              <div key={tour.id} className="snap-start shrink-0 w-[300px]">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
