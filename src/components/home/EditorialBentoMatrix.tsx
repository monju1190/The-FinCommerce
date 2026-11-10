"use client";
import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/data/mockData";
import { FaArrowRight } from "react-icons/fa6";

interface EditorialBentoMatrixProps {
  articles: {
    standards?: NewsArticle;
    playbook?: NewsArticle;
    circular?: NewsArticle;
    award?: NewsArticle;
    climate?: NewsArticle;
  };
}

export default function EditorialBentoMatrix({ articles }: EditorialBentoMatrixProps) {
  const { standards, playbook, circular, award, climate } = articles;

  return (
    <section className="border-b border-black/15 pb-16 sm:pb-24 pt-8" data-purpose="editorial-bento-matrix">
      {/* Broadside Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b-2 border-[#111111] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D92B2B] mb-1 font-bold">
            <span>EXECUTIVE STANDARDS &amp; BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
            Standards, Data &amp; Playbooks
          </h2>
          <p className="text-xs sm:text-sm font-serif text-gray-600 mt-1">
            Executive frameworks, macroeconomic data benchmarks, and specialized corporate briefs.
          </p>
        </div>


      </div>

      {/* 12-Column Multi-Row Bento Puzzle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Cell 1: Data / Stat Highlight Cell (4 Cols) */}
        <div className="md:col-span-4 border border-black/15 bg-white p-6 sm:p-8 flex flex-col justify-between bento-cell group cursor-pointer">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase text-gray-500 mb-6 bento-border pb-3 border-b border-black/10">
              <span className="bento-accent text-[#D92B2B] font-bold">NATIONAL BENCHMARK</span>
              <span className="bento-subtext">LEED GOLD &amp; PLATINUM</span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-display text-[#111111] tracking-tight mb-2 bento-text">
              349
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#1a4d2e] font-bold mb-4 bento-accent">
              Certified Green Factories
            </div>
            <p className="text-xs sm:text-sm font-serif text-gray-700 leading-relaxed bento-text">
              Bangladesh holds the single highest concentration of LEED-certified industrial garment factories in the world—now transitioning from CapEx certification to lean daily operations.
            </p>
          </div>

          <div className="pt-4 mt-6 border-t border-black/10 bento-border text-[11px] font-mono uppercase flex justify-between items-center text-gray-500">
            <span className="bento-subtext">Source: USGBC &amp; BGMEA</span>
            <span className="bento-accent text-[#111111] font-bold">Data Point →</span>
          </div>
        </div>

        {/* Cell 2: IFRS 9 / Standards Analysis (8 Cols) */}
        {standards && (
          <Link
            href={`/news/${standards.slug}`}
            className="md:col-span-8 border border-black/15 bg-white p-6 sm:p-8 flex flex-col justify-between bento-cell group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-gray-500 mb-4 bento-border pb-3 border-b border-black/10">
                <span className="bento-accent text-[#D92B2B] font-bold">STANDARDS &amp; BANKING</span>
                <span className="bento-subtext">IFRS 9 TECHNOLOGY STORY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#111111] mb-3 leading-snug bento-text group-hover:text-[#D92B2B] transition-colors">
                {standards.title}
              </h3>
              <p className="text-sm sm:text-base font-serif text-gray-700 leading-relaxed line-clamp-3 mb-6 bento-text measure-readable">
                {standards.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 bento-border flex items-center justify-between text-xs font-mono uppercase text-gray-500">
              <span className="bento-subtext">By {standards.author}</span>
              <span className="bento-accent text-[#111111] font-bold flex items-center gap-1">
                <span>Read Analysis</span>
                <FaArrowRight size={10} />
              </span>
            </div>
          </Link>
        )}

        {/* Cell 3: Corporate ESG Playbook (6 Cols) */}
        {playbook && (
          <Link
            href={`/news/${playbook.slug}`}
            className="md:col-span-6 border border-black/15 bg-white p-6 sm:p-8 flex flex-col justify-between bento-cell group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-gray-500 mb-4 bento-border pb-3 border-b border-black/10">
                <span className="bento-accent text-[#D92B2B] font-bold">PLAYBOOK</span>
                <span className="bento-subtext">RATINGS ARCHITECTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3 leading-snug bento-text group-hover:text-[#D92B2B] transition-colors">
                {playbook.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif text-gray-700 leading-relaxed line-clamp-3 mb-4 bento-text">
                {playbook.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 bento-border flex items-center justify-between text-xs font-mono uppercase text-gray-500">
              <span className="bento-subtext">By {playbook.author}</span>
              <span className="bento-accent text-[#111111] font-bold">Read Playbook →</span>
            </div>
          </Link>
        )}

        {/* Cell 4: Circular Economy & EPR (6 Cols) */}
        {circular && (
          <Link
            href={`/news/${circular.slug}`}
            className="md:col-span-6 border border-black/15 bg-white p-6 sm:p-8 flex flex-col justify-between bento-cell group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-gray-500 mb-4 bento-border pb-3 border-b border-black/10">
                <span className="bento-accent text-[#D92B2B] font-bold">CIRCULAR ECONOMY</span>
                <span className="bento-subtext">EXTENDED PRODUCER RESPONSIBILITY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3 leading-snug bento-text group-hover:text-[#D92B2B] transition-colors">
                {circular.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif text-gray-700 leading-relaxed line-clamp-3 mb-4 bento-text">
                {circular.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 bento-border flex items-center justify-between text-xs font-mono uppercase text-gray-500">
              <span className="bento-subtext">By {circular.author}</span>
              <span className="bento-accent text-[#111111] font-bold">Read EPR Report →</span>
            </div>
          </Link>
        )}

      </div>
    </section>
  );
}

