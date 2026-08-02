import React from "react";
import { faqs } from "@/data/mockData";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Immersive Header */}
      <div className="bg-primary-green text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-display tracking-tight">We'd love to hear from you.</h1>
            <p className="text-xl text-white/80 leading-relaxed font-light">
              Whether you have a tip for a story, a question about your subscription, or want to explore partnership opportunities.
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 -mt-16 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-extrabold mb-8 font-display">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all text-sm text-gray-700">
                    <option>General Inquiry</option>
                    <option>Editorial Pitch</option>
                    <option>Subscription Support</option>
                    <option>Advertising / Partnerships</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none text-sm"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-primary-green text-white font-bold py-5 rounded-xl hover:bg-primary-light transition-colors text-lg shadow-lg hover:shadow-xl mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQs */}
          <div className="lg:col-span-5 space-y-12 lg:pt-8">
            <div>
              <h3 className="text-2xl font-extrabold mb-8 font-display">Our Offices</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="bg-white shadow-sm p-4 rounded-2xl text-primary-green flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      100 Newsroom Ave, Suite 400<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 group">
                  <div className="bg-white shadow-sm p-4 rounded-2xl text-primary-green flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      +1 (555) 123-4567<br />
                      Mon-Fri 9am to 6pm EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 group">
                  <div className="bg-white shadow-sm p-4 rounded-2xl text-primary-green flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      hello@fincommerce.com<br />
                      press@fincommerce.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="faq" className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-extrabold mb-8 font-display">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

