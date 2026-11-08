"use client";
import React from "react";
import Link from "next/link";
import { FaBookOpen, FaDownload, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { recentEditions, magazinePdfLinks, magazineData } from "@/data/mockData";

export default function MagazineSection() {
  const currentIssue = recentEditions[0];
  const highlightedSections = magazineData.slice(0, 8);

  return (
    <section className="mb-16 mt-10" data-purpose="magazine-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <div>
          <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-widest block mb-1">
            Quarterly Print & Digital Edition • {currentIssue.issueNumber}
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-gray-900">
            The Magazine — {currentIssue.month}
          </h2>
        </div>
        <Link href="/magazine/october-december-2026">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            Live Read / Download
          </span>
        </Link>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Official Cover */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <Link
              href={`/magazine/${currentIssue.slug}`}
              className="group block w-full max-w-[310px] overflow-hidden border border-gray-300 shadow-xl bg-[#0b101e] rounded-sm"
            >
              <img
                alt={`Magazine Cover ${currentIssue.month}`}
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                src={currentIssue.imageUrl}
              />
            </Link>
          </div>

          {/* Right: Issue Overview, Live Read/Download & Section Highlights */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary-green mb-2">
                <span>{currentIssue.month}</span>
                <span>•</span>
                <span>{currentIssue.issueNumber}</span>
                <span>•</span>
                <span>{currentIssue.registrationNo}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold font-display text-gray-900 mb-3 leading-tight">
                {currentIssue.subtitle}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed font-display">
                Our inaugural October–November–December 2026 edition brings together 33 articles across 19 sections—authored by urban planners, central bank specialists, international executives, industry leaders, and wildlife conservationists.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/magazine/${currentIssue.slug}`}
                className="flex items-center space-x-2 bg-primary-green text-white px-6 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-primary-light transition-colors shadow-md"
              >
                <FaBookOpen size={14} />
                <span>Live Read Full Magazine</span>
              </Link>
              <a
                href={magazinePdfLinks.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-md"
              >
                <FaDownload size={14} />
                <span>Download Soft Copy (PDF)</span>
              </a>
              <a
                href={magazinePdfLinks.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-gray-900 border border-gray-300 px-5 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                <FaExternalLinkAlt size={12} />
                <span>Open PDF in Drive</span>
              </a>
            </div>

            {/* Quick Section Jump Grid */}
            <div className="pt-4 border-t border-gray-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-3">
                Featured Sections in This Issue
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlightedSections.map((sec, idx) => {
                  const firstArt = sec.articles[0];
                  return (
                    <Link
                      key={idx}
                      href={`/news/${firstArt.slug}`}
                      className="group bg-white p-3.5 border border-gray-200 hover:border-primary-green transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#16a34a]">
                          {sec.title}
                        </span>
                        <FaArrowRight className="text-gray-400 group-hover:text-primary-green group-hover:translate-x-0.5 transition-all" size={10} />
                      </div>
                      <p className="text-xs font-bold font-display text-gray-900 line-clamp-1 group-hover:text-primary-green transition-colors">
                        {firstArt.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
