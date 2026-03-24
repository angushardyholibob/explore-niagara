import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[85vh] min-h-[420px] sm:min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d5c] via-[#0b6b96] to-[#0289c1]">
        {/* Decorative waterfall-like overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-3xl" />
          <div className="absolute top-1/4 right-1/3 w-1/3 h-3/4 bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-2xl" />
        </div>
        {/* Mist effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Explore the best tours and attractions Niagara Falls has to offer
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          From breathtaking boat rides to thrilling adventures — discover
          unforgettable experiences at one of the world&apos;s greatest natural wonders.
        </p>
        <Link
          href="/tours"
          className="inline-block bg-white text-[#0289c1] font-semibold px-8 py-4 rounded-full text-base hover:bg-gray-100 transition-colors shadow-lg"
        >
          All Experiences
        </Link>
      </div>
    </section>
  );
}
