"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";

export default function CtaSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };
  return (
    <div className="w-full py-12 md:py-16 space-y-16 md:space-y-24" data-purpose="cta-and-magazine">
      
      {/* 1. Newsletter Subscription Card */}
      <section className="bg-primary-green rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xl border border-black/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#8DC63F] text-xs font-black uppercase tracking-widest block mb-3">
            Stay Informed With The Sustainability Voice
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-display leading-tight tracking-tight">
            Unlock <span className="text-[#8DC63F]">Unlimited Access</span> to Sustainable Business Insights
          </h2>
          <p className="text-gray-200 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Get quarterly executive briefings, ESG market intelligence, and policy dispatches delivered straight to your inbox.
          </p>
          <div className="flex justify-center">
            {subscribed ? (
              <div className="bg-white/10 border border-[#8DC63F] text-[#8DC63F] px-8 py-4 rounded-full font-bold text-sm">
                ✓ Thank you for subscribing to The Sustainability Voice!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row w-full max-w-lg items-center gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address"
                  className="bg-white/10 border border-white/20 shadow-inner rounded-full px-6 py-3.5 w-full outline-none focus:border-[#8DC63F] text-sm text-white placeholder-gray-300 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-primary-green hover:bg-[#8DC63F] hover:text-gray-900 px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap transition-colors w-full sm:w-auto shadow-md cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. In The Magazine Spotlight Card */}
      <section className="bg-[#f8ebe3] border border-[#dfcfc2] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#16a34a] text-xs font-black uppercase tracking-widest mb-3 block">
              In The Magazine • Issue 1, Volume 1
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 font-display leading-[1.15] tracking-tight">
              First Bangladeshi Sustainable Business Magazine
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed font-display">
              Our contributors—from globally renowned scholars and industry veterans to emerging practitioners—report from the frontlines of ESG, sustainable finance, urban planning, and ecological stewardship.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/magazine/october-december-2026"
                className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-light text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors shadow-md group"
              >
                <FaBookOpen size={14} />
                <span>Read the October–December 2026 Issue</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" size={12} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <Link
              href="/news/waterlogging-in-dhaka-integrated-management"
              className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group border border-[#dfcfc2] bg-gray-900"
            >
              <img
                src="/magazine/oct-dec/photos/waterlogging-2.jpg"
                alt="Waterlogging in Dhaka: Integrated Management Required"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14]/90 via-[#090b14]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-[#8DC63F] text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-2 inline-block">
                  Cover Story
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold font-display tracking-tight leading-snug">
                  Waterlogging in Dhaka: Integrated Management Required
                </h3>
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
