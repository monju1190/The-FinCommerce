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
                <li><Link href="/magazine" className="hover:text-white transition-colors">Magazine</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News & Stories</Link></li>
                <li><Link href="/category" className="hover:text-white transition-colors">Sections</Link></li>
                <li><Link href="/advertise" className="hover:text-white transition-colors">Advertising</Link></li>
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
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Oct–Dec 2026 Issue</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/magazine#live-reader" className="hover:text-white transition-colors">Live Read PDF</Link></li>
                <li><a href="https://drive.google.com/uc?export=download&id=1Pzc1wr1ZvIEprpthOiMDiO_ovx__8ecC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Download Soft Copy</a></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Columns & Perspectives</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with Issue Link */}
        <div className="relative w-full border-t border-white/15 my-8">
          <div className="hidden sm:block absolute right-0 top-0 -translate-y-1/2 bg-[#121212] pl-6">
            <Link
              href="/magazine/october-december-2026"
              className="bg-white text-gray-950 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#8DC63F] hover:text-gray-950 transition-colors shadow-sm"
            >
              Read Oct–Dec Issue ↗
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-6 text-center lg:text-left">
          {/* Mission & Copyright */}
          <div className="max-w-md space-y-2">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Championing ESG integration across business and governance by delivering high-impact journalism and evidence-based policy analysis.
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} The Sustainability Voice. All rights reserved.
            </p>
          </div>

          {/* Legal Links & Developer Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/20"></div>

            {/* Sitelift Studio Credit - Refined publication badge */}
            <a
              href="https://www.siteliftstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website Developed by Sitelift Studio"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 transition-all text-xs shadow-2xs"
            >
              <span className="text-gray-400 font-normal">Developed by</span>
              <span className="text-white font-bold tracking-tight group-hover:text-[#8DC63F] transition-colors flex items-center gap-1">
                Sitelift Studio
                <svg
                  className="w-3 h-3 text-gray-400 group-hover:text-[#8DC63F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
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
