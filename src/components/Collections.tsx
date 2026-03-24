import Link from "next/link";
import { Waves, Mountain, Compass, Ship } from "lucide-react";

const collections = [
  {
    name: "Maid of the Mist",
    description: "Get up close to the thundering falls on this iconic boat tour.",
    icon: Ship,
    href: "/collections/maid-of-the-mist",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Cave of the Winds",
    description: "Feel the power of Niagara from the Hurricane Deck.",
    icon: Mountain,
    href: "/collections/cave-of-the-winds",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Jet Boats",
    description: "An adrenaline-pumping ride through the Niagara Gorge rapids.",
    icon: Waves,
    href: "/collections/jet-boats",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    name: "Experience Niagara",
    description: "Multi-attraction passes and all-in-one experiences.",
    icon: Compass,
    href: "/collections/experience-niagara",
    gradient: "from-violet-500 to-purple-400",
  },
];

export default function Collections() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Browse by Collection
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Explore our curated collections of the best Niagara Falls has to
            offer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${collection.gradient} mb-5`}
              >
                <collection.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark group-hover:text-[#0289c1] transition-colors mb-2">
                {collection.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {collection.description}
              </p>
              <span className="inline-block mt-4 text-sm text-[#0289c1] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
