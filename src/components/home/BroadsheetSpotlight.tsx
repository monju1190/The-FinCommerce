"use client";
import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

interface BroadsheetSpotlightProps {
  sectionNumber?: string;
  sectionTitle: string;
  kicker: string;
  categorySlug: string;
  article: NewsArticle;
  theme?: "light" | "dark" | "accent";
  imageOnRight?: boolean;
}

export default function BroadsheetSpotlight({
  sectionNumber,
  sectionTitle,
  kicker,
  categorySlug,
  article,
  theme = "light",
  imageOnRight = false,
}: BroadsheetSpotlightProps) {
  if (!article) return null;

  const isDark = theme === "dark";

  return (
    <section
      className={`border-b border-black/15 pb-14 sm:pb-20 pt-8 ${
        isDark ? "bg-[#111111] text-[#F7F5F0] -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12" : ""
      }`}
      data-purpose={`spotlight-${categorySlug}`}
    >
      {/* Broadside Header */}
      <div
        className={`flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b-2 gap-4 ${
          isDark ? "border-white/20" : "border-[#111111]"
        }`}
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] mb-1 font-bold">
            <span>{kicker}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight ${
              isDark ? "text-white" : "text-[#111111]"
            }`}
          >
            {sectionTitle}
          </h2>
        </div>

        <Link
          href={`/category/${categorySlug}`}
          className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-colors shrink-0 font-bold ${
            isDark ? "text-gray-300 hover:text-[#D92B2B]" : "text-[#111111] hover:text-[#D92B2B]"
          }`}
        >
          <span>View Section (01)</span>
          <FaArrowRight size={10} />
        </Link>
      </div>

      {/* Mobile Phone View (< sm) — New Yorker Critics Row Layout (Image on Right) */}
      <div className={`sm:hidden p-4 border ${isDark ? "border-white/20 bg-white/5" : "border-black/15 bg-white"}`}>
        <Link
          href={`/news/${article.slug}`}
          className="flex items-center justify-between gap-3.5 group"
        >
          <div className="flex-1 pr-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1a4d2e] block mb-1">
              {article.category}
            </span>
            <h3
              className={`text-base font-bold font-display leading-snug line-clamp-2 mb-1.5 transition-colors ${
                isDark ? "text-white group-hover:text-[#D92B2B]" : "text-[#111111] group-hover:text-[#D92B2B]"
              }`}
            >
              {article.title}
            </h3>
            <p className={`text-xs font-serif line-clamp-2 leading-relaxed mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {article.subtitle}
            </p>
            <span className={`text-[11px] font-mono uppercase block ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              By {article.author}
            </span>
          </div>

          <div className={`w-24 xs:w-28 aspect-[4/3] shrink-0 border overflow-hidden relative ${isDark ? "border-white/20 bg-gray-900" : "border-black/15 bg-gray-200"}`}>
            <img
              src={article.coverImageUrl || article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      {/* Desktop / Tablet Grid (sm: and above) — 12-Column Layout */}
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Frame (7 Cols) */}
        <div className={`lg:col-span-7 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
          <Link href={`/news/${article.slug}`} className="block group">
            <div
              className={`aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border relative ${
                isDark ? "border-white/20 bg-gray-900" : "border-black/15 bg-gray-200"
              }`}
            >
              <img
                src={article.coverImageUrl || article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute top-3 left-3 bg-[#111111] text-[#F7F5F0] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
                {article.category}
              </div>
            </div>
          </Link>
        </div>

        {/* Text Dossier (5 Cols) */}
        <div className={`lg:col-span-5 space-y-5 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
          <div
            className={`inline-block border px-3 py-1 text-[11px] font-mono tracking-widest uppercase ${
              isDark ? "border-white/20 text-gray-300" : "border-black/15 text-gray-600 bg-black/5"
            }`}
          >
            {sectionTitle} • Volume 01
          </div>

          <Link href={`/news/${article.slug}`} className="block group">
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-[1.18] group-hover:text-[#D92B2B] transition-colors ${
                isDark ? "text-white" : "text-[#111111]"
              }`}
            >
              {article.title}
            </h3>
          </Link>

          <p
            className={`text-sm sm:text-base font-serif leading-relaxed line-clamp-3 measure-readable ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {article.subtitle}
          </p>

          <div
            className={`pt-4 border-t flex items-center justify-between text-xs font-mono uppercase ${
              isDark ? "border-white/20 text-gray-400" : "border-black/10 text-gray-600"
            }`}
          >
            <span className="font-semibold">
              {article.author.toLowerCase().includes("interview")
                ? article.author
                : article.author.startsWith("By ")
                ? article.author
                : `By ${article.author}`}
            </span>
            <Link
              href={`/news/${article.slug}`}
              className={`inline-flex items-center gap-1.5 font-bold transition-colors uppercase tracking-wider ${
                isDark
                  ? "bg-[#F7F5F0] text-[#111111] hover:bg-[#D92B2B] hover:text-white px-4 py-2"
                  : "bg-[#111111] text-[#F7F5F0] hover:bg-[#D92B2B] hover:text-white px-4 py-2"
              }`}
            >
              <span>Read Story</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

