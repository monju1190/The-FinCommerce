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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6 shadow-lg border-4 border-transparent group-hover:border-primary-green transition-all duration-300">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary-green transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
