import React from "react";
import Link from "next/link";
import { magazineData } from "@/data/mockData";
import { HOME_SECTIONS } from "@/data/sectionsConfig";

export default function CategoryIndexPage() {
  const allArticles = magazineData.flatMap((s) => s.articles);
  const sectionCards = HOME_SECTIONS.map((sec) => {
    const firstArticle = sec.articleSlugs
      .map((slug) => allArticles.find((a) => a.slug === slug))
      .find(Boolean);
    return {
      ...sec,
      count: sec.articleSlugs.length,
      imageUrl: firstArticle?.coverImageUrl || firstArticle?.imageUrl || "/magazine/oct-dec/tsv-oct-dec-2026-cover.jpg",
    };
  });

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
            October–December 2026 • Issue 1, Volume 1
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-display">
            Explore by Magazine Section ({sectionCards.length})
          </h1>
          <p className="text-xl text-gray-500">
            Dive into the sections of The Sustainability Voice covering sustainable finance, industry practices, urban resilience, agriculture, technology, and delta conservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectionCards.map((section) => (
            <Link
              href={`/category/${section.slug}`}
              key={section.slug}
              className="group relative block overflow-hidden rounded-3xl h-[380px] bg-gray-900"
            >
              <img
                src={section.imageUrl}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8DC63F] font-bold block mb-1">
                      {section.number} • {section.count} {section.count === 1 ? "Article" : "Articles"}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-[#8DC63F] transition-colors font-display">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 font-medium max-w-lg">
                      {section.description}
                    </p>
                  </div>
                  <div className="bg-primary-green rounded-full p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
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
