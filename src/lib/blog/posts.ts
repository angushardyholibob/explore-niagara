import { getDestinationSync } from "@/config/destination";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = getDestinationSync().blogPosts;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
