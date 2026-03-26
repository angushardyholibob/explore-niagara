import Link from "next/link";
import Image from "next/image";
import { getDestinationSync } from "@/config/destination";

export default function AboutSection() {
  const config = getDestinationSync();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
            <Image
              src={config.aboutSection.imageUrl}
              alt={config.aboutSection.heading}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              {config.aboutSection.heading}
            </h2>
            {config.aboutSection.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-gray-600 leading-relaxed ${i < config.aboutSection.paragraphs.length - 1 ? "mb-4" : "mb-8"}`}
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/about"
              className="inline-block bg-primary text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-primary-dark transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
