"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Loader2, XCircle, Download } from "lucide-react";
import { pollBookingUntilConfirmed } from "@/lib/holibob/client-api";
import Link from "next/link";

interface ConfirmationStepProps {
  bookingId: string;
  confirmationData: {
    code: string;
    state: string;
    voucherUrl?: string;
  } | null;
  productName: string;
}

export default function ConfirmationStep({
  bookingId,
  confirmationData,
  productName,
}: ConfirmationStepProps) {
  const [status, setStatus] = useState(confirmationData);
  const [polling, setPolling] = useState(!confirmationData);

  useEffect(() => {
    if (confirmationData?.state === "CONFIRMED") {
      setStatus(confirmationData);
      setPolling(false);
      return;
    }

    // Poll for confirmation
    async function poll() {
      try {
        const result = await pollBookingUntilConfirmed(bookingId);
        setStatus({
          code: result.code,
          state: result.state,
          voucherUrl: result.voucherUrl,
        });
      } catch (err) {
        console.error("Polling error:", err);
        setStatus({ code: "", state: "FAILED" });
      } finally {
        setPolling(false);
      }
    }

    poll();
  }, [bookingId, confirmationData]);

  if (polling) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-10 h-10 animate-spin mb-4" />
        <p className="font-medium text-dark">Confirming your booking...</p>
        <p className="text-sm mt-2">This may take a few moments.</p>
      </div>
    );
  }

  const isConfirmed = status?.state === "CONFIRMED";
  const isFailed = status?.state === "FAILED" || status?.state === "CANCELLED";

  return (
    <div className="text-center py-8">
      {isConfirmed ? (
        <>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-gray-500 mb-2">{productName}</p>
          {status?.code && (
            <p className="text-sm text-gray-400 mb-8">
              Booking reference:{" "}
              <span className="font-mono font-medium text-dark">
                {status.code}
              </span>
            </p>
          )}

          {status?.voucherUrl && (
            <a
              href={status.voucherUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors mb-4"
            >
              <Download className="w-4 h-4" />
              Download Voucher
            </a>
          )}

          <div className="mt-6">
            <Link
              href="/tours"
              className="text-sm text-primary hover:underline"
            >
              Browse more experiences
            </Link>
          </div>
        </>
      ) : isFailed ? (
        <>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark mb-2">
            Booking Failed
          </h2>
          <p className="text-gray-500 mb-8">
            We were unable to confirm your booking. No charges have been made.
          </p>
          <Link
            href="/tours"
            className="inline-flex px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            Try Again
          </Link>
        </>
      ) : (
        <>
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-10 h-10 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark mb-2">
            Booking Pending
          </h2>
          <p className="text-gray-500 mb-2">
            Your booking is being processed. You will receive a confirmation email shortly.
          </p>
          {status?.code && (
            <p className="text-sm text-gray-400">
              Reference: <span className="font-mono font-medium">{status.code}</span>
            </p>
          )}
          <div className="mt-8">
            <Link
              href="/tours"
              className="text-sm text-primary hover:underline"
            >
              Browse more experiences
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
