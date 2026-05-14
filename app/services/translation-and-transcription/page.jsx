import React from "react";
import { Languages, Mic2, Globe2, CheckCircle, Headphones } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Transcription and qualitative research Companies",
  description:
    "NexGen offers transcription and qualitative research services to help businesses understand consumer behavior and market trends.",
};

export default function TranslationPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Translation</span>
              <span className="text-[#80cb29] block">& Transcription</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Language should be a bridge, not a barrier. We capture the essence of every conversation.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              In a diverse market like India, literal translation isn't enough. At NexGen, we provide culturally nuanced translations and verbatim transcriptions that preserve the true meaning, tone, and intent of your research participants.
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
               <Languages className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              Native <br />
              <span className="text-[#80cb29]">Expertise</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "We speak the language of your consumers, literally and culturally."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Mic2 size={20} className="text-[#80cb29]" /> Verbatim Transcription
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Whether it's an IDI, FGD, or a simple telephonic interview, we provide time-stamped, verbatim transcriptions. We capture every 'um', 'ah', and emotional pause that adds depth to your qualitative analysis.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Globe2 size={20} className="text-[#80cb29]" /> Multilingual Translation
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Covering all major Indian regional languages and international tongues. Our translators are native speakers who understand local dialects and slang, ensuring your questionnaires and reports feel natural.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Headphones size={20} className="text-[#80cb29]" /> Audio/Video to Text
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    We handle various formats (MP3, WAV, MP4, etc.) and convert them into clean, editable documents. Our multi-stage QA process ensures 99% accuracy before the final file reaches your desk.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Native Dialect Support", "Strict Confidentiality", "Double-Blind QA Process", "Fast Turnaround (24-48 hrs)"].map((item, i) => (
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