import React from "react";
import { teamMembers } from "@/data/mockData";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function EditorialBoardPage() {
  const chiefEditor = teamMembers[0];
  const allMembers = teamMembers.slice(1);

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111] antialiased">
      {/* Editorial Masthead Bar */}
      <section className="border-b border-black/15 bg-[#F7F5F0] py-12 md:py-16">
        <div className="master-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/15">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#D92B2B] mb-2">
                <span>TSV MASTHEAD</span>
                <span>•</span>
                <span>REG. NO. 48/2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight text-[#111111] uppercase">
                Editorial Board
              </h1>
            </div>
            <div className="text-right md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
                VOLUME 01 • ISSUE 01
              </span>
              <span className="text-sm font-serif text-gray-700 italic">
                October–December 2026 Edition
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="master-container py-14 space-y-16">
        {/* Navigation Back */}
        <div className="flex items-center justify-between pb-4 border-b border-black/15 text-xs font-mono uppercase tracking-widest">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-[#D92B2B] transition-colors"
          >
            <FaArrowLeft size={10} />
            <span>Back to Main Broadside</span>
          </Link>
          <span className="text-gray-500">12 Officers &amp; Fellows of the Press</span>
        </div>

        {/* 1. Chief Editor & Managing Editor (Grand Spotlight) */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Portrait Frame */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] border border-black/15 bg-[#F7F5F0] overflow-hidden relative group">
                <img
                  src={chiefEditor.imageUrl}
                  alt={chiefEditor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Editorial Title & Byline */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 border border-[#D92B2B] text-[#D92B2B] px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
                <span>★ Editorial Direction</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#111111] leading-tight">
                {chiefEditor.name}
              </h2>

              <p className="text-base sm:text-lg font-mono uppercase tracking-wider text-[#1a4d2e] font-bold">
                {chiefEditor.role}
              </p>

              <div className="pt-4 border-t border-black/15 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-gray-600 uppercase tracking-wider">
                <span>The Sustainability Voice</span>
                <span>•</span>
                <span>Publication Governance</span>
                <span>•</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Editorial Panel & Support Team (Uniform Broadsheet Grid: Image, Name, Role) */}
        <section>
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D92B2B] block mb-1">
                MEMBERS OF THE BOARD &amp; OPERATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
                Officers of the Press
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-500 hidden sm:block">
              {allMembers.length} Appointed Members
            </span>
          </div>

          {/* 12-Column Broadsheet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allMembers.map((member, idx) => (
              <div
                key={idx}
                className="border border-black/15 bg-white p-5 flex flex-col justify-between group hover:border-black transition-colors"
              >
                <div>
                  {/* Portrait Frame */}
                  <div className="aspect-[4/5] w-full border border-black/15 bg-[#F7F5F0] overflow-hidden mb-4 relative">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top print-grayscale transition-all duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F5F0] text-[#111111] border border-dashed border-black/20 p-4">
                        <span className="text-4xl font-display font-light text-gray-400">
                          {member.name.charAt(0)}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mt-2">
                          TSV Fellow
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h4 className="text-lg font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-snug">
                    {member.name}
                  </h4>
                </div>

                {/* Designation / Role */}
                <div className="pt-3 mt-3 border-t border-black/10">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-600 font-semibold line-clamp-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Broadsheet Colophon / Publication Imprint */}
        <section className="border-t-2 border-black pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono">
            <div className="md:col-span-4 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#D92B2B] block">
                [COLOPHON &amp; IMPRINT]
              </span>
              <p className="font-bold text-[#111111] text-sm font-display">
                The Sustainability Voice
              </p>
              <p className="text-gray-600 leading-relaxed font-sans">
                A quarterly journal and broadsheet magazine published in Dhaka, Bangladesh. Dedicated to sustainable business strategy, climate resilience, and industrial policy.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block">
                [REGISTERED OFFICE &amp; PRESS]
              </span>
              <p className="text-gray-700 leading-relaxed">
                Shop-18, Level-5, Azimpur Aadhunik Nagar Market, Azimpur, Lalbagh, Dhaka-1205.
              </p>
              <p className="text-gray-600">
                Printed by: Redaz Printers &amp; Packages, 314/D Elephant Road, Dhaka.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block">
                [DISPATCH &amp; CORRESPONDENCE]
              </span>
              <p className="text-gray-700">
                Editorial Desk: <span className="text-[#111111] font-semibold">editor@sustainabilityvoice.com</span>
              </p>
              <p className="text-gray-700">
                Direct Line: <span className="text-[#111111] font-semibold">+880 1713 039784</span>
              </p>
              <p className="text-gray-500">
                Quarterly Print Run: Registration No. 48/2026
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
