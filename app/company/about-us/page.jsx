import React from "react";
import AboutUsSection from "./_components/AboutUsSection";
import ISOSection from "./_components/ISOSection";
import TeamSection from "./_components/OurTeam";
import VisionMissionSection from "./_components/VisionMission";
import JourneyTimeline from "./_components/MilestonesAndHistory";
import ServiceShowcase from "./_components/ServiceShowcase";
import AboutCTA from "./_components/AboutCTA";

export const metadata = {
  title: "About NexGen Academic Research | Expert Research Solutions",
  description: "Learn about NexGen Academic Research – delivering professional academic research consultancy, qualitative & quantitative research solutions.",
};

const AboutPage = () => {
  return (
    <div>
      <AboutUsSection />
      <ServiceShowcase/>
      <TeamSection/>
      <ISOSection />
      <JourneyTimeline/>
      <VisionMissionSection/>
      <AboutCTA/>
    </div>
  );
};

export default AboutPage;
