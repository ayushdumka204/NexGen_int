import React from "react";
import { GraduationCap, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel";

export const metadata = {
  title: "Academic Data Collection Services | NexGen",
  description:
    "End-to-end research and data collection services for universities and NGOs, ensuring IRB-compatible protocols and publication-ready data.",
};

export default function DataCollectionPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION (Split Layout) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Academic</span>
              <span className="text-[#80cb29] block">Data Research</span>
              <span className="text-[#2c1161] block">& Collection</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Intro Description */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Supporting universities, health bodies, and international organizations with publication-ready data.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              NexGen&apos;s academic research team is experienced in executing fieldwork that 
              meets the procedural and ethical requirements of institutional governance, 
              including IRB-compatible protocols for smooth ethics committee review.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* ── CONTENT SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left — Secondary Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <GraduationCap className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Ethical & <br />
              <span className="text-[#80cb29]">Methodological</span> Rigour
            </h2>
            <p className="text-base leading-relaxed text-slate-600 font-medium mt-6">
              Academic data collection at NexGen is structured to provide commissioning 
              institutions with everything required for ethics approval and publication:
            </p>
          </div>

          {/* Right — The Checklist Items in Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#80cb29]/30 transition-all">
                <CheckCircle className="w-5 h-5 text-[#80cb29] shrink-0 mt-0.5" strokeWidth={3} />
                <p className="text-sm md:text-base font-bold text-slate-700 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FIVE PILLARS CAROUSEL ── */}
        <section>
          <StatsCarousel
            items={academicItems}
            heading="IRB-Compatible by Design"
            subheading="Academic Data Collection — Five Pillars"
            interval={4500}
          />
        </section>

        {/* ── IRB DOCUMENTATION PACKAGE (Premium Box) ── */}
        <section className="bg-[#2c1161] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <GraduationCap size={200} className="text-white" />
          </div>
          <div className="max-w-4xl space-y-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              IRB Documentation <span className="text-[#80cb29]">Package</span>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 font-medium italic">
              For projects requiring institutional ethics approval, NexGen provides an IRB Documentation Package 
              on request — comprising consent form templates, respondent privacy notice, data handling and 
              anonymisation protocol, sampling methodology statement, and a signed data processing agreement.
            </p>
            <div className="flex items-center gap-3">
               <div className="w-12 h-1 bg-[#80cb29] rounded-full" />
               <p className="text-[#80cb29] text-xs font-black uppercase tracking-[0.2em]">Institutional Integrity Guaranteed</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="pt-10">
          <ServicesCTA />
        </div>
      </div>
    </div>
  );
}

/* ── DATA CONSTANTS ── */
const academicItems = [
  { value: "IRB-Compatible Consent", desc: "Provided as standard." },
  { value: "Full Anonymisation", desc: "Before data transfer." },
  { value: "Multi-Mode Collection", desc: "CAWI · CAPI · CATI." },
  { value: "Publication-Ready Codebooks", desc: "SPSS · STATA · R · Excel." },
  { value: "Longitudinal Panel Mgmt", desc: "Repeated-measures & tracking." },
];

const checkItems = [
  "IRB-compatible study design and informed consent documentation provided as standard",
  "Respondent recruitment, screening, and sampling aligned to academic methodology",
  "Multi-mode collection (CAWI, CAPI, CATI) to reach defined research populations",
  "Full data anonymisation prior to transfer; no personal identifiers in delivered datasets",
  "Data delivery in SPSS, STATA, R, CSV, and Excel with publication-ready codebooks",
  "Longitudinal panel management for repeated-measures and tracking studies",
];