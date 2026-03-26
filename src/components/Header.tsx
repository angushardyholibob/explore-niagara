"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const collections = [
  { name: "Maid of the Mist", href: "/collections/maid-of-the-mist" },
  { name: "Cave of the Winds", href: "/collections/cave-of-the-winds" },
  { name: "Experience Niagara", href: "/collections/experience-niagara" },
  { name: "Jet Boats", href: "/collections/jet-boats" },
];

const guideSections = [
  { name: "Facts", href: "/guide#facts" },
  { name: "History", href: "/guide#history" },
  { name: "Daredevils", href: "/guide#daredevils" },
  { name: "Science & Power", href: "/guide#power" },
  { name: "Trivia", href: "/guide#trivia" },
  { name: "Travel Tips", href: "/guide#tips" },
];

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCollectionsOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tours?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Explore Niagara — Home"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link
              href="/tours"
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              All Tours
            </Link>

            {/* Collections Dropdown — click toggle with wider hover area */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                onMouseEnter={() => setCollectionsOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-dark hover:text-primary transition-colors py-2"
                aria-expanded={collectionsOpen}
                aria-haspopup="true"
              >
                Collections
                <ChevronDown className={`w-4 h-4 transition-transform ${collectionsOpen ? "rotate-180" : ""}`} />
              </button>
              {collectionsOpen && (
                <div
                  onMouseLeave={() => setCollectionsOpen(false)}
                  className="absolute top-full left-0 mt-0 pt-2 w-56"
                  role="menu"
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                    {collections.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setCollectionsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/guide"
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              Guide
            </Link>

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

            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-500 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
              aria-label="Search tours"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile: search + menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-500 hover:text-primary"
              aria-label="Search tours"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar (slides down) */}
        {searchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tours, activities, experiences..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm"
                aria-label="Search tours and experiences"
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div ref={mobileRef} className="md:hidden bg-white border-t border-gray-100" role="navigation" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/tours"
              className="block text-sm font-medium text-dark py-3"
              onClick={() => setMobileOpen(false)}
            >
              All Tours
            </Link>
            <div>
              <button
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                className="flex items-center justify-between text-sm font-medium text-dark py-3 w-full"
                aria-expanded={collectionsOpen}
              >
                Collections
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${collectionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {collectionsOpen && (
                <div className="pl-4 space-y-0.5 pb-2">
                  {collections.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-600 py-2.5 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setGuideOpen(!guideOpen)}
                className="flex items-center justify-between text-sm font-medium text-dark py-3 w-full"
                aria-expanded={guideOpen}
              >
                Niagara Guide
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${guideOpen ? "rotate-180" : ""}`}
                />
              </button>
              {guideOpen && (
                <div className="pl-4 space-y-0.5 pb-2">
                  <Link
                    href="/guide"
                    className="block text-sm text-primary font-medium py-2.5"
                    onClick={() => setMobileOpen(false)}
                  >
                    Complete Guide
                  </Link>
                  {guideSections.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-600 py-2.5 hover:text-primary"
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
              className="block text-sm font-medium text-dark py-3"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-dark py-3"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            {/* Contact info in mobile menu */}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a href="mailto:info@exploreniagara.com" className="block text-sm text-gray-500 py-2">
                info@exploreniagara.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
