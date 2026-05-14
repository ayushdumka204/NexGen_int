import React from "react";
import { Code2, BarChart3, Database, FileSpreadsheet, CheckCircle, Zap } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Survey Programming & Tabulation Services | NexGen",
  description: "Transforming raw questionnaires into intelligent data structures with NexGen's expert programming and tabulation solutions.",
};

export default function SurveyProgrammingPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Survey</span>
              <span className="text-[#80cb29] block">Programming</span>
              <span className="text-[#2c1161] block">& Tabulation</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              A questionnaire is only as good as the logic behind it. We turn complex questions into seamless digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              At NexGen, we bridge the gap between "asking" and "analyzing." Our team ensures your surveys are bug-free, mobile-optimized, and programmed with iron-clad logic, followed by meticulous tabulation that makes data talk.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ── PROGRAMMING & DATA SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <Code2 className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Logic-Driven <br />
              <span className="text-[#80cb29]">Programming</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "We don't just script; we optimize for the respondent's journey."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Zap size={20} className="text-[#80cb29]" /> Complex Logic Scripting
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    From intricate skip-patterns and piping to MaxDiff and Conjoint analysis—we handle the heavy lifting. Our surveys work flawlessly across all devices, ensuring zero drop-outs due to technical glitches.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <FileSpreadsheet size={20} className="text-[#80cb29]" /> Advanced Tabulation
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Raw data is a mess. We clean it, weigh it, and tabulate it into easy-to-read cross-tabs and banners. Whether you need SPSS, Excel, or custom dashboards, we deliver data that's ready for your final report.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Database size={20} className="text-[#80cb29]" /> Data Cleaning & Weighting
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    We eliminate 'speeders' and 'straight-liners' using AI-driven checks. We also apply rim weighting and cell weighting to ensure your sample perfectly reflects your target universe.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Multi-Language Scripting", "Real-time Fieldwork Portals", "Custom Banner Tables", "Automated Data QA"].map((item, i) => (
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