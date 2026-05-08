"use client";
import React from "react";
import { 
  Scissors, 
  Beaker, 
  Utensils, 
  Trees, 
  Sun, 
  Hammer, 
  ChevronRight, 
  Globe, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Manufacturing & Industrial",
  intro: "NexGen International’s expertise penetrates deep into the heart of factories and production lines. From Textiles to Renewable Energy, we provide manufacturers with the critical data needed to lead the global supply chain.",
  subsections: [
    {
      title: "Textiles & Apparel",
      icon: <Scissors size={40} />,
      accentColor: "border-[#80cb29]", 
      bgColor: "bg-[#80cb29]/5",
      content: "The Indian textile industry is a cornerstone of the global market. We analyze data across fabrics, clothing, and technical textiles, focusing on export dynamics and domestic demand to ensure production aligns with global trends.",
      features: ["Technical Textiles Market", "Apparel Demand Forecast", "Fabric Quality Standards", "Export Market Insights"]
    },
    {
      title: "Chemicals & Petrochemicals",
      icon: <Beaker size={40} />,
      accentColor: "border-blue-400",
      bgColor: "bg-blue-50/50",
      content: "From fertilizers and plastics to specialized paints, we track the entire supply chain and raw material pricing for the petrochemical sector. Our data serves as a vital tool for effective risk management and market positioning.",
      features: ["Fertilizer Demand Mapping", "Plastics & Polymers Research", "Paint Industry Trends", "Chemical Safety Audits"]
    },
    {
      title: "Food Processing & Dairy",
      icon: <Utensils size={40} />,
      accentColor: "border-purple-400",
      bgColor: "bg-purple-50/50",
      content: "As the demand for packaged foods and beverages surges, we provide deep-dive analysis into dairy products and consumer packaged goods (CPG), focusing on shelf-life, consumer taste preferences, and distribution network efficiency.",
      features: ["Beverage Market Dynamics", "Dairy Supply Chain", "Packaged Food Trends", "Quality Assurance Metrics"]
    },
    {
      title: "Renewables & New Materials",
      icon: <Sun size={40} />,
      accentColor: "border-[#80cb29]",
      bgColor: "bg-[#80cb29]/5",
      content: "The future is Green. We analyze manufacturing trends in solar panels, high-capacity batteries, and advanced materials like composites to help you stay ahead in the global clean energy revolution.",
      features: ["Solar Panel Efficiency", "Battery Storage Tech", "Advanced Materials Audit", "Carbon Footprint Studies"]
    },
    {
      title: "Wood, Paper & Leather",
      icon: <Trees size={40} />,
      accentColor: "border-blue-400",
      bgColor: "bg-blue-50/50",
      content: "From high-end furniture to leather exports and sustainable paper products, we support craft-based and industrial manufacturing units with data-driven insights on sustainable sourcing and global demand.",
      features: ["Sustainable Wood Sourcing", "Leather Goods Export", "Paper Product Demand", "Furniture Design Trends"]
    },
    {
      title: "Capital Goods & Engineering",
      icon: <Hammer size={40} />,
      accentColor: "border-purple-400",
      bgColor: "bg-purple-50/50",
      content: "Heavy machinery and industrial tools are the lifelines of any economy. We track the reliability of engineering goods and the evolving requirements of industrial equipment to support large-scale infrastructure.",
      features: ["Heavy Machinery Audit", "Tooling & Die Standards", "Engineering Goods Export", "Industrial Reliability Data"]
    }
  ]
};

export default function ManufacturingCorePage() {
  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#2c1161] py-20 px-6 text-center border-b-8 border-[#80cb29]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            <span className="text-[#80cb29]">Manufacturing</span> & Industrial
          </h1>
          <div className="h-1.5 w-16 bg-[#80cb29] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-purple-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS (Clean Minimal Cards) --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="space-y-20">
          {data.subsections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* SIDEBAR (Label Removed) */}
              <div className={`lg:w-1/3 p-12 flex flex-col items-center lg:items-start text-center lg:text-left ${section.bgColor} border-b-4 lg:border-b-0 lg:border-r-4 ${section.accentColor}`}>
                <div className="mb-6 p-5 rounded-2xl bg-white text-[#2c1161] shadow-sm transition-transform hover:scale-110 duration-300">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-black text-[#2c1161] uppercase tracking-tight leading-tight">
                  {section.title}
                </h2>
              </div>

              {/* CONTENT AREA */}
              <div className="lg:w-2/3 p-12 bg-white flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-slate-700 font-medium mb-8">
                  {section.content}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-xl border border-slate-100 group hover:bg-white hover:border-[#2c1161] transition-all">
                      <div className="h-6 w-6 rounded-full bg-[#2c1161] text-[#80cb29] flex items-center justify-center shrink-0">
                        <ChevronRight size={12} strokeWidth={4} />
                      </div>
                      <span className="font-bold text-[#2c1161] text-[12px] uppercase tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE STATS BAR --- */}
      <section className="bg-[#2c1161] py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="space-y-4 group">
            <Globe className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">Global</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Supply Chain Reach</p>
          </div>
          <div className="space-y-4 group">
            <ShieldCheck className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">ISI/ISO</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Compliance Data</p>
          </div>
          <div className="space-y-4 group">
            <Zap className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">Zero</h4>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Waste Strategy</p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <IndustriesCTA />
      </div>
    </div>
  );
}