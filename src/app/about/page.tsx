import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo/metadata";
import { getDestinationSync } from "@/config/destination";
import { resolveIcon } from "@/lib/icons";

const config = getDestinationSync();

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    `Learn about ${config.brandName} — a team of passionate locals helping visitors discover the best tours and attractions in ${config.name}.`,
  openGraph: {
    title: `About ${config.brandName}`,
    description:
      `A team of passionate locals helping visitors discover the best tours and attractions in ${config.name}.`,
    images: [defaultOgImage],
  },
  alternates: {
    canonical: `https://${config.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a3d5c] via-[#0b6b96] to-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {config.aboutPage.heading}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {config.aboutPage.subheading}
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
            {config.aboutPage.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
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
            {config.aboutPage.values.map((value) => {
              const Icon = resolveIcon(value.icon);
              return (
                <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  {Icon && <Icon className="w-8 h-8 text-primary mb-4" />}
                  <h3 className="font-semibold text-dark mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
