import React from "react";
import Link from "next/link";
import { magazineData } from "@/data/mockData";
import { FaBolt } from "react-icons/fa";

export default function NewsIndexPage() {
  const allNews = magazineData.flatMap((section) => section.articles);
  const featuredNews = allNews[0];
  const remainingNews = allNews.slice(1);

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        
        <div className="flex items-center space-x-3 mb-10 border-b-2 border-primary-green pb-2 inline-flex">
          <div className="w-2 h-2 rounded-full bg-primary-green"></div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Latest News</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-12">
            {/* Featured Top Story */}
            <Link href={`/news/${featuredNews.slug}`} className="group block mb-12">
              <div className="relative rounded-3xl overflow-hidden h-[50vh] min-h-[400px] mb-6">
                <img
                  src={featuredNews.imageUrl}
                  alt={featuredNews.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full md:w-3/4">
                  <span className="bg-primary-green text-white px-3 py-1 text-xs font-bold uppercase rounded-md shadow-lg mb-4 inline-block">
                    Breaking News
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary-green transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-300 text-lg line-clamp-2">
                    {featuredNews.subtitle}
                  </p>
                </div>
              </div>
            </Link>

            {/* Grid of Remaining News */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {remainingNews.map((newsItem, idx) => (
                <Link href={`/news/${newsItem.slug}`} key={idx} className="group block">
                  <div className="rounded-2xl overflow-hidden h-56 mb-4">
                    <img
                      src={newsItem.imageUrl}
                      alt={newsItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-primary-green text-xs font-bold uppercase mb-2 block">
                    {newsItem.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-primary-green transition-colors">
                    {newsItem.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {newsItem.subtitle}
                  </p>
                  <p className="text-xs font-bold text-gray-400">{newsItem.date}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Live Feed */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center space-x-2 mb-6">
                <FaBolt className="text-primary-green" />
                <h3 className="text-xl font-bold">Live Updates</h3>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {/* Mock Live Timeline Items */}
                {[
                  { time: "10:45 AM", title: "Markets open higher following tech rally." },
                  { time: "09:30 AM", title: "Central bank announces unexpected rate cut." },
                  { time: "08:15 AM", title: "Global summit reaches tentative climate agreement." },
                  { time: "Yesterday", title: "Major cybersecurity breach affects millions." },
                  { time: "Yesterday", title: "New energy sector regulations introduced." }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-primary-green text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-8 md:pl-0">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                        <time className="text-xs font-bold text-primary-green uppercase mb-1 block">{item.time}</time>
                        <p className="text-sm font-bold text-gray-800 leading-snug">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

