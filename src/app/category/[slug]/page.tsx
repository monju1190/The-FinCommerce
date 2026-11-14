import React from "react";
import { categories, magazineData, NewsArticle } from "@/data/mockData";
import { HOME_SECTIONS, SECTION_SLUG_ALIASES } from "@/data/sectionsConfig";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const canonicalSlug = SECTION_SLUG_ALIASES[slug] || slug;
  const homeSection = HOME_SECTIONS.find((s) => s.slug === canonicalSlug);
  const categoryInfo = categories.find((c) => c.slug === slug);

  if (!homeSection && !categoryInfo) {
    notFound();
  }

  const allArticles = magazineData.flatMap((section) => section.articles);

  let categoryArticles: NewsArticle[];
  let displayTitle: string;
  let displayDescription: string;

  if (homeSection) {
    categoryArticles = homeSection.articleSlugs
      .map((s) => allArticles.find((a) => a.slug === s))
      .filter((a): a is NewsArticle => Boolean(a));
    displayTitle = homeSection.title;
    displayDescription = homeSection.description;
  } else {
    categoryArticles = allArticles.filter(
      (a) => a.category.toLowerCase() === categoryInfo!.name.toLowerCase()
    );
    displayTitle = categoryInfo!.name;
    displayDescription = categoryInfo!.description;
  }

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
                {displayTitle}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-serif measure-readable mt-2">
                {displayDescription}
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
