"use client";
import React, { useState } from "react";
import Link from "next/link";
import { recentEditions, magazineData, magazinePdfLinks, magazineAds, MagazineAd } from "@/data/mockData";
import { FaBookOpen, FaDownload, FaExternalLinkAlt, FaArrowRight, FaExpand, FaTimes } from "react-icons/fa";

export default function MagazineArchivePage() {
  const [showLiveReader, setShowLiveReader] = useState(false);
  const [selectedAd, setSelectedAd] = useState<MagazineAd | null>(null);
  const currentIssue = recentEditions[0];

  return (
    <main className="bg-[var(--color-ft-pink)] text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#16a34a] text-xs font-black uppercase tracking-widest mb-3 block">
            The Sustainability Voice • Digital Edition
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-display tracking-tight text-gray-900">
            {currentIssue.month}
          </h1>
          <p className="text-lg text-gray-700 font-display">
            {currentIssue.issueNumber} • {currentIssue.registrationNo}
          </p>
        </div>

        {/* Featured Maiden Issue Showcase */}
        <div className="bg-[#f8ebe3] rounded-[2rem] p-6 md:p-12 shadow-sm border border-[#dfcfc2] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Cover Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-[#d2c0b2] bg-[#0b101e] group">
                <img
                  src={currentIssue.imageUrl}
                  alt={currentIssue.month}
                  className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Issue Details & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-green/10 text-primary-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <span>Maiden Quarterly Issue • Oct–Nov–Dec 2026</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-gray-900">
                {currentIssue.subtitle}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed font-display">
                Explore the inaugural quarterly edition of <strong>The Sustainability Voice</strong>—featuring 19 sections and 33 in-depth articles on Dhaka&apos;s integrated stormwater master plan, Bangladesh Bank&apos;s decarbonisation financing, the Carbon Corridor, HREDD export readiness, LEED manufacturing operations, sustainable agriculture, and delta wildlife conservation.
              </p>

              {/* Live Read & Download Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setShowLiveReader(!showLiveReader)}
                  className="flex items-center space-x-3 bg-primary-green text-white px-7 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg cursor-pointer text-xs uppercase tracking-wider"
                >
                  <FaBookOpen />
                  <span>{showLiveReader ? "Hide Live PDF Reader" : "Live Read Full Magazine"}</span>
                </button>

                <a
                  href={magazinePdfLinks.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gray-900 text-white px-7 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg text-xs uppercase tracking-wider"
                >
                  <FaDownload />
                  <span>Download Soft Copy (PDF)</span>
                </a>

                <a
                  href={magazinePdfLinks.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#fff8f3] text-gray-800 px-5 py-4 rounded-xl font-bold hover:bg-white transition-all border border-[#dfcfc2] text-xs uppercase tracking-wider"
                >
                  <FaExternalLinkAlt size={14} />
                  <span>Open in Google Drive</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#dfcfc2] flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider text-gray-600">
                <span>Managing Editor: Shaquib Quoreshi</span>
                <span>•</span>
                <span>Editor & Publisher: Md. Nazrul Islam Chowdhury</span>
                <span>•</span>
                <Link href={`/magazine/${currentIssue.slug}`} className="text-primary-green hover:underline flex items-center gap-1">
                  <span>View Issue Page</span>
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>

          {/* Embedded Live PDF Reader */}
          {showLiveReader && (
            <div className="mt-10 pt-10 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-gray-900">
                    Live Magazine Reader — {currentIssue.month}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Scroll through the full 140-page print layout directly below, or open in full screen.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={magazinePdfLinks.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Full Screen Drive Viewer</span>
                  </a>
                  <a
                    href={magazinePdfLinks.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider bg-primary-green text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaDownload size={12} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
              <div className="w-full h-[80vh] min-h-[650px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-inner bg-gray-900">
                <iframe
                  src={magazinePdfLinks.previewUrl}
                  title="The Sustainability Voice Oct-Dec 2026 PDF Reader"
                  className="w-full h-full border-0"
                  allow="autoplay"
                />
              </div>
            </div>
          )}
        </div>

        {/* All Sections & Articles from the Issue */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary-green text-xs font-bold uppercase tracking-widest mb-2 block">
              Table of Contents
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display">
              Inside This Issue ({magazineData.reduce((acc, s) => acc + s.articles.length, 0)} Articles)
            </h2>
          </div>

          <div className="space-y-16">
            {magazineData.map((section, idx) => (
              <section key={idx} className="bg-[#f8ebe3] rounded-3xl p-6 md:p-10 shadow-sm border border-[#dfcfc2]">
                <div className="flex justify-between items-center mb-8 border-b border-[#dfcfc2] pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-primary-green"></div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                    {section.articles.length} {section.articles.length === 1 ? "Article" : "Articles"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.articles.map((article, articleIdx) => (
                    <Link
                      href={`/news/${article.slug}`}
                      key={articleIdx}
                      className="group flex flex-col sm:flex-row sm:items-center gap-6 bg-[#fff8f3] hover:bg-white rounded-2xl p-4 hover:shadow-xl transition-all border border-[#dfcfc2]"
                    >
                      <div className="sm:w-2/5 flex-shrink-0">
                        <div className="rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] w-full relative bg-gray-900 border border-[#dfcfc2]">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="sm:w-3/5 flex flex-col justify-center">
                        <span className="text-[#16a34a] text-xs font-black uppercase mb-2 tracking-wider">
                          {article.category}
                        </span>
                        <h4 className="text-lg md:text-xl font-bold mb-2 leading-snug group-hover:text-primary-green transition-colors font-display text-gray-900">
                          {article.title}
                        </h4>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3 font-display leading-relaxed">
                          {article.subtitle}
                        </p>
                        <p className="text-xs font-bold text-gray-800 mt-auto font-display">
                          By {article.author}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Official Issue Advertisers & Commercial Partners Showcase */}
          <div className="mt-20 pt-12 border-t-2 border-primary-green">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[#16a34a] text-xs font-black uppercase tracking-widest block mb-2">
                  Official Issue Advertisers & Commercial Partners
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900">
                  Featured Advertisements in Print
                </h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm max-w-md font-sans">
                Full-page commercial partners, institutional sponsors, and corporate brand advertisements appearing across the October–December 2026 maiden issue.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {magazineAds.map((ad, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedAd(ad)}
                  className="group bg-[#f8ebe3] p-3 sm:p-4 rounded-2xl border border-[#dfcfc2] hover:border-primary-green hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="overflow-hidden rounded-xl border border-[#d2c0b2] bg-white aspect-[3/4] mb-3 relative">
                    <img
                      src={ad.imageUrl}
                      alt={ad.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1 backdrop-blur-2xs">
                      <FaExpand size={12} />
                      <span>View Ad</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-[#16a34a] mb-1">
                      <span>{ad.tag}</span>
                      <span className="text-gray-500 font-bold">P.{ad.page}</span>
                    </div>
                    <p className="text-xs font-bold font-display text-gray-900 line-clamp-1 group-hover:text-primary-green transition-colors">
                      {ad.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Modal */}
          {selectedAd && (
            <div
              onClick={() => setSelectedAd(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl max-h-[92vh] bg-white rounded-2xl p-3 sm:p-5 shadow-2xl flex flex-col"
              >
                <button
                  onClick={() => setSelectedAd(null)}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors cursor-pointer z-10"
                  aria-label="Close"
                >
                  <FaTimes size={14} />
                </button>
                <img
                  src={selectedAd.imageUrl}
                  alt={selectedAd.title}
                  className="w-full h-auto max-h-[82vh] object-contain mx-auto rounded-lg"
                />
                <div className="pt-3 text-center text-xs font-bold text-gray-700">
                  {selectedAd.title} • October–December 2026 Print Edition (Page {selectedAd.page})
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
