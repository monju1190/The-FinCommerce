import React from "react";
import { recentEditions, magazineData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import DigitalEditionReader from "@/components/shared/DigitalEditionReader";

export default async function MagazineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentEdition = recentEditions.find((e) => e.slug === slug);

  if (!currentEdition) {
    notFound();
  }

  const allArticles = magazineData.flatMap((s) => s.articles);

  return (
    <main className="bg-[#F7F5F0] text-[#111111] min-h-screen py-10 md:py-16 antialiased">
      <div className="master-container space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-4 border-b border-black/15 text-xs font-mono uppercase tracking-wider">
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors font-bold"
          >
            <FaArrowLeft size={10} />
            <span>Back to All Editions</span>
          </Link>
          <span className="text-gray-500">{currentEdition.issueNumber}</span>
        </div>

        {/* Edition Hero Spotlight */}
        <div className="border border-black/15 bg-white p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Cover Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] border border-black/15 bg-[#111111] p-2 relative group">
                <img
                  src={currentEdition.imageUrl}
                  alt={currentEdition.month}
                  className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Edition Metadata */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 border border-[#1a4d2e] text-[#1a4d2e] px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
                <span>★ {currentEdition.issueNumber}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-[#111111]">
                {currentEdition.month}
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-serif measure-readable">
                {currentEdition.subtitle}
              </p>

              <div className="pt-4 border-t border-black/15 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-gray-600 uppercase tracking-wider">
                <span>The Sustainability Voice</span>
                <span>•</span>
                <span>{allArticles.length} Digital Articles</span>
                <span>•</span>
                <span>Quarterly Edition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Locked Digital Soft Copy Reader (Pages 1–4 Preview, Pages 5–140 Locked) */}
        <DigitalEditionReader
          editionTitle={currentEdition.month}
          issueNumber={currentEdition.issueNumber}
        />

        {/* Issue Sections and Articles */}
        <div className="space-y-12">
          {magazineData.map((section, idx) => (
            <section key={idx} className="border border-black/15 bg-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-black/15 gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#D92B2B] font-bold">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold font-display uppercase text-[#111111]">
                    {section.title}
                  </h2>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                  [{section.articles.length} {section.articles.length === 1 ? "Article" : "Articles"}]
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.articles.map((article, artIdx) => (
                  <Link
                    key={artIdx}
                    href={`/news/${article.slug}`}
                    className="group flex flex-col sm:flex-row gap-5 p-4 border border-black/10 hover:border-black transition-colors bg-[#F7F5F0]"
                  >
                    <div className="w-full sm:w-36 aspect-[16/10] sm:aspect-square flex-shrink-0 overflow-hidden border border-black/15 bg-gray-200">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover print-grayscale transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#D92B2B] block mb-1">
                          {article.category}
                        </span>
                        <h3 className="text-base font-bold font-display text-[#111111] group-hover:text-[#D92B2B] transition-colors leading-snug line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs font-serif text-gray-600 line-clamp-2 mt-1.5">
                          {article.subtitle}
                        </p>
                      </div>
                      <div className="pt-2 mt-2 border-t border-black/10 text-[10px] font-mono text-gray-500 uppercase flex justify-between">
                        <span>By {article.author}</span>
                        <span className="font-bold text-[#111111] group-hover:text-[#D92B2B]">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
