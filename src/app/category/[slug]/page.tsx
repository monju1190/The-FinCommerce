import React from "react";
import { categories, magazineData, magazinePdfLinks } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";

const relatedCategoryGroups: Record<string, string[]> = {
  "top-stories": ["top stories", "culture & myth", "editorial"],
  "industry-practices": ["industry practices", "rule book", "governance", "frontrunner"],
  "sustainable-finance": ["sustainable finance", "friends in need", "standards"],
  "standards": ["standards", "sustainable finance", "playbook"],
  "home-and-the-world": ["home & the world"],
  "playbook": ["playbook", "standards", "rule book"],
  "frontrunner": ["frontrunner", "esg award", "industry practices"],
  "esg-award": ["esg award", "frontrunner"],
  "sustainable-cities": ["sustainable cities", "top stories", "waste management"],
  "agriculture": ["agriculture", "sustainable cities"],
  "technology": ["technology", "playbook"],
  "waste-management": ["waste management", "sustainable cities"],
  "friends-in-need": ["friends in need", "sustainable finance"],
  "rule-book": ["rule book", "governance", "industry practices"],
  "governance": ["governance", "rule book", "industry practices"],
  "wildlife": ["wildlife", "culture & myth"],
  "culture-and-myth": ["culture & myth", "wildlife"],
  "health": ["health", "wildlife"],
};

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const categoryInfo = categories.find((c) => c.slug === slug);
  if (!categoryInfo) {
    notFound();
  }

  const allArticles = magazineData.flatMap((section) => section.articles);
  const targetCategories = relatedCategoryGroups[slug] || [
    categoryInfo.name.toLowerCase(),
  ];

  // Primary matches first, then related matches
  const primaryArticles = allArticles.filter(
    (a) => a.category.toLowerCase() === categoryInfo.name.toLowerCase()
  );
  const secondaryArticles = allArticles.filter(
    (a) =>
      a.category.toLowerCase() !== categoryInfo.name.toLowerCase() &&
      targetCategories.includes(a.category.toLowerCase())
  );
  const categoryArticles = [...primaryArticles, ...secondaryArticles];

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Category Hero */}
      <div className="relative h-[42vh] min-h-[320px] flex items-center justify-center">
        <img
          src={categoryInfo.imageUrl}
          alt={categoryInfo.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-primary-green text-xs font-extrabold uppercase tracking-widest mb-3 block">
            The Sustainability Voice • Oct–Dec 2026 Section
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            {categoryInfo.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/magazine#live-reader"
              className="inline-flex items-center gap-2 bg-primary-green hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Live Read Full Issue
            </Link>
            <a
              href={magazinePdfLinks.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-16">
        {categoryArticles.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-400">
              No articles found in this section.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article, idx) => (
              <Link
                href={`/news/${article.slug}`}
                key={idx}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden h-60 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary-green text-white px-3 py-1 text-xs font-bold uppercase rounded-md shadow-lg">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 pt-4 border-t border-gray-100">
                    <span className="text-gray-700 truncate max-w-[65%]">
                      {article.author}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
