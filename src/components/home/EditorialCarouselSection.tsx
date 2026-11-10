"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaBookOpen } from "react-icons/fa6";
import { NewsArticle } from "@/data/mockData";
import { EditorialArticle } from "./EditorialListSection";

interface EditorialCarouselSectionProps {
  sectionNumber?: string;
  title: string;
  kicker?: string;
  categorySlug: string;
  articles: (EditorialArticle | NewsArticle)[];
  motifTitle?: string;
  description?: string;
}

export default function EditorialCarouselSection({
  sectionNumber,
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
      const cardWidth = 320;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), articles.length - 1));
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
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
    <section className="border-b border-black/15 pb-14 sm:pb-20 pt-8" data-purpose={`carousel-${categorySlug}`}>
      {/* Header — The New Yorker / The Atlantic "TODAY'S MIX" Style */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b-2 border-[#111111] gap-4">
        <div>
          {kicker && (
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D92B2B] mb-1 font-bold">
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

        {/* Carousel Controls & View All */}
        <div className="flex items-center gap-4">
          <Link
            href={`/category/${categorySlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#D92B2B] transition-colors shrink-0 font-bold"
          >
            <span>View All ({articles.length})</span>
            <FaArrowRight size={10} />
          </Link>

          {/* Desktop Arrow Buttons (Sharp Broadsheet) */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              aria-label="Previous story"
              className="w-8 h-8 rounded-none border border-black/20 bg-white hover:bg-[#111111] hover:text-[#F7F5F0] hover:border-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <FaChevronLeft size={11} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next story"
              className="w-8 h-8 rounded-none border border-black/20 bg-white hover:bg-[#111111] hover:text-[#F7F5F0] hover:border-black flex items-center justify-center transition-colors cursor-pointer"
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
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {articles.map((art, idx) => (
          <Link
            key={art.slug || idx}
            href={`/news/${art.slug}`}
            className="w-[280px] sm:w-[320px] md:w-[350px] snap-start flex flex-col bg-white rounded-none border border-black/15 transition-all duration-300 group shrink-0 cursor-pointer hover:border-black"
          >
            {/* Top Image Frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 border-b border-black/15">
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#111111] text-[#F7F5F0] text-[9px] font-mono uppercase tracking-widest px-2 py-0.5">
                {art.category}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/75 text-white p-1 text-[10px] opacity-85 group-hover:opacity-100 transition-opacity">
                <FaBookOpen size={10} />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-snug line-clamp-2 mb-2">
                  {art.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm font-serif leading-relaxed line-clamp-3 mb-4">
                  {art.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                <span className="line-clamp-1">By {art.author}</span>
                {art.date && <span className="shrink-0">{art.date}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Dots */}
      {articles.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {articles.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              aria-label={`Jump to article ${dotIdx + 1}`}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                dotIdx === activeIndex
                  ? "w-6 bg-[#D92B2B]"
                  : "w-2 bg-black/20 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

