import React from "react";
import { categories, magazineData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const relatedCategoryGroups: Record<string, string[]> = {
  "top-stories": ["top stories", "culture & myth", "editorial"],
  "industry-practices": ["industry practices", "rmg & textile", "rule book", "governance", "frontrunner"],
  "rmg-and-textile": ["rmg & textile", "industry practices"],
  "sustainable-finance": ["sustainable finance", "capital market", "friends in need", "standards"],
  "capital-market": ["capital market", "sustainable finance", "playbook"],
  "standards": ["standards", "energy & power", "sustainable finance", "playbook"],
  "energy-and-power": ["energy & power", "standards", "sustainable finance"],
  "home-and-the-world": ["home & the world"],
  "playbook": ["playbook", "standards", "rule book"],
  "frontrunner": ["frontrunner", "esg award", "industry practices"],
  "esg": ["esg", "esg award", "frontrunner", "standards", "playbook"],
  "esg-award": ["esg award", "frontrunner"],
  "sustainable-cities": ["sustainable cities", "sustainable city", "top stories", "waste management"],
  "sustainable-city": ["sustainable city", "sustainable cities", "waste management"],
  "circular-economy": ["circular economy", "waste management", "industry practices"],
  "agriculture": ["agriculture", "sustainable cities"],
  "technology": ["technology", "playbook"],
  "waste-management": ["waste management", "circular economy", "sustainable cities"],
  "friends-in-need": ["friends in need", "friend in need", "sustainable finance"],
  "friend-in-need": ["friend in need", "friends in need", "sustainable finance"],
  "rule-book": ["rule book", "governance", "industry practices"],
  "governance": ["governance", "rule book", "industry practices"],
  "wildlife": ["wildlife", "wild life & biodiversity", "culture & myth"],
  "wildlife-and-biodiversity": ["wild life & biodiversity", "wildlife", "culture & myth"],
  "wild-life-and-biodiversity": ["wild life & biodiversity", "wildlife", "culture & myth"],
  "culture-and-myth": ["culture & myth", "wildlife"],
  "health": ["health", "wildlife"],
  "cover-story": ["cover story", "sustainable cities"],
  "editorial": ["editorial"],
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
    <main className="bg-[#F7F5F0] text-[#111111] min-h-screen antialiased">
      {/* Category Broadside Header */}
      <div className="border-b border-black/15 bg-white py-10 md:py-14">
        <div className="master-container">
          <div className="mb-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 hover:text-black transition-colors font-bold"
            >
              <FaArrowLeft size={10} />
              <span>Back to Main Page</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/15">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
                {categoryInfo.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-serif measure-readable mt-2">
                {categoryInfo.description}
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-sm font-mono text-[#1a4d2e] font-bold">
                {categoryArticles.length} {categoryArticles.length === 1 ? "Article" : "Articles"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="master-container py-12 md:py-16">
        {categoryArticles.length === 0 ? (
          <div className="text-center py-20 border border-black/15 bg-white p-8">
            <h2 className="text-2xl font-bold font-display text-gray-400">
              No articles registered in this section yet.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article, idx) => (
              <Link
                href={`/news/${article.slug}`}
                key={idx}
                className="group flex flex-col bg-white border border-black/15 hover:border-black transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-200 border-b border-black/15 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover print-grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F7F5F0] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display mb-2 leading-snug group-hover:text-[#D92B2B] transition-colors text-[#111111]">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3 font-serif leading-relaxed">
                      {article.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-500 pt-3 border-t border-black/10">
                    <span className="truncate max-w-[65%]">By {article.author}</span>
                    <span className="font-bold text-[#111111] group-hover:text-[#D92B2B]">
                      Read →
                    </span>
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
