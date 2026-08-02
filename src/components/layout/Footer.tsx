import React from "react";
import { FaTwitter, FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Floating CTA Section straddling 50/50 */}
      <div className="relative z-20 mt-12 md:mt-24">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-green"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="bg-[#1a1a1a] rounded-[2rem] p-8 md:p-14 shadow-2xl border border-zinc-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
            
            {/* Background Giant Text */}
            <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap opacity-5 select-none pointer-events-none">
              <span className="text-[20vw] md:text-[15vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-none font-display text-white">
                FINCOMMERCE
              </span>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-2">
                Stay in the loop
              </h2>
              <p className="text-zinc-400 text-sm font-medium">Subscribe to our newsletter for the latest updates.</p>
            </div>
            <div className="w-full lg:w-auto relative z-10">
              <div className="flex relative">
                <input
                  className="bg-zinc-800/80 border border-zinc-700/50 rounded-full py-4 pl-6 pr-32 w-full lg:w-[400px] text-white focus:ring-2 focus:ring-primary-green outline-none text-sm placeholder-zinc-500"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-green text-white px-6 h-10 rounded-full font-bold flex items-center justify-center hover:bg-primary-light transition-colors shadow-sm text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-primary-green text-white pt-16 md:pt-24 pb-10 relative overflow-hidden" data-purpose="site-footer">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-12">
          
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
          <div className="text-center text-white/50 text-xs relative z-10">
            Copyright @2026 The FinCommerce - All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
