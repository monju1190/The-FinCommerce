"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";

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
  title: string;
  kicker?: string;
  categorySlug: string;
  articles: EditorialArticle[];
  motifTitle?: string;
  description?: string;
}

export default function EditorialListSection({
  title,
  kicker,
  categorySlug,
  articles,
  motifTitle,
  description,
}: EditorialListSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mb-14 md:mb-18" data-purpose={`section-${categorySlug}`}>
      {/* Section Header — The New Yorker "THE CRITICS" Inspired Motif */}
      <div className="text-center max-w-xl mx-auto mb-8">
        {kicker && (
          <span className="text-primary-green text-[10px] font-black uppercase tracking-[0.25em] block mb-1">
            {kicker}
          </span>
        )}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 sm:w-16 bg-black/20"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-gray-900 uppercase">
            {motifTitle || title}
          </h2>
          <div className="h-[1px] w-8 sm:w-16 bg-black/20"></div>
        </div>
        {description && (
          <p className="text-gray-600 text-xs sm:text-sm mt-2 font-display">
            {description}
          </p>
        )}
      </div>

      {/* Articles Container */}
      <div className="bg-white/85 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 border border-black/10 shadow-xs">
        <div className="divide-y divide-black/10">
          {articles.map((art, idx) => (
            <Link
              key={idx}
              href={`/news/${art.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8 py-6 first:pt-0 last:pb-0 transition-all cursor-pointer"
            >
              {/* Left Details */}
              <div className="flex-1">
                <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest block mb-1.5">
                  {art.category}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold font-display text-gray-900 group-hover:text-primary-green transition-colors leading-snug mb-2">
                  {art.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm font-display leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
                  {art.subtitle}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans">
                  <span>By {art.author}</span>
                  {art.date && (
                    <>
                      <span>•</span>
                      <span>{art.date}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Right Thumbnail Image — The New Yorker Style */}
              <div className="w-full sm:w-36 md:w-48 aspect-[16/10] sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-black/10 relative flex-shrink-0 shadow-xs group-hover:shadow-md transition-shadow">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Clean Reading Badge */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white p-1 rounded-md opacity-85 group-hover:opacity-100 transition-opacity">
                  <FaBookOpen size={10} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Section Link */}
        <div className="pt-6 mt-6 border-t border-black/10 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
          <span className="text-gray-500 font-sans">
            {articles.length} {articles.length === 1 ? "Article" : "Articles"} in {title}
          </span>
          <Link
            href={`/category/${categorySlug}`}
            className="text-primary-green hover:underline flex items-center gap-1.5 group font-sans"
          >
            <span>View All Stories</span>
            <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

