"use client";

import { useState } from "react";
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

  const currentIndex = STEP_ORDER.indexOf(step);

  function goBack() {
    const prev = STEP_ORDER[currentIndex - 1];
    if (prev) setStep(prev);
  }

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

      {/* Progress bar */}
      {step !== "confirmation" && (
        <div className="mb-8">
          <div className="flex gap-1.5">
            {STEP_ORDER.slice(0, -1).map((s, i) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= currentIndex ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-400">
              Step {currentIndex + 1} of {STEP_ORDER.length - 1}
            </span>
            {currentIndex > 0 && (
              <button
                onClick={goBack}
                className="text-xs text-primary hover:underline"
              >
                Go back
              </button>
            )}
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        {step === "date" && (
          <DateStep
            productId={productId}
            onSelect={(id) => {
              setAvailabilityId(id);
              setStep("options");
            }}
          />
        )}

        {step === "options" && availabilityId && (
          <OptionsStep
            availabilityId={availabilityId}
            onComplete={() => setStep("pricing")}
          />
        )}

        {step === "pricing" && availabilityId && (
          <PricingStep
            availabilityId={availabilityId}
            onComplete={(bId, payReq) => {
              setBookingId(bId);
              setPaymentRequired(payReq);
              setStep("questions");
            }}
          />
        )}

        {step === "questions" && bookingId && (
          <QuestionsStep
            bookingId={bookingId}
            onComplete={() => {
              setStep(paymentRequired ? "payment" : "confirmation");
              if (!paymentRequired) {
                // Commit directly if no payment needed
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
