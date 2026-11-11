import React from "react";
import Link from "next/link";
import { FaEye, FaBullseye, FaArrowLeft, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export default function AboutUsPage() {
  const pillars = [
    {
      num: "01",
      title: "Business Integration",
      deck: "C-Suite Action & Commercial Value",
      desc: "Practical, executive-level strategies to transition enterprises from mere reactive compliance toward measurable, value-driven corporate operations and long-term resilience."
    },
    {
      num: "02",
      title: "Policy Advocacy",
      deck: "Public-Private Legislative Dialogue",
      desc: "A constructive, evidence-based forum bridging private sector ground realities with public regulatory design, financial incentives, and sustainable national industrial policies."
    },
    {
      num: "03",
      title: "Rooted in Bangladesh, Reaching the World",
      deck: "Global Supply Chain Alignment",
      desc: "Highlighting homegrown innovation, delta adaptation, and regional enterprise dynamics while aligning with international ESG disclosure frameworks and bilateral climate partnerships."
    }
  ];

  const editorialDomains = [
    "Sustainability & Climate Action",
    "ESG & Responsible Business",
    "Green & Sustainable Finance",
    "Circular Economy & Waste Management",
    "Renewable Energy & Energy Transition",
    "Corporate Sustainability & Governance",
    "Carbon Emissions & Decarbonisation",
    "Environment & Biodiversity",
    "Sustainable Agriculture & Food Security",
    "Decent Work & Inclusive Growth",
    "Green Technology & Innovation",
    "Sustainable Cities & Communities",
    "Blue Economy & Ocean Sustainability",
    "Human Rights & Social Sustainability",
    "Resource Efficiency & Sustainable Production",
    "Pollution Prevention & Clean Industry",
    "Deforestation & Ecosystem Protection"
  ];

  const audienceQuadrants = [
    {
      group: "Executive Leadership",
      members: [
        "Corporate Leaders & Board Members",
        "CEOs & Chief Sustainability Officers",
        "Industry Association Chairs & Directors"
      ]
    },
    {
      group: "Capital & Regulation",
      members: [
        "Policymakers, Regulators & Ministries",
        "Bankers & Sustainable Finance Teams",
        "Institutional Investors & Asset Managers"
      ]
    },
    {
      group: "Science & Practice",
      members: [
        "ESG & Climate Technical Professionals",
        "Environmental Engineers & Auditors",
        "Academics, Researchers & Think Tanks"
      ]
    },
    {
      group: "Global Development",
      members: [
        "International Development Partners",
        "Bilateral Diplomatic Missions",
        "NGOs, Social Enterprises & Advocates"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111] antialiased">
      {/* 1. EDITORIAL HEADER BAR */}
      <section className="border-b border-black/15 bg-[#F7F5F0] py-10 md:py-14">
        <div className="master-container">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 hover:text-black transition-colors font-bold"
            >
              <FaArrowLeft size={10} />
              <span>Back to Main Page</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/15">
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-[#111111] uppercase max-w-4xl leading-tight">
                A Platform for Ideas. A Voice for Sustainability.
              </h1>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
                VOLUME 01 • EST. 2026
              </span>
              <span className="text-sm font-serif text-gray-700 italic block">
                Quarterly Print &amp; Digital Broadside
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN EDITORIAL CONTENT */}
      <div className="master-container py-12 md:py-16 space-y-16">

        {/* Lead Proposition Deck */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 md:p-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#111111] leading-relaxed">
              We are dedicated to advancing informed dialogue on sustainability, climate transition, environmental governance, and responsible corporate enterprise—bringing together industry decision-makers, policymakers, and researchers to address the structural challenges shaping our shared economic future.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-sans">
              As Bangladesh navigates LDC graduation, tightening export due diligence directives (including EU CSDDD and CBAM), and escalating climate risks across our river systems and coastlines, reliable facts and analytical clarity are paramount. The Sustainability Voice exists to turn compliance hurdles into competitive advantages.
            </p>
          </div>
        </section>

        {/* 3. VISION & MISSION DUAL BROADSHEET LEDGER */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
            {/* Vision */}
            <div className="p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    OUR VISION
                  </span>
                  <FaEye className="text-xl text-[#1a4d2e]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#111111]">
                  Future of Business &amp; Policy
                </h3>
                <p className="text-lg sm:text-xl font-serif italic text-gray-800 leading-snug pt-2">
                  “Shaping the future of Business and Policy through actionable sustainability insights across Bangladesh and the global market.”
                </p>
              </div>
              <div className="border-t border-black/10 pt-6 text-sm text-gray-600 leading-relaxed">
                We envision an industrial and institutional ecosystem where environmental stewardship and corporate profitability reinforce one another, establishing Bangladesh as a global benchmark for clean manufacturing and ethical trade.
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-12 bg-[#1b4332] text-white flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8DC63F]">
                    OUR MISSION
                  </span>
                  <FaBullseye className="text-xl text-[#8DC63F]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  Evidence-Based Impact
                </h3>
                <p className="text-lg sm:text-xl font-serif italic text-white/95 leading-snug pt-2">
                  “To champion ESG integration across business and governance by delivering high-impact journalism, evidence-based policy analysis, and diverse industry perspectives.”
                </p>
              </div>
              <div className="border-t border-white/15 pt-6 text-sm text-gray-300 leading-relaxed">
                By maintaining uncompromised editorial independence and factual rigor, we empower decision-makers to implement credible ESG metrics, safeguard worker wellbeing, and mobilize green capital toward resilient infrastructure.
              </div>
            </div>
          </div>
        </section>

        {/* 4. CORE PILLARS ALIGNMENT */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Core Pillars Alignment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1a4d2e]">
                    {pillar.num}
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-[#111111] leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    {pillar.deck}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pt-4 border-t border-black/10">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. EDITORIAL FOCUS */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Editorial Focus &amp; Coverage Areas
            </h2>
          </div>

          <div className="border border-black/15 bg-white p-6 sm:p-10 mb-6">
            <p className="text-base sm:text-lg text-gray-700 font-serif leading-relaxed max-w-4xl mb-8">
              The Sustainability Voice deploys dedicated coverage across 17 distinct operational domains—ensuring multi-disciplinary scrutiny of environmental economics, climate vulnerability, and commercial transformation:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/15 border border-black/15">
              {editorialDomains.map((domain, idx) => (
                <div
                  key={domain}
                  className="bg-white p-4 sm:p-5 hover:bg-[#F7F5F0] transition-colors flex items-start gap-4"
                >
                  <span className="text-xs font-mono font-bold text-gray-400 flex-shrink-0 pt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 leading-snug">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHO WE REACH */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Who We Reach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/15 bg-white divide-y sm:divide-y-0 divide-black/15">
            {audienceQuadrants.map((quadrant, i) => (
              <div
                key={quadrant.group}
                className={`p-6 sm:p-8 space-y-4 ${i > 0 ? "sm:border-l border-black/15" : ""}`}
              >
                <div>
                  <h3 className="text-lg font-extrabold font-display text-[#111111]">
                    {quadrant.group}
                  </h3>
                </div>
                <ul className="space-y-3 pt-4 border-t border-black/10">
                  {quadrant.members.map((member) => (
                    <li key={member} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2.5 leading-snug">
                      <span className="text-[#1a4d2e] font-mono font-bold text-xs">▪</span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 7. NAVIGATION FOOTNOTE */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1a4d2e] font-bold">
              <FaShieldAlt />
              <span>Independent Editorial Governance</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-serif">
              The Sustainability Voice operates under strict separation between editorial decision-making and commercial sponsorship.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/editorial-board"
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black bg-[#F7F5F0] hover:bg-black hover:text-white px-4 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Editorial Board</span>
              <FaArrowRight size={10} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black bg-[#F7F5F0] hover:bg-black hover:text-white px-4 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Contact Bureau</span>
              <FaArrowRight size={10} />
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black bg-[#F7F5F0] hover:bg-black hover:text-white px-4 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Terms of Dispatch</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
