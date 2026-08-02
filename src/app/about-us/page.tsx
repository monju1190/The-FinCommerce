import React from "react";
import { teamMembers } from "@/data/mockData";
import { FaGlobe, FaTrophy, FaUsers } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-jyQaHaq9IyxjuuDd8xUqz6pGQ4vXNg_FssBSZESCv6KGBZsuQ51mdwm7UT695SpTolUC5UDbt8i6FrC7jKk78kBcfyLdwKqN_ouEMiQspO8yZlaVToCMLboy2QNrJql2cviRXES348Ksq5FvOkpcTRbVvBdNYDCyc8Yy9UG4E6bwB4iAvCMTE5q71ipP9xHeGpd7HgMr63mGs5_G-sxJo1PkSTptfcnuudYG1NWscJLcPa64bTw"
          alt="Our Story Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Visionary Journalism.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            We exist to bring actionable news and deep insights to the world's most ambitious thinkers and leaders.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-12 py-20">
        {/* Mission & Story */}
        <section id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <span className="text-orange-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Our Mission
            </span>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              To illuminate the complex intersection of global markets, policy, and culture.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in an era of rapid technological and geopolitical shifts, NewsPrk was built on the belief that clarity is the ultimate luxury. Our award-winning journalism doesn’t just report the news; it contextualizes the forces shaping our future.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We employ independent journalists, data scientists, and industry experts to bring you perspectives you won't find in the mainstream news cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
              <FaGlobe className="text-4xl text-orange-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">120+</h3>
              <p className="text-gray-500 text-sm">Countries Reached</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
              <FaTrophy className="text-4xl text-orange-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">45</h3>
              <p className="text-gray-500 text-sm">Industry Awards</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center sm:col-span-2">
              <FaUsers className="text-4xl text-orange-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">5M+</h3>
              <p className="text-gray-500 text-sm">Monthly Readers</p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id="team" className="mb-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-orange-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl font-bold mb-6">Meet the Editors</h2>
            <p className="text-gray-600">
              Our editorial board consists of seasoned veterans from the world's most respected publications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6 shadow-lg">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
          <span className="text-orange-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            Our Partners
          </span>
          <h2 className="text-3xl font-bold mb-12">Trusted by the Best</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Mock Partner Logos using text since we don't have logo files */}
            <h3 className="text-2xl font-black">GLOBEX</h3>
            <h3 className="text-2xl font-black">SOYUZ</h3>
            <h3 className="text-2xl font-black tracking-widest">INITECH</h3>
            <h3 className="text-2xl font-black font-serif">Massive Dynamic</h3>
            <h3 className="text-2xl font-black">ACME Corp</h3>
          </div>
        </section>
      </div>
    </main>
  );
}
