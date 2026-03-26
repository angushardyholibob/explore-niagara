import Link from "next/link";
import Image from "next/image";
import { getDestinationSync } from "@/config/destination";

export default function Hero() {
  const config = getDestinationSync();

  return (
    <section className="relative h-[40vh] sm:h-[45vh] min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={config.hero.imageUrl}
        alt={config.hero.heading}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
          {config.hero.heading}
        </h1>
        <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto drop-shadow-md">
          {config.hero.subheading}
        </p>
        <Link
          href="/tours"
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors shadow-lg"
        >
          All Experiences
        </Link>
      </div>
    </section>
  );
}
