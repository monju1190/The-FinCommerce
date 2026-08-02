import React from "react";

export default function SecuritySection() {
  return (
    <section className="mb-16" data-purpose="security-category">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200">
        <div className="flex items-center space-x-3 pb-2 border-b-2 border-orange-500">
          <div className="w-2 h-2 rounded-full bg-orange-accent"></div>
          <h2 className="text-2xl font-bold">Security</h2>
        </div>
        <button className="bg-orange-accent text-white px-4 py-1 rounded-full text-xs font-bold hover-orange transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Immersive Card */}
        <div className="lg:col-span-8 relative rounded-3xl overflow-hidden flex flex-col justify-end p-10 group h-full min-h-[500px]">
          <img
            alt="Security Main"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYvLK1xu5fPHzDHLQe4LuNAgeEKWQ4ihAwIYZPopX_Mvianp-FPpetk5AgMyZ6_hc-7b8sZXLqYm_UgXv_BvUTMaUEPwG5XH8aVuXK442LnfSv2pId6GwCJ0pnww1bOHD3Lcb5OBrXs0Ym-34XnWfae97uWTJ0usc_Brl02qi-TGKLXPdKKLI7WRdW85DGDHv9XXSem50szjvUoo_RTdIEqKebOFovGf-NntyKsy7PlbetiTL9qoI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 text-white max-w-2xl">
            <span className="text-xs font-bold opacity-80 mb-4 block text-orange-400">
              Network | 9d ago
            </span>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight group-hover:underline cursor-pointer">
              The Pulse of Global Markets and Enterprise
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              To spread the word, the company embarked on a mass marketing drive, TV campaigns launched in the platform's key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                alt="Author"
                className="w-9 h-9 rounded-full border-2 border-white/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB85si3gY7VxZWBAjItmW72yCRa3GucsFJr32HMbgixqFTxLySWTwZ0l3VRUto0Uymu1ifF-CS5JxEnxs0y1wwiGybB81JcyJWecKtiY5gHWmNfSkkXRxi6ZiLb56i7Pt-9VcQ9i-Aeeoke4oWnQgkP_kWS8l2fi5k_SGdYZ2YCA3aKMe8Djd-wHCjEhKKcgGBWAY5VCLU1FY3ON3V1Se6oYgKVoYCiHfXG2I0rAhUhVIL-guo9FO4"
              />
              <span className="font-bold text-sm">Nisl Nyung</span>
            </div>
          </div>
        </div>
        {/* Sidebar List */}
        <div className="lg:col-span-4 space-y-6">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-3">
              <img
                alt="security item"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNddQEbjHqSkNo7DVagXtGkS-HXKL_OWmo6uDFAxzlTmw-GtLw9LEB2sE4E9e_MfNiKB6CrYb-7Ngbw9419fHx3px7qVvj17tngiyIX7q634UMWzjDNmvv31GWLD0-dflVQe_KH-EEvWlAj3p6nrcn3GLOqCzpUWLjc933l7LsBSrQNnaM2FG1Yupk4FlM8nIjQFPTsiusBdMLb6bYj4C3iJs2MsmUM5yFG34BIknt4xy16Ja4BlU"
              />
            </div>
            <p className="text-[10px] text-purple-600 font-bold uppercase mb-1">
              Virtual Reality | 15d ago
            </p>
            <h4 className="font-bold text-base leading-tight group-hover:text-orange-accent transition-colors">
              AI and Marketing: Unlocking Customer Insights
            </h4>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-3">
              <img
                alt="security item"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeJnk9VxMUUTRu8-RYAxZbBYWI9oIeNT7t5UJ3XpzHVErceBMRl-ejl2t0nS17IHrBJp4lUoLNtOv2GcucgFC2D7w6VBxWrWCyKpnJMwW8B6AgYPy_wiO7SMcs8HRKB7z1-WbYrXqSWHCB_eAar4EHuowzIRLASZ5ghZe8iJ_T66EyZruperWPGPUTOAgUYvai67o3tcobFtCCwWNMIlWWsJeWseVQ80QrbIj1C2aOUtUtururGxI"
              />
            </div>
            <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">
              Trips | 20d ago
            </p>
            <h4 className="font-bold text-base leading-tight group-hover:text-orange-accent transition-colors">
              Eco-Tourism: Traveling Responsibly and Sustainably
            </h4>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-3">
              <img
                alt="security item"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4IxIsYXVF0iI2-WlUQEGum6k1pA8gbljoLjoYsGdaBW96CIG2CNTzpX-P4E7DtCR9Q8OqT0NNQ61qNN_w7HhnJfaknFzAr-YW6Vb47JJZthGg-lhwYNrl0B7oKtw-kXTtgI5Nm0-YkPgYH6T26zuQOXP-H2JbQgOsXuNwRp8XnysY9OJKbIt1ByedbTwuSyECRuVXhMOXxqBbc9SElw-lyYnrJkhcGEAhKcKUo5FqblOTgIsosJU"
              />
            </div>
            <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">
              AI Powered | 23d ago
            </p>
            <h4 className="font-bold text-base leading-tight group-hover:text-orange-accent transition-colors">
              Hidden Gems: Underrated Travel Destinations Around the World
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
