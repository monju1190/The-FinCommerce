"use client";
import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

interface FullBleedSpreadProps {
  sectionNumber: string;
  sectionTitle: string;
  kicker: string;
  categorySlug: string;
  article: NewsArticle;
}

export default function FullBleedSpread({
  sectionNumber,
  sectionTitle,
  kicker,
  categorySlug,
  article,
}: FullBleedSpreadProps) {
  if (!article) return null;

  return (
    <section
      className="my-16 sm:my-24 -mx-4 sm:-mx-6 md:-mx-12 bg-[#111111] text-[#F7F5F0] border-y-2 border-black relative overflow-hidden"
      data-purpose={`full-bleed-${categorySlug}`}
    >
      <div className="master-container py-16 sm:py-24">
        {/* Header Kicker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-white/20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#D92B2B]"></span>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D92B2B] font-bold">
              {kicker}
            </span>
          </div>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
            EXCLUSIVE LONGFORM INVESTIGATION
          </span>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Frame (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/20 bg-gray-900 relative group">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute top-4 left-4 bg-[#D92B2B] text-white px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                {article.category}
              </div>
            </div>
          </div>

          {/* Right Editorial Dossier (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block border border-white/20 px-3 py-1 text-[11px] font-mono tracking-widest uppercase text-gray-300">
              {sectionTitle} • Volume 01
            </div>

            <Link href={`/news/${article.slug}`} className="block group">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-display leading-[1.12] text-white group-hover:text-[#D92B2B] transition-colors">
                {article.title}
              </h3>
            </Link>

            <blockquote className="border-l-2 border-[#D92B2B] pl-4 italic font-serif text-base sm:text-lg text-gray-300 leading-relaxed">
              &ldquo;{article.subtitle}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-gray-400 uppercase">
              <span>By {article.author}</span>
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center gap-2 bg-[#F7F5F0] text-[#111111] hover:bg-[#D92B2B] hover:text-white px-5 py-3 font-bold transition-colors uppercase tracking-wider"
              >
                <span>Read Full Feature</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

