import React from "react";
import { Monitor, Globe, ShieldCheck, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Top Online Market Research Firm | Data Collection Services",
  description:
    "NexGen is a leading market research company offering online surveys, consumer panels, and data collection services for actionable insights.",
};

const data = {
  titlePart1: "Online",
  titlePart2: "Research",
  section1:
    "In recent past online surveys are most trending surveys. Internet based survey or online survey are easy, cost effective and time saving. We have a team of programmers to design the online surveys. We also use Qualtrics or Survey Monkey platforms to conduct online research. Our sampling methods for the online surveys are robust.",
  section2:
    "We prefer not to use the online research panels of other companies because the respondents could be repetitive. NexGen panels are quite large, and representing all kind of respondent groups.",
};

export default function OnlineResearchComponent() {
  return (
    <div className="bg-white min-h-screen text-foreground">
      
      {/* ── HERO SECTION (Split Layout - No Image) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">{data.titlePart1}</span>
              <span className="text-[#80cb29] block">Market</span>
              <span className="text-[#2c1161] block">{data.titlePart2}</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Intro Text */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Online surveys are the most trending, cost-effective, and time-saving research tools in the modern market.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium italic border-l-4 border-[#80cb29] pl-6">
              "Our sampling methods for online surveys are robust, ensuring high-quality actionable insights."
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left side — Core Approach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <Monitor className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Programming & <br />
              <span className="text-[#80cb29]">Design Expertise</span>
            </h2>
          </div>

          {/* Right side — Detailed Content */}
          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
                {data.section1}
              </p>
              
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="text-[#80cb29] shrink-0" size={24} />
                  <h3 className="text-xl font-black text-[#2c1161] uppercase tracking-tight">Proprietary Panels</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-bold">
                  {data.section2}
                </p>
              </div>
            </div>

            {/* Quick Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Robust Sampling", "Multi-Platform Support", "Verified Respondent Groups", "Rapid Turnaround"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle size={18} className="text-[#80cb29]" strokeWidth={3} />
                    <span className="text-sm font-black text-[#2c1161] uppercase">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <div className="pt-10">
          <ServicesCTA />
        </div>
      </div>
    </div>
  );
}