"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTwitter, FaLinkedinIn, FaSpotify, FaFacebookF } from "react-icons/fa";
import { Playfair_Display_SC } from "next/font/google";

const playfair = Playfair_Display_SC({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Masthead (at the very top, before header) */}
      <div className="w-full text-center pt-6 pb-4 px-4 bg-[var(--color-ft-pink)] flex flex-col items-center justify-center relative overflow-hidden">
        <img src="/logo.png" alt="The Sustainability Voice" className="h-16 sm:h-20 md:h-28 lg:h-32 object-contain select-none pb-2 inline-block opacity-90 mix-blend-multiply" />
        <div className="w-full max-w-4xl border-t border-gray-400 mt-2 flex items-center justify-between pt-2 text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-gray-600 font-sans">
          <span>A Quarterly Magazine</span>
          <span>On Sustainability & ESG</span>
          <span>For Future-Proof Business</span>
        </div>
      </div>

      {/* Navbar (sticky below the masthead) */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-primary-green text-white border-y border-black/20 shadow-md">
        <div className="w-full flex items-center justify-between px-4 md:px-12 py-4 max-w-[1400px] mx-auto">
          
          {/* Mobile Left: Brand Icon (Hidden on Desktop) */}
          <div className="md:hidden flex-1">
            <Link href="/" className={`text-xl font-black uppercase tracking-wider whitespace-nowrap ${playfair.className}`}>
              <span className="text-[#8DC63F]">TSV</span>
            </Link>
          </div>

          {/* Desktop Left: Search Icon */}
          <div className="hidden md:flex flex-1 items-center" data-purpose="search-container">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center w-full max-w-[200px] relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..." 
                  className="w-full bg-black/20 text-white placeholder-white/50 border border-white/20 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/50 transition-all font-sans lowercase tracking-normal"
                  autoFocus
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                />
                <button type="submit" className="absolute right-3 text-white/80 hover:text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            ) : (
              <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span>Search</span>
              </button>
            )}
          </div>
          
          {/* Center: Menu Links (Desktop) */}
          <div className="flex-none hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold tracking-widest uppercase" data-purpose="main-menu">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/magazine" className="hover:text-gray-300 transition-colors">Magazine</Link>
            
            <div className="relative group">
              <Link href="/news" className="flex items-center hover:text-gray-300 transition-colors pb-2 pt-2">
                News
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              {/* Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-2 w-48 z-50">
                <div className="bg-primary-green border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <div className="py-2 flex flex-col text-left">
                  <Link href="/category/esg" className="px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors">ESG & Responsible Business</Link>
                  <Link href="/category/climate" className="px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors">Climate Action</Link>
                  <Link href="/category/finance" className="px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors">Green Finance</Link>
                  <Link href="/category/society" className="px-4 py-3 hover:bg-white/10 transition-colors">Society & Culture</Link>
                </div>
              </div>
            </div>
            </div>
            
            <Link href="/about-us" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="/editorial-board" className="hover:text-gray-300 transition-colors">Editorial Board</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          {/* Mobile Right: Search & Hamburger */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button aria-label="Search" className="md:hidden text-white/80 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex justify-end items-center space-x-5" data-purpose="social-links">
              <a href="https://www.facebook.com/sustainabilityvoice" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.linkedin.com/company/the-sustainability-voice/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={14} />
              </a>
            </div>

            <button 
              className="md:hidden text-white/80 hover:text-white focus:outline-none ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <div className="w-full bg-primary-green border-t border-white/10 shadow-lg p-6 flex flex-col space-y-6 md:hidden text-center text-sm font-bold tracking-widest uppercase">
            <form onSubmit={handleSearch} className="flex items-center w-full relative mb-2">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..." 
                className="w-full bg-black/20 text-white placeholder-white/50 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/50 transition-all font-sans lowercase tracking-normal"
              />
              <button type="submit" className="absolute right-4 text-white/80 hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/magazine" onClick={() => setIsMobileMenuOpen(false)}>Magazine</Link>
            <Link href="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/editorial-board" onClick={() => setIsMobileMenuOpen(false)}>Editorial Board</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
}
