"use client";
import React, { useState } from "react";
import Link from "next/link";
import { recentEditions, magazineData, magazinePdfLinks } from "@/data/mockData";
import { FaBookOpen, FaDownload, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function MagazineArchivePage() {
  const [showLiveReader, setShowLiveReader] = useState(false);
  const currentIssue = recentEditions[0];

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-3 block">
            The Sustainability Voice • Digital Edition
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-display tracking-tight">
            {currentIssue.month}
          </h1>
          <p className="text-lg text-gray-600">
            {currentIssue.issueNumber} • {currentIssue.registrationNo}
          </p>
        </div>

        {/* Featured Maiden Issue Showcase */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Cover Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[#0b101e] group">
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

              <p className="text-gray-600 text-lg leading-relaxed">
                Explore the inaugural quarterly edition of <strong>The Sustainability Voice</strong>—featuring 19 sections and 33 in-depth articles on Dhaka&apos;s integrated stormwater master plan, Bangladesh Bank&apos;s decarbonisation financing, the Carbon Corridor, HREDD export readiness, LEED manufacturing operations, sustainable agriculture, and delta wildlife conservation.
              </p>

              {/* Live Read & Download Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setShowLiveReader(!showLiveReader)}
                  className="flex items-center space-x-3 bg-primary-green text-white px-7 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg cursor-pointer"
                >
                  <FaBookOpen />
                  <span>{showLiveReader ? "Hide Live PDF Reader" : "Live Read Full Magazine"}</span>
                </button>

                <a
                  href={magazinePdfLinks.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gray-900 text-white px-7 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
                >
                  <FaDownload />
                  <span>Download Soft Copy (PDF)</span>
                </a>

                <a
                  href={magazinePdfLinks.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-100 text-gray-800 px-5 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all border border-gray-200"
                >
                  <FaExternalLinkAlt size={14} />
                  <span>Open in Google Drive</span>
                </a>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider text-gray-500">
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
              <section key={idx} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-primary-green"></div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {section.articles.length} {section.articles.length === 1 ? "Article" : "Articles"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.articles.map((article, articleIdx) => (
                    <Link
                      href={`/news/${article.slug}`}
                      key={articleIdx}
                      className="group flex flex-col sm:flex-row sm:items-center gap-6 bg-gray-50/70 hover:bg-white rounded-2xl p-4 hover:shadow-xl transition-all border border-gray-100"
                    >
                      <div className="sm:w-2/5 flex-shrink-0">
                        <div className="rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] w-full relative bg-gray-100">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="sm:w-3/5 flex flex-col justify-center">
                        <span className="text-primary-green text-xs font-bold uppercase mb-2 tracking-wider">
                          {article.category}
                        </span>
                        <h4 className="text-lg md:text-xl font-bold mb-2 leading-snug group-hover:text-primary-green transition-colors font-display">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {article.subtitle}
                        </p>
                        <p className="text-xs font-bold text-gray-800 mt-auto">
                          By {article.author}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
