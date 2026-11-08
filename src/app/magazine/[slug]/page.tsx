"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import { magazineData, recentEditions, magazinePdfLinks } from "@/data/mockData";
import { FaBookOpen, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function SingleMagazinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [showLiveReader, setShowLiveReader] = useState(true);

  const currentEdition =
    recentEditions.find((ed) => ed.slug === slug) || recentEditions[0];

  return (
    <main className="container mx-auto px-4 md:px-12 py-12 min-h-screen">
      {/* Magazine Header */}
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-gray-50 p-8 md:p-14 rounded-[2rem] mb-12 shadow-inner border border-gray-200">
        <div className="w-full max-w-[340px] lg:w-1/3 flex-shrink-0">
          <img
            src={currentEdition.imageUrl}
            alt={currentEdition.month}
            className="w-full rounded-2xl shadow-2xl border border-gray-200"
          />
        </div>
        <div className="lg:w-2/3">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-3 block">
            {currentEdition.issueNumber || "Digital Edition"} • {currentEdition.registrationNo}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-display tracking-tight">
            {currentEdition.month}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-display">
            Cover Story: {currentEdition.subtitle}
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl">
            Read the complete October–December 2026 maiden issue of <strong>The Sustainability Voice</strong> online using the live interactive reader below, download the full high-resolution PDF soft copy, or browse every individual article by section.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowLiveReader(!showLiveReader)}
              className="flex items-center space-x-3 bg-primary-green text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-colors text-base shadow-lg cursor-pointer"
            >
              <FaBookOpen />
              <span>{showLiveReader ? "Hide Live PDF Reader" : "Live Read Magazine PDF"}</span>
            </button>
            <a
              href={magazinePdfLinks.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors text-base shadow-lg"
            >
              <FaDownload />
              <span>Download Soft Copy (PDF)</span>
            </a>
            <a
              href={magazinePdfLinks.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-gray-800 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-base border border-gray-300"
            >
              <FaExternalLinkAlt size={14} />
              <span>Open in Drive</span>
            </a>
          </div>
        </div>
      </div>

      {/* Live Embedded PDF Reader */}
      {showLiveReader && (
        <section className="mb-16 bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <span className="text-primary-green text-xs font-bold uppercase tracking-widest block mb-1">
                Interactive Soft Copy
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display">
                Live Magazine Reader — {currentEdition.month}
              </h2>
            </div>
            <div className="flex gap-3">
              <a
                href={magazinePdfLinks.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-lg flex items-center gap-2"
              >
                <FaExternalLinkAlt size={12} />
                <span>Full Screen</span>
              </a>
              <a
                href={magazinePdfLinks.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider bg-primary-green text-white px-4 py-2.5 rounded-lg flex items-center gap-2"
              >
                <FaDownload size={12} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <div className="w-full h-[82vh] min-h-[650px] rounded-2xl overflow-hidden border border-gray-300 bg-gray-900">
            <iframe
              src={magazinePdfLinks.previewUrl}
              title={`The Sustainability Voice - ${currentEdition.month}`}
              className="w-full h-full border-0"
              allow="autoplay"
            />
          </div>
        </section>
      )}

      {/* Sections */}
      {magazineData.map((section, idx) => (
        <section key={idx} className="mb-16">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 pb-2 border-b-2 border-primary-green">
              <div className="w-2 h-2 rounded-full bg-primary-green"></div>
              <h2 className="text-3xl font-bold font-display">{section.title}</h2>
            </div>
            <Link href="/news">
              <span className="text-primary-green text-xs font-bold uppercase cursor-pointer hover:underline">
                View All
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {section.articles.map((article, articleIdx) => (
              <Link
                href={`/news/${article.slug}`}
                key={articleIdx}
                className="group flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-2xl p-4 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden aspect-[16/10] md:aspect-[4/3] w-full bg-gray-100">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 flex flex-col justify-center">
                  <span className="text-primary-green text-xs font-bold uppercase mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary-green transition-colors font-display">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {article.subtitle}
                  </p>
                  <p className="text-xs font-bold text-gray-700 mt-auto">
                    By {article.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
