"use client";
import React, { useState } from "react";
import Image from "next/image";
import { magazineAds, MagazineAd } from "@/data/mockData";
import { FaExpand, FaTimes } from "react-icons/fa";

interface Props {
  adPage?: number;
  adId?: string;
  variant?: "leaderboard" | "sidebar" | "card";
  className?: string;
}

export default function MagazineAdBanner({
  adPage,
  adId,
  variant = "leaderboard",
  className = "",
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let ad: MagazineAd | undefined;
  if (adPage) {
    ad = magazineAds.find((a) => a.page === adPage);
  } else if (adId) {
    ad = magazineAds.find((a) => a.id === adId);
  } else {
    ad = magazineAds[0];
  }

  if (!ad) return null;

  // Sidebar variant (for article sidebar)
  if (variant === "sidebar") {
    return (
      <>
        <div
          className={`bg-[#f8ebe3] p-4 sm:p-5 rounded-2xl border border-[#dfcfc2] shadow-sm text-center ${className}`}
        >
          <div className="flex items-center justify-between border-b border-[#dfcfc2] pb-2 mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#16a34a]">
              Partner Feature
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
              Print Issue • P.{ad.page}
            </span>
          </div>

          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#d2c0b2] bg-white shadow-sm"
          >
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-2xs">
              <FaExpand size={11} />
              <span>View Full Ad</span>
            </div>
          </div>

          <p className="mt-2 text-[10px] text-gray-500 font-sans tracking-tight">
            Published in The Sustainability Voice (Oct–Dec 2026)
          </p>
        </div>

        {/* Full-view Modal */}
        {isModalOpen && (
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl max-h-[90vh] bg-white rounded-2xl p-2 sm:p-4 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors cursor-pointer z-10"
                aria-label="Close"
              >
                <FaTimes size={14} />
              </button>
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-auto max-h-[82vh] object-contain mx-auto rounded-lg"
              />
              <div className="pt-2 text-center text-xs font-bold text-gray-600">
                Official Advertisement • October–December 2026 Print Edition (Page {ad.page})
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Leaderboard banner (for between sections on Homepage)
  return (
    <>
      <div
        className={`w-full my-10 md:my-16 ${className}`}
        data-purpose="magazine-advertisement"
      >
        <div className="bg-[#f8ebe3] border border-[#dfcfc2] rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
          {/* Header label */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dfcfc2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-700 font-sans">
                Official Advertisement • Oct–Dec 2026 Print Edition
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/70 px-2.5 py-0.5 rounded-full border border-[#e3d3c7]">
              Magazine Page {ad.page}
            </span>
          </div>

          {/* Ad Image Container */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#d2c0b2] bg-white shadow-md max-w-3xl mx-auto"
          >
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full max-h-[380px] sm:max-h-[480px] md:max-h-[560px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs sm:text-sm font-bold gap-2 backdrop-blur-2xs">
              <FaExpand size={13} />
              <span>Click to view full-page advertisement</span>
            </div>
          </div>

          <div className="pt-3 text-center">
            <span className="text-[10px] sm:text-xs text-gray-600 font-sans tracking-wide">
              Featured in The Sustainability Voice • Issue 1, Volume 1 • For advertising inquiries, contact{" "}
              <a href="mailto:editor@sustainabilityvoice.com" className="text-primary-green font-bold underline hover:text-gray-900">
                editor@sustainabilityvoice.com
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Full-view Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl max-h-[92vh] bg-white rounded-2xl p-2 sm:p-4 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <FaTimes size={14} />
            </button>
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-auto max-h-[84vh] object-contain mx-auto rounded-lg"
            />
            <div className="pt-2 text-center text-xs font-bold text-gray-700">
              Official Advertisement • The Sustainability Voice Print Edition (Page {ad.page})
            </div>
          </div>
        </div>
      )}
    </>
  );
}

