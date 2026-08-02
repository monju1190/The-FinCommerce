import React from "react";
import Link from "next/link";

export default function BusinessSection() {
  return (
    <section className="mb-16" data-purpose="business-category-section">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">Business</h2>
        <Link href="/category/business">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
        {/* Main Business Story */}
        <div className="lg:col-span-8 flex flex-col h-full border-r-0 lg:border-r border-gray-300 lg:pr-8">
          <Link href="/news/business-1" className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden mb-4 relative w-full flex-1 min-h-[400px]">
              <img
                alt="Business Main"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwusvvQPz_xmI8uZtR07gv2bVn0w1ME6Okp9AQxhkmrFilxHlVZxTxlDhTfPYrYBVH9JHpYMbPhu7uUlMbn0iReYaHpWsME3S7YiVdomewQUR7jnmJxH-9l3InyAusawBA-s6EU0HkqTEQkDQkKUfXCWOcsnSgjaIKfRWnJi9zHJiJpH_rGu_bbf0OlqY2VzSV3QsYi4mn7Aq-hkXyiof1ig9d93JctI40ifvFxdZpWSpgqNe31I"
              />
            </div>
            <div className="mt-4">
              <span className="text-[#9e2a2b] text-xs font-black uppercase tracking-widest mb-2 block">
                Artificial Intelligence
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mt-1 mb-4 leading-tight font-display text-gray-900 group-hover:text-primary-green transition-colors">
                Smart Homes, Smarter Living: Exploring IoT and AI
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display">
                To spread the word, the company embarked on a mass marketing drive, TV campaigns launched in the platform's key markets across Europe and North America, revolutionizing how consumers interact with their living spaces on a daily basis.
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>By David Pales</span>
                <span>&bull;</span>
                <span>23d ago</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Business Sidebar List */}
        <div className="lg:col-span-4 flex flex-col">
          {/* Item 1 */}
          <Link href="/news/business-2" className="group cursor-pointer pb-6 mb-6 border-b border-gray-300">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Startups
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-primary-green transition-colors mb-2">
              A Guide to The Rise of Gourmet Street Food: Trends and Top Picks
            </h4>
            <p className="text-gray-600 text-sm font-display mb-3 line-clamp-2">
              Investors are pouring millions into high-end mobile kitchens as consumer tastes shift toward premium convenience.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              6mo ago
            </div>
          </Link>

          {/* Item 2 */}
          <Link href="/news/business-3" className="group cursor-pointer pb-6 mb-6 border-b border-gray-300">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Virtual Reality
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-primary-green transition-colors mb-2">
              Hidden Gems: Underrated Travel Destinations Around the World
            </h4>
            <p className="text-gray-600 text-sm font-display mb-3 line-clamp-2">
              How the hospitality industry is leveraging VR to sell exotic locations to high-net-worth individuals.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              8mo ago
            </div>
          </Link>

          {/* Item 3 */}
          <Link href="/news/business-4" className="group cursor-pointer pb-6 mb-6">
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Sustainability
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-primary-green transition-colors mb-2">
              Eco-Tourism: Traveling Responsibly and Sustainably
            </h4>
            <p className="text-gray-600 text-sm font-display mb-3 line-clamp-2">
              New regulations are forcing legacy airlines to offset carbon footprints, creating a booming secondary market.
            </p>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              9mo ago
            </div>
          </Link>

          <Link href="/category/business" className="mt-auto pt-4 border-t border-gray-900 group flex items-center justify-between">
            <span className="font-bold text-sm uppercase tracking-widest text-gray-900 group-hover:text-primary-green transition-colors">See All Business</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
