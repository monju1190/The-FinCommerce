"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLinkedinIn, FaFacebookF, FaTimes, FaSearch, FaArrowRight } from "react-icons/fa";
import { Playfair_Display_SC } from "next/font/google";
import { magazineData } from "@/data/mockData";
import { HOME_SECTIONS } from "@/data/sectionsConfig";

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
      <div className="w-full text-center pt-3 pb-2 px-4 bg-[var(--color-ft-pink)] flex flex-col items-center justify-center relative overflow-hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="The Sustainability Voice"
            width={340}
            height={90}
            priority
            className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain select-none pb-1 inline-block opacity-90 mix-blend-multiply"
          />
        </Link>
        <div className="w-full max-w-4xl border-t border-primary-green mt-1 flex items-center justify-between pt-1.5 text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-gray-800 font-sans">
          <span>A Quarterly Magazine</span>
          <span>For Future-Proof Business</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full z-40 bg-primary-green text-white border-y border-black/20 shadow-md">
        <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-12 py-2 max-w-[1500px] mx-auto">
          {/* Mobile Left / Desktop Left Brand Accent */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-lg md:text-xl font-black uppercase tracking-wider whitespace-nowrap ${playfair.className}`}
            >
              <span className="text-[#8DC63F]">TSV</span>
            </Link>
          </div>

          {/* Center: Menu Links (Desktop) */}
          <div
            className="hidden md:flex items-center space-x-5 lg:space-x-7 text-xs font-bold tracking-widest uppercase"
            data-purpose="main-menu"
          >
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/magazine" className="hover:text-gray-300 transition-colors">
              Digital Edition
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsNewsDropdownOpen(true)}
              onMouseLeave={() => setIsNewsDropdownOpen(false)}
            >
              <Link href="/category" className="flex items-center hover:text-gray-300 transition-colors pb-2 pt-2">
                Sections ({HOME_SECTIONS.length})
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              {isNewsDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50 block">
                  <div className="bg-primary-green border border-white/20 shadow-2xl rounded-xl overflow-hidden p-3">
                    <div className="grid grid-cols-2 gap-x-3 text-left">
                      {HOME_SECTIONS.map((sec) => (
                        <Link
                          key={sec.slug}
                          href={`/category/${sec.slug}`}
                          onClick={() => setIsNewsDropdownOpen(false)}
                          className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between text-[11px] border-b border-white/10"
                        >
                          <span className="truncate pr-2">
                            <span className="text-[#8DC63F] font-mono mr-1.5">{sec.number}.</span>
                            {sec.title}
                          </span>
                          <span className="text-[10px] font-mono text-white/60 shrink-0">
                            {sec.articleSlugs.length}
                          </span>
                        </Link>
                      ))}
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

          {/* Right: Search & Socials & Mobile Hamburger */}
          <div className="flex items-center space-x-2.5">
            <button
              aria-label="Open Search"
              className="text-white hover:text-[#8DC63F] transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <FaSearch size={12} className="text-[#8DC63F]" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <div className="hidden lg:flex items-center space-x-3 pl-2 border-l border-white/20" data-purpose="social-links">
              <a
                href="https://www.facebook.com/sustainabilityvoice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={13} />
              </a>
              <a
                href="https://www.linkedin.com/company/the-sustainability-voice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={13} />
              </a>
            </div>

            <button
              className="md:hidden text-white/80 hover:text-white focus:outline-none p-1.5"
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
              <span>Search 34 Articles...</span>
            </button>

            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/magazine" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              Digital Edition
            </Link>
            <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              All Articles
            </Link>
            <Link href="/category" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">
              All {HOME_SECTIONS.length} Sections
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
