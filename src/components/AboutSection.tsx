import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0289c1]/15 via-[#0289c1]/5 to-[#dee8f6] flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-[#0289c1]/25 mx-auto mb-3"
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
              <span className="text-sm text-[#0289c1]/30 font-medium">
                About Image
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Your Adventure Starts Here
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Explore Niagara, we believe every visit to Niagara Falls should
              be extraordinary. Our team of passionate local experts curates the
              very best tours, activities, and hidden gems so you can focus on
              making memories.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re chasing the thrill of a jet boat ride, marveling at
              the falls from the deck of the Maid of the Mist, or savoring
              world-class wines in the Niagara region — we&apos;ve got you covered
              with hand-picked experiences and knowledgeable guides.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#0289c1] text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-[#015f87] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
