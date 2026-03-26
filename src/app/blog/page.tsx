import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo/metadata";
import { getDestinationSync } from "@/config/destination";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog/posts";

const config = getDestinationSync();

export const metadata: Metadata = {
  title: "Blog — Tips, Guides & Stories",
  description:
    `Tips, guides, and stories to help you get the most out of your ${config.name} adventure. Travel guides, seasonal tips, and insider recommendations.`,
  openGraph: {
    title: `${config.brandName} Blog — Tips, Guides & Stories`,
    description:
      `Tips, guides, and stories to help you plan your ${config.name} trip.`,
    images: [defaultOgImage],
  },
  alternates: {
    canonical: `https://${config.domain}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            Blog
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Tips, guides, and stories to help you get the most out of your{" "}
            {config.name} adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors mb-2">
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
