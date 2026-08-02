import React from "react";
import Link from "next/link";
import { recentEditions } from "@/data/mockData";

export default function MagazineSection() {
  return (
    <section className="mb-16" data-purpose="magazine-section">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200">
        <div className="flex items-center space-x-3 pb-2 border-b-2 border-orange-500">
          <div className="w-2 h-2 rounded-full bg-orange-accent"></div>
          <h2 className="text-2xl font-bold">The Magazine</h2>
        </div>
        <Link href="/magazine">
          <button className="bg-orange-accent text-white px-4 py-1 rounded-full text-xs font-bold hover-orange transition-colors">
            See All
          </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentEditions.map((edition, index) => (
          <Link href="/magazine" key={index} className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-4 h-64 shadow-md group-hover:shadow-xl transition-shadow">
              <img
                src={edition.imageUrl}
                alt={edition.month}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold group-hover:text-orange-accent transition-colors text-center">
              {edition.month}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
