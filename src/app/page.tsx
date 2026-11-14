import React from "react";
import { magazineData, NewsArticle } from "@/data/mockData";
import InauguralMonolith from "@/components/home/InauguralMonolith";
import StaggeredDualSplit from "@/components/home/StaggeredDualSplit";
import FullBleedSpread from "@/components/home/FullBleedSpread";
import BroadsheetSpotlight from "@/components/home/BroadsheetSpotlight";
import EditorialListSection from "@/components/home/EditorialListSection";
import EditorialCarouselSection from "@/components/home/EditorialCarouselSection";
import InteractiveMasterIndex from "@/components/home/InteractiveMasterIndex";
import EditorialCursor from "@/components/home/EditorialCursor";
import CtaSection from "@/components/shared/CtaSection";

export default function Home() {
  const allArticles = magazineData.flatMap((s) => s.articles);

  const getArticle = (slug: string): NewsArticle | undefined => {
    return allArticles.find((a) => a.slug === slug);
  };

  const getArticles = (slugs: string[]): NewsArticle[] => {
    return slugs.map((s) => getArticle(s)).filter((a): a is NewsArticle => Boolean(a));
  };

  // 1. ESG (3 articles: Epyllion Group, ESG Excellence Awards, & How Corporates are Rated)
  const esgArticles = getArticles([
    "epyllion-group-championing-esg-beyond-compliance",
    "verifiable-impact-bangladesh-inaugural-esg-excellence-awards",
    "esg-ratings-how-corporates-are-rated-and-why-it-matters",
  ]);

  // 2. Industry Practice (2 articles: Beyond the Plaque & Radisson Blu)
  const industryArticles = getArticles([
    "beyond-the-plaque-green-certification-to-green-operations",
    "sustainability-practices-radisson-blu-chattogram",
  ]);

  // 3. Agriculture (2 articles: Sands of Arabia & Salinity to Sustainability)
  const agriArticles = getArticles([
    "from-the-sands-of-arabia-to-the-rivers-of-bengal",
    "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh",
  ]);

  // 4. Standards (2 articles: Decarbonisation Financing & IFRS 9 Technology Story)
  const standardsArticles = getArticles([
    "decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank",
    "the-accounting-rule-thats-secretly-a-technology-story-ifrs9",
  ]);

  // 5. Waste Management (2 articles: EPR & TMSS Waste Collection)
  const wasteArticles = getArticles([
    "plastic-waste-management-bangladesh-extended-producer-responsibility",
    "transforming-waste-into-hope-tmss-waste-collection-business",
  ]);

  // 6. Sustainable City (2 articles: Buriganga & Ramna Park)
  const cityArticles = getArticles([
    "a-suffocated-buriganga-existential-threat-for-dhaka",
    "ramna-green-critters-of-dhakas-shrinking-urban-space",
  ]);

  // 7. Health (1 article — World-Class Feature Spread)
  const healthArticle = getArticle(
    "living-well-health-in-an-unequal-world-longevity-blueprint"
  );

  // 8. Technology (2 articles: Semiconductors & AI Infrastructure)
  const techArticles = getArticles([
    "the-semiconductor-race-can-bangladesh-catch-up",
    "ai-infrastructure-closing-the-environmental-clearance-gap",
  ]);

  // 9. Governance (1 article — World-Class Feature Spread)
  const governanceArticle = getArticle(
    "the-governance-gap-why-sustainability-needs-to-reach-the-boardroom"
  );

  // 10. Wild Life & Biodiversity (2 articles: Delta's Edge & Kingfishers)
  const wildlifeArticles = getArticles([
    "the-deltas-edge-ecological-balance-wildlife-human-survival",
    "the-kingfishers-of-bangladesh-twelve-species",
  ]);

  // 11. Sustainable Finance (2 articles: Carbon Corridor & Sustainable Finance Blueprint)
  const sustainableFinanceArticles = getArticles([
    "the-carbon-corridor-unlocking-green-investment-for-bangladesh",
    "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
  ]);

  // 12. Friend In Need (1 article — World-Class Feature Spread)
  const friendArticle = getArticle(
    "denmark-bangladesh-lasting-partnership-greener-turn"
  );

  // 13. Culture & Myth (2 articles: Bonbibi & Humbaba)
  const mythArticles = getArticles(["bonbibi", "humbaba"]);

  // 14. Frontrunner (1 article: Epyllion Group TSV Interview)
  const frontrunnerArticle = getArticle(
    "epyllion-group-championing-esg-beyond-compliance"
  );

  // 15. Energy & Power (1 article: Accelerating Clean Energy)
  const energyArticle = getArticle(
    "accelerating-clean-energy-transition-grid-modernization-bangladesh"
  );

  // 16. Circular Economy (1 article: Closing the Loop)
  const circularArticle = getArticle(
    "closing-the-loop-circular-economy-industrial-symbiosis-bangladesh"
  );

  // 17. Playbook (2 articles: Corporate ESG Ratings & Sustainable Finance Blueprint)
  const playbookArticles = getArticles([
    "esg-ratings-how-corporates-are-rated-and-why-it-matters",
    "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
  ]);

  // 18. Rule Book (1 article: HREDD & Export Competitiveness)
  const ruleBookArticle = getArticle(
    "from-audit-to-accountability-export-competitiveness-hredd"
  );

  // 19. Home & The World (3 articles: Bangladesh Crossroads, Ivorian Workers, Balance Sheet of Development)
  const homeWorldArticles = getArticles([
    "bangladesh-at-the-crossroads-un-sdg-report-2026",
    "climate-change-and-decent-work-ivory-coast",
    "the-balance-sheet-of-development-asia-pacific-sustainability",
  ]);

  // Global Briefings / Real-Time Dispatch (4 articles)
  const topStoriesArticles = getArticles([
    "bangladesh-national-sustainability-news-solar-duties-climate-finance",
    "global-top-stories-eu-unsold-clothing-ban-german-renewables",
    "global-business-strategy-rice-methane-credits-green-innovation",
    "global-policy-regulation-europe-crop-yields-japan-flood-resilience",
  ]);

  return (
    <main className="master-container pb-16 antialiased">
      {/* Magnetic "READ" Cursor Indicator (Desktop Only) */}
      <EditorialCursor />

      {/* COVER STORY & VOLUME 01 HERO SPOTLIGHT */}
      <InauguralMonolith />

      {/* 1. ESG (3 Articles) */}
      <StaggeredDualSplit
        sectionNumber="01"
        sectionTitle="ESG"
        categorySlug="esg"
        articles={esgArticles}
        description="Corporate sustainability benchmarks, independent ESG ratings, and verifiable non-financial performance across leading enterprises."
      />

      {/* 2. INDUSTRY PRACTICE (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="02"
        sectionTitle="Industry Practice"
        categorySlug="industry-practices"
        articles={industryArticles}
        description="Operational decarbonisation, green manufacturing systems, and sustainable hospitality driving industrial competitiveness."
      />

      {/* 3. AGRICULTURE (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="03"
        sectionTitle="Agriculture"
        categorySlug="agriculture"
        articles={agriArticles}
        description="Climate-smart cultivation, food–water security, and salinity-resilient agricultural innovation across coastal and delta regions."
      />

      {/* 4. STANDARDS (2 Articles) */}
      <EditorialListSection
        sectionNumber="04"
        title="Standards"
        categorySlug="standards"
        articles={standardsArticles}
        description="Regulatory frameworks, international reporting rules, and central bank policy shaping risk governance and green compliance."
      />

      {/* 5. WASTE MANAGEMENT (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="05"
        sectionTitle="Waste Management"
        categorySlug="waste-management"
        articles={wasteArticles}
        description="Resource recovery, producer accountability frameworks, and community-led waste valorisation across urban and industrial hubs."
      />

      {/* 6. SUSTAINABLE CITY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="06"
        sectionTitle="Sustainable City"
        categorySlug="sustainable-city"
        articles={cityArticles}
        description="Urban hydrology, river restoration, and ecological planning for resilient, livable cities."
      />

      {/* 7. HEALTH (1 Article — World-Class Feature Spread) */}
      {healthArticle && (
        <FullBleedSpread
          sectionNumber="07"
          sectionTitle="Health"
          categorySlug="health"
          article={healthArticle}
          description="Examining public health inequalities, preventative medicine, and the structural determinants of community longevity."
        />
      )}

      {/* 8. TECHNOLOGY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="08"
        sectionTitle="Technology"
        categorySlug="technology"
        articles={techArticles}
        description="Deep-tech industrial capacity, AI-enabled environmental governance, and digital infrastructure for a low-carbon economy."
      />

      {/* 9. GOVERNANCE (1 Article — World-Class Feature Spread) */}
      {governanceArticle && (
        <FullBleedSpread
          sectionNumber="09"
          sectionTitle="Governance"
          categorySlug="governance"
          article={governanceArticle}
          description="Why corporate sustainability cannot remain confined to CSR departments and must be directed by board fiduciary oversight."
        />
      )}

      {/* 10. WILD LIFE & BIODIVERSITY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="10"
        sectionTitle="Wild Life &amp; Biodiversity"
        categorySlug="wild-life-and-biodiversity"
        articles={wildlifeArticles}
        description="Conservation science, habitat protection, and ecological stewardship across forests, wetlands, and delta ecosystems."
      />

      {/* 11. SUSTAINABLE FINANCE (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="11"
        sectionTitle="Sustainable Finance"
        categorySlug="sustainable-finance"
        articles={sustainableFinanceArticles}
        description="Green capital markets, transition finance instruments, and institutional investment pathways for industrial decarbonisation."
      />

      {/* 12. FRIEND IN NEED (1 Article — World-Class Feature Spread) */}
      {friendArticle && (
        <FullBleedSpread
          sectionNumber="12"
          sectionTitle="Friend In Need"
          categorySlug="friend-in-need"
          article={friendArticle}
          description="International climate diplomacy, bilateral technical cooperation, and cross-border partnerships accelerating green transition."
        />
      )}

      {/* 13. CULTURE & MYTH (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="13"
        sectionTitle="Culture &amp; Myth"
        categorySlug="culture-and-myth"
        articles={mythArticles}
        description="Mythology, indigenous folklore, and cultural narratives that preserve humanity's sacred boundaries with the natural world."
      />

      {/* 14. FRONTRUNNER (1 Article — Exclusive TSV Interview Spotlight) */}
      {frontrunnerArticle && (
        <BroadsheetSpotlight
          sectionNumber="14"
          sectionTitle="Frontrunner"
          categorySlug="frontrunner"
          article={frontrunnerArticle}
          theme="light"
        />
      )}

      {/* 15. ENERGY & POWER (1 Article — Grid Modernization & Renewables) */}
      {energyArticle && (
        <BroadsheetSpotlight
          sectionNumber="15"
          sectionTitle="Energy &amp; Power"
          categorySlug="energy-and-power"
          article={energyArticle}
          theme="light"
          imageOnRight={true}
        />
      )}

      {/* 16. CIRCULAR ECONOMY (1 Article — Closed-Loop Systems) */}
      {circularArticle && (
        <BroadsheetSpotlight
          sectionNumber="16"
          sectionTitle="Circular Economy"
          categorySlug="circular-economy"
          article={circularArticle}
          theme="light"
        />
      )}

      {/* 17. PLAYBOOK (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="17"
        sectionTitle="Playbook"
        categorySlug="playbook"
        articles={playbookArticles}
        description="Practical executive frameworks for corporate ESG evaluation, reporting rigor, and sustainable finance execution."
      />

      {/* 18. RULE BOOK (1 Article) */}
      {ruleBookArticle && (
        <BroadsheetSpotlight
          sectionNumber="18"
          sectionTitle="Rule Book"
          categorySlug="rule-book"
          article={ruleBookArticle}
          theme="light"
          imageOnRight={true}
        />
      )}

      {/* 19. HOME & THE WORLD (3 Articles) */}
      <StaggeredDualSplit
        sectionNumber="19"
        sectionTitle="Home &amp; The World"
        categorySlug="home-and-the-world"
        articles={homeWorldArticles}
        description="Global sustainability intelligence, regional development benchmarks, and climate-resilient labor across emerging economies."
      />

      {/* TOP STORIES / GLOBAL BRIEFINGS */}
      <EditorialCarouselSection
        sectionNumber="20"
        title="Today's Global Briefings"
        categorySlug="top-stories"
        articles={topStoriesArticles}
        motifTitle="Top Stories &amp; Dispatch"
        description="Key policy shifts, clean energy milestones, and international sustainability briefings shaping global markets."
      />

      {/* MASTER DIRECTORY & COMPENDIUM */}
      <InteractiveMasterIndex />

      {/* EDITORIAL DISPATCH NEWSLETTER */}
      <CtaSection />
    </main>
  );
}
