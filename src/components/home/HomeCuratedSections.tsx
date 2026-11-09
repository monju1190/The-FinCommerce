"use client";
import React from "react";
import { magazineData } from "@/data/mockData";
import EditorialListSection, { EditorialArticle } from "./EditorialListSection";
import EditorialCarouselSection from "./EditorialCarouselSection";

export default function HomeCuratedSections() {
  const allArticles = magazineData.flatMap((s) => s.articles);

  const getArticle = (slug: string): EditorialArticle | undefined => {
    const found = allArticles.find((a) => a.slug === slug);
    if (!found) return undefined;
    return {
      slug: found.slug,
      title: found.title,
      subtitle: found.subtitle,
      author: found.author,
      category: found.category,
      imageUrl: found.imageUrl,
      date: found.date,
    };
  };

  const getArticles = (slugs: string[]): EditorialArticle[] => {
    return slugs
      .map((s) => getArticle(s))
      .filter((a): a is EditorialArticle => Boolean(a));
  };

  // 1. RMG & Textile (Carousel - Pattern B)
  const rmgArticles = getArticles([
    "beyond-the-plaque-green-certification-to-green-operations",
    "epyllion-group-championing-esg-beyond-compliance",
    "from-audit-to-accountability-export-competitiveness-hredd",
    "sustainability-practices-radisson-blu-chattogram",
  ]);

  // 2. Sustainable City (List - Pattern A)
  const cityArticles = getArticles([
    "a-suffocated-buriganga-existential-threat-for-dhaka",
    "ramna-green-critters-of-dhakas-shrinking-urban-space",
  ]);

  // 3. Capital Market (Carousel - Pattern B)
  const capitalMarketArticles = getArticles([
    "the-carbon-corridor-unlocking-green-investment-for-bangladesh",
    "sustainable-finance-blueprint-coordinated-regulation-bangladesh",
    "the-accounting-rule-thats-secretly-a-technology-story-ifrs9",
  ]);

  // 4. Energy & Power (List - Pattern A)
  const energyArticles = getArticles([
    "decarbonisation-financing-in-bangladesh-evolving-role-of-bangladesh-bank",
    "bangladesh-national-sustainability-news-solar-duties-climate-finance",
  ]);

  // 5. Agriculture (List - Pattern A)
  const agriArticles = getArticles([
    "from-the-sands-of-arabia-to-the-rivers-of-bengal",
    "from-salinity-to-sustainability-syngenta-gogrow-coastal-bangladesh",
  ]);

  // 6. Circular Economy (List - Pattern A)
  const circularArticles = getArticles([
    "plastic-waste-management-bangladesh-extended-producer-responsibility",
    "transforming-waste-into-hope-tmss-waste-collection-business",
  ]);

  // 7. Technology (List - Pattern A)
  const techArticles = getArticles([
    "the-semiconductor-race-can-bangladesh-catch-up",
    "ai-infrastructure-closing-the-environmental-clearance-gap",
  ]);

  // 8. Wild Life & Biodiversity (Carousel - Pattern B)
  const wildlifeArticles = getArticles([
    "the-deltas-edge-ecological-balance-wildlife-human-survival",
    "the-kingfishers-of-bangladesh-twelve-species",
  ]);

  // 9. Culture & Myth (List - Pattern A)
  const mythArticles = getArticles(["bonbibi", "humbaba"]);

  // 10. Governance (List - Pattern A)
  const governanceArticles = getArticles([
    "the-governance-gap-why-sustainability-needs-to-reach-the-boardroom",
  ]);

  // 11. ESG (List - Pattern A)
  const esgArticles = getArticles([
    "esg-ratings-how-corporates-are-rated-and-why-it-matters",
    "verifiable-impact-bangladesh-inaugural-esg-excellence-awards",
  ]);

  // 12. Health (List - Pattern A)
  const healthArticles = getArticles([
    "living-well-health-in-an-unequal-world-longevity-blueprint",
  ]);

  // 13. Friend In Need (List - Pattern A)
  const friendArticles = getArticles([
    "denmark-bangladesh-lasting-partnership-greener-turn",
  ]);

  // 14. Home & The World (Carousel - Pattern B)
  const worldArticles = getArticles([
    "bangladesh-at-the-crossroads-un-sdg-report-2026",
    "climate-change-and-decent-work-ivory-coast",
    "the-balance-sheet-of-development-asia-pacific-sustainability",
  ]);

  return (
    <div className="space-y-16 md:space-y-24 my-12" data-purpose="curated-editorial-sections">
      {/* 1. RMG & Textile — Today's Mix Carousel */}
      <EditorialCarouselSection
        title="RMG & Textile"
        kicker="MANUFACTURING & SUPPLY CHAIN LEADERSHIP"
        categorySlug="industry-practices"
        articles={rmgArticles}
        description="From 349 LEED-certified factories to human rights due diligence and operational circularity."
      />

      {/* 2. Sustainable City — The Critics List */}
      <EditorialListSection
        title="Sustainable City"
        kicker="URBAN HYDROLOGY & SPATIAL RESILIENCE"
        categorySlug="sustainable-cities"
        articles={cityArticles}
        motifTitle="Sustainable City"
        description="Revitalizing the Buriganga river and conserving urban green sanctuaries in Ramna Park."
      />

      {/* 3. Capital Market — Today's Mix Carousel */}
      <EditorialCarouselSection
        title="Capital Market"
        kicker="GREEN FINANCE & REGULATORY ARCHITECTURE"
        categorySlug="sustainable-finance"
        articles={capitalMarketArticles}
        description="Article 6 carbon corridors, corporate ESG ratings, and liquid sustainable bond markets."
      />

      {/* 4. Energy & Power — The Critics List */}
      <EditorialListSection
        title="Energy & Power"
        kicker="DECARBONISATION & CLEAN POWER"
        categorySlug="standards"
        articles={energyArticles}
        motifTitle="Energy & Power"
        description="Bangladesh Bank's transition financing and strategic solar import duty waivers."
      />

      {/* 5. Agriculture — The Critics List */}
      <EditorialListSection
        title="Agriculture"
        kicker="FOOD & WATER SECURITY NEXUS"
        categorySlug="agriculture"
        articles={agriArticles}
        motifTitle="Agriculture"
        description="From Arabian sands to Bengal deltas: coastal salinity adaptation and climate-smart farming."
      />

      {/* 6. Circular Economy — The Critics List */}
      <EditorialListSection
        title="Circular Economy"
        kicker="RESOURCE RECOVERY & WASTE VALORISATION"
        categorySlug="waste-management"
        articles={circularArticles}
        motifTitle="Circular Economy"
        description="Operationalizing Extended Producer Responsibility (EPR) and inclusive waste collection."
      />

      {/* 7. Technology — The Critics List */}
      <EditorialListSection
        title="Technology"
        kicker="SEMICONDUCTORS & GREEN AI"
        categorySlug="technology"
        articles={techArticles}
        motifTitle="Technology"
        description="Building national semiconductor capacity and modernizing environmental clearance via AI."
      />

      {/* 8. Wild Life & Biodiversity — Today's Mix Carousel */}
      <EditorialCarouselSection
        title="Wild Life & Biodiversity"
        kicker="DELTA CONSERVATION & SPECIES HERITAGE"
        categorySlug="wildlife"
        articles={wildlifeArticles}
        description="Twelve species of delta kingfishers and ecological balance along the Sundarbans edge."
      />

      {/* 9. Culture & Myth — The Critics List */}
      <EditorialListSection
        title="Culture & Myth"
        kicker="ANCIENT GUARDIANS OF NATURE"
        categorySlug="culture-and-myth"
        articles={mythArticles}
        motifTitle="Culture & Myth"
        description="The folklore of Bonbibi in Bengal and Humbaba in Mesopotamia as ecological metaphors."
      />

      {/* 10. Governance & Strategy — The Critics List */}
      <EditorialListSection
        title="Governance"
        kicker="BOARDROOM OVERSIGHT & ACCOUNTABILITY"
        categorySlug="governance"
        articles={governanceArticles}
        motifTitle="Governance"
        description="Why corporate sustainability and climate risks must be governed at the boardroom table."
      />

      {/* 11. ESG — The Critics List */}
      <EditorialListSection
        title="ESG"
        kicker="VERIFIED PERFORMANCE & DISCLOSURE"
        categorySlug="esg-award"
        articles={esgArticles}
        motifTitle="ESG Leadership"
        description="Inside Bangladesh's inaugural ESG Excellence Awards and double-materiality ratings."
      />

      {/* 12. Health — The Critics List */}
      <EditorialListSection
        title="Health"
        kicker="HUMAN WELLBEING & LONGEVITY"
        categorySlug="health"
        articles={healthArticles}
        motifTitle="Health & Wellbeing"
        description="Navigating health systems, preventative wellness, and equality in a warming world."
      />

      {/* 13. Friend In Need — The Critics List */}
      <EditorialListSection
        title="Friend In Need"
        kicker="BILATERAL CLIMATE DIPLOMACY"
        categorySlug="friends-in-need"
        articles={friendArticles}
        motifTitle="Friend In Need"
        description="Denmark and Bangladesh: a strategic five-decade partnership takes a green transition leap."
      />

      {/* 14. Home & The World — Today's Mix Carousel */}
      <EditorialCarouselSection
        title="Home & The World"
        kicker="GLOBAL POLICY & ASIA-PACIFIC DEVELOPMENT"
        categorySlug="home-and-the-world"
        articles={worldArticles}
        description="UN SDG 2026 scorecard, heat protection for workers in Ivory Coast, and regional policy."
      />
    </div>
  );
}

