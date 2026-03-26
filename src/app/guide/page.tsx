import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { defaultOgImage } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { getDestinationSync } from "@/config/destination";
import { resolveIcon } from "@/lib/icons";

const config = getDestinationSync();
const guide = config.guide;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.subtitle,
  openGraph: {
    title: `${guide.title} | ${config.brandName}`,
    description: guide.subtitle,
    images: [defaultOgImage],
  },
  alternates: {
    canonical: `https://${config.domain}/guide`,
  },
};

export default function GuidePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([
            { name: "Home", url: `https://${config.domain}` },
            { name: "Guide", url: `https://${config.domain}/guide` },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.subtitle,
            author: { "@type": "Organization", name: config.brandName },
            datePublished: "2026-03-01",
            dateModified: "2026-03-25",
            image: `https://${config.domain}/opengraph-image`,
            publisher: { "@type": "Organization", name: config.brandName, logo: { "@type": "ImageObject", url: `https://${config.domain}/logo.webp` } },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[45vh] min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src={guide.heroImageUrl}
          alt={guide.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            {guide.title}
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8 drop-shadow-md">
            {guide.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {guide.stats.map((s) => (
              <div key={s.label} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-center min-w-[90px]">
                <div className="text-xl font-bold text-white">{s.num}</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/tours"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      {/* ─── FACTS ─── */}
      <section id="facts" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">The Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Jaw-Dropping Facts</h2>
          <p className="text-gray-500 max-w-3xl mb-10 leading-relaxed">
            Discover what makes {config.name} extraordinary.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guide.facts.map((f) => {
              const Icon = resolveIcon(f.icon);
              return (
                <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="font-bold text-dark mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HISTORY ─── */}
      <section id="history" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Through the Ages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">History</h2>
          <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
            The story of {config.name} through the ages.
          </p>
          <div className="relative pl-8 space-y-10">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
            {guide.timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-primary border-2 border-gray-50" />
                <span className="text-xs font-bold text-primary tracking-wider">{t.year}</span>
                <h3 className="text-dark font-bold mt-1 mb-1">{t.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DAREDEVILS ─── */}
      <section id="daredevils" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Legends &amp; Stunts</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Notable Figures</h2>
          <p className="text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Remarkable people and events in the history of {config.name}.
          </p>
          <div className="space-y-4">
            {guide.daredevils.map((d) => (
              <div key={d.year} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <span className="shrink-0 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg h-fit mt-0.5">
                  {d.year}
                </span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{d.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POWER & SCIENCE ─── */}
      <section id="power" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Science &amp; Power</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">{guide.power.title}</h2>
          <p className="text-gray-500 max-w-3xl mb-10 leading-relaxed">
            {guide.power.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guide.power.columns.map((col) => {
              const ColIcon = resolveIcon(col.icon);
              return (
                <div key={col.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-dark mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                    {ColIcon && <ColIcon className="w-5 h-5 text-primary" />} {col.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {col.items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TRIVIA ─── */}
      <section id="trivia" className="py-16 md:py-24 bg-primary scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2 block">Did You Know?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{config.name} Trivia</h2>
          <p className="text-white/70 max-w-2xl mb-10 leading-relaxed">
            Test your knowledge with these surprising and fascinating facts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guide.trivia.map((t) => (
              <div key={t.q} className="bg-white/15 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <h3 className="text-white font-bold mb-2 text-sm">{t.q}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIPS ─── */}
      <section id="tips" className="py-16 md:py-24 bg-footer-bg scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Travel Smart</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Insider Tips for Visiting</h2>
          <p className="text-white/60 max-w-2xl mb-10 leading-relaxed">
            Make the most of your {config.name} adventure with these essential tips from seasoned travellers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guide.tips.map((t, i) => {
              const TipIcon = resolveIcon(t.icon);
              return (
                <div key={t.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <span className="text-3xl font-black text-primary/20 block leading-none mb-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                    {TipIcon && <TipIcon className="w-4 h-4 text-primary" />} {t.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience {config.name}?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Browse our hand-picked tours and book with instant confirmation and free cancellation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              Browse All Tours
            </Link>
            <Link href="/blog" className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Read Travel Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
