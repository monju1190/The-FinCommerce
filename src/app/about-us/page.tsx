import React from "react";
import { FaEye, FaBullseye, FaProjectDiagram, FaGlobe, FaLeaf, FaHandsHelping, FaNewspaper } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <main className="text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary-green">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl pt-16">
          <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4 block">
            About The Sustainability Voice
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-display">
            A platform for ideas.<br />A voice for sustainability.<br />For Future-proof Business.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            We are dedicated to advancing informed dialogue on sustainability, environment, climate change, and responsible business, bringing together leaders and practitioners to explore the challenges shaping a sustainable future.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-12 py-20 space-y-24">
        
        {/* Vision & Mission */}
        <section id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="bg-gray-50 p-10 md:p-16 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-center">
            <FaEye className="text-4xl text-primary-green mb-6" />
            <h2 className="text-3xl font-extrabold mb-6 font-display">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Shaping the future of Business and Policy through actionable sustainability insights across Bangladesh and the global market.
            </p>
          </div>
          <div className="bg-primary-green text-white p-10 md:p-16 rounded-[2rem] shadow-xl flex flex-col justify-center">
            <FaBullseye className="text-4xl text-white/80 mb-6" />
            <h2 className="text-3xl font-extrabold mb-6 font-display">Our Mission</h2>
            <p className="text-white/90 text-lg leading-relaxed font-light">
              To champion ESG integration across business and governance by delivering high-impact journalism, evidence-based policy analysis, and diverse industry perspectives that inspire informed decision-making towards achieving Sustainability in Bangladesh and on the global stage.
            </p>
          </div>
        </section>

        {/* Core Pillars */}
        <section id="core-pillars" className="max-w-6xl mx-auto pb-8">
          <div className="text-center mb-16">
            <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-4xl font-extrabold mb-6 font-display">Core Pillars Alignment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              To support our vision and mission, our publication anchors its content around three main pillars:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-primary-light/10 text-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <FaProjectDiagram size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Practical, C-suite actionable strategies to transition from reactive compliance towards Value-driven Business.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-primary-light/10 text-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandsHelping size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Policy Advocacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A constructive forum to bridge private sector insights with public policy design for Future-proof growth.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-primary-light/10 text-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Rooted in Bangladesh,<br/>Reaching the World</h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Bridging Homegrown Innovation and enterprise dynamics with international ESG frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Focus */}
        <section id="editorial-focus" className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
                Topics We Cover
              </span>
              <h2 className="text-4xl font-extrabold mb-6 font-display">Our Editorial Focus</h2>
              <p className="text-gray-600 text-lg">
                The Sustainability Voice covers the most important sustainability issues shaping Bangladesh and the world, creating a powerful platform for organizations, brands and leaders committed to a sustainable future.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Sustainability & Climate Action", "ESG & Responsible Business", 
                "Green & Sustainable Finance", "Circular Economy & Waste Management", 
                "Renewable Energy & Energy Transition", "Corporate Sustainability & Governance", 
                "Carbon Emissions & Decarbonisation", "Environment & Biodiversity", 
                "Sustainable Agriculture & Food Security", "Decent Work & Inclusive Growth", 
                "Green Technology & Innovation", "Sustainable Cities & Communities", 
                "Blue Economy & Ocean Sustainability", "Human Rights & Social Sustainability", 
                "Resource Efficiency & Sustainable Production", "Pollution Prevention & Clean Industry", 
                "Deforestation & Ecosystem Protection"
              ].map((topic, i) => (
                <span key={i} className="px-5 py-3 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:border-primary-green hover:text-primary-green transition-colors cursor-default">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Reach */}
        <section id="audience" className="max-w-5xl mx-auto text-center mb-12">
           <span className="text-primary-green text-sm font-bold uppercase tracking-widest mb-4 block">
              Our Audience
            </span>
            <h2 className="text-4xl font-extrabold mb-12 font-display">Who We Reach</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
              {[
                "Corporate Leaders & Board Members",
                "CEOs & Business Executives",
                "Policymakers & Regulators",
                "Bankers & Financial Professionals",
                "ESG & Climate Professionals",
                "Conscious Consumers",
                "International Organisations",
                "NGOs & Social Enterprises",
                "Development Partners",
                "Academics & Think Tanks",
                "Investors & Asset Managers",
                "Industry Association Leaders"
              ].map((audience, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FaNewspaper className="text-primary-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium leading-snug">{audience}</span>
                </div>
              ))}
            </div>
        </section>

      </div>
    </main>
  );
}
