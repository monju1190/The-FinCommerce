"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { recentEditions, magazineData, NewsArticle } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

export default function InauguralMonolith() {
  const currentIssue = recentEditions[0];
  const allArticles = magazineData.flatMap((s) => s.articles);

  // 4 Flagship Cover Stories for Volume 01
  const flagshipSlugs = [
    "waterlogging-in-dhaka-integrated-management",
    "beyond-the-plaque-green-certification-to-green-operations",
    "the-carbon-corridor-unlocking-green-investment-for-bangladesh",
    "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh",
  ];

  const flagshipStories = flagshipSlugs
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter((a): a is NewsArticle => Boolean(a));

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const storyRefs = useRef<(HTMLElement | null)[]>([]);

  // Auto-slide effect on all devices (especially phones)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % flagshipStories.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, flagshipStories.length]);

  const selectStory = (idx: number) => {
    setActiveIdx(idx);
    const targetElement = storyRefs.current[idx];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const currentStory = flagshipStories[activeIdx];
  const activeImage = currentStory ? currentStory.imageUrl : currentIssue.imageUrl;
  const activeKicker = currentStory
    ? `CHAPTER ${(activeIdx + 1).toString().padStart(2, "0")} • ${currentStory.category}`
    : "VOLUME 01 • MAIDEN QUARTERLY";

  return (
    <section
      className="border-b border-black/15 pb-14 sm:pb-20 pt-7 sm:pt-9 md:pt-11 lg:pt-14"
      data-purpose="inaugural-monolith"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 12-Column Grid Split 5 : 7 (Starts directly under header without redundant strip) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column (5 Cols — Signature Pine Green Background) */}
        <div className="lg:col-span-5 lg:sticky lg:top-20 h-fit space-y-4">
          <div className="border border-[#143b23] bg-[#1a4d2e] text-[#F7F5F0] p-5 sm:p-7 shadow-xl relative group overflow-hidden">
            
            {/* Visual Frame: Butter-smooth Crossfade Animation with ZERO gap */}
            <div className="aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden border border-white/20 bg-black/40 relative shadow-inner">
              {flagshipStories.map((story, i) => {
                const isCurrent = activeIdx === i;
                return (
                  <div
                    key={story.slug}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isCurrent
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}

              {/* Crossfading Chapter Kicker */}
              {flagshipStories.map((story, i) => {
                const isCurrent = activeIdx === i;
                return (
                  <div
                    key={`kicker-${story.slug}`}
                    className={`absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-[#8DC63F] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border border-white/10 transition-all duration-700 ${
                      isCurrent
                        ? "opacity-100 translate-y-0 z-20"
                        : "opacity-0 -translate-y-1 z-0 pointer-events-none"
                    }`}
                  >
                    CHAPTER {(i + 1).toString().padStart(2, "0")} • {story.category}
                  </div>
                );
              })}
            </div>

            {/* Interactive Story Dots (Circles) */}
            <div className="flex items-center justify-center gap-2.5 py-3 border-b border-white/15">
              {flagshipStories.map((s, dotIdx) => {
                const isActive = activeIdx === dotIdx;
                return (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => selectStory(dotIdx)}
                    aria-label={`Switch to story ${dotIdx + 1}: ${s?.title}`}
                    className={`transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "w-7 h-2.5 rounded-full bg-[#8DC63F]"
                        : "w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/80"
                    }`}
                  />
                );
              })}
            </div>

            {/* Edition Note in Crisp White & Light Green with Smooth Crossfading Title */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/70 uppercase">
                <span>The Sustainability Voice</span>
                <span className="text-[#8DC63F] font-bold">Issue 01, Vol. 01</span>
              </div>

              {/* Smooth Crossfading Headline */}
              <div className="relative min-h-[3.5rem] flex items-center">
                {flagshipStories.map((story, i) => {
                  const isCurrent = activeIdx === i;
                  return (
                    <h3
                      key={`headline-${story.slug}`}
                      className={`text-lg sm:text-xl font-bold font-display text-white leading-snug transition-all duration-700 ease-in-out ${
                        isCurrent
                          ? "opacity-100 translate-y-0 relative z-10"
                          : "opacity-0 translate-y-2 absolute inset-x-0 pointer-events-none z-0"
                      }`}
                    >
                      {story.title}
                    </h3>
                  );
                })}
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed line-clamp-3">
                &ldquo;This magazine is born out of passion—advancing informed dialogue on climate resilience, industrial transformation, and ESG governance in Bangladesh.&rdquo;
              </p>
              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono uppercase text-white/70">
                <span className="text-[#8DC63F] font-bold">— Shaquib Quoreshi, Managing Editor</span>
                <Link
                  href="/magazine"
                  className="text-white hover:text-[#8DC63F] underline font-bold inline-flex items-center gap-1"
                >
                  <span>All Sections →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols — Scrollable Top Stories) */}
        <div className="lg:col-span-7 space-y-0 divide-y divide-black/15 border-t lg:border-t-0 border-b border-black/15">
          {flagshipStories.map((story, idx) => {
            if (!story) return null;
            const chapterNum = (idx + 1).toString().padStart(2, "0");
            const isSelected = activeIdx === idx;

            return (
              <article
                key={story.slug}
                ref={(el) => {
                  storyRefs.current[idx] = el;
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`py-6 sm:py-8 px-5 sm:px-7 -mx-5 sm:-mx-7 group cursor-pointer transition-all duration-300 ${
                  isSelected ? "bg-black/[0.04]" : "hover:bg-black/[0.02]"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[#1a4d2e]">
                      {chapterNum}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500 font-semibold">
                      {story.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider shrink-0">
                    06 MIN READ
                  </span>
                </div>

                <div className="flex sm:block items-center justify-between gap-3.5">
                  <div className="flex-1 pr-1">
                    <Link href={`/news/${story.slug}`} className="block">
                      <h2 className="text-xl sm:text-3xl md:text-[32px] font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-[1.18] mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-none">
                        {story.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-base text-gray-700 font-serif leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 measure-readable">
                      {story.subtitle}
                    </p>
                  </div>

                  {/* Compact Right Thumbnail for Phone View */}
                  <div className="sm:hidden w-24 xs:w-28 aspect-[4/3] shrink-0 border border-black/15 bg-gray-200 overflow-hidden relative">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-600 pt-3 border-t border-black/10">
                  <span className="font-semibold text-[#111111]">
                    By {story.author}
                  </span>
                  <Link
                    href={`/news/${story.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[#111111] group-hover:text-[#1a4d2e] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
