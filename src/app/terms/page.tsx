import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TermsPage() {
  const terms = [
    {
      num: "01",
      clause: "Availability & Written Confirmation",
      text: "All advertisements, advertorial insertions, and corporate partnerships are strictly subject to inventory availability, editorial calendar alignment, and formal written confirmation by the publisher."
    },
    {
      num: "02",
      clause: "Rate Adjustments & Placement Scales",
      text: "Advertising rates may vary depending on section prominence, placement quadrant, total volume commitments, and customized multi-channel production requirements."
    },
    {
      num: "03",
      clause: "Contractual Partnership Governance",
      text: "All commercial partnership benefits, print run allocations, executive distribution lists, and complimentary copies will be confirmed in an executed written agreement."
    },
    {
      num: "04",
      clause: "Statutory Law & Advertising Standards",
      text: "All commercial content must strictly comply with applicable laws of the People's Republic of Bangladesh, fair trade practices, and the publication’s internal ethical advertising codes."
    },
    {
      num: "05",
      clause: "Editorial Right of Refusal",
      text: "The Sustainability Voice reserves the absolute right to decline, cancel, or suspend any advertisement or partnership inconsistent with public interest, greenwashing prohibitions, or editorial integrity."
    },
    {
      num: "06",
      clause: "Advertiser Truth & Legal Liability",
      text: "Advertisers assume full legal and factual responsibility for the accuracy of claims, certifications, ESG disclosures, trademarks, and copyright permissions contained in their creative materials."
    },
    {
      num: "07",
      clause: "Zero Editorial Influence Doctrine",
      text: "Corporate partnership, paid advertising, or sponsorship confers no authority, right of prior review, or influence over independent editorial reporting, investigations, or opinion columns."
    },
    {
      num: "08",
      clause: "Independent Fact-Checking & Verification",
      text: "All interviews, industry features, guest commentaries, and contributed technical articles remain strictly subject to rigorous editorial selection, independent fact-checking, and styling revisions."
    },
    {
      num: "09",
      clause: "Statutory Duties, Taxes & Levies",
      text: "All statutory duties, VAT, withholding taxes, or municipal charges applicable to commercial bookings shall be borne exclusively by the contracting advertiser or sponsoring partner."
    },
    {
      num: "10",
      clause: "Customized Strategic Agreements",
      text: "Specialized initiatives, such as bespoke industry roundtables, custom research dossiers, or annual corporate partnerships, shall be governed by distinct supplementary written instruments."
    },
    {
      num: "11",
      clause: "Technical Specifications & Deadlines",
      text: "Print-ready artwork, typography vectors, and high-resolution digital assets must be supplied in compliance with TSV technical specifications before established editorial close deadlines."
    },
    {
      num: "12",
      clause: "Payment Schedules & Cancellation Terms",
      text: "Settlement schedules, advance booking retainers, and cancellation conditions will be detailed in the formal booking confirmation. Cancellations after print production commences remain non-refundable."
    },
    {
      num: "13",
      clause: "Statutory Fiscal Compliance",
      text: "All stated rate cards and commercial invoices remain subject to prevailing statutory taxation and revenue regulations governing print and electronic publishing in Bangladesh."
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
                Terms of Dispatch &amp; Editorial Policies
              </h1>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
                STATUTORY COMPLIANCE
              </span>
              <span className="text-sm font-serif text-gray-700 italic block">
                13 Codified Articles • Dhaka, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN EDITORIAL CONTENT */}
      <div className="master-container py-12 md:py-16 space-y-16">

        {/* 2. THE CORE EDITORIAL PROMISE */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-8">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#111111] leading-tight">
              Advertising is advertising. Editorial is editorial.
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-gray-800 leading-relaxed">
              “The credibility of The Sustainability Voice is fundamental to our journalistic mission. Corporate advertising, sponsorship, or strategic commercial partnership does not confer any right to control, approve, modify, or influence independent editorial reporting, technical ESG ratings, or investigative commentary.”
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-black/10 text-sm text-gray-700 leading-relaxed font-sans">
              <p>
                Any paid, sponsored, or promotional content accepted for publication is strictly identified and demarcated in accordance with our transparency standards. We maintain a firm wall between commercial accounts and our editorial desk to guarantee objective coverage of national climate policy and corporate performance.
              </p>
              <p>
                This uncompromising separation protects the authentic reputational value of our commercial partners: readers, regulators, and international buyers know that praise earned in our pages is backed by evidence, not purchased influence.
              </p>
            </div>
          </div>
        </section>

        {/* 3. THE 13 STATUTORY CLAUSES */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Conditions of Commercial &amp; Editorial Dispatch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/15 border border-black/15">
            {terms.map((item) => (
              <div
                key={item.num}
                className="bg-white p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:bg-[#F7F5F0] transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gray-400">
                      Clause {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#111111] leading-snug">
                    {item.clause}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-serif pt-3 border-t border-black/10">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VERIFICATION, CONFLICT OF INTEREST & CORRECTIONS */}
        <section className="grid grid-cols-1 md:grid-cols-3 border border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
          <div className="p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1a4d2e] font-bold block">
              Fact-Checking Protocol
            </span>
            <h4 className="text-base font-bold font-display text-[#111111]">
              Verification of ESG Data
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 font-serif leading-relaxed">
              Energy consumption statistics, carbon footprint reductions, and LEED operational data cited in articles are cross-referenced against official audits, regulatory filings, and academic datasets prior to publication.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1a4d2e] font-bold block">
              Conflict of Interest
            </span>
            <h4 className="text-base font-bold font-display text-[#111111]">
              Author Disclosures
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 font-serif leading-relaxed">
              All contributing journalists, guest columnists, and academic fellows are required to declare any direct consulting relationships, board memberships, or financial interests associated with companies analyzed in their text.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1a4d2e] font-bold block">
              Corrections &amp; Retractions
            </span>
            <h4 className="text-base font-bold font-display text-[#111111]">
              Commitment to Accuracy
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 font-serif leading-relaxed">
              When factual errors occur, The Sustainability Voice publishes prompt and prominent corrections across both print and digital editions. Readers and subjects may request review via our editorial desk.
            </p>
          </div>
        </section>

        {/* 5. NAVIGATION FOOTNOTE */}
        <section className="border border-black/15 bg-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-700 font-bold">
              <FaBalanceScale />
              <span>Publisher's Legal Governance • Dhaka, Bangladesh</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-serif">
              For commercial rate inquiries, advertorial specs, or partnership proposals governed by these statutory policies:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/advertise"
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black bg-[#F7F5F0] hover:bg-black hover:text-white px-4 py-2.5 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Advertising Rates</span>
              <FaArrowRight size={10} />
            </Link>
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
              <span>Contact Desk</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
