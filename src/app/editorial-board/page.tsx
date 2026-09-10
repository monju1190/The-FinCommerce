import React from "react";
import { teamMembers } from "@/data/mockData";

export default function EditorialBoardPage() {
  return (
    <main className="text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary-green">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl pt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Our Editorial Board
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            The minds behind The Sustainability Voice.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-12 py-20">
        <section id="team" className="mb-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl font-bold mb-6">Meet the Board</h2>
            <p className="text-gray-600 leading-relaxed">
              Our editorial board consists of seasoned veterans and sustainability professionals dedicated to advancing informed dialogue on environment, climate change, and responsible business.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            {/* Left: Rectangular Image */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] relative">
                <img
                  src={teamMembers[0].imageUrl}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right: Text and Visionary Statement */}
            <div className="w-full md:w-3/5 text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 font-display">
                {teamMembers[0].name}
              </h3>
              <p className="text-[#16a34a] font-bold uppercase tracking-widest text-sm mb-6">
                {teamMembers[0].role}
              </p>
              
              <div className="relative">
                <svg className="absolute -top-4 -left-6 w-12 h-12 text-gray-200 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-gray-700 text-xl md:text-2xl font-light italic leading-relaxed relative z-10 pl-6 border-l-4 border-[#16a34a]">
                  "Sustainability is no longer a peripheral corporate initiative; it is the core engine of future-proof growth. Our mission is to illuminate the path forward, ensuring that business success and environmental stewardship go hand in hand."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
