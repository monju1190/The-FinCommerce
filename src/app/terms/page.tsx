import React from "react";
import { FaShieldAlt, FaBalanceScale } from "react-icons/fa";

export default function TermsPage() {
  const terms = [
    "All advertisements and partnerships are subject to availability and written confirmation.",
    "Rates may vary depending on placement, volume and customized requirements.",
    "Partnership benefits will be confirmed in writing.",
    "Advertisements must comply with applicable laws and the magazine’s advertising policies.",
    "The magazine reserves the right to decline advertisements or partnerships inconsistent with applicable law, public interest or editorial standards.",
    "Advertisers are responsible for the accuracy and legality of claims made in their advertisements.",
    "Corporate partnership does not confer editorial control or influence.",
    "Interviews, features and expert contributions are subject to editorial selection and fact-checking.",
    "Applicable taxes, duties or statutory charges, if any, shall be borne by the advertiser/partner.",
    "Customized strategic partnerships may be subject to a separate written agreement.",
    "Advertisement artwork must be supplied within the specified deadline and technical requirements.",
    "Payment and cancellation terms will be specified in the advertisement booking confirmation or partnership agreement.",
    "Advertisement fees are subject to all applicable taxes."
  ];

  return (
    <main className="text-gray-900 min-h-screen pb-24">
      {/* Immersive Header */}
      <div className="bg-primary-green text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4 block">
              Legal & Editorial
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-display tracking-tight">Policies & Guidelines</h1>
            <p className="text-xl text-white/80 leading-relaxed font-light">
              Transparency, credibility, and standards at The Sustainability Voice.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 -mt-16 relative z-20 space-y-12">
        
        {/* Editorial Promise */}
        <section className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 md:p-14 shadow-xl border border-gray-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-primary-light/10 p-4 rounded-full text-primary-green">
              <FaShieldAlt size={28} />
            </div>
            <h2 className="text-3xl font-extrabold font-display">Our Editorial Promise</h2>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-widest uppercase">INDEPENDENT. INFORMED. RESPONSIBLE.</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>The credibility of The Sustainability Voice is fundamental to our mission.</p>
            <p className="font-bold text-gray-900">Advertising is advertising. Editorial is editorial.</p>
            <p>
              Corporate advertising, sponsorship or partnership does not provide any right to control, approve, modify or influence independent editorial content, reporting, analysis or opinions.
            </p>
            <p>
              Any paid, sponsored or promotional content accepted for publication will be appropriately identified in accordance with the magazine’s editorial policy.
            </p>
            <p>
              This separation enables our partners to gain meaningful visibility while protecting the credibility and independence of the publication.
            </p>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 md:p-14 shadow-xl border border-gray-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-primary-light/10 p-4 rounded-full text-primary-green">
              <FaBalanceScale size={28} />
            </div>
            <h2 className="text-3xl font-extrabold font-display">Terms & Conditions</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            {terms.map((term, index) => (
              <div key={index} className="flex items-start">
                <span className="font-bold text-primary-green mr-4 min-w-[24px]">{index + 1}.</span>
                <p className="leading-relaxed">{term}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
