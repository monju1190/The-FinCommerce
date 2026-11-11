import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#06150d] text-white pt-16 md:pt-20 pb-0 overflow-hidden relative font-sans border-t-2 border-black" data-purpose="site-footer">
      <div className="master-container relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10 lg:gap-12">

          {/* Top Left: Socials & Contact */}
          <div className="flex flex-col space-y-5 max-w-sm">
            <div className="flex space-x-3 mb-1">
              <a href="https://www.facebook.com/sustainabilityvoice" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-none border border-white/20 hover:bg-white hover:text-black transition-colors" aria-label="Facebook">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.linkedin.com/company/the-sustainability-voice/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-none border border-white/20 hover:bg-white hover:text-black transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={14} />
              </a>
            </div>

            <div className="text-gray-400 text-xs sm:text-sm leading-relaxed space-y-1">
              <p>Shop-18, Level-5, Azimpur Aadhunik Nagar Market</p>
              <p>Azimpur, Newmarket, Dhaka-1205, Bangladesh</p>
            </div>

            <div className="text-gray-400 text-xs sm:text-sm space-y-1">
              <p>Editorial Desk: <span className="text-white">editor@sustainabilityvoice.com</span></p>
              <p>Inquiries: <span className="text-white">+880 1713 039784</span></p>
            </div>
          </div>

          {/* Top Right: 3 Columns of Links (Responsive Grid for Laptops) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 xl:gap-16 w-full lg:w-auto">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4 text-[#D92B2B]">
                Publication
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-xs sm:text-sm font-serif">
                <li><Link href="/magazine" className="hover:text-white transition-colors">Digital Edition</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">All Articles</Link></li>
                <li><Link href="/editorial-board" className="hover:text-white transition-colors">Editorial Board</Link></li>
                <li><Link href="/magazine#table-of-contents" className="hover:text-white transition-colors">Table of Contents</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4 text-[#D92B2B]">
                Company
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-xs sm:text-sm font-serif">
                <li><Link href="/about-us" className="hover:text-white transition-colors">About TSV</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Press</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Dispatch</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4 text-[#D92B2B]">
                Volume 01
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-xs sm:text-sm font-serif">
                <li><span className="text-white font-mono text-xs">Quarterly Release</span></li>
                <li><span className="text-gray-400 text-xs">October–December 2026</span></li>
                <li><span className="text-gray-500 text-[11px] font-mono">Reg. No. 48/2026</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full border-t border-white/15 my-6"></div>

        {/* Bottom Section: Perfectly Aligned on Mobile, Laptops and Monitors */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8 text-center md:text-left text-xs font-mono text-gray-400">
          <div>
            <p>© {new Date().getFullYear()} The Sustainability Voice. All rights reserved.</p>
          </div>

          {/* Legal Links & Developer Credit */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Privacy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span>•</span>

            {/* Sitelift Studio Credit Badge */}
            <a
              href="https://www.siteliftstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website Developed by Sitelift Studio"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all text-[11px] text-gray-300 hover:text-white"
            >
              <span>Developed by</span>
              <span className="text-white font-bold tracking-tight">Sitelift Studio ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Giant Footer Watermark */}
      <div className="w-full text-center flex justify-center select-none pointer-events-none relative z-0">
        <span className="text-[11vw] font-bold tracking-tight leading-[0.75] text-[#0d2618] block translate-y-3 whitespace-nowrap uppercase font-display">
          the sustainability voice
        </span>
      </div>
    </footer>
  );
}
