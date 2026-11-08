import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function CtaSection() {
  return (
    <section className="w-full pt-16 pb-24" data-purpose="cta-and-magazine">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Top: Unlock Access Newsletter */}
        <div className="bg-primary-green rounded-[2rem] p-8 sm:p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-bold text-white mb-2 font-display leading-tight tracking-tight">
            Unlock <span className="text-[#8DC63F]">Unlimited Access</span> to<br className="hidden sm:block" /> Sustainable Business Insights
          </h2>
          <div className="flex justify-center mt-8 sm:mt-10">
            <div className="flex flex-col sm:flex-row w-full max-w-[500px] items-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 shadow-sm rounded-full px-6 py-4 w-full outline-none focus:border-[#8DC63F] text-sm text-white placeholder-gray-300 transition-colors" 
              />
              <button className="bg-white text-primary-green px-8 py-4 rounded-full font-bold text-sm whitespace-nowrap hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-md cursor-pointer">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: In the Magazine Promo */}
        <div className="mt-16 sm:mt-24 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <div className="flex-1 lg:pr-12">
            <span className="text-primary-green text-[10px] font-bold uppercase tracking-widest mb-4 sm:mb-6 block">
              In The Magazine • Issue 1, Volume 1
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 font-display leading-[1.1] tracking-tight">
              First Bangladeshi Sustainable Business Magazine
            </h2>
            <p className="text-gray-600 text-[15px] mb-8 max-w-md leading-relaxed">
              Our contributors—from globally renowned scholars and industry veterans to emerging practitioners—report from the frontlines of ESG, sustainable finance, urban planning, and ecological stewardship.
            </p>
            <Link href="/magazine/october-december-2026" className="text-primary-green font-bold text-sm flex items-center gap-2 hover:underline underline-offset-4 group">
              Read the October–December 2026 Issue <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex-1 w-full">
            <Link href="/news/waterlogging-in-dhaka-integrated-management" className="block relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/magazine/oct-dec/photos/waterlogging-2.jpg" 
                alt="Waterlogging in Dhaka: Integrated Management Required" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14]/90 via-[#090b14]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <span className="text-[#8DC63F] text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  October–December 2026 • Cover Story
                </span>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight">
                  Waterlogging in Dhaka: Integrated Management Required
                </h3>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
