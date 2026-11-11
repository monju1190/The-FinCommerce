"use client";
import React, { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/mockData";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronDown, FaArrowLeft, FaPaperPlane, FaCheck } from "react-icons/fa";

export default function ContactPage() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }, 4000);
  };

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
                Contact the Editorial Desk
              </h1>
            </div>
            <div className="text-left md:text-right flex-shrink-0">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
                PRESS BUREAU • DESK HOURS
              </span>
              <span className="text-sm font-serif text-gray-700 italic block">
                Sun – Thu • 09:00 — 18:00 BST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN DISPATCH GRID */}
      <div className="master-container py-12 md:py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* LEFT COLUMN: Bureau Information & Location Plate (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-black/15 bg-white p-6 sm:p-8 space-y-8">
              <div className="border-b border-black/15 pb-4">
                <h2 className="text-2xl font-extrabold font-display text-[#111111]">
                  Bureau Headquarters
                </h2>
              </div>

              {/* Physical Desk */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-black/15 bg-[#F7F5F0] flex items-center justify-center text-gray-800 flex-shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block">
                    Headquarters
                  </span>
                  <p className="text-sm font-semibold text-[#111111] leading-snug">
                    Dokan #18, Level-5, Azimpur Aadhunik Nagar Market
                  </p>
                  <p className="text-xs text-gray-600">
                    Azimpur, Newmarket, Dhaka-1205, Bangladesh
                  </p>
                </div>
              </div>

              {/* Direct Telephony */}
              <div className="flex items-start gap-4 pt-4 border-t border-black/10">
                <div className="w-10 h-10 border border-black/15 bg-[#F7F5F0] flex items-center justify-center text-gray-800 flex-shrink-0">
                  <FaPhoneAlt size={15} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block">
                    Direct Phone Line
                  </span>
                  <p className="text-sm font-mono font-bold text-[#111111]">
                    +880 17 4225 4805
                  </p>
                  <p className="text-xs font-mono text-gray-600">
                    +880 1713 039784 (Inquiries)
                  </p>
                  <span className="text-[11px] text-gray-500 italic block pt-0.5">
                    Sunday to Thursday • 09:00 to 18:00 BST
                  </span>
                </div>
              </div>

              {/* Email Desk */}
              <div className="flex items-start gap-4 pt-4 border-t border-black/10">
                <div className="w-10 h-10 border border-black/15 bg-[#F7F5F0] flex items-center justify-center text-gray-800 flex-shrink-0">
                  <FaEnvelope size={15} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block">
                    Electronic Dispatch
                  </span>
                  <p className="text-sm font-mono font-bold text-[#111111]">
                    editor@sustainabilityvoice.com
                  </p>
                  <p className="text-xs text-gray-600">
                    For submissions, op-ed pitches, and press releases
                  </p>
                </div>
              </div>

              {/* Whistleblower & Confidentiality Notice */}
              <div className="border-t border-black/15 pt-5 text-xs text-gray-600 font-serif leading-relaxed bg-[#F7F5F0] p-4 border border-black/10">
                <span className="font-mono uppercase font-bold text-[#1a4d2e] block mb-1">
                  Confidential Sources:
                </span>
                Whistleblower disclosures, investigative story leads, and corporate environmental reports are handled under strict journalistic confidentiality and data protection.
              </div>
            </div>

            {/* Location Plate Frame */}
            <div className="border border-black/15 bg-[#111111] overflow-hidden relative">
              <div className="aspect-[16/9] relative">
                <img 
                  src="/magazine/oct-dec/photos/waterlogging-1.jpg" 
                  alt="Azimpur, Dhaka Location" 
                  className="w-full h-full object-cover opacity-75 grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white border border-black/20 px-3 py-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-mono font-bold text-[#111111]">
                      <FaMapMarkerAlt className="text-[#1a4d2e]" />
                      <span>DHAKA-1205, BANGLADESH</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 hidden sm:inline-block">
                      23.7315° N, 90.3855° E
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Transmit a Dispatch / Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-black/15 bg-white p-6 sm:p-10 md:p-12 space-y-8">
              <div className="border-b border-black/15 pb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#111111]">
                  Send a Message to the Bureau
                </h2>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mt-1">
                  Deliver an inquiry to our editorial board or partnership team
                </p>
              </div>

              {isSubmitted ? (
                <div className="border border-[#1a4d2e] bg-[#1a4d2e]/10 p-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#1a4d2e] text-white flex items-center justify-center mx-auto">
                    <FaCheck size={20} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#1a4d2e]">
                    Message Received
                  </h3>
                  <p className="text-sm text-gray-700 font-serif max-w-md mx-auto">
                    Your correspondence has been logged into the editorial docket. An officer of the desk will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-black/20 px-4 py-3 text-sm text-gray-900 rounded-none focus:outline-none focus:border-black focus:bg-white transition-colors"
                        placeholder="e.g. Mahfuz"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-black/20 px-4 py-3 text-sm text-gray-900 rounded-none focus:outline-none focus:border-black focus:bg-white transition-colors"
                        placeholder="e.g. Rahman"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Corporate / Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-black/20 px-4 py-3 text-sm text-gray-900 rounded-none focus:outline-none focus:border-black focus:bg-white transition-colors"
                      placeholder="name@organization.com"
                    />
                  </div>

                  {/* Subject Custom Dropdown */}
                  <div className="relative">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Subject Category *
                    </label>
                    <div 
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className="w-full bg-[#F7F5F0] border border-black/20 px-4 py-3 text-sm text-gray-900 rounded-none cursor-pointer flex justify-between items-center hover:bg-white transition-colors"
                    >
                      <span className="font-medium">{selectedSubject}</span>
                      <FaChevronDown className={`text-xs text-gray-600 transition-transform duration-200 ${isSelectOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {isSelectOpen && (
                      <div className="absolute top-full mt-1 left-0 w-full bg-white border border-black/20 shadow-lg z-50 divide-y divide-black/10">
                        {[
                          "General Inquiry",
                          "Editorial Pitch & Op-Ed Submission",
                          "Subscription & Circulation Support",
                          "Corporate Partnership & Advertising",
                          "Whistleblower & Investigative Tip"
                        ].map((opt) => (
                          <div 
                            key={opt}
                            onClick={() => { setSelectedSubject(opt); setIsSelectOpen(false); }}
                            className="px-4 py-3 hover:bg-[#F7F5F0] cursor-pointer text-xs font-mono uppercase tracking-wider text-gray-800 transition-colors"
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-black/20 px-4 py-3 text-sm text-gray-900 rounded-none focus:outline-none focus:border-black focus:bg-white transition-colors resize-none font-sans leading-relaxed"
                      placeholder="Detail your inquiry, op-ed abstract, or partnership proposal..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#111111] hover:bg-[#1a4d2e] text-white font-mono uppercase tracking-widest text-xs py-4 px-8 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaPaperPlane size={11} />
                    <span>Send Message to Bureau</span>
                  </button>

                  <p className="text-[11px] text-gray-500 font-mono text-center">
                    All communications are processed under journalistic confidentiality standards.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* 3. FREQUENTLY ASKED QUESTIONS */}
        <section>
          <div className="pb-3 mb-6 border-b border-black/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight uppercase text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-black/15 bg-white divide-y md:divide-y-0 md:divide-x divide-black/15">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-8 sm:p-10 space-y-3">
                <span className="text-xs font-mono font-bold text-gray-400">
                  Question {idx + 1}
                </span>
                <h3 className="text-lg font-bold font-display text-[#111111] leading-snug">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-serif pt-2 border-t border-black/10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
