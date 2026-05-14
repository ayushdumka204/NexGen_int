import React from "react";
import { Lightbulb, Target, TrendingUp, Users, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Market Research Consulting | Market Survey Consultants",
  description:
    "NexGen offers market research consulting services with strategic insights to help businesses identify opportunities and drive growth.",
};

const data = {
  title: "Consulting",
  content: [
    "NexGen experts give the right suggestions to the companies / businesses to follow the right steps.",
    "NexGen assists clients to decide the best parameters to consider taking right action that are highly impactful but less cost intensive.",
    "Our consulting team closely works with the companies / startups for a duration for 6 months to 2 years.",
    "Our consulting services helps to address the right market potential and market attractiveness.",
  ],
};

const icons = [Lightbulb, Target, Users, TrendingUp];

export default function ConsultingPage() {
  return (
    <div className="bg-white min-h-screen text-foreground">
      
      {/* ── HERO SECTION (Split Layout) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Strategic</span>
              <span className="text-[#80cb29] block">Market</span>
              <span className="text-[#2c1161] block">Consulting</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Intro Text */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Empowering businesses with precision-driven strategies to navigate complex market landscapes.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium italic border-l-4 border-[#80cb29] pl-6">
              "We assist clients in identifying high-impact, cost-effective parameters to drive sustainable growth."
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left side — Consulting Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <TrendingUp className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Strategic <br />
              <span className="text-[#80cb29]">Partnership</span>
            </h2>
          </div>

          {/* Right side — Consulting Points (Your Exact Data) */}
          <div className="lg:col-span-7 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="grid grid-cols-1 gap-6">
              {data.content.map((text, idx) => {
                const Icon = icons[idx] || CheckCircle;
                return (
                  <div
                    key={idx}
                    className="group p-6 bg-white border border-slate-100 rounded-3xl hover:border-[#80cb29] hover:shadow-xl transition-all duration-500 flex items-start gap-6"
                  >
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-[#80cb29]/10 transition-colors shrink-0">
                      <Icon className="text-[#80cb29]" size={28} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Pillar 0{idx + 1}</span>
                      <p className="text-lg md:text-xl text-[#2c1161] font-bold leading-tight">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle Badge */}
            <div className="mt-12 p-6 bg-[#2c1161] rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <p className="text-white font-black uppercase tracking-tighter text-lg">Address Market Potential Today</p>
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#2c1161] bg-[#80cb29] flex items-center justify-center text-[10px] font-black">NG</div>
                    ))}
                </div>
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