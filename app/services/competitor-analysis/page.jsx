import React from "react";
import { Target, BarChart, Search, ShieldAlert, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Market Research Company help in Competitor Analysis",
  description:
    "NexGen offers competitor analysis services to help businesses identify market opportunities and build effective growth strategies.",
};

export default function CompetitorAnalysisPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Competitor</span>
              <span className="text-[#80cb29] block">Strategic</span>
              <span className="text-[#2c1161] block">Intelligence</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Knowing what your rivals are doing is good. Knowing what they’re going to do next is NexGen intelligence.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              We don’t just track your competitors; we deconstruct their entire strategy—from their pricing architecture to their distribution reach—so you can find the gaps they’ve missed and move in first.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ── APPROACH SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <Target className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Beyond The <br />
              <span className="text-[#80cb29]">Surface Data</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "Stop guessing. Start out-maneuvering with data that actually tells a story."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <BarChart size={20} className="text-[#80cb29]" /> Pricing & Positioning
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    We map out exactly how your competitors price their products and how consumers perceive their value. This helps you find the "sweet spot" where you can offer more value without bleeding margins.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Search size={20} className="text-[#80cb29]" /> Digital Footprint Analysis
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Where are they getting their traffic? What keywords are they winning? We analyze their digital presence to see where they are investing their marketing budgets and where they are failing to engage.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <ShieldAlert size={20} className="text-[#80cb29]" /> SWOT & Gap Identification
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    A classic SWOT, but deeper. We look for technical, operational, and brand-level weaknesses that your company can exploit to capture market share quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Market Share Trajectories", "Product Roadmap Benchmarking", "Distribution Reach Audit", "Consumer Sentiment Spikes"].map((item, i) => (
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