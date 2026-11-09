import React from "react";
import { magazineData, NewsArticle } from "@/data/mockData";
import InauguralMonolith from "@/components/home/InauguralMonolith";
import AsymmetricBroadsheet from "@/components/home/AsymmetricBroadsheet";
import StaggeredDualSplit from "@/components/home/StaggeredDualSplit";
import FullBleedSpread from "@/components/home/FullBleedSpread";
import EditorialBentoMatrix from "@/components/home/EditorialBentoMatrix";
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

  // 1. RMG & Textile Articles (Module 2 - 4 articles)
  const rmgArticles = getArticles([
    "beyond-the-plaque-green-certification-to-green-operations",
    "epyllion-group-championing-esg-beyond-compliance",
    "from-audit-to-accountability-export-competitiveness-hredd",
    "sustainability-practices-radisson-blu-chattogram",
  ]);

  // 2. Sustainable City Articles (Module 3 - 2 articles)
  const cityArticles = getArticles([
    "a-suffocated-buriganga-existential-threat-for-dhaka",
    "ramna-green-critters-of-dhakas-shrinking-urban-space",
  ]);

  // 3. Capital Market & Finance Articles (Module 2 - 3 articles)
  const capitalArticles = getArticles([
    "the-carbon-corridor-unlocking-green-investment-for-bangladesh",
    "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
    "decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank",
  ]);

  // 4. Governance Article (Module 4 - 1 article)
  const governanceArticle = getArticle(
    "the-governance-gap-why-sustainability-needs-to-reach-the-boardroom"
  );

  // 5. Agriculture Articles (Module 3 - 2 articles)
  const agriArticles = getArticles([
    "from-the-sands-of-arabia-to-the-rivers-of-bengal",
    "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh",
  ]);

  // 6. Technology Articles (Module 3 - 2 articles)
  const techArticles = getArticles([
    "the-semiconductor-race-can-bangladesh-catch-up",
    "ai-infrastructure-closing-the-environmental-clearance-gap",
  ]);

  // 7. Health Article (Module 4 - 1 article)
  const healthArticle = getArticle(
    "living-well-health-in-an-unequal-world-longevity-blueprint"
  );

  // 8. Wildlife Articles (Module 3 - 2 articles)
  const wildlifeArticles = getArticles([
    "the-deltas-edge-ecological-balance-wildlife-human-survival",
    "the-kingfishers-of-bangladesh-twelve-species",
  ]);

  // 9. Bento Articles (Module 5)
  const bentoArticles = {
    standards: getArticle("the-accounting-rule-thats-secretly-a-technology-story-ifrs9"),
    playbook: getArticle("esg-ratings-how-corporates-are-rated-and-why-it-matters"),
    circular: getArticle("plastic-waste-management-bangladesh-extended-producer-responsibility"),
    award: getArticle("verifiable-impact-bangladesh-inaugural-esg-excellence-awards"),
    climate: getArticle("bangladesh-national-sustainability-news-solar-duties-climate-finance"),
  };

  // 10. Culture & Myth Articles (Module 3 - 2 articles)
  const mythArticles = getArticles(["bonbibi", "humbaba"]);

  // 11. Friend In Need Article (Module 4 - 1 article)
  const friendArticle = getArticle("denmark-bangladesh-lasting-partnership-greener-turn");

  return (
    <main className="master-container pb-16 antialiased">
      {/* Magnetic "READ" Cursor Indicator (Desktop Only) */}
      <EditorialCursor />

      {/* MODULE 1: The Inaugural Monolith (Volume 01 Hero Spotlight) */}
      <InauguralMonolith />

      {/* MODULE 2: The Asymmetric Broadsheet — RMG & Textile (4 Articles) */}
      <AsymmetricBroadsheet
        sectionNumber="02"
        sectionTitle="RMG &amp; Textile"
        kicker="MANUFACTURING &amp; SUPPLY CHAIN GOVERNANCE"
        categorySlug="industry-practices"
        articles={rmgArticles}
        description="Transitioning from 349 LEED green factory certifications to daily lean operations, HREDD compliance, and worker equity."
      />

      {/* MODULE 3: The Staggered Dual-Split — Sustainable City (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="03"
        sectionTitle="Sustainable City"
        kicker="URBAN HYDROLOGY &amp; ECOLOGICAL SANCTUARIES"
        categorySlug="sustainable-cities"
        articles={cityArticles}
        description="A suffocated Buriganga river meets Dhaka's shrinking urban biodiversity in Ramna Park."
      />

      {/* MODULE 2: The Asymmetric Broadsheet — Capital Market (3 Articles) */}
      <AsymmetricBroadsheet
        sectionNumber="04"
        sectionTitle="Capital Market &amp; Sustainable Finance"
        kicker="TRANSITION ARCHITECTURE &amp; CARBON TRADING"
        categorySlug="sustainable-finance"
        articles={capitalArticles}
        description="Article 6 carbon corridors, central bank green refinance schemes, and coordinated financial regulation."
      />

      {/* MODULE 4: Full-Bleed Magazine Spread — Governance (1 Article) */}
      {governanceArticle && (
        <FullBleedSpread
          sectionNumber="05"
          sectionTitle="Governance"
          kicker="BOARDROOM OVERSIGHT &amp; FIDUCIARY DUTY"
          categorySlug="governance"
          article={governanceArticle}
        />
      )}

      {/* MODULE 3: The Staggered Dual-Split — Agriculture (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="06"
        sectionTitle="Agriculture"
        kicker="FOOD–WATER SECURITY &amp; SALINITY ADAPTATION"
        categorySlug="agriculture"
        articles={agriArticles}
        description="From the desert sands of Arabia to the coastal rivers of Bengal: climate-smart farming and salinity-resistant crops."
      />

      {/* MODULE 3: The Staggered Dual-Split — Technology (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="07"
        sectionTitle="Technology"
        kicker="SEMICONDUCTORS &amp; AI CLEARANCE MODERNIZATION"
        categorySlug="technology"
        articles={techArticles}
        description="Can Bangladesh build domestic semiconductor capacity while accelerating green data-center approvals through AI?"
      />

      {/* MODULE 4: Full-Bleed Magazine Spread — Health & Longevity (1 Article) */}
      {healthArticle && (
        <FullBleedSpread
          sectionNumber="08"
          sectionTitle="Health &amp; Human Wellbeing"
          kicker="LONGEVITY SCIENCE &amp; HEALTH EQUITY"
          categorySlug="health"
          article={healthArticle}
        />
      )}

      {/* MODULE 3: The Staggered Dual-Split — Wild Life & Biodiversity (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="09"
        sectionTitle="Wild Life &amp; Biodiversity"
        kicker="DELTA CONSERVATION &amp; COEXISTENCE"
        categorySlug="wildlife"
        articles={wildlifeArticles}
        description="Documenting the 12 delta kingfishers of Bangladesh alongside elephant and tiger conservation along the Sundarbans edge."
      />

      {/* MODULE 5: The Editorial Bento Matrix — Standards, ESG Ratings & Circularity */}
      <EditorialBentoMatrix articles={bentoArticles} />

      {/* MODULE 3: The Staggered Dual-Split — Culture & Myth (2 Articles) */}
      <StaggeredDualSplit
        sectionNumber="10"
        sectionTitle="Culture &amp; Myth"
        kicker="ANCIENT ECOLOGICAL GUARDIANS"
        categorySlug="culture-and-myth"
        articles={mythArticles}
        description="The folklore of Bonbibi in the Sundarbans and Humbaba in Mesopotamia as enduring metaphors for ecological boundaries."
      />

      {/* MODULE 4: Full-Bleed Magazine Spread — Friend In Need (1 Article) */}
      {friendArticle && (
        <FullBleedSpread
          sectionNumber="11"
          sectionTitle="Friend In Need"
          kicker="BILATERAL CLIMATE DIPLOMACY"
          categorySlug="friends-in-need"
          article={friendArticle}
        />
      )}

      {/* MODULE 6: Interactive 16-Section Directory (The Master Index) */}
      <InteractiveMasterIndex />

      {/* Editorial Dispatch Newsletter */}
      <CtaSection />
    </main>
  );
}
