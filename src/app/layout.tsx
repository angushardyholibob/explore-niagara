import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { websiteJsonLd, organizationJsonLd } from "@/lib/seo/json-ld";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://explore-niagara.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Explore Niagara | Best Tours & Attractions in Niagara Falls",
    template: "%s | Explore Niagara",
  },
  description:
    "Explore the best tours and attractions Niagara Falls has to offer. Book Maid of the Mist, Cave of the Winds, Jet Boats and more.",
  keywords: [
    "Niagara Falls tours",
    "Niagara Falls attractions",
    "Maid of the Mist",
    "Cave of the Winds",
    "Niagara Falls experiences",
    "things to do in Niagara Falls",
    "Niagara Falls tickets",
    "Niagara Falls booking",
  ],
  authors: [{ name: "Explore Niagara" }],
  creator: "Explore Niagara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Explore Niagara",
    title: "Explore Niagara | Best Tours & Attractions in Niagara Falls",
    description:
      "Explore the best tours and attractions Niagara Falls has to offer. Book Maid of the Mist, Cave of the Winds, Jet Boats and more.",
    images: [
      {
        url: `${BASE_URL}/logo.webp`,
        width: 200,
        height: 50,
        alt: "Explore Niagara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Niagara | Best Tours & Attractions in Niagara Falls",
    description:
      "Explore the best tours and attractions Niagara Falls has to offer.",
  },
  alternates: {
    canonical: BASE_URL,
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
