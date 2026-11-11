import React from "react";
import { magazineData, NewsArticle } from "@/data/mockData";
import InauguralMonolith from "@/components/home/InauguralMonolith";
import AsymmetricBroadsheet from "@/components/home/AsymmetricBroadsheet";
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

  // 1. RMG & Textile / Industry Practices (2 articles)
  const rmgArticles = getArticles([
    "beyond-the-plaque-green-certification-to-green-operations",
    "sustainability-practices-radisson-blu-chattogram",
  ]);

  // 2. Frontrunner — Corporate ESG Pioneer (1 article)
  const frontrunnerArticle = getArticle(
    "epyllion-group-championing-esg-beyond-compliance"
  );

  // 3. Rule Book — Compliance & HREDD (1 article)
  const ruleBookArticle = getArticle(
    "from-audit-to-accountability-export-competitiveness-hredd"
  );

  // 4. Sustainable City (2 articles)
  const cityArticles = getArticles([
    "a-suffocated-buriganga-existential-threat-for-dhaka",
    "ramna-green-critters-of-dhakas-shrinking-urban-space",
  ]);

  // 5. Capital Market & Sustainable Finance (1 article)
  const capitalArticle = getArticle(
    "the-carbon-corridor-unlocking-green-investment-for-bangladesh"
  );

  // 6. Standards (IFRS 9 & Decarbonisation Financing / Energy & Power) (2 articles)
  const standardsArticles = getArticles([
    "the-accounting-rule-thats-secretly-a-technology-story-ifrs9",
    "decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank",
  ]);

  // 7. Playbook — ESG Ratings & Policy (2 articles)
  const playbookArticles = getArticles([
    "esg-ratings-how-corporates-are-rated-and-why-it-matters",
    "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
  ]);

  // 8. Governance (1 article)
  const governanceArticle = getArticle(
    "the-governance-gap-why-sustainability-needs-to-reach-the-boardroom"
  );

  // 9. Agriculture (2 articles)
  const agriArticles = getArticles([
    "from-the-sands-of-arabia-to-the-rivers-of-bengal",
    "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh",
  ]);

  // 10. Technology (2 articles)
  const techArticles = getArticles([
    "the-semiconductor-race-can-bangladesh-catch-up",
    "ai-infrastructure-closing-the-environmental-clearance-gap",
  ]);

  // 11. Health & Human Wellbeing (1 article)
  const healthArticle = getArticle(
    "living-well-health-in-an-unequal-world-longevity-blueprint"
  );

  // 12. Wild Life & Biodiversity (2 articles)
  const wildlifeArticles = getArticles([
    "the-deltas-edge-ecological-balance-wildlife-human-survival",
    "the-kingfishers-of-bangladesh-twelve-species",
  ]);

  // 13. Circular Economy & Waste Management (2 articles)
  const circularArticles = getArticles([
    "plastic-waste-management-bangladesh-extended-producer-responsibility",
    "transforming-waste-into-hope-tmss-waste-collection-business",
  ]);

  // 14. Culture & Myth (2 articles)
  const mythArticles = getArticles(["bonbibi", "humbaba"]);

  // 15. Home & The World (3 articles)
  const homeWorldArticles = getArticles([
    "bangladesh-at-the-crossroads-un-sdg-report-2026",
    "climate-change-and-decent-work-ivory-coast",
    "the-balance-sheet-of-development-asia-pacific-sustainability",
  ]);

  // 16. ESG Award (1 article)
  const esgAwardArticle = getArticle(
    "verifiable-impact-bangladesh-inaugural-esg-excellence-awards"
  );

  // 17. Friend In Need (1 article)
  const friendArticle = getArticle(
    "denmark-bangladesh-lasting-partnership-greener-turn"
  );

  // 18. Top Stories & Global Briefings (4 articles)
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

      {/* 1. COVER STORY & VOLUME 01 HERO SPOTLIGHT */}
      <InauguralMonolith />

      {/* 2. RMG & TEXTILE / INDUSTRY PRACTICES (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="02"
        sectionTitle="RMG &amp; Textile"
        kicker="MANUFACTURING &amp; GREEN OPERATIONS"
        categorySlug="rmg-and-textile"
        articles={rmgArticles}
        description="Transitioning from 349 LEED green factory certifications to daily lean manufacturing operations and sustainable hospitality."
      />

      {/* 3. FRONTRUNNER — Corporate ESG Pioneer (1 Article) */}
      {frontrunnerArticle && (
        <BroadsheetSpotlight
          sectionNumber="03"
          sectionTitle="Frontrunner"
          kicker="CORPORATE ESG PIONEER"
          categorySlug="frontrunner"
          article={frontrunnerArticle}
          theme="light"
        />
      )}

      {/* 4. RULE BOOK — Export Compliance & Due Diligence (1 Article) */}
      {ruleBookArticle && (
        <BroadsheetSpotlight
          sectionNumber="04"
          sectionTitle="Rule Book"
          kicker="HREDD &amp; DUE DILIGENCE MANDATE"
          categorySlug="rule-book"
          article={ruleBookArticle}
          theme="light"
          imageOnRight={true}
        />
      )}

      {/* 5. SUSTAINABLE CITY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="05"
        sectionTitle="Sustainable City"
        kicker="URBAN HYDROLOGY &amp; ECOLOGICAL SANCTUARIES"
        categorySlug="sustainable-city"
        articles={cityArticles}
        description="A suffocated Buriganga river meets Dhaka's shrinking urban biodiversity in Ramna Park."
      />

      {/* 6. CAPITAL MARKET & SUSTAINABLE FINANCE (1 Article) */}
      {capitalArticle && (
        <BroadsheetSpotlight
          sectionNumber="06"
          sectionTitle="Capital Market"
          kicker="TRANSITION ARCHITECTURE &amp; CARBON TRADING"
          categorySlug="capital-market"
          article={capitalArticle}
          theme="light"
        />
      )}

      {/* 7. STANDARDS — Technology & Decarbonisation (2 Articles — The Critics New Yorker List Style) */}
      <EditorialListSection
        sectionNumber="07"
        title="Standards"
        kicker="FINANCIAL REGULATION &amp; ENERGY TRANSITION"
        categorySlug="standards"
        articles={standardsArticles}
        description="The hidden technology revolution inside IFRS 9 banking rules and central bank decarbonisation financing."
      />

      {/* 8. PLAYBOOK — ESG Ratings & Policy (2 Articles — The Critics New Yorker List Style) */}
      <EditorialListSection
        sectionNumber="08"
        title="Playbook"
        kicker="EXECUTIVE FRAMEWORKS &amp; ESG RATINGS"
        categorySlug="playbook"
        articles={playbookArticles}
        description="Inside corporate ESG rating methodologies and the coordinated regulatory blueprint for sustainable finance."
      />

      {/* 9. GOVERNANCE (1 Article — Full-Bleed Deep Forest Green Spread) */}
      {governanceArticle && (
        <FullBleedSpread
          sectionNumber="09"
          sectionTitle="Governance"
          kicker="BOARDROOM OVERSIGHT &amp; FIDUCIARY DUTY"
          categorySlug="governance"
          article={governanceArticle}
          bgColor="bg-[#1e382b]"
        />
      )}

      {/* 10. AGRICULTURE (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="10"
        sectionTitle="Agriculture"
        kicker="FOOD–WATER SECURITY &amp; SALINITY ADAPTATION"
        categorySlug="agriculture"
        articles={agriArticles}
        description="From the desert sands of Arabia to the coastal rivers of Bengal: climate-smart farming and salinity-resistant crops."
      />

      {/* 11. TECHNOLOGY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="11"
        sectionTitle="Technology"
        kicker="SEMICONDUCTORS &amp; AI CLEARANCE MODERNIZATION"
        categorySlug="technology"
        articles={techArticles}
        description="Can Bangladesh build domestic semiconductor capacity while accelerating green data-center approvals through AI?"
      />

      {/* 12. HEALTH & HUMAN WELLBEING (1 Article — Full-Bleed Deeper Pine Green Spread) */}
      {healthArticle && (
        <FullBleedSpread
          sectionNumber="12"
          sectionTitle="Health &amp; Human Wellbeing"
          kicker="LONGEVITY SCIENCE &amp; HEALTH EQUITY"
          categorySlug="health"
          article={healthArticle}
          bgColor="bg-[#142d1f]"
        />
      )}

      {/* 13. WILD LIFE & BIODIVERSITY (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="13"
        sectionTitle="Wild Life &amp; Biodiversity"
        kicker="DELTA CONSERVATION &amp; COEXISTENCE"
        categorySlug="wild-life-and-biodiversity"
        articles={wildlifeArticles}
        description="Documenting the 12 delta kingfishers of Bangladesh alongside elephant and tiger conservation along the Sundarbans edge."
      />

      {/* 14. CIRCULAR ECONOMY & WASTE MANAGEMENT (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="14"
        sectionTitle="Circular Economy"
        kicker="EXTENDED PRODUCER RESPONSIBILITY &amp; ZERO WASTE"
        categorySlug="circular-economy"
        articles={circularArticles}
        description="Making Extended Producer Responsibility (EPR) enforceable and scaling community-based plastic recovery."
      />

      {/* 15. CULTURE & MYTH (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="15"
        sectionTitle="Culture &amp; Myth"
        kicker="ANCIENT ECOLOGICAL GUARDIANS"
        categorySlug="culture-and-myth"
        articles={mythArticles}
        description="The folklore of Bonbibi in the Sundarbans and Humbaba in Mesopotamia as enduring metaphors for ecological boundaries."
      />

      {/* 16. HOME & THE WORLD (3 Articles — Asymmetric Broadsheet with 1 Flagship + 2 Stack) */}
      <AsymmetricBroadsheet
        sectionNumber="16"
        sectionTitle="Home &amp; The World"
        kicker="GLOBAL POLICY &amp; SDG REPORTING"
        categorySlug="home-and-the-world"
        articles={homeWorldArticles}
        description="UN SDG progress at the crossroads, heat stress among cocoa workers in Côte d'Ivoire, and the regional development balance sheet."
      />

      {/* 17. ESG AWARD (1 Article) */}
      {esgAwardArticle && (
        <BroadsheetSpotlight
          sectionNumber="17"
          sectionTitle="ESG Award"
          kicker="EVIDENCE-BASED RECOGNITION"
          categorySlug="esg-award"
          article={esgAwardArticle}
          theme="light"
        />
      )}

      {/* 18. FRIEND IN NEED (1 Article — Full-Bleed Dark Nocturnal Evergreen Spread) */}
      {friendArticle && (
        <FullBleedSpread
          sectionNumber="18"
          sectionTitle="Friend In Need"
          kicker="BILATERAL CLIMATE DIPLOMACY"
          categorySlug="friend-in-need"
          article={friendArticle}
          bgColor="bg-[#0b2015]"
        />
      )}

      {/* 19. TOP STORIES / GLOBAL BRIEFINGS (Horizontal Swipeable Carousel with Dots — The Atlantic / Today's Mix Style) */}
      <EditorialCarouselSection
        sectionNumber="19"
        title="Today's Global Briefings"
        kicker="REAL-TIME INTELLIGENCE"
        categorySlug="top-stories"
        articles={topStoriesArticles}
        motifTitle="Top Stories &amp; Dispatch"
        description="National solar tariff policies, European textile destruction bans, and carbon credit market disruptions."
      />

      {/* 20. MASTER DIRECTORY & COMPENDIUM */}
      <InteractiveMasterIndex />

      {/* EDITORIAL DISPATCH NEWSLETTER */}
      <CtaSection />
    </main>
  );
}
