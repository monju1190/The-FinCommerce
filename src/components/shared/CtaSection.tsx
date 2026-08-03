import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function CtaSection() {
  return (
    <section className="w-full pt-16 pb-24" data-purpose="cta-and-magazine">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Top: Unlock Access Newsletter */}
        <div className="bg-primary-green rounded-[2rem] p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-white mb-2 font-display leading-tight tracking-tight">
            Unlock <span className="text-blue-400">Unlimited Access</span> to<br />the Truth
          </h2>
          <div className="flex justify-center mt-10">
            <div className="flex flex-col sm:flex-row w-full max-w-[500px] items-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 shadow-sm rounded-full px-6 py-4 w-full outline-none focus:border-blue-400 text-sm text-white placeholder-gray-300 transition-colors" 
              />
              <button className="bg-white text-primary-green px-8 py-4 rounded-full font-bold text-sm whitespace-nowrap hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-md">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: In the Magazine Promo */}
        <div className="mt-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 lg:pr-12">
            <span className="text-[#2a407c] text-[10px] font-bold uppercase tracking-widest mb-6 block">
              In The Magazine
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-[1.1] tracking-tight">
              A World Viewed From<br />Every Angle
            </h2>
            <p className="text-gray-600 text-[15px] mb-8 max-w-md leading-relaxed">
              Our journalists span the globe, reporting from the frontlines of innovation, conflict, and cultural transformation. Experience storytelling that doesn't just inform, but illuminates.
            </p>
            <Link href="/magazine" className="text-[#2a407c] font-bold text-sm flex items-center gap-2 hover:underline underline-offset-4 group">
              Browse the Archive <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                alt="Architecture of Silence" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14]/90 via-[#090b14]/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  Current Edition
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold font-display tracking-tight">
                  The Architecture of Silence
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
