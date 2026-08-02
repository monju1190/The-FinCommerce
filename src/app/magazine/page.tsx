import React from "react";
import Link from "next/link";
import { recentEditions } from "@/data/mockData";

export default function MagazineArchivePage() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
            The Archives
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-display tracking-tight">Magazine Editions</h1>
          <p className="text-xl text-gray-500">
            Explore our past editions, featuring in-depth essays, cultural reviews, and comprehensive business analysis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {recentEditions.map((edition, index) => (
            <Link href={`/magazine/${edition.slug}`} key={index} className="group cursor-pointer flex flex-col">
              <div className="rounded-2xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 relative aspect-[3/4]">
                <img
                  src={edition.imageUrl}
                  alt={edition.month}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="bg-primary-green text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Read Now</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-green transition-colors text-center font-display">
                {edition.month}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
