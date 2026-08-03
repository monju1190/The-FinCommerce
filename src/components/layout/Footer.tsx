import React from "react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
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
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors" aria-label="X">
                <FaXTwitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors" aria-label="YouTube">
                <FaYoutube size={16} />
              </a>
            </div>
            
            <div className="text-gray-300 text-[15px] leading-relaxed">
              <p>9 Pearse Street. Kinsale</p>
              <p>York, China</p>
            </div>
            
            <div className="text-gray-300 text-[15px] space-y-2">
              <p>info@fincommerce.com</p>
              <p>(+12) 808 130 1190</p>
            </div>
          </div>

          {/* Top Right: 3 Columns of Links */}
          <div className="grid grid-cols-3 gap-2 sm:gap-12 md:gap-24 w-full lg:w-auto">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Menu</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
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
            From branding to digital marketing. Our expert team is here to elevate your brand and connect you with your audience
          </p>
          
          <div className="flex flex-wrap gap-8 text-white text-xs font-semibold uppercase tracking-wider">
            <Link href="/terms-and-conditions" className="hover:text-gray-300 transition-colors">
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
        <span className="text-[22vw] font-bold tracking-tight leading-[0.75] text-[#222222] block translate-y-4">
          fincommerce.
        </span>
      </div>
    </footer>
  );
}
