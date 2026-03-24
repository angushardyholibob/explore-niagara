"use client";

import { useState, useEffect } from "react";
import { Settings, Loader2, CheckCircle } from "lucide-react";
import { fetchAvailabilityOptions } from "@/lib/holibob/client-api";
import type { AvailabilityOption } from "@/lib/holibob/types";

interface OptionsStepProps {
  availabilityId: string;
  onComplete: () => void;
}

export default function OptionsStep({
  availabilityId,
  onComplete,
}: OptionsStepProps) {
  const [options, setOptions] = useState<AvailabilityOption[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    async function load() {
      try {
        const result = await fetchAvailabilityOptions(availabilityId);
        setOptions(result.options);
        setIsComplete(result.isComplete);

        // Pre-fill already-answered options
        const prefilled: Record<string, string> = {};
        result.options.forEach((o) => {
          if (o.answerValue) prefilled[o.id] = o.answerValue;
        });
        setAnswers(prefilled);

        // If already complete (no options to answer), skip this step
        if (result.isComplete) {
          onComplete();
        }
      } catch (err) {
        console.error("Failed to load options:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [availabilityId, onComplete]);

  async function submitAnswers() {
    setSubmitting(true);
    try {
      const answerList = Object.entries(answers).map(([id, value]) => ({
        id,
        value,
      }));

      const result = await fetchAvailabilityOptions(
        availabilityId,
        answerList
      );
      setOptions(result.options);
      setIsComplete(result.isComplete);

      if (result.isComplete) {
        onComplete();
      } else {
        // Update prefilled answers
        const prefilled: Record<string, string> = { ...answers };
        result.options.forEach((o) => {
          if (o.answerValue && !prefilled[o.id]) prefilled[o.id] = o.answerValue;
        });
        setAnswers(prefilled);
      }
    } catch (err) {
      console.error("Failed to submit options:", err);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-3" />
        <p>Loading options...</p>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-green-600">
        <CheckCircle className="w-10 h-10 mb-3" />
        <p className="font-medium">All options confirmed</p>
      </div>
    );
  }

  const unanswered = options.filter((o) => !o.answerValue);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-dark">Choose your options</h2>
      </div>

      <div className="space-y-5">
        {unanswered.map((option) => (
          <div key={option.id}>
            <label className="block text-sm font-medium text-dark mb-2">
              {option.label}
            </label>

            {option.availableOptions && option.availableOptions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {option.availableOptions.map((ao) => (
                  <button
                    key={ao.value}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [option.id]: ao.value }))
                    }
                    className={`p-3 rounded-xl border text-sm text-left transition-colors ${
                      answers[option.id] === ao.value
                        ? "border-primary bg-primary/5 text-primary font-medium"
                        : "border-gray-200 hover:border-gray-300 text-gray-600"
                    }`}
                  >
                    {ao.label}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={answers[option.id] || ""}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [option.id]: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
                placeholder={`Enter ${option.label.toLowerCase()}`}
              />
            )}
          </div>
        ))}

        {/* Already answered options */}
        {options
          .filter((o) => o.answerValue)
          .map((o) => (
            <div key={o.id} className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>
                {o.label}: <span className="font-medium">{o.answerFormattedText || o.answerValue}</span>
              </span>
            </div>
          ))}
      </div>

      <button
        onClick={submitAnswers}
        disabled={submitting || unanswered.some((o) => !answers[o.id])}
        className="mt-8 w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {submitting ? "Confirming..." : "Continue"}
      </button>
    </div>
  );
}
