import React from "react";
import Link from "next/link";
import { magazineData } from "@/data/mockData";

export default function BlogIndexPage() {
  // Using all articles as mock blog posts for now
  const allPosts = magazineData.flatMap((section) => section.articles);

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-orange-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Editorial Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Latest Thinking</h1>
            <p className="text-xl text-gray-500">
              Op-eds, quick takes, and behind-the-scenes insights from our editorial team.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <input
              type="text"
              placeholder="Search blogs..."
              className="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 w-64 focus:outline-none focus:border-orange-accent transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-12">
            {allPosts.map((post, idx) => (
              <article key={idx} className="flex flex-col md:flex-row gap-8 group border-b border-gray-100 pb-12">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <span className="text-orange-accent text-xs font-bold uppercase mb-2">
                    {post.category}
                  </span>
                  <Link href={`/news/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 leading-snug group-hover:text-orange-accent transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 mb-4 line-clamp-3 leading-relaxed">
                    {post.subtitle}
                  </p>
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2uL1AJ4fWgqC8W1CjI1Yf8ji-5abe3aYsxy7muXhYEjUrL3Eg07JLHKlPjvhiPBff9njqF4LJpKjnrTzyhvfgCict_WF6RUWxCdD_28cTUrKruAg9D5UlhLIj5t7bMO_EmpXz6Eeirk9VjAinbpsmpHC_jTILATtn6aqLxpQOoACbCwEqNn4VdZs3F1Hf-35laWGV79hPMltxFCtBGQEgMS5hz75Uh0tRfTiVy9hHa6EYs0sWaDE" alt={post.author} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold">{post.author}</p>
                      <p className="text-gray-400">{post.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            {/* Pagination Mock */}
            <div className="flex justify-center space-x-2 pt-8">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-accent hover:text-white transition-colors">1</button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-accent hover:text-white transition-colors">2</button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-accent hover:text-white transition-colors">3</button>
              <span className="flex items-center justify-center px-2">...</span>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-accent hover:text-white transition-colors">8</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Newsletter */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4">The Weekly Briefing</h3>
              <p className="text-gray-500 text-sm mb-6">Get our best editorial pieces delivered straight to your inbox every Sunday.</p>
              <input type="email" placeholder="Your email address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-orange-accent" />
              <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-orange-accent transition-colors">Subscribe</button>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Economy", "AI", "Elections", "Climate", "Op-Ed", "Tech", "Global"].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold cursor-pointer hover:bg-orange-accent hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
