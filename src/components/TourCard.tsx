import { Star, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Tour {
  id: string;
  title: string;
  image: string | null;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  priceFormatted?: string | null;
  duration?: string;
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-light-blue">
          {tour.image ? (
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-primary/30 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
                <span className="text-xs text-primary/40 font-medium">Tour Image</span>
              </div>
            </div>
          )}
          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-dark px-3 py-1 rounded-full">
            {tour.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {tour.title}
          </h3>
          <div className="flex items-center gap-3 mb-3">
            {tour.rating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{tour.rating}</span>
                {tour.reviewCount > 0 && (
                  <span className="text-sm text-gray-400">
                    ({tour.reviewCount.toLocaleString()})
                  </span>
                )}
              </div>
            )}
            {tour.duration && (
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-sm">{tour.duration}</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400">From</span>
              <span className="text-lg font-bold text-dark ml-1">
                {tour.priceFormatted || `$${tour.price.toFixed(2)}`}
              </span>
            </div>
            <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              Book Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
