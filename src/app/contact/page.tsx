import React from "react";
import { faqs } from "@/data/mockData";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="text-gray-900 min-h-screen pb-24">
      {/* Clean Header */}
      <div className="bg-white border-b border-gray-200 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl text-center">
          <span className="text-[#16a34a] text-sm font-bold uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-display tracking-tight text-primary-green">
            We'd love to hear from you.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto">
            Whether you have a tip for a story, a question about your subscription, or want to explore partnership opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          
          {/* Contact Info (Left Column) */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-8 font-display">Our Offices</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="bg-[#16a34a]/10 p-4 rounded-xl text-[#16a34a] flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dokan#18, Level-5, Azimpur Aadhunik Nagar Market<br />
                      Azimpur, Newmarket, Dhaka-1205
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="bg-[#16a34a]/10 p-4 rounded-xl text-[#16a34a] flex-shrink-0">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      01713039784<br />
                      Mon-Fri 9am to 6pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="bg-[#16a34a]/10 p-4 rounded-xl text-[#16a34a] flex-shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      editor@sustainabilityvoice.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              {/* Map Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-60 mix-blend-multiply"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-lg shadow-md font-bold text-sm text-primary-green flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-[#16a34a]" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-extrabold mb-8 font-display">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all text-sm"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all text-sm"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all text-sm text-gray-700">
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
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all resize-none text-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-[#16a34a] text-white font-bold py-5 rounded-xl hover:bg-green-700 transition-colors text-lg shadow-md hover:shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* FAQs Section (Bottom Full Width) */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-12">
            <span className="text-[#16a34a] text-sm font-bold uppercase tracking-widest mb-4 block">
              Support
            </span>
            <h2 className="text-3xl font-extrabold font-display">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
