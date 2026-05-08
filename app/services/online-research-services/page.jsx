import React from "react";
import Image from "next/image";
import { Monitor, Globe, ShieldCheck } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Top Online Market Research Firm | Data Collection Services",
};

const data = {
  titlePart1: "Online",
  titlePart2: "Research",
  section1:
    "In recent past online surveys are most trending surveys. Internet based survey or online survey are easy, cost effective and time saving. We have a team of programmers to design the online surveys. We also use Qualtrics or Survey Monkey platforms to conduct online research. Our sampling methods for the online surveys are robust.",
  section2:
    "We prefer not to use the online research panels of other companies because the respondents could be repetitive. NexGen panels are quite large, and representing all kind of respondent groups.",
  imageUrl:
    "/online-research.jpg",
};

export default function OnlineResearchComponent() {
  return (
    <div className="min-h-screen bg-(--color-background)-black font-sans py-6 px-6 md:px-12 lg:px-24">
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-(--color-primary)">{data.titlePart1}</span>{" "}
          <span className="text-accent">{data.titlePart2}</span>
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-10" />
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE (Using Next.js Image) */}
        <div className="relative h-112.5 w-full overflow-hidden border border-border shadow-sm">
          <Image
            src={data.imageUrl}
            alt="Online Research"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TEXT SIDE (Verbatim Content) */}
        <div className="flex flex-col gap-8">
          <div className="space-y-8">
            <p className="text-lg text-black leading-relaxed">
              {data.section1}
            </p>

            <div className="p-8 bg-white border border-border rounded-2xl border-l-4 border-l-accent shadow-sm">
              <p className="text-lg text-black leading-relaxed font-medium">
                {data.section2}
              </p>
            </div>
          </div>
        </div>
      </div>
        <ServicesCTA/>
    </div>
  );
}
