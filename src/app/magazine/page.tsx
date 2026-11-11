"use client";
import React, { useState } from "react";
import Link from "next/link";
import { recentEditions, magazineData, magazineAds, MagazineAd } from "@/data/mockData";
import { FaArrowRight, FaTimes, FaLayerGroup } from "react-icons/fa";

export default function MagazineArchivePage() {
  const [selectedAd, setSelectedAd] = useState<MagazineAd | null>(null);
  const currentIssue = recentEditions[0];
  const allArticles = magazineData.flatMap((s) => s.articles);

  return (
    <main className="bg-[#F7F5F0] text-[#111111] min-h-screen py-10 md:py-16 antialiased">
      <div className="master-container space-y-16">
        
        {/* Masthead Header */}
        <div className="border-b border-black/15 pb-8">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 hover:text-black transition-colors font-bold"
            >
              <span>← Back to Main Page</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
                {currentIssue.month}
              </h1>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
                {currentIssue.issueNumber}
              </span>
              <span className="text-sm font-serif italic text-gray-700">
                Quarterly Broadsheet &amp; Journal of Sustainability
              </span>
            </div>
          </div>
        </div>

        {/* Featured Maiden Issue Monolith Showcase (Swiss Broadsheet) */}
        <div className="border border-black/15 bg-white p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Cover Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] sm:max-w-[380px] border border-black/15 bg-[#111111] p-2 relative group">
                <img
                  src={currentIssue.imageUrl}
                  alt={currentIssue.month}
                  className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Issue Description & Table of Contents Action */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 border border-[#1a4d2e] text-[#1a4d2e] px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
                <span>★ Maiden Print &amp; Digital Release</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-display leading-tight text-[#111111]">
                {currentIssue.subtitle}
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-serif measure-readable">
                The inaugural edition of <strong>The Sustainability Voice</strong> brings together 34 peerless investigations, analytical essays, and photojournalism across 16 curated sections—spanning urban hydrology, green manufacturing, central banking policy, and biodiversity conservation.
              </p>

              <div className="pt-4 border-t border-black/15 flex flex-wrap items-center gap-4">
                <a
                  href="#table-of-contents"
                  className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F5F0] hover:bg-[#D92B2B] px-6 py-3.5 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <FaLayerGroup size={12} />
                  <span>Explore Table of Contents</span>
                </a>
              </div>

              <div className="pt-4 border-t border-black/15 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-gray-600 uppercase tracking-wider">
                <span>Managing Editor: Shaquib Quoreshi</span>
                <span>•</span>
                <span>{allArticles.length} Curated Stories</span>
                <span>•</span>
                <span>Volume 01 Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Table of Contents (Direct Article Links) */}
        <div id="table-of-contents" className="scroll-mt-12">
          <div className="flex items-center justify-between pb-4 mb-8 border-b-2 border-[#111111]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1a4d2e] font-bold block mb-1">
                SYSTEMATIC REPERTOIRE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
                Table of Contents ({allArticles.length} Articles)
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-500 hidden sm:block">
              16 Sections
            </span>
          </div>

          <div className="space-y-12">
            {magazineData.map((section, idx) => (
              <section key={idx} className="border border-black/15 bg-white p-6 sm:p-8">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-black/15 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-400 font-bold">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold font-display uppercase text-[#111111]">
                      {section.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    [{section.articles.length} {section.articles.length === 1 ? "Article" : "Articles"}]
                  </span>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.articles.map((article, artIdx) => (
                    <Link
                      key={artIdx}
                      href={`/news/${article.slug}`}
                      className="group flex flex-col sm:flex-row gap-5 p-4 border border-black/10 hover:border-black transition-colors bg-[#F7F5F0]"
                    >
                      <div className="w-full sm:w-36 aspect-[16/10] sm:aspect-square flex-shrink-0 overflow-hidden border border-black/15 bg-gray-200">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover print-grayscale transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a4d2e] font-bold block mb-1">
                            {article.category}
                          </span>
                          <h4 className="text-base font-bold font-display text-[#111111] group-hover:text-[#1a4d2e] transition-colors leading-snug line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-xs font-serif text-gray-600 line-clamp-2 mt-1.5">
                            {article.subtitle}
                          </p>
                        </div>
                        <div className="pt-2 mt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 uppercase flex justify-between">
                          <span>By {article.author}</span>
                          <span className="font-bold text-[#111111] group-hover:text-[#1a4d2e]">
                            Read Story →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Print Advertisers Gallery (Modal Preview) */}
        <section className="border-t-2 border-black pt-12">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1a4d2e] font-bold block mb-1">
                CORPORATE PATRONS &amp; ADVERTISERS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
                Print Edition Advertisers
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-500 hidden sm:block">
              {magazineAds.length} Visual Spotlights
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {magazineAds.map((ad) => (
              <button
                key={ad.id}
                onClick={() => setSelectedAd(ad)}
                className="group border border-black/15 bg-white p-2 text-left cursor-pointer hover:border-black transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 border border-black/10 mb-2">
                  <img
                    src={ad.imageUrl}
                    alt={ad.title}
                    className="w-full h-full object-cover print-grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[9px] font-mono text-[#1a4d2e] font-bold block uppercase">
                  Page {ad.page}
                </span>
                <span className="text-[10px] font-sans text-[#111111] font-semibold line-clamp-1 block">
                  {ad.title}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Modal for Ad Inspection */}
        {selectedAd && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedAd(null)}
          >
            <div
              className="bg-white max-w-xl w-full p-6 border border-black relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAd(null)}
                className="absolute top-4 right-4 p-2 text-gray-700 hover:text-black cursor-pointer"
                aria-label="Close"
              >
                <FaTimes size={18} />
              </button>
              <div className="text-xs font-mono uppercase text-[#1a4d2e] font-bold mb-1">
                Print Page {selectedAd.page} • {selectedAd.tag}
              </div>
              <h4 className="text-xl font-bold font-display text-[#111111] mb-4">
                {selectedAd.title}
              </h4>
              <div className="aspect-[3/4] max-h-[70vh] overflow-hidden border border-black/15 bg-gray-100">
                <img
                  src={selectedAd.imageUrl}
                  alt={selectedAd.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
