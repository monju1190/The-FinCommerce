import React from "react";
import { FaHandshake, FaBullhorn, FaChartLine, FaRegStar, FaBookOpen } from "react-icons/fa";

export default function AdvertisePage() {
  return (
    <main className="text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-green pt-24 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2uL1AJ4fWgqC8W1CjI1Yf8ji-5abe3aYsxy7muXhYEjUrL3Eg07JLHKlPjvhiPBff9njqF4LJpKjnrTzyhvfgCict_WF6RUWxCdD_28cTUrKruAg9D5UlhLIj5t7bMO_EmpXz6Eeirk9VjAinbpsmpHC_jTILATtn6aqLxpQOoACbCwEqNn4VdZs3F1Hf-35laWGV79hPMltxFCtBGQEgMS5hz75Uh0tRfTiVy9hHa6EYs0sWaDE')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4 block">
            Corporate Partnership & Advertisement
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display tracking-tight">
            Put Your Brand Where Sustainability Matters
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            Your brand. Your sustainability story. A wider audience.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-12 py-20 space-y-24">
        
        {/* Why Partner With Us */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4 font-display">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg">
              Association with The Sustainability Voice provides organizations with an opportunity to:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaBullhorn />, title: "Build Visibility", desc: "Position your organization before a professional audience interested in sustainability, business and responsible development." },
              { icon: <FaHandshake />, title: "Showcase Commitment", desc: "Demonstrate your organization’s commitment to sustainability, ESG, and positive environmental and social impact." },
              { icon: <FaRegStar />, title: "Strengthen Reputation", desc: "Associate your corporate brand with an emerging platform dedicated to sustainability and responsible business." },
              { icon: <FaBookOpen />, title: "Share Expertise", desc: "Provide perspectives, insights and thought leadership on issues relevant to your industry and stakeholders." },
              { icon: <FaChartLine />, title: "Engage Key Stakeholders", desc: "Reach business leaders, policymakers, regulators, professionals, academics and development practitioners." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-primary-green text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
          <div className="bg-gray-50 p-10 border-b border-gray-200 text-center">
            <h2 className="text-3xl font-extrabold font-display">Advertising Rates</h2>
            <p className="text-gray-500 mt-2">Rates are indicative and may be customized depending on placement and volume.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 bg-white">
            {/* Premium Positions */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-primary-green uppercase tracking-wider text-sm">Premium Positions</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Back Cover</span>
                  <span className="font-bold">BDT 150,000</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Inside Front Cover</span>
                  <span className="font-bold">BDT 100,000</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Inside Back Cover</span>
                  <span className="font-bold">BDT 80,000</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium">Facing Editorial Page</span>
                  <span className="font-bold">BDT 70,000</span>
                </li>
              </ul>
            </div>
            
            {/* Standard Positions */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-primary-green uppercase tracking-wider text-sm">Standard Positions</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Full Page</span>
                  <span className="font-bold">BDT 60,000</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Half Page</span>
                  <span className="font-bold">BDT 50,000</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium">Quarter Page</span>
                  <span className="font-bold">BDT 40,000</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Multi-Issue & Annual Partner */}
        <section className="max-w-6xl mx-auto space-y-12">
          
          <div className="bg-primary-green text-white p-10 md:p-14 rounded-[2rem] shadow-xl">
            <span className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4 block">
              Be Seen Throughout The Year
            </span>
            <h2 className="text-3xl font-extrabold mb-8 font-display">Multi-Issue Advertising</h2>
            <p className="text-white/90 mb-8 leading-relaxed max-w-2xl">
              For organizations seeking consistent visibility, we offer preferential rates for advance bookings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <div className="text-sm font-bold text-white/70 mb-2">2-ISSUE</div>
                <div className="text-lg mb-4">Any 2 consecutive</div>
                <span className="font-bold bg-white text-primary-green px-4 py-2 rounded-full text-sm">5% Discount</span>
              </div>
              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <div className="text-sm font-bold text-white/70 mb-2">3-ISSUE</div>
                <div className="text-lg mb-4">Any 3 consecutive</div>
                <span className="font-bold bg-white text-primary-green px-4 py-2 rounded-full text-sm">10% Discount</span>
              </div>
              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <div className="text-sm font-bold text-white/70 mb-2">4-ISSUE</div>
                <div className="text-lg mb-4">Full year / 4 issues</div>
                <span className="font-bold bg-white text-primary-green px-4 py-2 rounded-full text-sm">15% Discount</span>
              </div>
            </div>
            <div className="text-sm text-white/80 bg-black/10 p-6 rounded-xl">
              <span className="font-bold text-white mr-2">Benefits include:</span>
              Preferential rates, Priority advertisement placement, Consistent brand visibility, Complimentary copies, Priority access to partnership opportunities.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 flex-1">
              <h2 className="text-2xl font-extrabold mb-4 font-display">Annual Corporate Partner</h2>
              <p className="text-primary-green font-bold text-xl mb-4">4 ISSUES | 12 MONTHS | BDT 300,000</p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Your brand. All year. One strategic association. Includes Full-page advertisement in all four issues, corporate logo/name in the Annual Partner recognition section, opportunity to nominate senior executives for interviews, and 60 complimentary copies.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 flex-1">
              <h2 className="text-2xl font-extrabold mb-4 font-display">Corporate Storytelling</h2>
              <p className="text-primary-green font-bold text-xl mb-4">BDT 200,000+</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Communicate your sustainability journey beyond advertising through:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Executive Interview (Leadership conversation)</li>
                <li>Sustainability Profile (Strategy & Impact)</li>
                <li>Expert Perspective (Commentary by a subject-matter expert)</li>
                <li>Corporate Profile</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
