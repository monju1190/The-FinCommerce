import React from "react";

export default function BusinessSection() {
  return (
    <section className="mb-16" data-purpose="business-category-section">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200">
        <div className="flex items-center space-x-3 pb-2 border-b-2 border-primary-green">
          <div className="w-2 h-2 rounded-full bg-primary-green"></div>
          <h2 className="text-2xl font-bold">Business</h2>
        </div>
        <button className="bg-primary-green text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-primary-light transition-colors transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Business Story */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="rounded-2xl overflow-hidden mb-6 relative flex-1 min-h-[250px]">
            <img
              alt="Business Main"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwusvvQPz_xmI8uZtR07gv2bVn0w1ME6Okp9AQxhkmrFilxHlVZxTxlDhTfPYrYBVH9JHpYMbPhu7uUlMbn0iReYaHpWsME3S7YiVdomewQUR7jnmJxH-9l3InyAusawBA-s6EU0HkqTEQkDQkKUfXCWOcsnSgjaIKfRWnJi9zHJiJpH_rGu_bbf0OlqY2VzSV3QsYi4mn7Aq-hkXyiof1ig9d93JctI40ifvFxdZpWSpgqNe31I"
            />
          </div>
          <div className="mt-auto">
          <span className="text-primary-green text-xs font-bold">
            AI Powered | 23d ago
          </span>
          <h3 className="text-3xl font-extrabold mt-3 mb-4 leading-tight">
            Smart Homes, Smarter Living: Exploring IoT and AI
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            To spread the word, the company embarked on a mass marketing drive, TV campaigns launched in the platform's key markets across Europe and North America...
          </p>
          <div className="flex items-center space-x-3">
            <img
              alt="Author"
              className="w-10 h-10 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa-jFYnqbF0bFDGRs7aXz1KUHq4cT-hfeMERis4eJgmO1Rr43ud9J5VMvw8tuVOCnsEqsFO_UztIlMe4nLgMRIdaiybfzgXJv2s4y9C_Ie5p_ajBBVhk7XDby9P4d363TnKwCvpVf4rsPGJnzRp37-co5anVQpqLB0B4rBav4smYfYjmBIJaCOQ38YQb_60Ut8BvIPcVrhLnfYnwFaszzEyss5Ln1JEQdAdL57LacTS267_F13IMw"
            />
            <span className="font-bold text-sm">David Pales</span>
          </div>
          </div>
        </div>
        {/* Business Sidebar List */}
        <div className="lg:col-span-5 space-y-6">
          {/* Item 1 */}
          <div className="flex space-x-4 items-center group cursor-pointer">
            <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
              <img
                alt="News thumb"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgjdU1Xgs-o2mpJUX7iWU71cOXMtIDaXZhNj9UVtRS7VCC-r4XiuD3hbQySIPuDBuVewbhH0wjLyn0xFuaZOEdsv0krCBj5GFbWqHxFW8lTO_pgOVdurrCT4nRyYCTxLFAr2O0nwxlrzOq-Z20EVnTr5lHEezu3UymgYSoZmsx6jjA7HsBj8yovo5xaH1iWkbg1eYu_wFustJGkGOoHcNdlpIL5CXCMxlu-H9rYP0VOrkqJIVleF4"
              />
            </div>
            <div>
              <p className="text-[10px] text-blue-500 font-bold mb-1 uppercase">
                AI Powered | 6mo ago
              </p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary-green transition-colors">
                A Guide to The Rise of Gourmet Street Food: Trends and Top Picks
              </h4>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex space-x-4 items-center group cursor-pointer">
            <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
              <img
                alt="News thumb"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDGcFTZb874EspZ7HqQshEOT1vLrdjYKzayQ_wk4sgkDT_9ZFz45iNm0OC1DSOC7IIJ_s0C9f4vIMwUVKUXdadsYbg2cCwXxvD_oBSli5Bb3_y8u4t5gtOxF1VfDPiyMHMzx6X5rE0uVqi3m1nagF-rRlv6p8rMBnS01VPB2JxgysnZqfZzlHhJzDpZb4cxWZhJBM08jPZEDxHby2XanWkESH7qD_T3DaCr0LunM1eme6fSP8jwPs"
              />
            </div>
            <div>
              <p className="text-[10px] text-purple-500 font-bold mb-1 uppercase">
                Virtual Reality | 8mo ago
              </p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary-green transition-colors">
                Hidden Gems: Underrated Travel Destinations Around the World
              </h4>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex space-x-4 items-center group cursor-pointer">
            <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
              <img
                alt="News thumb"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjQ7PVlVxXdsaqpHHqsUhsncIDyqNVpKJGmyQeMBs29-gYCWCEhU_r95COAdoL9LFPj1D3qB_wQ_GbNc0or-4m3IQ-lQxpBC99hErdb1Ak5smWAqtEfrhW1M2biWlHcqRC7hr8qyiD0ICcc5NK5CmVOeSOIbaG9C8O2JN4niWVTFwv0V2FIJiZ7jok14Qdlp6gW__jgwK5e-eSKkt8u5tkM5w8xAno2uMCwGAl25Kv-d1roySulaI"
              />
            </div>
            <div>
              <p className="text-[10px] text-primary-green font-bold mb-1 uppercase">
                Media | 9mo ago
              </p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary-green transition-colors">
                Eco-Tourism: Traveling Responsibly and Sustainably
              </h4>
            </div>
          </div>
          <button className="w-full py-3 bg-primary-green text-white font-bold rounded-xl mt-4 hover:bg-primary-light transition-colors transition-colors">
            See All Tech
          </button>
        </div>
      </div>
    </section>
  );
}

