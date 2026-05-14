import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel";

export const metadata = {
  title: "Secondary Market Research & Primary Research Services",
  description:
    "Comprehensive desk research services combining secondary market research data with primary insights to give you a 360-degree view of your industry.",
};

export default function SecondaryResearchPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION (Split Layout) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Secondary</span>
              <span className="text-[#80cb29] block">Market Research</span>
              <span className="text-[#2c1161] block">& Desk Review</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Intro Text */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Secondary research forms the evidence base on which primary study designs are built.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              Alongside primary research, NexGen provides comprehensive secondary research
              and academic data collection services — sizing the market, mapping
              the competitive landscape, and ensuring that primary fieldwork addresses genuine gaps.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* ── DESK RESEARCH SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left — Heading & Subtext */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <BookOpen className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Desk Research & <br />
              <span className="text-[#80cb29]">Competitive Intelligence</span>
            </h2>
            <p className="text-sm font-black text-[#80cb29] uppercase tracking-[0.3em] mt-4">
               360-Degree Market Mapping
            </p>
          </div>

          {/* Right — Detailed Content */}
          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "All sources are assessed for credibility and authority before inclusion in client deliverables."
              </p>
              
              <p className="text-lg leading-relaxed text-slate-600 font-medium">
                NexGen&apos;s secondary research team synthesises intelligence from authoritative
                sources including government databases (Ministry of Commerce, MOSPI, Census
                of India), industry publications (CMIE, Bloomberg, IBEF, Euromonitor),
                regulatory filings, academic journals, export-import databases, and
                sector-specific trade media.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 font-medium">
                Competitive intelligence services extend beyond desk review to include
                analysis of competitor market share trajectories, pricing architecture,
                distribution reach, and new product activity — drawn from retail audit data,
                trade databases, expert interviews, and structured secondary analysis.
              </p>
            </div>

            {/* Quick Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Market Sizing & Forecasting", "Competitor Benchmarking", "Regulatory Tracking", "Trade Flow Analysis"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle size={18} className="text-[#80cb29]" strokeWidth={3} />
                    <span className="text-sm font-black text-[#2c1161] uppercase">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        
        {/* ── ECOSYSTEM CAROUSEL (Sources) ── */}
        <section>
          <StatsCarousel
            items={ecosystemItems}
            heading="Intelligence Ecosystem"
            subheading="Authoritative Data Sources"
            interval={5000}
          />
        </section>


        {/* ── CTA ── */}
        <div className="pt-10">
          <ServicesCTA />
        </div>
      </div>
    </div>
  );
}

/* ── Carousel data — exact items kept ── */
const ecosystemItems = [
  {
    value: "Government Databases",
    desc: "MOSPI · Census · Ministry of Commerce.",
  },
  {
    value: "Industry Reports",
    desc: "CMIE · Bloomberg · IBEF · Euromonitor.",
  },
  {
    value: "Regulatory Filings",
    desc: "Compliance docs and official records.",
  },
  {
    value: "Academic Journals",
    desc: "Peer-reviewed papers and white papers.",
  },
  {
    value: "Export / Import Data",
    desc: "Trade databases and flow data.",
  },
  {
    value: "Trade & Sector Media",
    desc: "Publications and industry analysis.",
  },
];