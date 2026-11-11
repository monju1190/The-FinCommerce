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
  bgColor?: string;
}

export default function FullBleedSpread({
  sectionNumber,
  sectionTitle,
  kicker,
  categorySlug,
  article,
  bgColor = "bg-[#111111]",
}: FullBleedSpreadProps) {
  if (!article) return null;

  return (
    <section
      className={`my-16 sm:my-24 -mx-4 sm:-mx-6 md:-mx-12 ${bgColor} text-[#F7F5F0] border-y-2 border-black relative overflow-hidden transition-colors duration-500`}
      data-purpose={`full-bleed-${categorySlug}`}
    >
      <div className="master-container py-16 sm:py-24">
        {/* Header Kicker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-white/20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F]"></span>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8DC63F] font-bold">
              {kicker}
            </span>
          </div>
          <span className="text-xs font-mono text-white/70 uppercase tracking-widest">
            {sectionTitle} • Volume 01
          </span>
        </div>

        {/* Mobile Phone View (< sm) — Centered Thumbnail Row Layout */}
        <div className="sm:hidden p-4 border border-white/20 bg-black/20">
          <Link
            href={`/news/${article.slug}`}
            className="flex items-center justify-between gap-3.5 group"
          >
            <div className="flex-1 pr-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8DC63F] block mb-1">
                {article.category}
              </span>
              <h3 className="text-base font-bold font-display leading-snug line-clamp-2 mb-1.5 text-white group-hover:text-[#8DC63F] transition-colors">
                {article.title}
              </h3>
              <p className="text-xs font-serif line-clamp-2 leading-relaxed mb-2 text-gray-200">
                {article.subtitle}
              </p>
              <span className="text-[11px] font-mono uppercase text-gray-300 block">
                By {article.author}
              </span>
            </div>

            <div className="w-24 xs:w-28 aspect-[4/3] shrink-0 border border-white/20 bg-black overflow-hidden relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>

        {/* Desktop / Tablet Grid (sm: and above) — 12-Column Layout */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Frame (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-white/20 bg-black relative group">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-xs text-[#8DC63F] border border-white/20 px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                {article.category}
              </div>
            </div>
          </div>

          {/* Right Editorial Dossier (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block border border-white/20 px-3 py-1 text-[11px] font-mono tracking-widest uppercase text-white/80 bg-black/20">
              {sectionTitle} • Volume 01
            </div>

            <Link href={`/news/${article.slug}`} className="block group">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-display leading-[1.12] text-white group-hover:text-[#8DC63F] transition-colors">
                {article.title}
              </h3>
            </Link>

            <blockquote className="border-l-2 border-[#8DC63F] pl-4 italic font-serif text-base sm:text-lg text-gray-200 leading-relaxed">
              &ldquo;{article.subtitle}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-gray-300 uppercase">
              <span>By {article.author}</span>
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center gap-2 bg-[#F7F5F0] text-[#111111] hover:bg-[#8DC63F] hover:text-black px-5 py-3 font-bold transition-colors uppercase tracking-wider"
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
