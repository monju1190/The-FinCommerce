import React from "react";
import { FaTwitter, FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-12 md:mt-24">
      {/* Floating Newsletter Section */}
      <div className="container mx-auto px-4 md:px-12 relative z-20 -mb-24 md:-mb-32">
        <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-gray-900 mb-2">
              Stay in the loop
            </h2>
            <p className="text-gray-500 text-sm font-medium">Subscribe to our newsletter for the latest updates.</p>
          </div>
          <div className="w-full lg:w-auto">
            <div className="flex relative">
              <input
                className="bg-gray-50 border border-gray-200 rounded-full py-4 pl-6 pr-16 w-full lg:w-[400px] text-gray-900 focus:ring-2 focus:ring-primary-green outline-none text-sm placeholder-gray-400"
                placeholder="Your email address"
                type="email"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-green text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors shadow-sm">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-primary-green text-white pt-36 md:pt-48 relative overflow-hidden" data-purpose="site-footer">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Middle Row: Links & Brand */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h3 className="text-2xl font-extrabold tracking-widest uppercase mb-6 font-display">
              The FinCommerce
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
              Welcome to The FinCommerce, your go-to destination for the latest and most comprehensive business, technology, and economic news.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-primary-green transition-all" aria-label="Twitter">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-primary-green transition-all" aria-label="Spotify">
                <FaSpotify size={14} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-primary-green transition-all" aria-label="LinkedIn">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Category Links */}
            <div>
              <h4 className="text-white font-medium mb-6">Magazine</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><Link href="/category/business" className="hover:text-white transition-colors">Business</Link></li>
                <li><Link href="/category/technology" className="hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="/category/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="/category/culture" className="hover:text-white transition-colors">Culture</Link></li>
              </ul>
            </div>
            {/* About Links */}
            <div>
              <h4 className="text-white font-medium mb-6">About Us</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><Link href="/about-us" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/about-us#team" className="hover:text-white transition-colors">The Team</Link></li>
                <li><Link href="/about-us#mission" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link href="/about-us#partners" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            {/* Support Links */}
            <div>
              <h4 className="text-white font-medium mb-6">Support</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact#faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/magazine" className="hover:text-white transition-colors">Subscriptions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="text-center text-white/50 text-xs pb-24 md:pb-32 relative z-10">
          Copyright @2026 The FinCommerce - All Rights Reserved.
        </div>
      </div>

      {/* Background Giant Text */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap opacity-5 select-none pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black uppercase tracking-tighter leading-none font-display">
          FINCOMMERCE
        </span>
      </div>
      </footer>
    </div>
  );
}
