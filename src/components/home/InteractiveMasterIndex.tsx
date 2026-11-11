"use client";
import React, { useState } from "react";
import Link from "next/link";
import { magazineData } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

export default function InteractiveMasterIndex() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const sections = magazineData.map((sec, i) => {
    const slugMap: Record<string, string> = {
      "Cover Story": "cover-story",
      "Editorial": "editorial",
      "Industry Practices": "industry-practices",
      "Sustainable Finance": "sustainable-finance",
      "Standards": "standards",
      "Playbook": "playbook",
      "Frontrunner": "frontrunner",
      "Sustainable Cities": "sustainable-cities",
      "Agriculture": "agriculture",
      "Friends in Need": "friends-in-need",
      "Friends In Need": "friends-in-need",
      "Technology": "technology",
      "Home & The World": "home-and-the-world",
      "Rule Book": "rule-book",
      "Governance": "governance",
      "Waste Management": "waste-management",
      "Health": "health",
      "Wildlife": "wildlife",
      "Culture & Myth": "culture-and-myth",
      "ESG Award": "esg-award",
      "Top Stories": "top-stories",
    };

    return {
      title: sec.title,
      slug: slugMap[sec.title] || sec.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      count: sec.articles.length,
      sampleArticle: sec.articles[0],
    };
  });

  const activeSection = hoveredIdx !== null ? sections[hoveredIdx] : sections[0];

  return (
    <section className="border-b border-black/15 pb-20 pt-10" data-purpose="master-section-index">
      {/* Broadside Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-10 border-b-2 border-[#111111] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] mb-1 font-bold">
            <span>VOLUME 01 COMPENDIUM • MASTER DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
            Volume 01 Compendium
          </h2>
          <p className="text-xs sm:text-sm font-serif text-gray-600 mt-1">
            Browse all 18 editorial sections across the maiden print &amp; digital broadsheet.
          </p>
        </div>


      </div>

      {/* 12-Column Split: 8 Cols Ledger : 4 Cols Dynamic Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (8 Cols — Stacked Broadsheet Ledger) */}
        <div className="lg:col-span-8 divide-y divide-black/15 border-t border-b border-black/15">
          {sections.map((sec, idx) => {
            const indexStr = (idx + 1).toString().padStart(2, "0");
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={sec.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`py-4 sm:py-5 flex items-center justify-between gap-4 transition-colors group cursor-pointer ${
                  isHovered ? "bg-black/5 px-3 -mx-3" : ""
                }`}
              >
                <Link
                  href={`/category/${sec.slug}`}
                  className="flex items-baseline gap-4 sm:gap-6 flex-1"
                >
                  <span className="text-sm font-mono font-bold text-gray-400 shrink-0">
                    {indexStr}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display uppercase text-[#111111] group-hover:text-[#D92B2B] transition-colors tracking-tight">
                    {sec.title}
                  </h3>
                </Link>

                <div className="flex items-center gap-4 shrink-0 text-xs font-mono uppercase text-gray-500">
                  <span className="hidden sm:inline">
                    [{sec.count} {sec.count === 1 ? "Article" : "Articles"}]
                  </span>
                  <Link
                    href={`/category/${sec.slug}`}
                    className="w-7 h-7 rounded-none border border-black/20 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#F7F5F0] transition-colors"
                    aria-label={`Open ${sec.title}`}
                  >
                    <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column (4 Cols — Sticky Floating Cross-Fading Preview) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 hidden lg:block">
          {activeSection?.sampleArticle && (
            <div className="border border-black/15 bg-white p-5 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#1a4d2e] font-bold pb-2 border-b border-black/10">
                <span>SECTION PREVIEW</span>
                <span>[{activeSection.count} STORIES]</span>
              </div>

              <div className="aspect-[16/10] overflow-hidden border border-black/15 bg-gray-200 relative">
                <img
                  src={activeSection.sampleArticle.imageUrl}
                  alt={activeSection.sampleArticle.title}
                  key={activeSection.sampleArticle.slug}
                  className="w-full h-full object-cover animate-fadeIn transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-1">
                  FEATURED INVESTIGATION
                </span>
                <h4 className="text-lg font-bold font-display text-[#111111] leading-snug line-clamp-2">
                  {activeSection.sampleArticle.title}
                </h4>
                <p className="text-xs font-serif text-gray-600 line-clamp-3 mt-1.5">
                  {activeSection.sampleArticle.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono uppercase">
                <span className="text-gray-500">By {activeSection.sampleArticle.author}</span>
                <Link
                  href={`/category/${activeSection.slug}`}
                  className="font-bold text-[#1a4d2e] hover:underline"
                >
                  Enter Section →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

