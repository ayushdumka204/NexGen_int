"use client";
import React from "react";
import { Lightbulb, BarChart3, Globe, ShieldCheck, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

const data = {
  titlePart1: "Start Up",
  titlePart2: "Solutions",
  description:
    "To serve exclusively to the market research agency for startups we have a separate division, Research360. We offer end to end, 360 degree services to startups.",
  sections: [
    {
      category: "Business Registrations",
      icon: ShieldCheck,
      items: [
        {
          label: "Company Registrations",
          detail: "Private Limited company, LLP, Partnership or Proprietorship etc.",
        },
        {
          label: "Other Registrations",
          detail: "GST, Trademark, TAN, PAN, Current Account, MSME etc.",
        },
      ],
    },
    {
      category: "Consulting Services",
      icon: Lightbulb,
      items: [
        {
          label: "Business Idea/Concept",
          detail: "Ideal business/ startup suggestions.",
        },
        {
          label: "Investment and Prospects",
          detail: "Ideal amount to be invested and future prospects.",
        },
        { label: "Brand Name", detail: "Professional Startup Naming Services" },
      ],
    },
    {
      category: "Market Research",
      icon: BarChart3,
      items: [
        {
          label: "Feasibility Study",
          detail: "Location analysis, Market overview, Trend analysis, and Consumer perception studies.",
        },
        {
          label: "Concept Test",
          detail: "Concept likeability, willingness to pay, and market acceptance analysis.",
        },
      ],
    },
    {
      category: "Digital Presence",
      icon: Globe,
      items: [
        {
          label: "Website & Digital",
          detail: "Professional website development, promotions, and SEO strategies.",
        },
        {
          label: "Marketing & Leads",
          detail: "Google promotions, SMO, and high-quality lead generation.",
        },
      ],
    },
  ],
};

export default function StartUpSolution() {
  return (
    <div className="bg-white min-h-screen text-foreground">
      
      {/* ── HERO SECTION (Split Layout) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">{data.titlePart1}</span>
              <span className="text-[#80cb29] block">360° Research</span>
              <span className="text-[#2c1161] block">{data.titlePart2}</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Description */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Research360: A separate division dedicated exclusively to empowering startups with data-driven foundations.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium border-l-4 border-[#80cb29] pl-6 italic">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.sections.map((section, idx) => (
            <div
              key={idx}
              className="group p-8 md:p-12 border border-slate-100 rounded-[2.5rem] bg-slate-50/30 hover:bg-white hover:border-[#80cb29]/30 hover:shadow-[0_20px_60px_rgba(44,17,97,0.05)] transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-[#2c1161] text-[#80cb29] rounded-2xl shadow-lg">
                  <section.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#2c1161] uppercase tracking-tighter">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-10">
                {section.items.map((item, i) => (
                  <div key={i} className="relative pl-8">
                    {/* Decorative Dot */}
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#80cb29]" />
                    
                    <h4 className="text-lg font-black text-[#2c1161] uppercase tracking-wide mb-3">
                      {item.label}
                    </h4>
                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── ADDITIONAL TRUST BADGE ── */}
        <div className="bg-[#2c1161] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
             <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                Ready to scale your innovation?
             </h3>
             <p className="text-[#80cb29] text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                360° End-to-End Support for New Ventures
             </p>
          </div>
          {/* Subtle BG Pattern */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <Globe size={300} className="text-white translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="pt-10">
          <ServicesCTA />
        </div>
      </div>
    </div>
  );
}