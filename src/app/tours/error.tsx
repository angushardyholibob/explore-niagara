"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

export default function ToursError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-20 text-center">
      <div className="max-w-md mx-auto">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-dark mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          We couldn&apos;t load the tours right now. This might be a temporary issue
          — please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}
