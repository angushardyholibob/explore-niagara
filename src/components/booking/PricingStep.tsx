"use client";

import { useState, useEffect } from "react";
import { Users, Minus, Plus, Loader2 } from "lucide-react";
import {
  fetchAvailabilityPricing,
  createBooking,
  addAvailabilityToBooking,
} from "@/lib/holibob/client-api";
import type { PricingCategory } from "@/lib/holibob/types";

interface PricingStepProps {
  availabilityId: string;
  onComplete: (bookingId: string, paymentRequired: boolean) => void;
}

export default function PricingStep({
  availabilityId,
  onComplete,
}: PricingStepProps) {
  const [categories, setCategories] = useState<PricingCategory[]>([]);
  const [units, setUnits] = useState<Record<string, number>>({});
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const result = await fetchAvailabilityPricing(availabilityId);
        setCategories(result.categories);
        setTotalPrice(result.totalPrice?.grossFormattedText || "");
        setIsValid(result.isValid);

        // Default units
        const defaults: Record<string, number> = {};
        const childWords = ["child", "infant", "baby", "kid"];
        const hasAdult = result.categories.some((c) =>
          c.label.toLowerCase().includes("adult")
        );

        result.categories.forEach((c, idx) => {
          const lbl = c.label.toLowerCase();
          if (childWords.some((w) => lbl.includes(w))) {
            defaults[c.id] = 0;
          } else if (hasAdult && lbl.includes("adult")) {
            defaults[c.id] = Math.max(c.minParticipants, 2);
          } else if (!hasAdult && idx === 0) {
            defaults[c.id] = Math.max(c.minParticipants, 2);
          } else {
            defaults[c.id] = c.minParticipants || 0;
          }
        });

        setUnits(defaults);

        // Apply default units
        if (Object.keys(defaults).length > 0) {
          const pricingList = Object.entries(defaults).map(([id, u]) => ({
            id,
            units: u,
          }));
          const updated = await fetchAvailabilityPricing(
            availabilityId,
            pricingList
          );
          setCategories(updated.categories);
          setTotalPrice(updated.totalPrice?.grossFormattedText || "");
          setIsValid(updated.isValid);
        }
      } catch (err) {
        console.error("Failed to load pricing:", err);
        setError("Unable to load pricing. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [availabilityId]);

  async function updateUnits(categoryId: string, delta: number) {
    const cat = categories.find((c) => c.id === categoryId);
    if (!cat) return;

    const current = units[categoryId] || 0;
    const next = Math.max(cat.minParticipants, Math.min(cat.maxParticipants, current + delta));
    if (next === current) return;

    const newUnits = { ...units, [categoryId]: next };
    setUnits(newUnits);

    try {
      const pricingList = Object.entries(newUnits).map(([id, u]) => ({
        id,
        units: u,
      }));
      const updated = await fetchAvailabilityPricing(
        availabilityId,
        pricingList
      );
      setCategories(updated.categories);
      setTotalPrice(updated.totalPrice?.grossFormattedText || "");
      setIsValid(updated.isValid);
    } catch (err) {
      console.error("Failed to update pricing:", err);
    }
  }

  async function handleContinue() {
    setSubmitting(true);
    setError(null);
    try {
      // Step 4: Create booking basket
      const booking = await createBooking();

      // Step 5: Add availability to booking
      await addAvailabilityToBooking(booking.id, availabilityId);

      onComplete(booking.id, booking.paymentState === "REQUIRED");
    } catch (err) {
      console.error("Failed to create booking:", err);
      setError("Unable to create booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-3" />
        <p>Loading pricing...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-dark">
          How many travelers?
        </h2>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-200"
          >
            <div>
              <p className="font-medium text-dark">{cat.label}</p>
              <p className="text-sm text-gray-400">
                {cat.unitPrice?.grossFormattedText || "Included"} per person
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateUnits(cat.id, -1)}
                disabled={(units[cat.id] || 0) <= cat.minParticipants}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-semibold text-dark">
                {units[cat.id] || 0}
              </span>
              <button
                onClick={() => updateUnits(cat.id, 1)}
                disabled={(units[cat.id] || 0) >= cat.maxParticipants}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      {totalPrice && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-center justify-between">
          <span className="font-medium text-dark">Total</span>
          <span className="text-xl font-bold text-dark">{totalPrice}</span>
        </div>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-500">{error}</p>
      )}

      <button
        onClick={handleContinue}
        disabled={!isValid || submitting}
        className="mt-8 w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {submitting ? "Creating booking..." : "Continue"}
      </button>
    </div>
  );
}
