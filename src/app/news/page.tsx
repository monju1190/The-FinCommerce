import React from "react";
import Link from "next/link";
import { magazineData, magazinePdfLinks } from "@/data/mockData";
import { FaBolt, FaBookOpen, FaDownload } from "react-icons/fa";

export default function NewsIndexPage() {
  const allNews = magazineData.flatMap((section) => section.articles);
  const featuredNews = allNews[0];
  const remainingNews = allNews.slice(1);

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

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b-2 border-primary-green pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-green"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display">
              All Articles & News — Oct–Dec 2026 Issue
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/magazine/october-december-2026"
              className="flex items-center gap-2 bg-primary-green text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-primary-light transition-colors"
            >
              <FaBookOpen size={12} />
              <span>Live Read Issue PDF</span>
            </Link>
            <a
              href={magazinePdfLinks.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaDownload size={12} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-12">
            {/* Featured Top Story */}
            <Link href={`/news/${featuredNews.slug}`} className="group block mb-12">
              <div className="relative rounded-3xl overflow-hidden h-[50vh] min-h-[400px] mb-6 bg-gray-900">
                <img
                  src={featuredNews.imageUrl}
                  alt={featuredNews.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full md:w-3/4">
                  <span className="bg-primary-green text-white px-3 py-1 text-xs font-bold uppercase rounded-md shadow-lg mb-4 inline-block">
                    Cover Story • {featuredNews.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-[#8DC63F] transition-colors font-display">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-200 text-lg line-clamp-2">
                    {featuredNews.subtitle}
                  </p>
                </div>
              </div>
            </Link>

            {/* Grid of Remaining News */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {remainingNews.map((newsItem, idx) => (
                <Link href={`/news/${newsItem.slug}`} key={idx} className="group block bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                  <div className="rounded-xl overflow-hidden h-56 mb-4 bg-gray-100">
                    <img
                      src={newsItem.imageUrl}
                      alt={newsItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-primary-green text-xs font-bold uppercase mb-2 block">
                    {newsItem.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-primary-green transition-colors font-display">
                    {newsItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {newsItem.subtitle}
                  </p>
                  <p className="text-xs font-bold text-gray-500">
                    By {newsItem.author} • {newsItem.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Top Briefs */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <FaBolt className="text-primary-green" />
                <h3 className="text-xl font-bold font-display">Key Dispatches</h3>
              </div>

              <div className="space-y-4">
                {nationalAndGlobalBriefs.map((item, idx) => (
                  <Link
                    href={`/news/${item.slug}`}
                    key={idx}
                    className="block bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:border-primary-green transition-all"
                  >
                    <time className="text-[10px] font-bold text-primary-green uppercase tracking-wider mb-1 block">
                      {item.time}
                    </time>
                    <p className="text-sm font-bold text-gray-800 leading-snug font-display">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
