import React from "react";
import { Eye, Store, ShoppingBag, ClipboardCheck, CheckCircle, UserSearch } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Mystery Shopping & Retail Audit Services | NexGen",
  description: "Get unbiased, real-world insights into your brand’s customer experience with NexGen's expert mystery shopping solutions.",
};

export default function MysteryShoppingPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side — 3-Line Mixed Heading */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic">
              <span className="text-[#2c1161] block">Mystery</span>
              <span className="text-[#80cb29] block">Shopping &</span>
              <span className="text-[#2c1161] block">Retail Audit</span>
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full mt-4" />
          </div>

          {/* Right Side — Humanized Intro */}
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight mb-6">
              Your staff acts differently when you're watching. We show you what happens when you’re not.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              NexGen’s Mystery Shopping services provide an unbiased, "undercover" look at your brand’s ground reality. From retail stores to luxury car showrooms and banks, we deploy trained evaluators who act as real customers to measure service quality, compliance, and sales effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ── AUDIT & EVALUATION SECTION (Split Layout) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 bg-[#80cb29]/10 w-fit rounded-2xl mb-4">
               <Eye className="text-[#80cb29]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter leading-none">
              The Secret <br />
              <span className="text-[#80cb29]">Evaluator</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold italic border-l-4 border-[#80cb29] pl-6">
                "We capture the moments that define your brand’s reputation."
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <Store size={20} className="text-[#80cb29]" /> Service Quality Audit
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Our mystery shoppers evaluate everything from greeting time and staff grooming to product knowledge and upselling techniques. We provide detailed reports on how your SOPs are actually being followed on the floor.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <ShoppingBag size={20} className="text-[#80cb29]" /> Competitor Benchmarking
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    We don't just shop your brand. We send our mystery shoppers to your competitors to see how they compare in pricing, service, and customer engagement, giving you a clear edge.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-black text-[#2c1161] uppercase mb-4 flex items-center gap-2">
                    <ClipboardCheck size={20} className="text-[#80cb29]" /> Compliance & Integrity
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    Check if your promotional offers are being communicated, if the visual merchandising is correct, and if the cash handling follows security protocols. We provide the photo and audio evidence you need.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
               {["Trained Industry-Specific Shoppers", "Photo & Video Evidence", "GPS-Verified Audits", "Actionable Insight Dashboards"].map((item, i) => (
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