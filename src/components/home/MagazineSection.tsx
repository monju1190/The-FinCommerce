import React from "react";
import Link from "next/link";
import { recentEditions } from "@/data/mockData";

export default function MagazineSection() {
  return (
    <section className="mb-16" data-purpose="magazine-section">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200">
        <div className="flex items-center space-x-3 pb-2 border-b-2 border-primary-green">
          <div className="w-2 h-2 rounded-full bg-primary-green"></div>
          <h2 className="text-2xl font-bold">The Magazine</h2>
        </div>
        <Link href="/magazine">
          <button className="bg-primary-green text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-primary-light transition-colors transition-colors">
            See All
          </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {recentEditions.slice(0, 3).map((edition, index) => (
          <Link 
            href={`/magazine/${edition.slug}`} 
            key={index} 
            className={`group cursor-pointer flex flex-col ${index === 0 ? "row-span-2 md:row-span-1" : ""}`}
          >
            <div className={`rounded-2xl overflow-hidden mb-2 md:mb-4 shadow-md group-hover:shadow-xl transition-shadow ${index === 0 ? "flex-1 md:h-64" : "h-24 sm:h-32 md:h-64"}`}>
              <img
                src={edition.imageUrl}
                alt={edition.month}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className={`font-bold group-hover:text-primary-green transition-colors text-center ${index === 0 ? "text-base md:text-xl" : "text-xs md:text-xl"}`}>
              {edition.month}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

