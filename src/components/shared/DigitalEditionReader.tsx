"use client";

import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaLock,
  FaBookOpen,
  FaXmark,
  FaShieldHalved,
} from "react-icons/fa6";

interface DigitalEditionReaderProps {
  editionTitle?: string;
  issueNumber?: string;
}

const PREVIEW_PAGES = [
  {
    page: 1,
    label: "Cover Page",
    src: "/magazine/oct-dec/preview/page-1.jpg",
  },
  {
    page: 2,
    label: "Inside Front Cover",
    src: "/magazine/oct-dec/preview/page-2.jpg",
  },
  {
    page: 3,
    label: "Publication Masthead",
    src: "/magazine/oct-dec/preview/page-3.jpg",
  },
  {
    page: 4,
    label: "Section Table (Contents)",
    src: "/magazine/oct-dec/preview/page-4.jpg",
  },
];

export default function DigitalEditionReader({
  editionTitle = "October–December 2026",
  issueNumber = "Issue 1, Volume 1 (Maiden Issue)",
}: DigitalEditionReaderProps) {
  // 0..3 = preview pages 1..4, 4 = locked gate (pages 5..140)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);

  const isLockedView = currentIndex >= PREVIEW_PAGES.length;
  const activePage = !isLockedView ? PREVIEW_PAGES[currentIndex] : null;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(PREVIEW_PAGES.length, prev + 1));
  };

  return (
    <section
      id="digital-reader"
      className="border border-black/15 bg-white scroll-mt-12"
      data-purpose="digital-edition-reader"
    >
      {/* Top Reader Toolbar */}
      <div className="bg-[#111111] text-[#F7F5F0] px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1a4d2e] flex items-center justify-center text-white shrink-0">
            <FaBookOpen size={14} />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8DC63F] block">
              Digital Soft Copy • Preview Mode (Pages 1–4 of 140)
            </span>
            <h3 className="text-sm sm:text-base font-bold font-display uppercase tracking-wide">
              {editionTitle} — {issueNumber}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-white/20 text-gray-300">
            <FaLock size={9} className="text-[#8DC63F]" />
            <span>Pages 5–140 Locked</span>
          </span>

          <button
            type="button"
            onClick={() => setShowDownloadModal(true)}
            className="inline-flex items-center gap-2 bg-[#1a4d2e] hover:bg-[#143d24] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer"
          >
            <FaDownload size={11} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Reader Viewport */}
      <div
        className="bg-[#EFECE6] p-4 sm:p-8 flex flex-col items-center justify-center select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        {!isLockedView && activePage ? (
          <div className="w-full max-w-2xl bg-white border border-black/20 shadow-lg relative overflow-hidden">
            <img
              src={activePage.src}
              alt={`${editionTitle} — Page ${activePage.page}: ${activePage.label}`}
              draggable={false}
              className="w-full h-auto block pointer-events-none select-none"
            />
            <div className="bg-[#111111]/90 text-[#F7F5F0] px-4 py-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
              <span>
                Page {activePage.page} of 140 • {activePage.label}
              </span>
              <span className="text-[#8DC63F]">Free Preview</span>
            </div>
          </div>
        ) : (
          /* Locked Pages Gate (After Section Table) */
          <div className="w-full max-w-2xl bg-white border-2 border-[#111111] p-8 sm:p-12 text-center space-y-6 shadow-lg">
            <div className="w-16 h-16 mx-auto bg-[#111111] text-[#8DC63F] flex items-center justify-center">
              <FaLock size={26} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D92B2B] font-bold block">
                Preview Limit Reached (Pages 05 – 140 Locked)
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold font-display uppercase text-[#111111]">
                Full Digital Edition Locked
              </h4>
              <p className="text-sm sm:text-base font-serif text-gray-700 max-w-md mx-auto leading-relaxed">
                You have viewed up to the Section Table (Page 4). The remaining
                136 pages of <strong>The Sustainability Voice</strong> Volume 01
                are currently locked.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentIndex(0)}
                className="border border-black/25 bg-[#F7F5F0] hover:border-black text-[#111111] px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Back to Cover (Page 1)
              </button>
              <button
                type="button"
                onClick={() => setShowDownloadModal(true)}
                className="bg-[#1a4d2e] hover:bg-[#111111] text-white px-6 py-3 text-xs font-mono uppercase tracking-wider font-bold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <FaDownload size={11} />
                <span>Download Full PDF</span>
              </button>
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        <div className="mt-6 w-full max-w-2xl flex flex-wrap items-center justify-between gap-4 bg-white border border-black/15 px-4 py-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold px-3 py-2 border border-black/15 disabled:opacity-35 hover:border-black transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={10} />
            <span>Prev</span>
          </button>

          {/* Page Step Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {PREVIEW_PAGES.map((p, idx) => (
              <button
                key={p.page}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1.5 text-xs font-mono font-bold border transition-colors cursor-pointer ${
                  currentIndex === idx
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-[#F7F5F0] text-[#111111] border-black/15 hover:border-black"
                }`}
              >
                P.{p.page}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setCurrentIndex(PREVIEW_PAGES.length)}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold border transition-colors cursor-pointer ${
                isLockedView
                  ? "bg-[#D92B2B] text-white border-[#D92B2B]"
                  : "bg-[#F7F5F0] text-gray-600 border-black/15 hover:border-black"
              }`}
            >
              <FaLock size={9} />
              <span>P.5–140</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={isLockedView}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold px-3 py-2 border border-black/15 disabled:opacity-35 hover:border-black transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>

      {/* "Can Be Downloaded Soon" Modal */}
      {showDownloadModal && (
        <div
          onClick={() => setShowDownloadModal(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F7F5F0] border-2 border-[#111111] max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-5"
          >
            <button
              type="button"
              onClick={() => setShowDownloadModal(false)}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 border border-black/20 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
            >
              <FaXmark size={14} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1a4d2e] font-bold">
              <FaShieldHalved size={13} />
              <span>Digital Edition Access</span>
            </div>

            <h4 className="text-2xl font-extrabold font-display uppercase text-[#111111] leading-tight">
              Can Be Downloaded Soon
            </h4>

            <p className="text-sm font-serif text-gray-700 leading-relaxed">
              The full 140-page digital soft copy of{" "}
              <strong>The Sustainability Voice (Oct–Dec 2026)</strong> is
              currently locked. Direct PDF download with instant{" "}
              <strong>Bangla QR</strong> payment verification will be available
              soon.
            </p>

            <div className="bg-white border border-black/15 p-3.5 text-xs font-mono text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>EDITION:</span>
                <span className="font-bold text-[#111111]">VOL. 01 • ISSUE 01</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="font-bold text-[#D92B2B]">LOCKED (PREVIEW ONLY)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDownloadModal(false)}
              className="w-full bg-[#111111] hover:bg-[#1a4d2e] text-white py-3 text-xs font-mono uppercase tracking-widest font-bold transition-colors cursor-pointer"
            >
              Got It — Return to Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

