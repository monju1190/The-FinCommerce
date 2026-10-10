import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-0 overflow-hidden relative font-sans" data-purpose="site-footer">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12 lg:gap-0">

          {/* Top Left: Socials & Contact */}
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-3 mb-2">
              <a href="https://www.facebook.com/sustainabilityvoice" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.linkedin.com/company/the-sustainability-voice/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>
            </div>

            <div className="text-gray-300 text-[15px] leading-relaxed">
              <p>Dokan#18, Level-5, Azimpur Aadhunik</p>
              <p>Nagar Market, Azimpur, Newmarket</p>
              <p>Dhaka-1205</p>
            </div>

            <div className="text-gray-300 text-[15px] space-y-2">
              <p>editor@sustainabilityvoice.com</p>
              <p>01713039784</p>
            </div>
          </div>

          {/* Top Right: 3 Columns of Links */}
          <div className="grid grid-cols-3 gap-2 sm:gap-12 md:gap-24 w-full lg:w-auto">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Menu</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/advertise" className="hover:text-white transition-colors">Advertising</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/editorial-board" className="hover:text-white transition-colors">Editorial Board</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with overlapping button */}
        <div className="relative w-full border-t border-white/20 mb-8">
          <div className="absolute right-0 top-0 -translate-y-1/2 bg-[#121212] pl-6">
            <Link href="/get-started" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 pb-4">
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Championing ESG integration across business and governance by delivering high-impact journalism and evidence-based policy analysis.
          </p>

          <a href="https://www.siteliftstudio.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors">Developed By</span>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-white font-bold tracking-wide flex items-center gap-1.5">
              Sitelift Studio
              <svg className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>

          <div className="flex flex-wrap gap-8 text-white text-xs font-semibold uppercase tracking-wider">
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Giant Footer Text */}
      <div className="w-full text-center flex justify-center select-none pointer-events-none relative z-0">
        <span className="text-[12vw] font-bold tracking-tight leading-[0.75] text-[#222222] block translate-y-4 whitespace-nowrap">
          sustainability voice.
        </span>
      </div>
    </footer>
  );
}
