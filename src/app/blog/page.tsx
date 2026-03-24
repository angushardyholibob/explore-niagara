import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Tips, Guides & Stories",
  description:
    "Tips, guides, and stories to help you get the most out of your Niagara Falls adventure. Travel guides, seasonal tips, and insider recommendations.",
  openGraph: {
    title: "Explore Niagara Blog — Tips, Guides & Stories",
    description:
      "Tips, guides, and stories to help you plan your Niagara Falls trip.",
  },
  alternates: {
    canonical: "https://explore-niagara.com/blog",
  },
};

const PLACEHOLDER_POSTS = [
  {
    slug: "top-10-things-to-do-niagara-falls",
    title: "Top 10 Things to Do in Niagara Falls",
    excerpt:
      "Planning a trip to Niagara Falls? Here are our must-do picks for an unforgettable visit.",
    date: "March 15, 2026",
    category: "Travel Guide",
  },
  {
    slug: "maid-of-the-mist-guide",
    title: "The Complete Guide to Maid of the Mist",
    excerpt:
      "Everything you need to know before boarding the iconic Maid of the Mist boat tour.",
    date: "March 8, 2026",
    category: "Tours",
  },
  {
    slug: "niagara-falls-winter",
    title: "Visiting Niagara Falls in Winter: What to Expect",
    excerpt:
      "The falls are magical year-round. Here's why a winter visit should be on your bucket list.",
    date: "February 20, 2026",
    category: "Seasonal",
  },
  {
    slug: "niagara-wine-trail",
    title: "Niagara Wine Trail: A Food & Wine Lover's Guide",
    excerpt:
      "Discover world-class icewine, farm-to-table dining, and hidden vineyard gems along the Niagara wine trail.",
    date: "February 12, 2026",
    category: "Food & Drink",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            Blog
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Tips, guides, and stories to help you get the most out of your
            Niagara Falls adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLACEHOLDER_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                {/* Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-[#0289c1]/15 via-[#0289c1]/5 to-[#dee8f6] flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-[#0289c1]/25"
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
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[#0289c1] bg-[#0289c1]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-dark group-hover:text-[#0289c1] transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
