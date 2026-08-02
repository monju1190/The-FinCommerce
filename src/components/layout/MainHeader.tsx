"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaSpotify } from "react-icons/fa";

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          // if scroll down hide the navbar
          setShow(false); 
        } else {
          // if scroll up show the navbar
          setShow(true);  
        }
        setLastScrollY(window.scrollY); 
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } bg-primary-green text-white shadow-lg`}
      >
        <div className="w-full flex items-center justify-between px-4 md:px-12 py-4 md:py-6 max-w-[1400px] mx-auto">
          
          {/* Mobile Left: Brand Icon (Hidden on Desktop) */}
          <div className="md:hidden flex-1">
            <Link href="/" className="text-xl font-display font-black uppercase tracking-wider whitespace-nowrap">
              The FinCommerce
            </Link>
          </div>

          {/* Desktop Left: Search Icon */}
          <div className="hidden md:flex flex-1" data-purpose="search-container">
            <button aria-label="Search" className="text-white/80 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
          
          {/* Center: Menu Links (Desktop) */}
          <div className="flex-none hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold tracking-widest uppercase" data-purpose="main-menu">
            <Link href="/" className="hover:underline underline-offset-4 hover:text-primary-light transition-colors">Home</Link>
            <Link href="/magazine" className="hover:underline underline-offset-4 hover:text-primary-light transition-colors">Magazine</Link>
            
            <div className="relative group">
              <Link href="/news" className="flex items-center hover:underline underline-offset-4 hover:text-primary-light transition-colors pb-2 pt-2">
                News
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              {/* Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-primary-green border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-xl overflow-hidden">
                <div className="py-2 flex flex-col text-left">
                  <Link href="/category/business" className="px-4 py-2 hover:bg-primary-light transition-colors">Business</Link>
                  <Link href="/category/technology" className="px-4 py-2 hover:bg-primary-light transition-colors">Technology</Link>
                  <Link href="/category/security" className="px-4 py-2 hover:bg-primary-light transition-colors">Security</Link>
                  <Link href="/category/culture" className="px-4 py-2 hover:bg-primary-light transition-colors">Culture</Link>
                </div>
              </div>
            </div>
            
            <Link href="/about-us" className="hover:underline underline-offset-4 hover:text-primary-light transition-colors">About Us</Link>
            <Link href="/contact" className="hover:underline underline-offset-4 hover:text-primary-light transition-colors">Contact</Link>
          </div>

          {/* Mobile Right: Search & Hamburger */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button aria-label="Search" className="md:hidden text-white/80 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex justify-end items-center space-x-4" data-purpose="social-links">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Spotify">
                <FaSpotify size={16} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
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

      {/* Spacer to push content below the fixed header */}
      <div className="pt-16 md:pt-24"></div>

      {/* Desktop Masthead (Hidden on mobile) */}
      <header className="hidden md:block w-full text-center py-6 md:py-16 px-4">
        <h1 className="font-[900] tracking-tight leading-[0.9] text-[9.5vw] sm:text-[9vw] md:text-[8vw] lg:text-[7rem] xl:text-[8.5rem] uppercase select-none text-gray-900 break-words font-display">
          The FinCommerce
        </h1>
      </header>
    </>
  );
}
