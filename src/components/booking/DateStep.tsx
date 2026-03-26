"use client";

import { useState, useEffect, useCallback } from "react";
import { Calendar, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { fetchAvailabilityList } from "@/lib/holibob/client-api";

interface DateStepProps {
  productId: string;
  onSelect: (availabilityId: string) => void;
}

export default function DateStep({ productId, onSelect }: DateStepProps) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [dateOptions, setDateOptions] = useState<
    { id: string; type?: string }[]
  >([]);
  const [availableDates, setAvailableDates] = useState<
    { id: string; date: string; price: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [loadingDates, setLoadingDates] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Step 1: Initialize session
  useEffect(() => {
    async function init() {
      try {
        const result = await fetchAvailabilityList(productId);
        setSessionId(result.sessionId);
        setDateOptions(result.options);
        // Store any initial availabilities returned by the API
        if (result.availabilities.length > 0) {
          setAvailableDates(
            result.availabilities.map((a) => ({
              id: a.id,
              date: a.date,
              price: a.guidePriceFormattedText,
            }))
          );
        }
      } catch (err) {
        setError("Unable to check availability. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [productId]);

  // Step 2: Fetch dates for current month (only if date range options exist)
  const fetchDatesForMonth = useCallback(
    async (month: Date) => {
      if (!sessionId) return;

      const startOpt = dateOptions.find((o) => o.type === "START_DATE");
      const endOpt = dateOptions.find((o) => o.type === "END_DATE");
      // If no date range options, initial availabilities are already loaded
      if (!startOpt || !endOpt) return;

      setLoadingDates(true);
      try {
        const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
        const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);

        const fmt = (d: Date) => d.toISOString().split("T")[0];
        const answers = [
          { id: startOpt.id, value: fmt(firstDay) },
          { id: endOpt.id, value: fmt(lastDay) },
        ];

        const result = await fetchAvailabilityList(
          productId,
          sessionId,
          answers
        );
        setAvailableDates(
          result.availabilities.map((a) => ({
            id: a.id,
            date: a.date,
            price: a.guidePriceFormattedText,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch dates:", err);
      } finally {
        setLoadingDates(false);
      }
    },
    [sessionId, dateOptions, productId]
  );

  useEffect(() => {
    if (sessionId) fetchDatesForMonth(currentMonth);
  }, [sessionId, currentMonth, fetchDatesForMonth]);

  function prevMonth() {
    setCurrentMonth(
      (m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)
    );
  }

  function nextMonth() {
    setCurrentMonth(
      (m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-3" />
        <p>Checking availability...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-primary hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  // Build calendar grid
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const availableDateMap = new Map(
    availableDates.map((d) => [d.date, d])
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPastMonth =
    currentMonth.getFullYear() < today.getFullYear() ||
    (currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() <= today.getMonth() - 1);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-dark">
          Choose your date
        </h2>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          disabled={isPastMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-medium text-dark">{monthName}</span>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-gray-400 py-2"
          >
            {d}
          </div>
        ))}
      </div>

      {loadingDates ? (
        <div className="flex items-center justify-center py-20 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for offset */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Day cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const avail = availableDateMap.get(dateStr);
            const dateObj = new Date(year, month, day);
            const isPast = dateObj < today;

            if (avail && !isPast) {
              const dateLabel = new Date(year, month, day).toLocaleDateString("en-US", {
                weekday: "long", month: "long", day: "numeric",
              });
              return (
                <button
                  key={day}
                  onClick={() => onSelect(avail.id)}
                  className="min-h-[44px] min-w-[44px] aspect-square flex flex-col items-center justify-center rounded-xl text-sm hover:bg-primary hover:text-white transition-colors group border border-primary/20 bg-primary/5"
                  aria-label={`${dateLabel}, ${avail.price}`}
                >
                  <span className="font-medium">{day}</span>
                  <span className="text-[10px] text-primary/70 group-hover:text-white/80 truncate max-w-full px-1">
                    {avail.price}
                  </span>
                </button>
              );
            }

            return (
              <div
                key={day}
                className={`min-h-[44px] min-w-[44px] aspect-square flex items-center justify-center rounded-xl text-sm ${
                  isPast ? "text-gray-200" : "text-gray-400"
                }`}
                aria-disabled={isPast || !avail}
              >
                {day}
              </div>
            );
          })}
        </div>
      )}

      {availableDates.length === 0 && !loadingDates && (
        <p className="text-center text-sm text-gray-400 mt-4">
          No availability this month. Try another month.
        </p>
      )}
    </div>
  );
}
