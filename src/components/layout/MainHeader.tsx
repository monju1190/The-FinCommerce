"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaSpotify } from "react-icons/fa";

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Masthead (at the very top, before header) */}
      <div className="w-full text-center pt-6 pb-4 px-4 bg-[var(--color-ft-pink)] flex flex-col items-center justify-center relative overflow-hidden">
        <h1 className="font-black tracking-tighter leading-[0.8] text-[8.5vw] sm:text-[7vw] md:text-[6vw] xl:text-[100px] uppercase select-none text-gray-900 font-display pb-2 inline-block opacity-90 mix-blend-multiply whitespace-nowrap">
          The FinCommerce
        </h1>
        <div className="w-full max-w-4xl border-t border-gray-400 mt-2 flex items-center justify-between pt-2 text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-gray-600 font-sans">
          <span>Global Edition</span>
          <span>Since 2026</span>
          <span>The Pulse of Enterprise</span>
        </div>
      </div>

      {/* Navbar (sticky below the masthead) */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-primary-green text-white border-y border-black/20 shadow-md">
        <div className="w-full flex items-center justify-between px-4 md:px-12 py-4 max-w-[1400px] mx-auto">
          
          {/* Mobile Left: Brand Icon (Hidden on Desktop) */}
          <div className="md:hidden flex-1">
            <Link href="/" className="text-xl font-display font-black uppercase tracking-wider whitespace-nowrap">
              TFC
            </Link>
          </div>

          {/* Desktop Left: Search Icon */}
          <div className="hidden md:flex flex-1" data-purpose="search-container">
            <button aria-label="Search" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span>Search</span>
            </button>
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
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-primary-green border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2 flex flex-col text-left">
                  <Link href="/category/business" className="px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors">Business</Link>
                  <Link href="/category/technology" className="px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors">Technology</Link>
                  <Link href="/category/security" className="px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors">Security</Link>
                  <Link href="/category/culture" className="px-4 py-3 hover:bg-white/10 transition-colors">Culture</Link>
                </div>
              </div>
            </div>
            
            <Link href="/about-us" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          {/* Mobile Right: Search & Hamburger */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button aria-label="Search" className="md:hidden text-white/80 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex justify-end items-center space-x-5" data-purpose="social-links">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Spotify">
                <FaSpotify size={14} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/magazine" onClick={() => setIsMobileMenuOpen(false)}>Magazine</Link>
            <Link href="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
}
