"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaBookOpen } from "react-icons/fa6";
import { EditorialArticle } from "./EditorialListSection";

interface EditorialCarouselSectionProps {
  title: string;
  kicker?: string;
  categorySlug: string;
  articles: EditorialArticle[];
  motifTitle?: string;
  description?: string;
}

export default function EditorialCarouselSection({
  title,
  kicker,
  categorySlug,
  articles,
  motifTitle,
  description,
}: EditorialCarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 320; // approximate width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), articles.length - 1));
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / articles.length;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  if (!articles || articles.length === 0) return null;

  return (
    <section className="mb-14 md:mb-18" data-purpose={`carousel-${categorySlug}`}>
      {/* Header — The New Yorker "TODAY'S MIX" Style */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 border-b-2 border-primary-green gap-4">
        <div>
          {kicker && (
            <span className="text-primary-green text-[10px] font-black uppercase tracking-[0.25em] block mb-1">
              {kicker}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-gray-900 uppercase">
            {motifTitle || title}
          </h2>
          {description && (
            <p className="text-gray-600 text-xs sm:text-sm mt-1 font-display">
              {description}
            </p>
          )}
        </div>

        {/* Carousel Controls & View All */}
        <div className="flex items-center gap-4">
          <Link
            href={`/category/${categorySlug}`}
            className="text-xs font-bold uppercase tracking-wider text-primary-green hover:underline flex items-center gap-1 font-sans"
          >
            <span>View All</span>
            <FaArrowRight size={10} />
          </Link>

          {/* Desktop Arrow Buttons */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              aria-label="Previous story"
              className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-primary-green hover:text-white hover:border-primary-green flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <FaChevronLeft size={11} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next story"
              className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-primary-green hover:text-white hover:border-primary-green flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <FaChevronRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {articles.map((art, idx) => (
          <Link
            key={idx}
            href={`/news/${art.slug}`}
            className="min-w-[270px] sm:min-w-[320px] md:min-w-[350px] max-w-[360px] snap-start flex flex-col bg-white/90 rounded-2xl overflow-hidden border border-black/10 shadow-xs hover:shadow-xl transition-all duration-300 group flex-shrink-0 cursor-pointer"
          >
            {/* Top Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-b border-black/10">
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#16a34a] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                {art.category}
              </div>
              <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white p-1 rounded-md opacity-85 group-hover:opacity-100 transition-opacity">
                <FaBookOpen size={10} />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 group-hover:text-primary-green transition-colors leading-snug line-clamp-2 mb-2">
                  {art.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-display leading-relaxed line-clamp-3 mb-4">
                  {art.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-semibold text-gray-500 font-sans uppercase tracking-wider">
                <span className="line-clamp-1">By {art.author}</span>
                {art.date && <span className="shrink-0">{art.date}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Dots (Mobile & Tablet) */}
      {articles.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {articles.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              aria-label={`Jump to article ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === activeIndex
                  ? "w-6 bg-primary-green"
                  : "w-1.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

