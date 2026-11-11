"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";
import { NewsArticle } from "@/data/mockData";

export interface EditorialArticle {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  category: string;
  imageUrl: string;
  date?: string;
}

interface EditorialListSectionProps {
  sectionNumber?: string;
  title: string;
  kicker?: string;
  categorySlug: string;
  articles: (EditorialArticle | NewsArticle)[];
  motifTitle?: string;
  description?: string;
}

export default function EditorialListSection({
  sectionNumber,
  title,
  kicker,
  categorySlug,
  articles,
  motifTitle,
  description,
}: EditorialListSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="border-b border-black/15 pb-14 sm:pb-20 pt-8" data-purpose={`critics-list-${categorySlug}`}>
      {/* Broadside Header — Inspired by The New Yorker / The Atlantic */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b-2 border-[#111111] gap-4">
        <div>
          {kicker && (
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] mb-1 font-bold">
              <span>{kicker}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
            {motifTitle || title}
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

      {/* Broadsheet List Container — Sharp Edges & Hairline Dividers */}
      <div className="bg-white border border-black/15 p-6 sm:p-8 md:p-10">
        <div className="divide-y divide-black/15">
          {articles.map((art, idx) => (
            <Link
              key={art.slug || idx}
              href={`/news/${art.slug}`}
              className="group flex flex-row items-center justify-between gap-4 py-5 first:pt-0 last:pb-0 transition-colors cursor-pointer"
            >
              {/* Left Details */}
              <div className="flex-1 pr-1">
                <span className="text-[#1a4d2e] text-[10px] font-mono font-bold uppercase tracking-widest block mb-1">
                  {art.category}
                </span>
                <h3 className="text-base sm:text-2xl md:text-[26px] font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-snug mb-1.5 sm:mb-2 line-clamp-2 sm:line-clamp-none">
                  {art.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm font-serif leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3 measure-readable">
                  {art.subtitle}
                </p>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase text-gray-500">
                  <span className="text-[#111111] font-medium">By {art.author}</span>
                  {art.date && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">{art.date}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Right Thumbnail Image — The Critics New Yorker Style (Sharp Frame) */}
              <div className="w-24 xs:w-28 sm:w-36 md:w-48 aspect-[4/3] overflow-hidden bg-gray-100 border border-black/15 relative shrink-0">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-1.5 right-1.5 bg-black/75 text-white p-1 text-[9px] sm:text-[10px] opacity-85 group-hover:opacity-100 transition-opacity">
                  <FaBookOpen size={9} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

