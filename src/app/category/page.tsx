import React from "react";
import Link from "next/link";
import { categories } from "@/data/mockData";

export default function CategoryIndexPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
            Topics
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Explore by Category</h1>
          <p className="text-xl text-gray-500">
            Dive into our deep archives covering global markets, technological breakthroughs, and cultural phenomena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="group relative block overflow-hidden rounded-3xl h-[400px]">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary-green transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-gray-300 font-medium">
                      {category.description}
                    </p>
                  </div>
                  <div className="bg-primary-green rounded-full p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

