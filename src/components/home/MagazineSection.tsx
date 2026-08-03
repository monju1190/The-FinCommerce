"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MagazineSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const covers = [
    { month: "August 2026", img: "/magazine cover/1.png" },
    { month: "July 2026", img: "/magazine cover/2.png" },
    { month: "June 2026", img: "/magazine cover/image.png" },
    { month: "May 2026", img: "/magazine cover/image copy.png" },
    { month: "April 2026", img: "/magazine cover/image copy 2.png" },
    { month: "March 2026", img: "/magazine cover/image copy 3.png" },
    { month: "February 2026", img: "/magazine cover/1.png" },
    { month: "January 2026", img: "/magazine cover/2.png" }
  ];

  return (
    <section className="mb-16 mt-8" data-purpose="magazine-section">
      <div className="flex justify-between items-end mb-6 border-b-2 border-gray-300 pb-2">
        <h2 className="text-2xl font-black font-display tracking-tight text-gray-900">The magazine</h2>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 flex items-center justify-center border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={12} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 flex items-center justify-center border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
          <Link href="/magazine" className="hidden md:block">
            <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
              View All Issues
            </span>
          </Link>
        </div>
      </div>

      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto pb-6 custom-scrollbar hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {covers.map((cover, idx) => (
          <Link href={`/magazine/${cover.month.toLowerCase().replace(' ', '-')}`} key={idx} className="group cursor-pointer flex-shrink-0 w-32 md:w-40 lg:w-48">
            <div className="overflow-hidden mb-3 border border-gray-300 shadow-sm relative">
              <img
                alt={`Magazine Cover ${cover.month}`}
                className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                src={cover.img}
              />
            </div>
            <h4 className="font-bold text-xs md:text-sm font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mt-2">
              {cover.month}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
