import React from "react";
import { Sprout, Tractor, Droplets, BarChart3, CheckCircle, Wheat } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Agriculture Market Research & Rural Insights | NexGen",
  description: "Deep-dive agriculture research and rural market insights to help agro-businesses grow with NexGen's expert data collection.",
};

export default function AgricultureResearchPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Agriculture</span>
              <span className="text-[#80cb29] block">Research &</span>
              <span className="text-[#2c1161] block">Rural Insights</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Bridging the gap between the lab and the farm with real-world data.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              NexGen specializes in decoding the complexities of the agricultural ecosystem. From crop protection and seed technology to farm machinery and irrigation, we help agro-industrial giants and startups understand farmer behavior, purchase triggers, and the shifting dynamics of rural markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ── AGRO-STRATEGY SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <Sprout className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              On-Ground <br />
              <span className="text-[#80cb29]">Intelligence</span>
            </h2>
            <p className="text-sm font-black text-[#80cb29] uppercase tracking-[0.3em] mt-4">
               Cultivating Data-Driven Growth
            </p>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "Understanding the pulse of the rural economy requires more than just surveys; it requires being there."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Wheat size={20} className="text-[#80cb29]" /> Crop Protection & Seeds
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    We evaluate the effectiveness and perception of pesticides, fertilizers, and hybrid seeds. Our researchers go deep into the field to understand brand loyalty among farmers and the influence of retailers in the purchase journey.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Tractor size={20} className="text-[#80cb29]" /> Farm Mechanization Studies
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Analyzing the adoption of tractors, harvesters, and smart farming tools. We help manufacturers identify the pain points in after-sales service and the financial barriers to mechanization in small-hold farming.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Droplets size={20} className="text-[#80cb29]" /> Irrigation & Resource Mapping
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Sustainable water management is the future. We conduct research on drip irrigation adoption, solar pump feasibility, and the impact of climate-smart agricultural practices on ground-level productivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Deep Rural Outreach", "Bilingual Field Force", "Retailer-Farmer Linkage Mapping", "Seasonal Trend Analysis"].map((item, i) => (
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