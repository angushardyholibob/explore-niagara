"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const collections = [
  { name: "Maid of the Mist", href: "/collections/maid-of-the-mist" },
  { name: "Cave of the Winds", href: "/collections/cave-of-the-winds" },
  { name: "Experience Niagara", href: "/collections/experience-niagara" },
  { name: "Jet Boats", href: "/collections/jet-boats" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Explore Niagara"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/tours"
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              All Tours
            </Link>

            {/* Collections Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setCollectionsOpen(true)}
                onMouseLeave={() => setCollectionsOpen(false)}
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                Collections
                <ChevronDown className="w-4 h-4" />
              </button>
              {collectionsOpen && (
                <div
                  onMouseEnter={() => setCollectionsOpen(true)}
                  onMouseLeave={() => setCollectionsOpen(false)}
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
                >
                  {collections.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/tours"
              className="block text-sm font-medium text-dark py-2"
              onClick={() => setMobileOpen(false)}
            >
              All Tours
            </Link>
            <div>
              <button
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-dark py-2 w-full"
              >
                Collections
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${collectionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {collectionsOpen && (
                <div className="pl-4 space-y-1">
                  {collections.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-600 py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block text-sm font-medium text-dark py-2"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-dark py-2"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
