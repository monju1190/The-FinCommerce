export interface NewsArticle {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  content: string;
}

export interface MagazineSectionData {
  title: string;
  articles: NewsArticle[];
}

const mockContent = `
<p>In the evolving landscape of transaction banking, the concept of end-of-day treasury is rapidly transforming. Historically, corporate treasurers relied on end-of-day balances to manage liquidity, reconcile accounts, and make short-term investment decisions. However, the rise of instant payments, 24/7 processing, and real-time APIs is pushing the industry toward continuous liquidity management.</p>

<p>This shift requires a fundamental change in how treasury operations function. Instead of waiting for batch processes to settle, treasurers must now adopt tools that provide real-time visibility into their cash positions across global accounts.</p>

<h3>The Role of Technology</h3>
<p>Advanced data analytics and artificial intelligence (AI) are playing a crucial role in this transition. By leveraging machine learning algorithms, treasury teams can forecast cash flows with greater accuracy, anticipating shortfalls before they occur. Furthermore, API integrations allow seamless connectivity between corporate ERP systems and banking portals, ensuring that data is always up-to-date.</p>

<h3>Challenges and Opportunities</h3>
<p>While the benefits of continuous liquidity management are clear—improved capital efficiency, reduced borrowing costs, and enhanced risk management—the transition is not without its challenges. Legacy systems, siloed data structures, and regulatory hurdles remain significant barriers for many organizations.</p>

<p>To succeed in this new era, banks and their corporate clients must collaborate closely, investing in modern infrastructure that supports real-time capabilities. The end of end-of-day treasury is not just a technological upgrade; it is a strategic imperative for those looking to stay competitive in a fast-paced global market.</p>
`;

export const magazineData: MagazineSectionData[] = [
  {
    title: "The Nation Reviewed",
    articles: [
      {
        slug: "holistic-urban-planning",
        title: "360-Degree Holistic Urban Planning",
        subtitle: "Bangladesh prioritizes humane, environment-friendly systems over rapid, unplanned construction.",
        author: "Shaquib Quareshi",
        date: "August 2026",
        category: "Politics",
        imageUrl: "/generated/green_city_1788939162339.png",
        content: mockContent,
      },
      {
        slug: "combating-plastic-pollution",
        title: "Combating Plastic Pollution",
        subtitle: "Government intensifies efforts to curb plastic and polythene pollution with eco-friendly alternatives.",
        author: "Shaquib Quareshi",
        date: "August 2026",
        category: "Society",
        imageUrl: "/generated/sustainable_agriculture_1788939197015.png",
        content: mockContent,
      }
    ]
  },
  {
    title: "Essays",
    articles: [
      {
        slug: "sundarbans-conservation",
        title: "Sundarbans Conservation Pact",
        subtitle: "Bangladesh and India renew joint efforts for the conservation of the Sundarbans biodiversity.",
        author: "Shaquib Quareshi",
        date: "August 2026",
        category: "Society",
        imageUrl: "/generated/solar_farm_1788939180065.png",
        content: mockContent,
      },
      {
        slug: "climate-adaptation",
        title: "Climate Adaptation Funding",
        subtitle: "Germany commits €52.5M to support Bangladesh’s climate change adaptation efforts.",
        author: "Shaquib Quareshi",
        date: "August 2026",
        category: "Politics",
        imageUrl: "/generated/green_city_1788939162339.png",
        content: mockContent,
      }
    ]
  },
  {
    title: "Arts and Letters",
    articles: [
      {
        slug: "esg-excellence",
        title: "ESG Excellence in Business",
        subtitle: "First ESG Excellence Awards recognizes 32 local companies for pioneering sustainability standards.",
        author: "Shaquib Quareshi",
        date: "August 2026",
        category: "Culture",
        imageUrl: "/generated/solar_farm_1788939180065.png",
        content: mockContent,
      }
    ]
  }
];

