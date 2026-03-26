import Link from "next/link";
import { getDestinationSync } from "@/config/destination";
import { resolveIcon } from "@/lib/icons";

const config = getDestinationSync();
const collections = config.collections.map((c) => ({
  name: c.name,
  description: c.description,
  icon: resolveIcon(c.icon),
  href: `/collections/${c.slug}`,
  gradient: c.gradient,
}));

export default function Collections() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Browse by Collection
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Explore our curated collections of the best {config.name} has to
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
              <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                {collection.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {collection.description}
              </p>
              <span className="inline-block mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
