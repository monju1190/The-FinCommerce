import React from "react";
import { FaTwitter, FaLinkedinIn, FaSpotify } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-green text-white pt-16 md:pt-20 pb-10 border-t-8 border-gray-900" data-purpose="site-footer">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-8">
        
          {/* Brand Column */}
          <div className="lg:pr-8">
            <h3 className="text-2xl font-extrabold tracking-widest uppercase mb-6 font-display">
              The FinCommerce
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Welcome to The FinCommerce, your go-to destination for the latest and most comprehensive business, technology, and economic news.
            </p>
            <div className="flex space-x-4">
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

          {/* Company Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about-us#team" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/category/business" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/magazine" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Resources</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link href="/category/technology" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link href="/category/security" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">Free resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contract templates</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="text-center text-white/50 text-xs">
          Copyright @2026 The FinCommerce - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
