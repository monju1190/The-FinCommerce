export interface HomeSectionConfig {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  articleSlugs: string[];
}

export const HOME_SECTIONS: HomeSectionConfig[] = [
  {
    id: "esg",
    number: "01",
    title: "ESG",
    slug: "esg",
    description:
      "Corporate sustainability benchmarks, independent ESG ratings, and verifiable non-financial performance across leading enterprises.",
    articleSlugs: [
      "epyllion-group-championing-esg-beyond-compliance",
      "verifiable-impact-bangladesh-inaugural-esg-excellence-awards",
      "esg-ratings-how-corporates-are-rated-and-why-it-matters",
    ],
  },
  {
    id: "industry-practices",
    number: "02",
    title: "Industry Practice",
    slug: "industry-practices",
    description:
      "Operational decarbonisation, green manufacturing systems, and sustainable hospitality driving industrial competitiveness.",
    articleSlugs: [
      "beyond-the-plaque-green-certification-to-green-operations",
      "sustainability-practices-radisson-blu-chattogram",
    ],
  },
  {
    id: "agriculture",
    number: "03",
    title: "Agriculture",
    slug: "agriculture",
    description:
      "Climate-smart cultivation, food–water security, and salinity-resilient agricultural innovation across coastal and delta regions.",
    articleSlugs: [
      "from-the-sands-of-arabia-to-the-rivers-of-bengal",
      "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh",
    ],
  },
  {
    id: "standards",
    number: "04",
    title: "Standards",
    slug: "standards",
    description:
      "Regulatory frameworks, international reporting rules, and central bank policy shaping risk governance and green compliance.",
    articleSlugs: [
      "decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank",
      "the-accounting-rule-thats-secretly-a-technology-story-ifrs9",
    ],
  },
  {
    id: "waste-management",
    number: "05",
    title: "Waste Management",
    slug: "waste-management",
    description:
      "Resource recovery, producer accountability frameworks, and community-led waste valorisation across urban and industrial hubs.",
    articleSlugs: [
      "plastic-waste-management-bangladesh-extended-producer-responsibility",
      "transforming-waste-into-hope-tmss-waste-collection-business",
    ],
  },
  {
    id: "sustainable-city",
    number: "06",
    title: "Sustainable City",
    slug: "sustainable-city",
    description:
      "Urban hydrology, river restoration, and ecological planning for resilient, livable cities.",
    articleSlugs: [
      "a-suffocated-buriganga-existential-threat-for-dhaka",
      "ramna-green-critters-of-dhakas-shrinking-urban-space",
    ],
  },
  {
    id: "health",
    number: "07",
    title: "Health",
    slug: "health",
    description:
      "Examining public health inequalities, preventative medicine, and the structural determinants of community longevity.",
    articleSlugs: ["living-well-health-in-an-unequal-world-longevity-blueprint"],
  },
  {
    id: "technology",
    number: "08",
    title: "Technology",
    slug: "technology",
    description:
      "Deep-tech industrial capacity, AI-enabled environmental governance, and digital infrastructure for a low-carbon economy.",
    articleSlugs: [
      "the-semiconductor-race-can-bangladesh-catch-up",
      "ai-infrastructure-closing-the-environmental-clearance-gap",
    ],
  },
  {
    id: "governance",
    number: "09",
    title: "Governance",
    slug: "governance",
    description:
      "Why corporate sustainability cannot remain confined to CSR departments and must be directed by board fiduciary oversight.",
    articleSlugs: [
      "the-governance-gap-why-sustainability-needs-to-reach-the-boardroom",
    ],
  },
  {
    id: "wild-life-and-biodiversity",
    number: "10",
    title: "Wild Life & Biodiversity",
    slug: "wild-life-and-biodiversity",
    description:
      "Conservation science, habitat protection, and ecological stewardship across forests, wetlands, and delta ecosystems.",
    articleSlugs: [
      "the-deltas-edge-ecological-balance-wildlife-human-survival",
      "the-kingfishers-of-bangladesh-twelve-species",
    ],
  },
  {
    id: "sustainable-finance",
    number: "11",
    title: "Sustainable Finance",
    slug: "sustainable-finance",
    description:
      "Green capital markets, transition finance instruments, and institutional investment pathways for industrial decarbonisation.",
    articleSlugs: [
      "the-carbon-corridor-unlocking-green-investment-for-bangladesh",
      "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
    ],
  },
  {
    id: "friend-in-need",
    number: "12",
    title: "Friend In Need",
    slug: "friend-in-need",
    description:
      "International climate diplomacy, bilateral technical cooperation, and cross-border partnerships accelerating green transition.",
    articleSlugs: ["denmark-bangladesh-lasting-partnership-greener-turn"],
  },
  {
    id: "culture-and-myth",
    number: "13",
    title: "Culture & Myth",
    slug: "culture-and-myth",
    description:
      "Mythology, indigenous folklore, and cultural narratives that preserve humanity's sacred boundaries with the natural world.",
    articleSlugs: ["bonbibi", "humbaba"],
  },
  {
    id: "frontrunner",
    number: "14",
    title: "Frontrunner",
    slug: "frontrunner",
    description:
      "Executive interviews and leadership profiles spotlighting corporate sustainability pioneers.",
    articleSlugs: ["epyllion-group-championing-esg-beyond-compliance"],
  },
  {
    id: "energy-and-power",
    number: "15",
    title: "Energy & Power",
    slug: "energy-and-power",
    description:
      "Renewable generation, grid modernization, and clean energy transition across emerging industrial economies.",
    articleSlugs: [
      "accelerating-clean-energy-transition-grid-modernization-bangladesh",
    ],
  },
  {
    id: "circular-economy",
    number: "16",
    title: "Circular Economy",
    slug: "circular-economy",
    description:
      "Industrial symbiosis, closed-loop material recovery, and regenerative manufacturing models.",
    articleSlugs: [
      "closing-the-loop-circular-economy-industrial-symbiosis-bangladesh",
    ],
  },
  {
    id: "playbook",
    number: "17",
    title: "Playbook",
    slug: "playbook",
    description:
      "Practical executive frameworks for corporate ESG evaluation, reporting rigor, and sustainable finance execution.",
    articleSlugs: [
      "esg-ratings-how-corporates-are-rated-and-why-it-matters",
      "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
    ],
  },
  {
    id: "rule-book",
    number: "18",
    title: "Rule Book",
    slug: "rule-book",
    description:
      "Due diligence directives, export compliance architecture, and value-chain accountability for global trade competitiveness.",
    articleSlugs: [
      "from-audit-to-accountability-export-competitiveness-hredd",
    ],
  },
  {
    id: "home-and-the-world",
    number: "19",
    title: "Home & The World",
    slug: "home-and-the-world",
    description:
      "Global sustainability intelligence, regional development benchmarks, and climate-resilient labor across emerging economies.",
    articleSlugs: [
      "bangladesh-at-the-crossroads-un-sdg-report-2026",
      "climate-change-and-decent-work-ivory-coast",
      "the-balance-sheet-of-development-asia-pacific-sustainability",
    ],
  },
  {
    id: "top-stories",
    number: "20",
    title: "Today's Global Briefings",
    slug: "top-stories",
    description:
      "Key policy shifts, clean energy milestones, and international sustainability briefings shaping global markets.",
    articleSlugs: [
      "bangladesh-national-sustainability-news-solar-duties-climate-finance",
      "global-top-stories-eu-unsold-clothing-ban-german-renewables",
      "global-business-strategy-rice-methane-credits-green-innovation",
      "global-policy-regulation-europe-crop-yields-japan-flood-resilience",
    ],
  },
];

export const SECTION_SLUG_ALIASES: Record<string, string> = {
  "sustainable-cities": "sustainable-city",
  "wildlife": "wild-life-and-biodiversity",
  "wildlife-and-biodiversity": "wild-life-and-biodiversity",
  "friends-in-need": "friend-in-need",
  "rmg-and-textile": "industry-practices",
  "capital-market": "sustainable-finance",
};

