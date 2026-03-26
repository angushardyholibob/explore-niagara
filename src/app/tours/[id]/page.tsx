import type { Metadata, ResolvingMetadata } from "next";
import { getProduct } from "@/lib/holibob/api";
import { tourJsonLd, tourProductJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { getDestinationSync } from "@/config/destination";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  MapPin,
  ChevronLeft,
  Users,
  CheckCircle,
  XCircle,
  Sparkles,
  Calendar,
} from "lucide-react";
import ShareButton from "@/components/ShareButton";

const config = getDestinationSync();

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;

  let product;
  try {
    product = await getProduct(id);
  } catch {
    return { title: "Tour Not Found" };
  }

  const title = product.name;
  const description =
    product.description?.slice(0, 160) ||
    `Book ${product.name} in ${config.name}. ${product.guidePriceFormattedText ? `From ${product.guidePriceFormattedText}.` : ""} Instant confirmation.`;
  const image = product.imageList?.[0]?.url;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${config.brandName}`,
      description,
      type: "website",
      url: `https://${config.domain}/tours/${id}`,
      ...(image ? { images: [{ url: image, alt: product.name }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    alternates: {
      canonical: `https://${config.domain}/tours/${id}`,
    },
  };
}

function parseDuration(iso: string): string {
  if (!iso) return "Flexible";
  const hMatch = iso.match(/(\d+)H/);
  const mMatch = iso.match(/(\d+)M/);
  const hours = hMatch ? parseInt(hMatch[1], 10) : 0;
  const minutes = mMatch ? parseInt(mMatch[1], 10) : 0;
  let result = "";
  if (hours > 0) result += `${hours} hr${hours > 1 ? "s" : ""}`;
  if (minutes > 0) result += `${result ? " " : ""}${minutes} min`;
  return result || "Flexible";
}

function StarRating({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function ContentIcon({ type }: { type: string }) {
  const t = type.toUpperCase();
  if (t.includes("HIGHLIGHT")) return <Sparkles className="w-5 h-5 text-primary" />;
  if (t.includes("INCLUSION") || t.includes("INCLUDED"))
    return <CheckCircle className="w-5 h-5 text-emerald-500" />;
  if (t.includes("EXCLUSION") || t.includes("EXCLUDED") || t.includes("NOT_INCLUDED"))
    return <XCircle className="w-5 h-5 text-red-400" />;
  return <CheckCircle className="w-5 h-5 text-primary" />;
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product;
  try {
    product = await getProduct(id);
  } catch {
    notFound();
  }

  if (!product) notFound();

  const duration = parseDuration(product.maxDuration);
  const images = product.imageList || [];
  const heroImage = images[0]?.url;
  const thumbnailImages = images.slice(1);
  const contentSections = [...(product.contentList || [])].sort(
    (a, b) => a.ordinalPosition - b.ordinalPosition
  );
  const reviews = product.reviews || [];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tourJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tourProductJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `https://${config.domain}` },
              { name: "Tours", url: `https://${config.domain}/tours` },
              { name: product.name, url: `https://${config.domain}/tours/${id}` },
            ])
          ),
        }}
      />
      {/* Back Navigation + Share */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        <Link
          href="/tours"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to all tours
        </Link>
        <ShareButton
          title={product.name}
          url={`https://${config.domain}/tours/${id}`}
        />
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden">
          {/* Hero Image */}
          <div className="md:col-span-3 relative aspect-[16/9] md:aspect-[16/10] bg-gradient-to-br from-primary/20 via-primary/10 to-light-blue">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary/40 text-lg font-medium">
                  No image available
                </span>
              </div>
            )}
          </div>
          {/* Thumbnail Grid */}
          {thumbnailImages.length > 0 && (
            <div className="hidden md:grid grid-rows-2 gap-3">
              {thumbnailImages.slice(0, 2).map((img, i) => (
                <div
                  key={img.id}
                  className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-light-blue"
                >
                  <Image
                    src={img.url}
                    alt={`${product.name} - Photo ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  {/* Show remaining count on last thumbnail */}
                  {i === 1 && thumbnailImages.length > 2 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        +{thumbnailImages.length - 2} more
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Scrollable thumbnail strip (all remaining images) */}
        {thumbnailImages.length > 0 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {thumbnailImages.map((img, i) => (
              <div
                key={img.id}
                className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-light-blue"
              >
                <Image
                  src={img.url}
                  alt={`${product.name} - Photo ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Categories */}
            {product.categoryList && product.categoryList.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.categoryList.map((cat) => (
                  <span
                    key={cat.id}
                    className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-dark leading-tight mb-4">
              {product.name}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              {product.reviewRating > 0 && (
                <div className="flex items-center gap-1.5">
                  <StarRating rating={product.reviewRating} />
                  <span className="font-semibold text-dark">
                    {product.reviewRating.toFixed(1)}
                  </span>
                  {product.reviewCount > 0 && (
                    <span className="text-gray-400">
                      ({product.reviewCount.toLocaleString()} review
                      {product.reviewCount !== 1 ? "s" : ""})
                    </span>
                  )}
                </div>
              )}
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              {product.place && (
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {product.place.cityName}
                    {product.place.countryName
                      ? `, ${product.place.countryName}`
                      : ""}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="border-t border-gray-100 pt-6 mb-8">
              <h2 className="text-lg font-semibold text-dark mb-3">About this experience</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Content Sections */}
            {contentSections.length > 0 && (
              <div className="space-y-8">
                {contentSections.map((section) => (
                  <div
                    key={`${section.type}-${section.ordinalPosition}`}
                    className="border-t border-gray-100 pt-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <ContentIcon type={section.type} />
                      <h2 className="text-lg font-semibold text-dark">
                        {section.name}
                      </h2>
                    </div>
                    {section.descriptionHtml ? (
                      <div
                        className="prose prose-sm prose-gray max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_p]:mb-2 [&_p]:text-gray-600 [&_li]:text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: section.descriptionHtml,
                        }}
                      />
                    ) : (
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Reviews */}
            {reviews.length > 0 && (
              <div className="border-t border-gray-100 pt-8 mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-dark">
                    Customer Reviews
                  </h2>
                  {product.reviewRecordCount > 0 && (
                    <span className="text-sm text-gray-400">
                      {product.reviewRecordCount.toLocaleString()} total review
                      {product.reviewRecordCount !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>

                {/* Review Summary */}
                {product.reviewRating > 0 && (
                  <div className="flex items-center gap-4 bg-light-blue/40 rounded-xl p-5 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-dark">
                        {product.reviewRating.toFixed(1)}
                      </div>
                      <StarRating
                        rating={product.reviewRating}
                        size="w-3.5 h-3.5"
                      />
                      <div className="text-xs text-gray-400 mt-1">
                        {product.reviewCount.toLocaleString()} review
                        {product.reviewCount !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                )}

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border border-gray-100 rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-dark text-sm">
                              {review.authorName}
                            </span>
                          </div>
                          <StarRating
                            rating={review.rating}
                            size="w-3.5 h-3.5"
                          />
                        </div>
                        {review.publishedDate && (
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {new Date(review.publishedDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </div>
                        )}
                      </div>
                      {review.title && (
                        <h3 className="font-semibold text-dark text-sm mt-3 mb-1">
                          {review.title}
                        </h3>
                      )}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar - Book Now */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                {/* Price */}
                <div className="mb-4">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    From
                  </span>
                  <div className="text-3xl font-bold text-dark mt-1">
                    {product.guidePriceFormattedText ||
                      `$${product.guidePrice.toFixed(2)}`}
                  </div>
                  <span className="text-xs text-gray-400">per person</span>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 border-t border-gray-100 pt-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-gray-500">Duration</span>
                      <p className="font-medium text-dark">{duration}</p>
                    </div>
                  </div>
                  {product.place && (
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-gray-500">Location</span>
                        <p className="font-medium text-dark">
                          {product.place.cityName}
                          {product.place.countryName
                            ? `, ${product.place.countryName}`
                            : ""}
                        </p>
                      </div>
                    </div>
                  )}
                  {product.reviewRating > 0 && (
                    <div className="flex items-center gap-3 text-sm">
                      <Star className="w-4 h-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-gray-500">Rating</span>
                        <p className="font-medium text-dark">
                          {product.reviewRating.toFixed(1)} / 5{" "}
                          <span className="text-gray-400 font-normal">
                            ({product.reviewCount.toLocaleString()})
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Book Now Button */}
                <Link
                  href={`/tours/${id}/book`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-md shadow-primary/20"
                >
                  Book Now
                </Link>

                {/* Trust indicators */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    Instant confirmation
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    Free cancellation available
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    Secure payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
