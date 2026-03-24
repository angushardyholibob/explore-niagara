import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Explore Niagara's privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://explore-niagara.com/privacy",
  },
  robots: {
    index: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>
            Your privacy is important to us. This Privacy Policy explains how
            Explore Niagara collects, uses, and protects your personal
            information when you visit our website and use our services.
          </p>

          <h2 className="text-xl font-semibold text-dark mt-8">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and booking details when you interact with our website,
            sign up for newsletters, or book tours and experiences.
          </p>

          <h2 className="text-xl font-semibold text-dark mt-8">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to process bookings, send
            confirmations, improve our services, and communicate relevant
            offers and updates with your consent.
          </p>

          <h2 className="text-xl font-semibold text-dark mt-8">
            Data Protection
          </h2>
          <p>
            We implement appropriate security measures to protect your
            personal information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold text-dark mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at privacy@exploreniagara.com.
          </p>
        </div>
      </div>
    </div>
  );
}
