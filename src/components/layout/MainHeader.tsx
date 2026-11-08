"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLinkedinIn, FaFacebookF, FaTimes, FaSearch, FaArrowRight } from "react-icons/fa";
import { Playfair_Display_SC } from "next/font/google";
import { magazineData } from "@/data/mockData";

const playfair = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allArticles = useMemo(() => {
    return magazineData.flatMap((section) => section.articles);
  }, []);

  // Filter articles for live search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allArticles.filter((art) => {
      return (
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, allArticles]);

  // Focus input when search modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/news?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleSelectArticle = (slug: string) => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setSearchQuery("");
    router.push(`/news/${slug}`);
  };

  return (
    <>
      {/* Masthead */}
      <div className="w-full text-center pt-6 pb-4 px-4 bg-[var(--color-ft-pink)] flex flex-col items-center justify-center relative overflow-hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="The Sustainability Voice"
            width={400}
            height={128}
            priority
            className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain select-none pb-2 inline-block opacity-90 mix-blend-multiply"
          />
        </Link>
        <div className="w-full max-w-4xl border-t border-[#dfcfc2] mt-2 flex items-center justify-between pt-2 text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-gray-700 font-sans">
          <span>A Quarterly Magazine</span>
          <span>October–December 2026 • Issue 1, Vol. 1</span>
          <span>For Future-Proof Business</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full z-40 bg-primary-green text-white border-y border-black/20 shadow-md">
        <div className="w-full flex items-center justify-between px-4 md:px-12 py-3.5 max-w-[1400px] mx-auto">
          {/* Mobile Left: Brand Icon */}
          <div className="md:hidden flex-1">
            <Link
              href="/"
              className={`text-xl font-black uppercase tracking-wider whitespace-nowrap ${playfair.className}`}
            >
              <span className="text-[#8DC63F]">TSV</span>
            </Link>
          </div>

          {/* Desktop Left: Search Button */}
          <div className="hidden md:flex flex-1 items-center" data-purpose="search-container">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="text-white/80 hover:text-white transition-all flex items-center space-x-2 text-xs font-bold tracking-widest uppercase bg-black/20 hover:bg-black/30 border border-white/20 rounded-full px-4 py-2"
            >
              <FaSearch size={12} className="text-[#8DC63F]" />
              <span>Search 33 Articles...</span>
            </button>
          </div>

          {/* Center: Menu Links (Desktop) */}
          <div
            className="flex-none hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold tracking-widest uppercase"
            data-purpose="main-menu"
          >
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/magazine" className="hover:text-gray-300 transition-colors">
              Magazine (PDF)
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsNewsDropdownOpen(true)}
              onMouseLeave={() => setIsNewsDropdownOpen(false)}
            >
              <Link href="/news" className="flex items-center hover:text-gray-300 transition-colors pb-2 pt-2">
                Sections
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              {isNewsDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 z-50 block">
                  <div className="bg-primary-green border border-white/20 shadow-2xl rounded-xl overflow-hidden">
                    <div className="py-2 flex flex-col text-left">
                      <Link href="/category/industry-practices" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Industry Practices
                      </Link>
                      <Link href="/category/sustainable-finance" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Sustainable Finance
                      </Link>
                      <Link href="/category/playbook" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Playbook & Standards
                      </Link>
                      <Link href="/category/sustainable-cities" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Sustainable Cities
                      </Link>
                      <Link href="/category/agriculture" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Agriculture
                      </Link>
                      <Link href="/category/technology" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Technology
                      </Link>
                      <Link href="/category/home-and-the-world" className="px-4 py-2.5 hover:bg-white/10 border-b border-white/10 transition-colors">
                        Home & The World
                      </Link>
                      <Link href="/category/wildlife" className="px-4 py-2.5 hover:bg-white/10 transition-colors">
                        Wildlife & Health
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about-us" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/editorial-board" className="hover:text-gray-300 transition-colors">
              Editorial Board
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Right: Search & Hamburger */}
          <div className="flex-1 flex justify-end items-center space-x-3">
            <button
              aria-label="Open Search"
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <FaSearch size={16} />
            </button>

            <div className="hidden md:flex justify-end items-center space-x-4 ml-2" data-purpose="social-links">
              <a
                href="https://www.facebook.com/sustainabilityvoice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/the-sustainability-voice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>

            <button
              className="md:hidden text-white/80 hover:text-white focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="w-full bg-primary-green border-t border-white/10 shadow-2xl p-6 flex flex-col space-y-5 md:hidden text-center text-sm font-bold tracking-widest uppercase">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center justify-center gap-2 bg-black/25 text-white border border-white/20 rounded-xl px-4 py-3 text-xs tracking-wider"
            >
              <FaSearch size={12} className="text-[#8DC63F]" />
              <span>Search 33 Articles...</span>
            </button>

            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/magazine" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Magazine (PDF)
            </Link>
            <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              All Articles
            </Link>
            <Link href="/category" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Sections
            </Link>
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/editorial-board" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Editorial Board
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* FULL INTERACTIVE SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div
            className="w-full max-w-3xl bg-[#faede5] rounded-3xl shadow-2xl border border-[#dfcfc2] overflow-hidden flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="p-4 sm:p-6 border-b border-[#dfcfc2] flex items-center gap-3 bg-[#f5e4da]">
              <FaSearch className="text-primary-green shrink-0 ml-2" size={18} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by article title, author, keyword, or section..."
                className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-base sm:text-lg outline-none font-display"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <FaTimes size={16} />
                </button>
              )}
              <button
                type="submit"
                className="hidden sm:inline-flex bg-primary-green text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-primary-light transition-colors shrink-0"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Close search"
              >
                <FaTimes size={18} />
              </button>
            </form>

            {/* Live Results / Quick Suggestions */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 divide-y divide-[#dfcfc2]">
              {searchQuery.trim() === "" ? (
                <div className="py-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-3">
                    Suggested Topics & Articles
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Waterlogging in Dhaka", "Buriganga", "Carbon Corridor", "Kingfishers", "LEED", "Epyllion", "UN SDG", "TMSS"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setSearchQuery(term)}
                        className="bg-[#fff8f3] hover:bg-white text-gray-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#dfcfc2] transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-3">
                    Recent Articles
                  </span>
                  <div className="space-y-3">
                    {allArticles.slice(0, 4).map((art) => (
                      <div
                        key={art.slug}
                        onClick={() => handleSelectArticle(art.slug)}
                        className="p-3 bg-[#fff8f3] hover:bg-white rounded-xl border border-[#dfcfc2] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <span className="text-[10px] font-black uppercase text-[#16a34a] tracking-wider block">
                            {art.category}
                          </span>
                          <h4 className="font-bold text-sm text-gray-900 group-hover:text-primary-green transition-colors font-display line-clamp-1">
                            {art.title}
                          </h4>
                          <span className="text-xs text-gray-500">By {art.author}</span>
                        </div>
                        <FaArrowRight size={12} className="text-gray-400 group-hover:text-primary-green transition-colors shrink-0 ml-4" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="py-2 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2">
                    <span>{searchResults.length} articles found</span>
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="text-primary-green hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>View all on News page</span>
                      <FaArrowRight size={10} />
                    </button>
                  </div>
                  {searchResults.map((art) => (
                    <div
                      key={art.slug}
                      onClick={() => handleSelectArticle(art.slug)}
                      className="p-3.5 bg-[#fff8f3] hover:bg-white rounded-xl border border-[#dfcfc2] cursor-pointer flex items-center gap-4 group transition-all"
                    >
                      <div className="w-16 h-14 shrink-0 rounded-lg overflow-hidden bg-gray-900 border border-[#dfcfc2]">
                        <img
                          src={art.imageUrl}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-black uppercase text-[#16a34a] tracking-wider block">
                          {art.category}
                        </span>
                        <h4 className="font-bold text-sm text-gray-900 group-hover:text-primary-green transition-colors font-display truncate">
                          {art.title}
                        </h4>
                        <span className="text-xs text-gray-500 truncate block">By {art.author}</span>
                      </div>
                      <FaArrowRight size={12} className="text-gray-400 group-hover:text-primary-green transition-colors shrink-0" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-600 font-display text-lg mb-2">
                    No articles found matching &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-xs text-gray-500">
                    Try searching for &quot;Dhaka&quot;, &quot;Buriganga&quot;, &quot;Solar&quot;, &quot;Finance&quot;, or browse all sections.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 bg-[#f5e4da] border-t border-[#dfcfc2] flex items-center justify-between text-[11px] text-gray-600 font-sans">
              <span>Press <kbd className="bg-white/80 border border-gray-300 rounded px-1.5 py-0.5">Esc</kbd> to close</span>
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  router.push("/news");
                }}
                className="text-primary-green font-bold hover:underline"
              >
                Browse All 33 Articles →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
