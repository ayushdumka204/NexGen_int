"use client";
import React from "react";
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  ChevronRight, 
  Activity, 
  Microscope, 
  ClipboardCheck 
} from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Healthcare & Pharma",
  intro: "At NexGen International, we bridge the gap between clinical complexity and market reality. We provide healthcare providers and manufacturers with the precise data needed to make life-saving strategic decisions.",
  subsections: [
    {
      title: "Healthcare Services",
      icon: <Heart size={40} />,
      accentColor: "border-blue-400",
      bgColor: "bg-blue-50/50",
      content: "NexGen holds deep expertise in healthcare research services, including medical and diagnostic laboratory services, dental care, and home health solutions. We have successfully conducted numerous feasibility studies for establishing hospitals, medical colleges, and nursing homes.",
      features: ["Medical & Diagnostic Labs", "Home Health Care Strategy", "Hospital Feasibility Studies", "Nursing Home Planning"]
    },
    {
      title: "Medical Devices",
      icon: <Stethoscope size={40} />,
      accentColor: "border-[#80cb29]",
      bgColor: "bg-[#80cb29]/5",
      content: "We have successfully executed a wide range of research studies focused on medical devices used in diagnosis, treatment, and monitoring. This includes everything from cardiovascular and ophthalmic devices to advanced dental equipment and hospital supplies.",
      features: ["In-vitro Diagnostic Devices", "Cardiovascular & Ophthalmic Gear", "Hospital Supplies Audit", "Dental Equipment Analysis"]
    },
    {
      title: "Pharmaceutical Drugs",
      icon: <Pill size={40} />,
      accentColor: "border-purple-400",
      bgColor: "bg-purple-50/50",
      content: "NexGen has vast experience in pharmaceutical drug research across various therapeutic areas. We analyze market dynamics for critical treatments related to Oncology, Cardiovascular diseases, Gastrointestinal health, and infectious diseases like TB and HIV.",
      features: ["Oncology & Cancer Drugs", "Cardiovascular Medicine Trends", "Gastrointestinal Drug Research", "Market Access Strategy"]
    }
  ]
};

export default function HealthcarePage() {
  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#2c1161] py-20 px-6 text-center border-b-8 border-[#80cb29]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            Healthcare <span className="text-[#80cb29]">& Pharma</span>
          </h1>
          <div className="h-1.5 w-16 bg-[#80cb29] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-purple-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>
      </section>

      {/* --- DIFFERENTIATED CONTENT SECTIONS --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="space-y-20">
          {data.subsections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* LEFT: Distinctive Sidebar */}
              <div className={`lg:w-1/3 p-12 flex flex-col items-center lg:items-start text-center lg:text-left ${section.bgColor} border-b-4 lg:border-b-0 lg:border-r-4 ${section.accentColor}`}>
                <div className="mb-6 p-5 rounded-2xl bg-white text-[#2c1161] shadow-sm">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-black text-[#2c1161] uppercase tracking-tight leading-tight">
                  {section.title}
                </h2>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#2c1161]/40">
                  Sector Division {idx + 1}
                </p>
              </div>

              {/* RIGHT: Detailed Content Area */}
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
                      <span className="font-bold text-[#2c1161] text-[13px] uppercase tracking-wide">
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

      {/* --- STATS SECTION --- */}
      <section className="bg-[#2c1161] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="space-y-4">
            <Activity className="mx-auto text-[#80cb29]" size={40} />
            <h4 className="text-5xl font-black italic">5000+</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Research Projects</p>
          </div>
          <div className="space-y-4">
            <Microscope className="mx-auto text-[#80cb29]" size={40} />
            <h4 className="text-5xl font-black italic">Global</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Regulatory Standards</p>
          </div>
          <div className="space-y-4">
            <ClipboardCheck className="mx-auto text-[#80cb29]" size={40} />
            <h4 className="text-5xl font-black italic">95%</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Data Precision</p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <IndustriesCTA />
      </div>
    </div>
  );
}