"use client";
import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

interface StaggeredDualSplitProps {
  sectionNumber: string;
  sectionTitle: string;
  kicker?: string;
  categorySlug: string;
  articles: NewsArticle[];
  description?: string;
}

export default function StaggeredDualSplit({
  sectionNumber,
  sectionTitle,
  kicker,
  categorySlug,
  articles,
  description,
}: StaggeredDualSplitProps) {
  if (!articles || articles.length < 2) return null;

  const leftArticle = articles[0];
  const rightArticle = articles[1];

  return (
    <section
      className="border-b border-black/15 pb-16 sm:pb-24 pt-8"
      data-purpose={`dual-split-${categorySlug}`}
    >
      {/* Broadside Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-10 border-b-2 border-[#111111] gap-4">
        <div>
          {kicker && (
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] mb-1 font-bold">
              <span>{kicker}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
            {sectionTitle}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm font-serif text-gray-600 mt-1 measure-readable">
              {description}
            </p>
          )}
        </div>

        <Link
          href={`/category/${categorySlug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#D92B2B] transition-colors shrink-0 font-bold"
        >
          <span>View Section ({articles.length})</span>
          <FaArrowRight size={10} />
        </Link>
      </div>

      {/* Mobile Phone View (< sm) — New Yorker Critics Row Layout (Image on Right) */}
      <div className="sm:hidden divide-y divide-black/15 bg-white border border-black/15 p-4 space-y-4">
        {[leftArticle, rightArticle].map((art, idx) => (
          <Link
            key={art.slug}
            href={`/news/${art.slug}`}
            className="flex items-center justify-between gap-3.5 pt-4 first:pt-0 group"
          >
            <div className="flex-1 pr-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1a4d2e] block mb-1">
                {art.category}
              </span>
              <h3 className="text-base font-bold font-display text-[#111111] group-hover:text-[#D92B2B] leading-snug line-clamp-2 mb-1.5 transition-colors">
                {art.title}
              </h3>
              <p className="text-xs font-serif text-gray-700 line-clamp-2 leading-relaxed mb-2">
                {art.subtitle}
              </p>
              <span className="text-[11px] font-mono uppercase text-gray-500 block">
                {art.author.toLowerCase().includes("interview")
                  ? art.author
                  : art.author.startsWith("By ")
                  ? art.author
                  : `By ${art.author}`}
              </span>
            </div>

            <div className="w-24 xs:w-28 aspect-[4/3] shrink-0 border border-black/15 bg-gray-200 overflow-hidden relative">
              <img
                src={art.coverImageUrl || art.imageUrl}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop / Tablet Grid (sm: and above) — 12-Column Split: 6 Cols : 6 Cols */}
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:divide-x lg:divide-black/15">
        {/* Left Column (6 Cols — Landscape Visual Weight Matching Right) */}
        <div className="lg:col-span-6 lg:pr-8 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-500 mb-3">
              <span className="text-[#1a4d2e] font-bold">{leftArticle.category}</span>
              <span>{leftArticle.date || "OCT–DEC 2026"}</span>
            </div>

            <Link href={`/news/${leftArticle.slug}`} className="block">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-black/15 bg-gray-200 mb-5 relative">
                <img
                  src={leftArticle.coverImageUrl || leftArticle.imageUrl}
                  alt={leftArticle.title}
                  className="w-full h-full object-cover print-grayscale transition-transform duration-700 group-hover:scale-104"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-[1.2] mb-3">
                {leftArticle.title}
              </h3>
            </Link>

            <p className="text-sm sm:text-base text-gray-700 font-serif leading-relaxed line-clamp-3 mb-6 measure-readable">
              {leftArticle.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-600 pt-4 border-t border-black/10">
            <span className="font-semibold text-[#111111]">
              {leftArticle.author.toLowerCase().includes("interview")
                ? leftArticle.author
                : leftArticle.author.startsWith("By ")
                ? leftArticle.author
                : `By ${leftArticle.author}`}
            </span>
            <Link
              href={`/news/${leftArticle.slug}`}
              className="font-bold text-[#1a4d2e] hover:underline"
            >
              Read Story →
            </Link>
          </div>
        </div>

        {/* Right Column (6 Cols — Symmetrical Landscape Visual Weight, Baseline Aligned) */}
        <div className="lg:col-span-6 lg:pl-8 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-500 mb-3">
              <span className="text-[#1a4d2e] font-bold">{rightArticle.category}</span>
              <span>{rightArticle.date || "OCT–DEC 2026"}</span>
            </div>

            <Link href={`/news/${rightArticle.slug}`} className="block">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-black/15 bg-gray-200 mb-5 relative">
                <img
                  src={rightArticle.coverImageUrl || rightArticle.imageUrl}
                  alt={rightArticle.title}
                  className="w-full h-full object-cover print-grayscale transition-transform duration-700 group-hover:scale-104"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-[1.2] mb-3">
                {rightArticle.title}
              </h3>
            </Link>

            <p className="text-sm sm:text-base text-gray-700 font-serif leading-relaxed line-clamp-3 mb-6 measure-readable">
              {rightArticle.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-600 pt-4 border-t border-black/10">
            <span className="font-semibold text-[#111111]">
              {rightArticle.author.toLowerCase().includes("interview")
                ? rightArticle.author
                : rightArticle.author.startsWith("By ")
                ? rightArticle.author
                : `By ${rightArticle.author}`}
            </span>
            <Link
              href={`/news/${rightArticle.slug}`}
              className="font-bold text-[#1a4d2e] hover:underline"
            >
              Read Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

