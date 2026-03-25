"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function TourDetailError({
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
          Tour not available
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          We couldn&apos;t load this tour. It may have been removed or there&apos;s a
          temporary connection issue.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/tours"
            className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Browse All Tours
          </Link>
        </div>
      </div>
    </div>
  );
}
