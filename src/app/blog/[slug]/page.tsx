import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog/posts";
import { blogPostJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { defaultOgImage } from "@/lib/seo/metadata";
import { getDestinationSync } from "@/config/destination";

const config = getDestinationSync();

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${config.brandName} Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://${config.domain}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `https://${config.domain}` },
              { name: "Blog", url: `https://${config.domain}/blog` },
              { name: post.title, url: `https://${config.domain}/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Hero image */}
        <div className="aspect-[16/9] relative overflow-hidden rounded-2xl mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Header */}
        <header className="mb-10">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-dark mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-gray max-w-none prose-headings:text-dark prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary prose-strong:text-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-light-blue/30 rounded-2xl border border-primary/10">
          <h3 className="text-lg font-semibold text-dark mb-2">
            Ready to explore {config.name}?
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Browse our hand-picked tours and book with instant confirmation.
          </p>
          <Link
            href="/tours"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Browse Tours
          </Link>
        </div>
      </div>
    </article>
  );
}
