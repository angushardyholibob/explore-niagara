"use client";

import { useState } from "react";
import TourCard from "./TourCard";
import type { Tour } from "@/lib/holibob/types";
import { getDestinationSync } from "@/config/destination";

const config = getDestinationSync();

export default function LoadMoreTours({
  initialSeenIds,
}: {
  initialSeenIds: string[];
}) {
  const [tours, setTours] = useState<Tour[]>([]);
  const [seenIds, setSeenIds] = useState(initialSeenIds);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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
            where: { freeText: config.searchTerm },
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

      // Transform products to Tour format
      const newTours: Tour[] = products.map((p: Record<string, unknown>) => {
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

      setTours((prev) => [...prev, ...newTours]);
      setSeenIds((prev) => [...prev, ...products.map((p: { id: string }) => p.id)]);
      if (products.length < 20) setHasMore(false);
    } catch (err) {
      console.error("Failed to load more tours:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {tours.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More Experiences"}
          </button>
        </div>
      )}
    </>
  );
}
