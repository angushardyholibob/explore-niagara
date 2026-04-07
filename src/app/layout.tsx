import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { websiteJsonLd, organizationJsonLd } from "@/lib/seo/json-ld";
import { getDestinationSync } from "@/config/destination";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const config = getDestinationSync();
const BASE_URL = `https://${config.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: config.seo.defaultTitle,
    template: config.seo.titleTemplate,
  },
  description: config.seo.defaultDescription,
  keywords: config.seo.keywords,
  authors: [{ name: config.brandName }],
  creator: config.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: config.brandName,
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${config.brandName} — ${config.seo.defaultTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
  },
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <AnalyticsTracker />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://embed.holibob.ai/embed.js"
          data-org={config.chatWidget.org}
          data-label={config.chatWidget.label}
          data-color={config.chatWidget.color}
          data-default-location={config.chatWidget.defaultLocation}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