export const recentEditions = [
  { slug: "august-2026", month: "August 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0J9uHSLTonsRqFS9pJ8doltTrd2J43DVHuh2BPExq_vGQhwcFq1c3xbUE5xkhjpAQ_t_l82rynloPR2bCD91lzxzkNpWeoDF3NoUYMnBT3Olf3wQI4DtzXXWfB9U-TtdTU1NyYAOswwko_bwMmFD9InIaPYssfAmuhkGPibmLSOQi7N7NLfe0J8L7HjqLzCy3WY1I56ObGK9RgaM3ZNcMllrItivGdR_PcDCR0-nlyV4SSF_Xh5g" },
  { slug: "july-2026", month: "July 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM" },
  { slug: "june-2026", month: "June 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo" },
  { slug: "may-2026", month: "May 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0J9uHSLTonsRqFS9pJ8doltTrd2J43DVHuh2BPExq_vGQhwcFq1c3xbUE5xkhjpAQ_t_l82rynloPR2bCD91lzxzkNpWeoDF3NoUYMnBT3Olf3wQI4DtzXXWfB9U-TtdTU1NyYAOswwko_bwMmFD9InIaPYssfAmuhkGPibmLSOQi7N7NLfe0J8L7HjqLzCy3WY1I56ObGK9RgaM3ZNcMllrItivGdR_PcDCR0-nlyV4SSF_Xh5g" },
  { slug: "april-2026", month: "April 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM" },
  { slug: "march-2026", month: "March 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo" },
  { slug: "february-2026", month: "February 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0J9uHSLTonsRqFS9pJ8doltTrd2J43DVHuh2BPExq_vGQhwcFq1c3xbUE5xkhjpAQ_t_l82rynloPR2bCD91lzxzkNpWeoDF3NoUYMnBT3Olf3wQI4DtzXXWfB9U-TtdTU1NyYAOswwko_bwMmFD9InIaPYssfAmuhkGPibmLSOQi7N7NLfe0J8L7HjqLzCy3WY1I56ObGK9RgaM3ZNcMllrItivGdR_PcDCR0-nlyV4SSF_Xh5g" },
  { slug: "january-2026", month: "January 2026", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM" },
  { slug: "december-2025", month: "December 2025", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo" },
  { slug: "november-2025", month: "November 2025", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0J9uHSLTonsRqFS9pJ8doltTrd2J43DVHuh2BPExq_vGQhwcFq1c3xbUE5xkhjpAQ_t_l82rynloPR2bCD91lzxzkNpWeoDF3NoUYMnBT3Olf3wQI4DtzXXWfB9U-TtdTU1NyYAOswwko_bwMmFD9InIaPYssfAmuhkGPibmLSOQi7N7NLfe0J8L7HjqLzCy3WY1I56ObGK9RgaM3ZNcMllrItivGdR_PcDCR0-nlyV4SSF_Xh5g" },
  { slug: "october-2025", month: "October 2025", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ko91mT-wSZ9ThhG4QNKxVESvNSnBlEXkfPQuzmSJ_8VbZ_uSPuptpOntY3O_C3u6RdUgMm79EcX2UBhHIXymVwXI4Pbgrs6nMdk_vE52A4c1h4Qw4hIB2bmxfduJWZ7TE5_LRnvGQ2DD-G0_yfbys-9U0NJm4lGPw1fKQ4-fXO_6kKMZmJht1SNS06v5azGP_oAdpbnj-QMBbpVwDJoL74JZdUd23kqkCa2pLRzUfDYmBJO15dM" },
  { slug: "september-2025", month: "September 2025", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQd3epbeePAAV2hCAfL8EV336_ncEQecx_luKQnKBYOnhv0wMhnL9jeNo8T5u2qVuhqPQRRxIaGedOuNmfHXW72REDsKN5vEcazwXJfg54GaIoe_NZMb7eRQdHZ3jJPvg3c10n5l47oAQuGARYodChjot8DClM0eLF0dogQjAqQreCzcAJPoa4cIAN8ZJIhKIta1doHbWVz8hW6VeDqUF8wkm-rYFweU4xraFOGDfmDYoryC5BNwo" }
];

export const teamMembers = [
  { name: "Shaquib Quareshi", role: "Managing Editor", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0J9uHSLTonsRqFS9pJ8doltTrd2J43DVHuh2BPExq_vGQhwcFq1c3xbUE5xkhjpAQ_t_l82rynloPR2bCD91lzxzkNpWeoDF3NoUYMnBT3Olf3wQI4DtzXXWfB9U-TtdTU1NyYAOswwko_bwMmFD9InIaPYssfAmuhkGPibmLSOQi7N7NLfe0J8L7HjqLzCy3WY1I56ObGK9RgaM3ZNcMllrItivGdR_PcDCR0-nlyV4SSF_Xh5g" },
  { name: "Marcus Thorne", role: "Senior Editor", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-jFYnqbF0bFDGRs7aXz1KUHq4cT-hfeMERis4eJgmO1Rr43ud9J5VMvw8tuVOCnsEqsFO_UztIlMe4nLgMRIdaiybfzgXJv2s4y9C_Ie5p_ajBBVhk7XDby9P4d363TnKwCvpVf4rsPGJnzRp37-co5anVQpqLB0B4rBav4smYfYjmBIJaCOQ38YQb_60Ut8BvIPcVrhLnfYnwFaszzEyss5Ln1JEQdAdL57LacTS267_F13IMw" },
  { name: "Sophia Lin", role: "Creative Director", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2uL1AJ4fWgqC8W1CjI1Yf8ji-5abe3aYsxy7muXhYEjUrL3Eg07JLHKlPjvhiPBff9njqF4LJpKjnrTzyhvfgCict_WF6RUWxCdD_28cTUrKruAg9D5UlhLIj5t7bMO_EmpXz6Eeirk9VjAinbpsmpHC_jTILATtn6aqLxpQOoACbCwEqNn4VdZs3F1Hf-35laWGV79hPMltxFCtBGQEgMS5hz75Uh0tRfTiVy9hHa6EYs0sWaDE" },
  { name: "Julian Hayes", role: "Political Correspondent", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB85si3gY7VxZWBAjItmW72yCRa3GucsFJr32HMbgixqFTxLySWTwZ0l3VRUto0Uymu1ifF-CS5JxEnxs0y1wwiGybB81JcyJWecKtiY5gHWmNfSkkXRxi6ZiLb56i7Pt-9VcQ9i-Aeeoke4oWnQgkP_kWS8l2fi5k_SGdYZ2YCA3aKMe8Djd-wHCjEhKKcgGBWAY5VCLU1FY3ON3V1Se6oYgKVoYCiHfXG2I0rAhUhVIL-guo9FO4" },
];

export const faqs = [
  { question: "How do I subscribe to the print edition?", answer: "You can subscribe to our print edition via the 'Subscribe' button in the footer. We offer monthly and annual plans." },
  { question: "Can I submit an article for publication?", answer: "Yes, we accept pitches from freelance writers. Please visit our editorial guidelines page for detailed instructions." },
  { question: "How can I access past issues?", answer: "All our past issues are digitally archived. Subscribers have full access to our back catalogue via the 'Magazine' section." },
  { question: "Do you offer corporate subscriptions?", answer: "We offer discounted rates for group and corporate subscriptions. Contact our support team for more details." },
];

export const categories = [
  { slug: "esg", name: "ESG & Responsible Business", description: "Insights into sustainability, corporate strategy, and value-driven business.", imageUrl: "/generated/green_city_1788939162339.png" },
  { slug: "climate", name: "Climate Action", description: "The latest in environmental protection, carbon emissions, and climate action.", imageUrl: "/generated/solar_farm_1788939180065.png" },
  { slug: "finance", name: "Green Finance", description: "Deep dives into sustainable finance, blue economy, and investments.", imageUrl: "/generated/sustainable_agriculture_1788939197015.png" },
  { slug: "society", name: "Society & Culture", description: "Human rights, decent work, and social sustainability.", imageUrl: "/generated/green_city_1788939162339.png" },
];

