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
  description?: string;
  bgColor?: string;
}

export default function FullBleedSpread({
  sectionNumber,
  sectionTitle,
  kicker,
  categorySlug,
  article,
  description,
  bgColor = "bg-[#EADBCC]",
}: FullBleedSpreadProps) {
  if (!article) return null;

  const authorDisplay = article.author.toLowerCase().includes("interview")
    ? article.author
    : article.author.startsWith("By ")
    ? article.author
    : `By ${article.author}`;

  return (
    <section
      className={`my-14 sm:my-20 -mx-4 sm:-mx-6 md:-mx-12 ${bgColor} text-[#111111] border-y-2 border-black relative overflow-hidden transition-colors duration-500`}
      data-purpose={`spotlight-${categorySlug}`}
    >
      <div className="master-container py-14 sm:py-20">
        {/* Broadside Section Header — Prominently Highlighting Section Name */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 sm:mb-12 border-b-2 border-black/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] mb-1 font-bold">
              <span>{sectionNumber}. {sectionTitle}</span>
              <span>•</span>
              <span>{kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
              {sectionTitle}
            </h2>
            {description && (
              <p className="text-xs sm:text-sm font-serif text-gray-700 mt-1 measure-readable">
                {description}
              </p>
            )}
          </div>

          <Link
            href={`/category/${categorySlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#D92B2B] transition-colors shrink-0 font-bold"
          >
            <span>View Section</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        {/* Mobile Phone View (< sm) — New Yorker Critics Row Layout */}
        <div className="sm:hidden bg-[#F7F5F0] border border-black/20 p-4 shadow-sm">
          <Link
            href={`/news/${article.slug}`}
            className="flex items-center justify-between gap-3.5 group"
          >
            <div className="flex-1 pr-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1a4d2e] block mb-1">
                {article.category}
              </span>
              <h3 className="text-base font-bold font-display text-[#111111] group-hover:text-[#D92B2B] leading-snug line-clamp-2 mb-1.5 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs font-serif text-gray-700 line-clamp-2 leading-relaxed mb-2">
                {article.subtitle}
              </p>
              <span className="text-[11px] font-mono uppercase text-gray-600 block font-semibold">
                {authorDisplay}
              </span>
            </div>

            <div className="w-24 xs:w-28 aspect-[4/3] shrink-0 border border-black/20 bg-white overflow-hidden relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>

        {/* Desktop / Tablet Grid (sm: and above) — World-Class Feature Dossier */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Frame (7 Cols) */}
          <div className="lg:col-span-7">
            <Link href={`/news/${article.slug}`} className="block">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-black/20 bg-white p-2 relative group/img shadow-sm">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-104"
                  />
                  <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-xs text-[#8DC63F] border border-black/20 px-3 py-1 text-[10px] font-mono tracking-widest uppercase font-bold">
                    {article.category}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Editorial Dossier (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block border border-black/20 bg-black/[0.04] px-3 py-1 text-[11px] font-mono tracking-widest uppercase text-gray-700 font-semibold">
              Volume 01 • Feature Spread
            </div>

            <Link href={`/news/${article.slug}`} className="block group/title">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-[1.15] text-[#111111] group-hover/title:text-[#D92B2B] transition-colors">
                {article.title}
              </h3>
            </Link>

            <blockquote className="border-l-3 border-[#1a4d2e] pl-4 italic font-serif text-base sm:text-lg text-gray-800 leading-relaxed">
              &ldquo;{article.subtitle}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-black/20 flex items-center justify-between text-xs font-mono uppercase">
              <span className="font-semibold text-gray-700">
                {authorDisplay}
              </span>
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center gap-2 bg-[#111111] text-[#F7F5F0] hover:bg-[#1a4d2e] px-5 py-2.5 font-bold transition-colors uppercase tracking-wider text-xs font-mono"
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
