import React from "react";
import { BookOpenCheck, GraduationCap, Microscope, Search, CheckCircle, PenTool } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Academic Research Support & Guidance | NexGen Academic",
  description: "Expert mentorship and data collection support for scholars, PhD candidates, and academic institutions worldwide.",
};

export default function AcademicResearchPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Academic</span>
              <span className="text-[#80cb29] block">Research</span>
              <span className="text-[#2c1161] block">& Mentorship</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Empowering scholars with the data and methodology they need to make a global impact.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              NexGen Academic is a dedicated wing designed to support PhD scholars, researchers, and universities. We don't just provide data; we provide the bridge between a complex hypothesis and a statistically sound conclusion, ensuring your research meets international standards of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ── SERVICES SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <GraduationCap className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Scholarly <br />
              <span className="text-[#80cb29]">Excellence</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "From topic selection to final data validation—we are your research partners."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Search size={20} className="text-[#80cb29]" /> Pilot Studies & Pre-testing
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Before you go full-scale, we help you test your instruments. Our pilot study support ensures your questionnaire is reliable and your variables are correctly defined, saving you months of potential rework.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Microscope size={20} className="text-[#80cb29]" /> Primary Data Collection
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Access our pan-India network for CAPI, CATI, or online surveys. We help academic scholars gather high-quality, authentic data from specific niche audiences—be it rural farmers, healthcare experts, or corporate leaders.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <BookOpenCheck size={20} className="text-[#80cb29]" /> Literature Synthesis
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Our team assists in systematic literature reviews and secondary data mining from authoritative databases like MOSPI, Census, and CMIE, helping you build a robust theoretical framework.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["PhD Mentorship Support", "Statistical Tool Assistance", "Ethics & ESOMAR Compliance", "Plagiarism-Free Data Handling"].map((item, i) => (
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