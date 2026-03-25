"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DateStep from "./booking/DateStep";
import OptionsStep from "./booking/OptionsStep";
import PricingStep from "./booking/PricingStep";
import QuestionsStep from "./booking/QuestionsStep";
import PaymentStep from "./booking/PaymentStep";
import ConfirmationStep from "./booking/ConfirmationStep";

interface BookingFlowProps {
  productId: string;
  productName: string;
  productImage: string | null;
}

export type BookingStep =
  | "date"
  | "options"
  | "pricing"
  | "questions"
  | "payment"
  | "confirmation";

const STEP_LABELS: Record<BookingStep, string> = {
  date: "Select Date",
  options: "Choose Options",
  pricing: "Travelers",
  questions: "Your Details",
  payment: "Payment",
  confirmation: "Confirmation",
};

const STEP_ORDER: BookingStep[] = [
  "date",
  "options",
  "pricing",
  "questions",
  "payment",
  "confirmation",
];

// The progress bar steps (user-visible — excludes "options" which auto-skips if no options)
const VISIBLE_STEPS: { key: BookingStep; label: string }[] = [
  { key: "date", label: "Date" },
  { key: "pricing", label: "Guests" },
  { key: "questions", label: "Details" },
  { key: "payment", label: "Payment" },
];

interface BookingState {
  step: BookingStep;
  availabilityId: string | null;
  bookingId: string | null;
  paymentRequired: boolean;
  productId: string;
}

function getStorageKey(productId: string) {
  return `booking_${productId}`;
}

function saveBookingState(productId: string, state: Partial<BookingState>) {
  try {
    const existing = loadBookingState(productId);
    const merged = { ...existing, ...state, productId };
    sessionStorage.setItem(getStorageKey(productId), JSON.stringify(merged));
  } catch { /* SSR or storage unavailable */ }
}

function loadBookingState(productId: string): BookingState | null {
  try {
    const raw = sessionStorage.getItem(getStorageKey(productId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BookingState;
    // Only restore if it's the same product
    if (parsed.productId !== productId) return null;
    return parsed;
  } catch {
    return null;
  }
}

function clearBookingState(productId: string) {
  try {
    sessionStorage.removeItem(getStorageKey(productId));
  } catch { /* ignore */ }
}

export default function BookingFlow({
  productId,
  productName,
  productImage,
}: BookingFlowProps) {
  const [step, setStep] = useState<BookingStep>("date");
  const [availabilityId, setAvailabilityId] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [paymentRequired, setPaymentRequired] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    code: string;
    state: string;
    voucherUrl?: string;
  } | null>(null);
  const [restored, setRestored] = useState(false);

  // Restore booking state on mount
  useEffect(() => {
    const saved = loadBookingState(productId);
    if (saved && saved.step !== "confirmation") {
      setStep(saved.step);
      setAvailabilityId(saved.availabilityId);
      setBookingId(saved.bookingId);
      setPaymentRequired(saved.paymentRequired);
    }
    setRestored(true);
  }, [productId]);

  // Persist state on changes
  const persistState = useCallback(
    (updates: Partial<BookingState>) => {
      saveBookingState(productId, {
        step,
        availabilityId,
        bookingId,
        paymentRequired,
        ...updates,
      });
    },
    [productId, step, availabilityId, bookingId, paymentRequired]
  );

  function goToStep(newStep: BookingStep, updates?: Partial<BookingState>) {
    setStep(newStep);
    persistState({ step: newStep, ...updates });
  }

  const currentIndex = STEP_ORDER.indexOf(step);

  function goBack() {
    const prev = STEP_ORDER[currentIndex - 1];
    if (prev) goToStep(prev);
  }

  // Find which visible step we're on (for the progress bar)
  const visibleStepIndex = VISIBLE_STEPS.findIndex((s) => {
    if (step === "options") return s.key === "date"; // Options groups with date
    return s.key === step;
  });

  // Don't render until we've checked sessionStorage
  if (!restored) return null;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/tours/${productId}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to tour
        </Link>

        <div className="flex items-center gap-4">
          {productImage && (
            <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
              <Image
                src={productImage}
                alt={productName}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          )}
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-dark">
              Book: {productName}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {STEP_LABELS[step]}
            </p>
          </div>
        </div>
      </div>

      {/* Progress bar — shows all steps including payment */}
      {step !== "confirmation" && (
        <nav className="mb-8" aria-label="Booking progress">
          <div className="flex gap-1">
            {VISIBLE_STEPS.map((s, i) => (
              <div key={s.key} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-colors ${
                    i <= visibleStepIndex ? "bg-primary" : "bg-gray-200"
                  }`}
                />
                <span
                  className={`block text-[10px] mt-1.5 text-center font-medium ${
                    i <= visibleStepIndex ? "text-primary" : "text-gray-400"
                  }`}
                  aria-current={i === visibleStepIndex ? "step" : undefined}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-400" aria-live="polite">
              Step {visibleStepIndex + 1} of {VISIBLE_STEPS.length}
            </span>
            {currentIndex > 0 && step !== "payment" && (
              <button
                onClick={goBack}
                className="text-xs text-primary hover:underline"
              >
                Go back
              </button>
            )}
          </div>
        </nav>
      )}

      {/* Steps */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        {step === "date" && (
          <DateStep
            productId={productId}
            onSelect={(id) => {
              setAvailabilityId(id);
              goToStep("options", { availabilityId: id });
            }}
          />
        )}

        {step === "options" && availabilityId && (
          <OptionsStep
            availabilityId={availabilityId}
            onComplete={() => goToStep("pricing")}
          />
        )}

        {step === "pricing" && availabilityId && (
          <PricingStep
            availabilityId={availabilityId}
            onComplete={(bId, payReq) => {
              setBookingId(bId);
              setPaymentRequired(payReq);
              goToStep("questions", { bookingId: bId, paymentRequired: payReq });
            }}
          />
        )}

        {step === "questions" && bookingId && (
          <QuestionsStep
            bookingId={bookingId}
            onComplete={() => {
              const nextStep = paymentRequired ? "payment" : "confirmation";
              goToStep(nextStep);
              if (!paymentRequired) {
                clearBookingState(productId);
                import("@/lib/holibob/client-api").then(({ commitBooking }) =>
                  commitBooking(bookingId).then(setConfirmationData)
                );
              }
            }}
          />
        )}

        {step === "payment" && bookingId && (
          <PaymentStep
            bookingId={bookingId}
            onComplete={(data) => {
              clearBookingState(productId);
              setConfirmationData(data);
              setStep("confirmation");
            }}
          />
        )}

        {step === "confirmation" && (
          <ConfirmationStep
            bookingId={bookingId!}
            confirmationData={confirmationData}
            productName={productName}
          />
        )}
      </div>
    </div>
  );
}
