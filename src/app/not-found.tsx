import Link from "next/link";
import { MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <div className="max-w-md mx-auto">
        <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-dark mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6 text-sm">
          We couldn&apos;t find the page you&apos;re looking for. It may have
          been moved or no longer exists.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
