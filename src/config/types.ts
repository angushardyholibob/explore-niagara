export interface DestinationConfig {
  // ─── Identity ───
  slug: string; // "niagara" | "tokyo" | "queenstown"
  name: string; // "Niagara Falls" | "Tokyo" | "Queenstown"
  brandName: string; // "Explore Niagara" | "Explore Tokyo" | "Explore Queenstown"
  domain: string; // "explore-niagara.com"
  email: string; // "info@exploreniagara.com"
  privacyEmail: string;

  // ─── Search ───
  searchTerm: string; // Primary search term for Product Discovery API
  mapCenter: { lat: number; lng: number };

  // ─── Hero ───
  hero: {
    imageUrl: string;
    heading: string;
    subheading: string;
    ctaText: string;
    stats?: { num: string; label: string }[];
  };

  // ─── About Section (Homepage) ───
  aboutSection: {
    imageUrl: string;
    heading: string;
    paragraphs: string[];
  };

  // ─── About Page ───
  aboutPage: {
    heroGradient: string; // Tailwind gradient classes
    heading: string;
    subheading: string;
    story: string[];
    values: {
      icon: string; // Lucide icon name
      title: string;
      description: string;
    }[];
  };

  // ─── Collections ───
  collections: {
    slug: string;
    name: string;
    description: string;
    searchTerm: string;
    icon: string; // Lucide icon name
    gradient: string; // Tailwind gradient classes
  }[];

  // ─── Guide Page ───
  guide: {
    heroImageUrl: string;
    title: string;
    subtitle: string;
    stats: { num: string; label: string }[];
    facts: { icon: string; title: string; text: string }[];
    timeline: { year: string; title: string; text: string }[];
    daredevils: { year: string; name: string; text: string }[];
    trivia: { q: string; text: string }[];
    tips: { icon: string; title: string; text: string }[];
    power: {
      title: string;
      subtitle: string;
      columns: {
        icon: string;
        title: string;
        items: string[];
      }[];
    };
  };

  // ─── Blog Posts ───
  blogPosts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    isoDate: string;
    category: string;
    readTime: string;
    image: string;
    content: string;
  }[];

  // ─── SEO ───
  seo: {
    titleTemplate: string; // "%s | Explore Niagara"
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };

  // ─── Chat Widget ───
  chatWidget: {
    org: string; // data-org attribute
    label: string;
    color: string;
    defaultLocation: string;
  };

  // ─── Analytics seed data ───
  searchTerms: string[];
}
