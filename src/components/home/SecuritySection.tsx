import React from "react";
import Link from "next/link";

export default function SecuritySection() {
  return (
    <section className="mb-16" data-purpose="security-category">
      <div className="flex justify-between items-end mb-6 border-b-4 border-gray-900 pb-2">
        <h2 className="text-4xl font-black font-display tracking-tight text-gray-900">Security</h2>
        <Link href="/category/security">
          <span className="text-gray-900 text-xs font-bold uppercase cursor-pointer hover:underline tracking-widest">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
        {/* Main Security Story */}
        <div className="lg:col-span-8 flex flex-col h-full border-r-0 lg:border-r border-gray-300 lg:pr-8">
          <Link href="/news/security-1" className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden mb-4 relative w-full flex-1 min-h-[450px]">
              <img
                alt="Security Main"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYvLK1xu5fPHzDHLQe4LuNAgeEKWQ4ihAwIYZPopX_Mvianp-FPpetk5AgMyZ6_hc-7b8sZXLqYm_UgXv_BvUTMaUEPwG5XH8aVuXK442LnfSv2pId6GwCJ0pnww1bOHD3Lcb5OBrXs0Ym-34XnWfae97uWTJ0usc_Brl02qi-TGKLXPdKKLI7WRdW85DGDHv9XXSem50szjvUoo_RTdIEqKebOFovGf-NntyKsy7PlbetiTL9qoI"
              />
            </div>
            <div className="mt-4">
              <span className="text-[#9e2a2b] text-xs font-black uppercase tracking-widest mb-2 block">
                Network
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mt-1 mb-4 leading-tight font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors">
                The Pulse of Global Markets and Enterprise
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-display">
                To spread the word, the company embarked on a mass marketing drive, TV campaigns launched in the platform's key markets. Security paradigms are shifting rapidly as remote work becomes the permanent norm.
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>By Nisl Nyung</span>
                <span>&bull;</span>
                <span>9d ago</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Sidebar List */}
        <div className="lg:col-span-4 flex flex-col">
          <Link href="/news/security-2" className="group cursor-pointer pb-6 mb-6 border-b border-gray-300">
            <div className="overflow-hidden mb-3 relative w-full h-40">
              <img
                alt="security item"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNddQEbjHqSkNo7DVagXtGkS-HXKL_OWmo6uDFAxzlTmw-GtLw9LEB2sE4E9e_MfNiKB6CrYb-7Ngbw9419fHx3px7qVvj17tngiyIX7q634UMWzjDNmvv31GWLD0-dflVQe_KH-EEvWlAj3p6nrcn3GLOqCzpUWLjc933l7LsBSrQNnaM2FG1Yupk4FlM8nIjQFPTsiusBdMLb6bYj4C3iJs2MsmUM5yFG34BIknt4xy16Ja4BlU"
              />
            </div>
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Virtual Reality
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              AI and Marketing: Unlocking Customer Insights
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              15d ago
            </div>
          </Link>

          <Link href="/news/security-3" className="group cursor-pointer pb-6 mb-6 border-b border-gray-300">
            <div className="overflow-hidden mb-3 relative w-full h-40">
              <img
                alt="security item"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeJnk9VxMUUTRu8-RYAxZbBYWI9oIeNT7t5UJ3XpzHVErceBMRl-ejl2t0nS17IHrBJp4lUoLNtOv2GcucgFC2D7w6VBxWrWCyKpnJMwW8B6AgYPy_wiO7SMcs8HRKB7z1-WbYrXqSWHCB_eAar4EHuowzIRLASZ5ghZe8iJ_T66EyZruperWPGPUTOAgUYvai67o3tcobFtCCwWNMIlWWsJeWseVQ80QrbIj1C2aOUtUtururGxI"
              />
            </div>
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              Trips
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Eco-Tourism: Traveling Responsibly and Sustainably
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              20d ago
            </div>
          </Link>

          <Link href="/news/security-4" className="group cursor-pointer pb-6 mb-6">
            <div className="overflow-hidden mb-3 relative w-full h-40">
              <img
                alt="security item"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4IxIsYXVF0iI2-WlUQEGum6k1pA8gbljoLjoYsGdaBW96CIG2CNTzpX-P4E7DtCR9Q8OqT0NNQ61qNN_w7HhnJfaknFzAr-YW6Vb47JJZthGg-lhwYNrl0B7oKtw-kXTtgI5Nm0-YkPgYH6T26zuQOXP-H2JbQgOsXuNwRp8XnysY9OJKbIt1ByedbTwuSyECRuVXhMOXxqBbc9SElw-lyYnrJkhcGEAhKcKUo5FqblOTgIsosJU"
              />
            </div>
            <span className="text-[#9e2a2b] text-[10px] font-black uppercase tracking-widest mb-2 block">
              AI Powered
            </span>
            <h4 className="font-bold text-xl leading-snug font-display text-gray-900 group-hover:text-[#1a2c5a] transition-colors mb-2">
              Hidden Gems: Underrated Travel Destinations Around the World
            </h4>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              23d ago
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
