import React from "react";
import Link from "next/link";

export default function MagazineSection() {
  const covers = [
    { month: "August 2026", img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=300&auto=format&fit=crop" },
    { month: "July 2026", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=300&auto=format&fit=crop" },
    { month: "June 2026", img: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=300&auto=format&fit=crop" },
    { month: "May 2026", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" },
    { month: "April 2026", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" },
    { month: "March 2026", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
    { month: "February 2026", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop" },
    { month: "January 2026", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300&auto=format&fit=crop" }
  ];

  return (
    <section className="mb-16 mt-8" data-purpose="magazine-section">
      <div className="flex justify-between items-end mb-6 border-b-2 border-gray-300 pb-2">
        <h2 className="text-2xl font-black font-display tracking-tight text-gray-900">The magazine</h2>
        <Link href="/magazine">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All Issues
          </span>
        </Link>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-6 custom-scrollbar">
        {covers.map((cover, idx) => (
          <Link href={`/magazine/${cover.month.toLowerCase().replace(' ', '-')}`} key={idx} className="group cursor-pointer flex-shrink-0 w-32 md:w-40 lg:w-48">
            <div className="overflow-hidden mb-3 border border-gray-300 shadow-sm relative">
              <img
                alt={`Magazine Cover ${cover.month}`}
                className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                src={cover.img}
              />
            </div>
            <h4 className="font-bold text-xs md:text-sm font-display text-gray-900 group-hover:text-primary-green transition-colors mt-2">
              {cover.month}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
