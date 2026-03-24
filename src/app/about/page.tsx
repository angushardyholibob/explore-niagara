import type { Metadata } from "next";
import { ShieldCheck, Zap, CalendarX2, MapPin, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Explore Niagara — a team of passionate locals helping visitors discover the best tours and attractions in Niagara Falls.",
  openGraph: {
    title: "About Explore Niagara",
    description:
      "A team of passionate locals helping visitors discover the best tours and attractions in Niagara Falls.",
  },
  alternates: {
    canonical: "https://explore-niagara.com/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a3d5c] via-[#0b6b96] to-[#0289c1] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Explore Niagara
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;re passionate locals on a mission to help every visitor
            experience the magic of Niagara Falls.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Founded by a team of Niagara Falls locals, Explore Niagara was
              born from a simple idea: make it effortless for visitors to
              discover and book the best experiences the region has to offer.
            </p>
            <p>
              We know these falls, trails, and vineyards inside and out. We&apos;ve
              personally vetted every operator, tested every tour, and hand-picked
              only the experiences that meet our high standards for quality,
              safety, and sheer wonder.
            </p>
            <p>
              Whether you&apos;re a first-time visitor or a returning local, our goal
              is to connect you with unforgettable moments — from the thundering
              mist of Horseshoe Falls to the quiet beauty of the Niagara wine
              trail.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion for Niagara",
                desc: "We live and breathe this region. Our recommendations come from real, personal experience.",
              },
              {
                icon: Users,
                title: "People First",
                desc: "Every traveler deserves a personalized, hassle-free experience from booking to adventure.",
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                desc: "Our team of local guides and curators know the hidden gems most visitors never find.",
              },
              {
                icon: ShieldCheck,
                title: "Trust & Safety",
                desc: "Every operator is vetted, insured, and held to the highest standards of quality.",
              },
              {
                icon: CalendarX2,
                title: "Flexibility",
                desc: "Plans change. That's why most of our tours offer free cancellation up to 24 hours before.",
              },
              {
                icon: Zap,
                title: "Instant Booking",
                desc: "No waiting, no phone calls. Book online and get instant confirmation and e-tickets.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <value.icon className="w-8 h-8 text-[#0289c1] mb-4" />
                <h3 className="font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
