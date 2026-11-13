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

  // 1. ESG (2 articles: Epyllion Group & ESG Excellence Awards)
  const esgArticles = getArticles([
    "epyllion-group-championing-esg-beyond-compliance",
    "verifiable-impact-bangladesh-inaugural-esg-excellence-awards",
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

      {/* 1. ESG (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="01"
        sectionTitle="ESG"
        kicker="CORPORATE BENCHMARKS &amp; VERIFIABLE EXCELLENCE"
        categorySlug="esg"
        articles={esgArticles}
        description="From Epyllion Group's GRI-aligned factory sustainability to Bangladesh's inaugural evidence-based ESG Excellence Awards."
      />

      {/* 2. INDUSTRY PRACTICE (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="02"
        sectionTitle="Industry Practice"
        kicker="MANUFACTURING &amp; GREEN OPERATIONS"
        categorySlug="industry-practices"
        articles={industryArticles}
        description="Transitioning from 349 LEED green factory certifications to daily lean manufacturing operations and sustainable hospitality."
      />

      {/* 3. AGRICULTURE (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="03"
        sectionTitle="Agriculture"
        kicker="FOOD–WATER SECURITY &amp; SALINITY ADAPTATION"
        categorySlug="agriculture"
        articles={agriArticles}
        description="From the desert sands of Arabia to the coastal rivers of Bengal: climate-smart farming and salinity-resistant crops."
      />

      {/* 4. STANDARDS (2 Articles: Banking Standards & IFRS 9 Transition) */}
      <EditorialListSection
        sectionNumber="04"
        title="Standards"
        kicker="BANKING STANDARDS &amp; RISK MONITORING"
        categorySlug="standards"
        articles={standardsArticles}
        description="The hidden technology revolution inside IFRS 9 banking rules alongside central bank decarbonisation financing."
      />

      {/* 5. WASTE MANAGEMENT (2 Articles: EPR & Waste Infrastructure) */}
      <StaggeredDualSplit
        sectionNumber="05"
        sectionTitle="Waste Management"
        kicker="EXTENDED PRODUCER RESPONSIBILITY &amp; ZERO WASTE"
        categorySlug="waste-management"
        articles={wasteArticles}
        description="Making Extended Producer Responsibility (EPR) enforceable and scaling community-based plastic recovery."
      />

      {/* 6. SUSTAINABLE CITY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="06"
        sectionTitle="Sustainable City"
        kicker="URBAN HYDROLOGY &amp; ECOLOGICAL RESILIENCE"
        categorySlug="sustainable-city"
        articles={cityArticles}
        description="A suffocated Buriganga river meets Dhaka's shrinking urban biodiversity in Ramna Park."
      />

      {/* 7. HEALTH (1 Article — World-Class Feature Spread) */}
      {healthArticle && (
        <FullBleedSpread
          sectionNumber="07"
          sectionTitle="Health"
          kicker="LONGEVITY SCIENCE &amp; HEALTH EQUITY"
          categorySlug="health"
          article={healthArticle}
          description="Examining public health inequalities, preventative medicine, and the structural determinants of community longevity."
        />
      )}

      {/* 8. TECHNOLOGY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="08"
        sectionTitle="Technology"
        kicker="SEMICONDUCTORS &amp; AI CLEARANCE MODERNIZATION"
        categorySlug="technology"
        articles={techArticles}
        description="Can Bangladesh build domestic semiconductor capacity while accelerating green data-center approvals through AI?"
      />

      {/* 9. GOVERNANCE (1 Article — World-Class Feature Spread) */}
      {governanceArticle && (
        <FullBleedSpread
          sectionNumber="09"
          sectionTitle="Governance"
          kicker="BOARDROOM OVERSIGHT &amp; FIDUCIARY DUTY"
          categorySlug="governance"
          article={governanceArticle}
          description="Why corporate sustainability cannot remain confined to CSR departments and must be directed by board fiduciary oversight."
        />
      )}

      {/* 10. WILD LIFE & BIODIVERSITY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="10"
        sectionTitle="Wild Life &amp; Biodiversity"
        kicker="DELTA CONSERVATION &amp; AVIAN HERITAGE"
        categorySlug="wild-life-and-biodiversity"
        articles={wildlifeArticles}
        description="Documenting the 12 delta kingfishers of Bangladesh alongside elephant and tiger conservation along the Sundarbans edge."
      />

      {/* 11. SUSTAINABLE FINANCE (2 Articles: Carbon Corridor & Sustainable Finance Blueprint) */}
      <StaggeredDualSplit
        sectionNumber="11"
        sectionTitle="Sustainable Finance"
        kicker="TRANSITION ARCHITECTURE &amp; GREEN CAPITAL"
        categorySlug="sustainable-finance"
        articles={sustainableFinanceArticles}
        description="Unlocking high-integrity carbon corridors and institutional capital markets to finance industrial decarbonisation."
      />

      {/* 12. FRIEND IN NEED (1 Article — World-Class Feature Spread) */}
      {friendArticle && (
        <FullBleedSpread
          sectionNumber="12"
          sectionTitle="Friend In Need"
          kicker="BILATERAL CLIMATE DIPLOMACY"
          categorySlug="friend-in-need"
          article={friendArticle}
          description="Denmark and Bangladesh forge a pioneering bilateral partnership spanning offshore wind, PaCT, and agri-food resilience."
        />
      )}

      {/* 13. CULTURE & MYTH (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="13"
        sectionTitle="Culture &amp; Myth"
        kicker="ANCIENT ECOLOGICAL GUARDIANS"
        categorySlug="culture-and-myth"
        articles={mythArticles}
        description="The folklore of Bonbibi in the Sundarbans and Humbaba in Mesopotamia as enduring metaphors for ecological boundaries."
      />

      {/* 14. FRONTRUNNER (1 Article — Exclusive TSV Interview Spotlight) */}
      {frontrunnerArticle && (
        <BroadsheetSpotlight
          sectionNumber="14"
          sectionTitle="Frontrunner"
          kicker="TSV INTERVIEW &amp; CORPORATE LEADERSHIP"
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
          kicker="RENEWABLE TRANSITION &amp; CLEAN ENERGY"
          categorySlug="energy-and-power"
          article={energyArticle}
          theme="light"
          imageOnRight={true}
        />
      )}

      {/* 16. CIRCULAR ECONOMY (1 Article — Sobar Niche / Closed-Loop Systems) */}
      {circularArticle && (
        <BroadsheetSpotlight
          sectionNumber="16"
          sectionTitle="Circular Economy"
          kicker="INDUSTRIAL SYMBIOSIS &amp; CLOSED-LOOP SYSTEMS"
          categorySlug="circular-economy"
          article={circularArticle}
          theme="light"
        />
      )}

      {/* TOP STORIES / GLOBAL BRIEFINGS */}
      <EditorialCarouselSection
        sectionNumber="14"
        title="Today's Global Briefings"
        kicker="REAL-TIME INTELLIGENCE"
        categorySlug="top-stories"
        articles={topStoriesArticles}
        motifTitle="Top Stories &amp; Dispatch"
        description="National solar tariff policies, European textile destruction bans, and carbon credit market disruptions."
      />

      {/* MASTER DIRECTORY & COMPENDIUM */}
      <InteractiveMasterIndex />

      {/* EDITORIAL DISPATCH NEWSLETTER */}
      <CtaSection />
    </main>
  );
}
