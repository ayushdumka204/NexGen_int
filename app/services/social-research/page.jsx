import React from "react";
import { Users2, HeartHandshake, Landmark, BarChart3, CheckCircle, HelpingHand } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Social Research & Public Policy Studies | NexGen",
  description: "Bridging the gap between policy and people with NexGen's comprehensive social research and impact assessment services.",
};

export default function SocialResearchPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Social</span>
              <span className="text-[#80cb29] block">Research &</span>
              <span className="text-[#2c1161] block">Public Policy</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Understanding the pulse of the community to drive meaningful social change.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              NexGen works closely with NGOs, government bodies, and international organizations to decode complex social issues. We don’t just deliver statistics; we provide a voice to the unheard, helping stakeholders design policies that are inclusive, effective, and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ── IMPACT & COMMUNITY SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <HeartHandshake className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Impact <br />
              <span className="text-[#80cb29]">Assessment</span>
            </h2>
            <p className="text-sm font-black text-[#80cb29] uppercase tracking-[0.3em] mt-4">
               Measuring Change on Ground
            </p>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "Policy is successful only when it reaches the last person in the queue."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Users2 size={20} className="text-[#80cb29]" /> Socio-Economic Studies
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    We conduct deep-dive studies into livelihood, education, and healthcare access. By using a mix of quantitative surveys and ethnographic observation, we map the economic realities of diverse community groups.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Landmark size={20} className="text-[#80cb29]" /> Public Policy Evaluation
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Is a government scheme working? We perform independent monitoring and evaluation (M&E) to check the efficacy of public programs, providing unbiased data to improve implementation and outreach.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <HelpingHand size={20} className="text-[#80cb29]" /> CSR Impact Audits
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    For corporate partners, we measure the true ROI of CSR initiatives. We help brands understand how their social investments are transforming lives and where they can optimize for maximum community benefit.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Pan-India Rural Reach", "Ethnographic Research Experts", "Bilingual Field Researchers", "Digital Data Collection (CAPI)"].map((item, i) => (
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