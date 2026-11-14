"use client";
import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

interface AsymmetricBroadsheetProps {
  sectionNumber: string;
  sectionTitle: string;
  kicker?: string;
  categorySlug: string;
  articles: NewsArticle[];
  description?: string;
}

export default function AsymmetricBroadsheet({
  sectionNumber,
  sectionTitle,
  kicker,
  categorySlug,
  articles,
  description,
}: AsymmetricBroadsheetProps) {
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const secondaryArticles = articles.slice(1);

  return (
    <section
      className="border-b border-black/15 pb-14 sm:pb-20 pt-8"
      data-purpose={`broadsheet-${categorySlug}`}
    >
      {/* Section Broadside Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b-2 border-[#111111] gap-4">
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
        {articles.map((art, idx) => (
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
                By {art.author}
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

      {/* Desktop / Tablet Grid (sm: and above) — 12-Column Split: 7 Cols Lead Story : 5 Cols Stack */}
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column (7 Cols — Flagship Lead Story) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <Link href={`/news/${leadArticle.slug}`} className="group block">
            {/* 16:10 Large Frame */}
            <div className="aspect-[16/10] w-full overflow-hidden border border-black/15 bg-gray-200 mb-6 relative">
              <img
                src={leadArticle.coverImageUrl || leadArticle.imageUrl}
                alt={leadArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute top-3 left-3 bg-[#111111] text-[#F7F5F0] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
                LEAD INVESTIGATION
              </div>
            </div>

            {/* Oversized Headline */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-[1.18] mb-4">
              {leadArticle.title}
            </h3>
          </Link>

          {/* Excerpt with Large Drop-Cap */}
          <p className="drop-cap text-base sm:text-lg text-gray-800 font-serif leading-relaxed line-clamp-3 mb-6 measure-readable">
            {leadArticle.subtitle}
          </p>

          <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-600 pt-4 border-t border-black/10">
            <span className="font-semibold text-[#111111]">
              By {leadArticle.author}
            </span>
            <Link
              href={`/news/${leadArticle.slug}`}
              className="inline-flex items-center gap-1 font-bold text-[#D92B2B] hover:underline"
            >
              <span>Full Investigation →</span>
            </Link>
          </div>
        </div>

        {/* Right Column (5 Cols — Accompanying Stack Separated by 1px Hairlines) */}
        <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-black/15 border-t lg:border-t-0 border-b border-black/15 lg:border-b-0 lg:border-l lg:border-black/15 lg:pl-10">
          {secondaryArticles.map((art, idx) => (
            <div key={art.slug} className="py-6 first:pt-0 last:pb-0 group">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-gray-500 mb-2">
                <span className="text-[#D92B2B] font-bold">
                  {(idx + 2).toString().padStart(2, "0")} / {art.category}
                </span>
                <span>{art.date || "OCT–DEC 2026"}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-8">
                  <Link href={`/news/${art.slug}`}>
                    <h4 className="text-lg sm:text-xl font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-snug line-clamp-2 mb-2">
                      {art.title}
                    </h4>
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-600 font-serif line-clamp-2 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                <div className="sm:col-span-4 aspect-[4/3] overflow-hidden border border-black/15 bg-gray-200">
                  <img
                    src={art.coverImageUrl || art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover print-grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-gray-500 pt-3 mt-3 border-t border-black/10">
                <span className="truncate max-w-[70%]">By {art.author}</span>
                <Link
                  href={`/news/${art.slug}`}
                  className="font-bold text-[#111111] group-hover:text-[#D92B2B] transition-colors"
                >
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

