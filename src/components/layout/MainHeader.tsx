import React from "react";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="w-full">
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        {/* Left: Search Icon */}
        <div className="flex-1" data-purpose="search-container">
          <button aria-label="Search" className="text-gray-800 hover:text-black transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        
        {/* Center: Menu Links */}
        <div className="flex-none hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold tracking-widest uppercase" data-purpose="main-menu">
          <Link href="/" className="hover:underline underline-offset-4 hover:text-orange-accent transition-colors">Home</Link>
          <Link href="/magazine" className="hover:underline underline-offset-4 hover:text-orange-accent transition-colors">Magazine</Link>
          
          <div className="relative group">
            <Link href="/news" className="flex items-center hover:underline underline-offset-4 hover:text-orange-accent transition-colors pb-2 pt-2">
              News
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            {/* Dropdown */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-xl overflow-hidden">
              <div className="py-2 flex flex-col text-left">
                <Link href="/category/business" className="px-4 py-2 hover:bg-gray-50 hover:text-orange-accent transition-colors">Business</Link>
                <Link href="/category/technology" className="px-4 py-2 hover:bg-gray-50 hover:text-orange-accent transition-colors">Technology</Link>
                <Link href="/category/security" className="px-4 py-2 hover:bg-gray-50 hover:text-orange-accent transition-colors">Security</Link>
                <Link href="/category/culture" className="px-4 py-2 hover:bg-gray-50 hover:text-orange-accent transition-colors">Culture</Link>
              </div>
            </div>
          </div>
          
          <Link href="/about-us" className="hover:underline underline-offset-4 hover:text-orange-accent transition-colors">About Us</Link>
          <Link href="/contact" className="hover:underline underline-offset-4 hover:text-orange-accent transition-colors">Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex-1 flex justify-end items-center space-x-4" data-purpose="social-links">
          <a href="#" className="text-gray-800 hover:text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.637.135v3.058l-1.811.001c-1.419 0-1.694.675-1.694 1.663v2.19h3.387l-.441 3.429h-2.946v8.784h6.038c.733 0 1.325-.593 1.325-1.325v-21.351c0-.732-.592-1.325-1.325-1.325z"></path></svg>
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          </a>
        </div>
      </nav>

      {/* BEGIN: Masthead */}
      <header className="w-full text-center py-10 md:py-20 px-4">
        <h1 className="font-[900] tracking-tight leading-[0.9] text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] xl:text-[8.5rem] uppercase select-none text-gray-900">
          The FinCommerce
        </h1>
      </header>
      {/* END: Masthead */}
    </div>
  );
}
