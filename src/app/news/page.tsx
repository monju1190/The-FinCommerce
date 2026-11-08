"use client";
import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { magazineData, magazinePdfLinks } from "@/data/mockData";
import { FaBolt, FaBookOpen, FaDownload, FaSearch, FaTimes } from "react-icons/fa";

function NewsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const allNews = useMemo(() => {
    return magazineData.flatMap((section) => section.articles);
  }, []);

  const filteredNews = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return allNews;
    return allNews.filter((art) => {
      return (
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q)
      );
    });
  }, [searchTerm, allNews]);

  const featuredNews = filteredNews[0];
  const remainingNews = filteredNews.slice(1);

  const nationalAndGlobalBriefs = [
    {
      time: "National Policy",
      title: "Bangladesh slashes solar import tax burden from 17% down to 1% for 180 days.",
      slug: "bangladesh-national-sustainability-news-solar-duties-climate-finance"
    },
    {
      time: "Rooftop Solar",
      title: "Bangladesh guarantees Tk 10.50 per unit for surplus rooftop solar energy fed to grid.",
      slug: "bangladesh-national-sustainability-news-solar-duties-climate-finance"
    },
    {
      time: "ESG Awards",
      title: "32 companies & 3 individuals honored at Bangladesh's inaugural ESG Excellence Awards.",
      slug: "verifiable-impact-bangladesh-inaugural-esg-excellence-awards"
    },
    {
      time: "EU Regulation",
      title: "European Union bans large companies from destroying unsold clothing and footwear.",
      slug: "global-top-stories-eu-unsold-clothing-ban-german-renewables"
    },
    {
      time: "Carbon Markets",
      title: "Google contracts 1M carbon credits from rice methane reduction across 100,000 hectares.",
      slug: "global-business-strategy-rice-methane-credits-green-innovation"
    },
    {
      time: "Clean Energy",
      title: "German wind and solar output reaches 44%, overtaking fossil fuels for the first time.",
      slug: "global-top-stories-eu-unsold-clothing-ban-german-renewables"
    }
  ];

  const handleClearSearch = () => {
    setSearchTerm("");
    router.push("/news");
  };

  return (
    <main className="bg-[var(--color-ft-pink)] text-gray-900 min-h-screen pt-10 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        {/* Top Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b-2 border-primary-green pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-primary-green"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900">
              All Articles & News — Oct–Dec 2026 Issue
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/magazine/october-december-2026"
              className="flex items-center gap-2 bg-primary-green text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-primary-light transition-colors shadow-sm"
            >
              <FaBookOpen size={12} />
              <span>Live Read Issue PDF</span>
            </Link>
            <a
              href={magazinePdfLinks.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
            >
              <FaDownload size={12} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#f8ebe3] p-4 sm:p-6 rounded-2xl border border-[#dfcfc2] mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-lg">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search across all 33 articles..."
              className="w-full pl-11 pr-10 py-3 bg-[#fff8f3] border border-[#dfcfc2] rounded-xl text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-primary-green transition-colors font-display"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                aria-label="Clear Search"
              >
                <FaTimes size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4 text-xs font-bold text-gray-700">
            <span>
              Showing {filteredNews.length} of {allNews.length} articles
            </span>
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="text-primary-green hover:underline cursor-pointer font-bold"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <div className="bg-[#f8ebe3] border border-[#dfcfc2] rounded-3xl p-12 text-center my-8">
            <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">
              No articles match &quot;{searchTerm}&quot;
            </h3>
            <p className="text-gray-600 mb-6 font-display">
              Please check your spelling or try searching for keywords like &quot;Dhaka&quot;, &quot;Buriganga&quot;, &quot;Solar&quot;, or &quot;LEED&quot;.
            </p>
            <button
              onClick={handleClearSearch}
              className="bg-primary-green text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-primary-light transition-colors"
            >
              Reset Search & View All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-10">
              {/* Featured Top Story (Only shown when not actively filtering or if results exist) */}
              {featuredNews && (
                <Link href={`/news/${featuredNews.slug}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden h-[42vh] min-h-[360px] bg-gray-900 shadow-xl border border-[#dfcfc2]">
                    <img
                      src={featuredNews.imageUrl}
                      alt={featuredNews.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full md:w-5/6">
                      <span className="bg-[#8DC63F] text-gray-900 px-3 py-1 text-[10px] font-black uppercase rounded-sm shadow-md mb-3 inline-block">
                        Featured • {featuredNews.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-[#8DC63F] transition-colors font-display">
                        {featuredNews.title}
                      </h2>
                      <p className="text-gray-200 text-sm sm:text-base line-clamp-2 font-display leading-relaxed">
                        {featuredNews.subtitle}
                      </p>
                      <p className="text-xs text-gray-300 font-bold mt-3 font-display">
                        By {featuredNews.author} • {featuredNews.date}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid of Remaining News */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {remainingNews.map((newsItem, idx) => (
                  <Link
                    href={`/news/${newsItem.slug}`}
                    key={idx}
                    className="group flex flex-col bg-[#fff8f3] p-5 rounded-2xl border border-[#dfcfc2] hover:bg-white hover:shadow-xl transition-all shadow-sm"
                  >
                    <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-gray-900 border border-[#dfcfc2]">
                      <img
                        src={newsItem.imageUrl}
                        alt={newsItem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[#16a34a] text-[10px] font-black uppercase tracking-wider mb-1.5 block">
                      {newsItem.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 leading-snug group-hover:text-primary-green transition-colors font-display text-gray-900">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2 font-display leading-relaxed flex-1">
                      {newsItem.subtitle}
                    </p>
                    <div className="pt-3 border-t border-[#dfcfc2] flex items-center justify-between text-xs font-bold text-gray-500">
                      <span className="truncate max-w-[70%] text-gray-800">
                        By {newsItem.author}
                      </span>
                      <span>{newsItem.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Sidebar - Top Briefs */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#f8ebe3] p-5 rounded-2xl border border-[#dfcfc2] shadow-sm">
                  <div className="flex items-center space-x-2 mb-4 border-b border-[#dfcfc2] pb-3">
                    <FaBolt className="text-primary-green" />
                    <h3 className="text-lg font-bold font-display text-gray-900">Key Dispatches</h3>
                  </div>

                  <div className="space-y-3">
                    {nationalAndGlobalBriefs.map((item, idx) => (
                      <Link
                        href={`/news/${item.slug}`}
                        key={idx}
                        className="block bg-[#fff8f3] p-3.5 rounded-xl border border-[#dfcfc2] hover:border-primary-green hover:bg-white transition-all shadow-2xs group"
                      >
                        <time className="text-[10px] font-black text-[#16a34a] uppercase tracking-wider mb-1 block">
                          {item.time}
                        </time>
                        <p className="text-xs font-bold text-gray-900 leading-snug font-display group-hover:text-primary-green transition-colors">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function NewsIndexPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--color-ft-pink)] p-12 text-center font-display">Loading articles...</div>}>
      <NewsContent />
    </Suspense>
  );
}
