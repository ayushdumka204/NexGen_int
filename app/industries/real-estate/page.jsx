"use client";
import React from "react";
import { 
  Building2, 
  Home, 
  MapPin, 
  PieChart, 
  ChevronRight, 
  Hotel, 
  LineChart, 
  BarChart3,
  Clock,
  Briefcase 
} from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Real Estate & Infrastructure",
  intro: "At NexGen International, we turn raw land into profitable assets through data. We provide developers and investors with site feasibility studies, buyer sentiment analysis, and market demand forecasting to ensure every square foot delivers maximum ROI.",
  subsections: [
    {
      title: "Residential Development",
      icon: <Home size={40} />,
      accentColor: "border-[#80cb29]", 
      bgColor: "bg-[#80cb29]/5",
      content: "We help developers understand what homebuyers truly want. Our research covers pricing sensitivity, preferred amenities, and location demand, helping you design residential projects that sell out faster.",
      features: ["Buyer Sentiment Analysis", "Pricing Sensitivity Studies", "Amenity Preference Mapping", "Residential Market Trends"]
    },
    {
      title: "Commercial & Office Spaces",
      icon: <Building2 size={40} />,
      accentColor: "border-blue-400",
      bgColor: "bg-blue-50/50",
      content: "For commercial projects, we analyze corporate occupancy trends and retail catchment areas. We provide the data needed to determine the ideal mix of office, retail, and leisure spaces for any commercial hub.",
      features: ["Catchment Area Analysis", "Corporate Occupancy Trends", "Retail Mix Optimization", "Commercial Rent Benchmarking"]
    },
    {
      title: "Site Feasibility & Planning",
      icon: <MapPin size={40} />,
      accentColor: "border-purple-400",
      bgColor: "bg-purple-50/50",
      content: "Before you break ground, we provide the groundwork. Our site feasibility studies analyze local infrastructure, regulatory environments, and future development plans to validate your investment.",
      features: ["Location Feasibility Studies", "Infrastructure Impact Audits", "Land Use Optimization", "Regulatory Risk Assessment"]
    },
    {
      title: "Hospitality & Specialized Assets",
      icon: <Hotel size={40} />,
      accentColor: "border-[#80cb29]",
      bgColor: "bg-[#80cb29]/5",
      content: "Research for specialized real estate including hotels, resorts, and industrial parks. We track tourism flow, industrial demand, and logistics requirements for high-stake infrastructure projects.",
      features: ["Hospitality Demand Analysis", "Industrial Park Feasibility", "Logistics Hub Mapping", "Tourism Trends Research"]
    }
  ]
};

export default function RealEstatePage() {
  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#2c1161] py-20 px-6 text-center border-b-8 border-[#80cb29]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            Real Estate <span className="text-[#80cb29]"></span>
          </h1>
          <div className="h-1.5 w-16 bg-[#80cb29] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-purple-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS (Clean Cards) --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="space-y-20">
          {data.subsections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* SIDEBAR */}
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

      {/* --- STATS BAR --- */}
      <section className="bg-[#2c1161] py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="space-y-4 group">
            <Clock className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">20+ Yrs</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Real Estate Insights</p>
          </div>
          <div className="space-y-4 group">
            <LineChart className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">5000+</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Project Completed</p>
          </div>
          <div className="space-y-4 group">
            <Briefcase className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">95%</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Data Accuracy</p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <IndustriesCTA />
      </div>
    </div>
  );
}