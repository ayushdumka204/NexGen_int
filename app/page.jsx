import dynamic from "next/dynamic";
// import StatsCarousel from "./_components/_home/StatsCarousel";
const HeroSection = dynamic(() => import("./_components/_home/HeroSection"));
const WhatWeDo = dynamic(() => import("./_components/_home/WhatWeDo"));
const AcademicResearchSection = dynamic(
  () => import("./_components/_home/AcademicResearchSection"),
);
const DomainExpertise = dynamic(
  () => import("./_components/_home/DomainExpertise"),
);
const QualityManagement = dynamic(
  () => import("./_components/_home/QualityManagement"),
);
const StatsCarousel = dynamic(
  () => import("./_components/_home/StatsCarousel"),
);
const InfiniteMovingCardsDemo = dynamic(
  () => import("./_components/_home/InfiniteMovingCardsDemo"),
);
// const GlobalImpact = dynamic(() => import("./_components/_home/GlobalImpact"));
const FAQSection = dynamic(() => import("./_components/_home/FAQSection"));
const HomeCTA = dynamic(() => import("./_components/_home/HomeCTA"));

export const metadata = {
  title: "Market Research Company in Delhi, India | Customer Research",
  description:
    "NexGen is a leading market research company delivering consumer insights and data-driven strategies for B2B/B2C growth, feasibility studies, and surveys.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <AcademicResearchSection />
      <DomainExpertise />
      <QualityManagement />
      <StatsCarousel />
      <InfiniteMovingCardsDemo />
      <FAQSection />
      <HomeCTA />
    </div>
  );
}
