"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

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
    <section className="py-14 sm:py-20 border-b border-black/15" data-purpose="newsletter-broadside">
      <div className="border border-black/15 bg-white p-8 sm:p-12 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] font-bold">
              <span>EDITORIAL DISPATCH</span>
              <span>•</span>
              <span>QUARTERLY INTELLIGENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-[#111111] leading-tight">
              Direct Briefings on Sustainable Industry &amp; Policy
            </h2>

            <p className="text-base sm:text-lg font-serif text-gray-700 measure-readable leading-relaxed">
              Receive quarterly executive analysis, national ESG policy updates, and decarbonisation finance reports delivered straight from the editorial desk.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="border border-[#1a4d2e] bg-[#F7F5F0] p-6 text-center text-xs font-mono uppercase tracking-wider text-[#1a4d2e] font-bold">
                ✓ Your address is registered for the Volume 01 dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row border border-black/20 focus-within:border-black transition-colors bg-[#F7F5F0]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="p-3.5 sm:p-4 text-xs font-mono uppercase tracking-wider text-[#111111] bg-transparent outline-none flex-1 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-[#111111] text-[#F7F5F0] hover:bg-[#D92B2B] px-6 py-3.5 text-xs font-mono uppercase tracking-wider font-bold transition-colors shrink-0 cursor-pointer"
                  >
                    Subscribe →
                  </button>
                </div>
                <p className="text-[10px] font-mono uppercase text-gray-500">
                  Zero spam. Published quarterly in alignment with print release.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
