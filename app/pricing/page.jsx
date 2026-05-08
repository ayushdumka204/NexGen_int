"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Info } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    { name: "Starter", price: isAnnual ? "12,500" : "15,000", description: "Perfect for startups and small research projects.", buttonText: "Get Started" },
    { name: "Professional", price: isAnnual ? "32,000" : "40,000", description: "Advanced tools for growing companies.", buttonText: "Start Free Trial", highlight: true },
    { name: "Enterprise", price: isAnnual ? "75,000" : "90,000", description: "Full-scale solutions for global operations.", buttonText: "Join Now" },
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { name: "Survey Responses", values: ["500", "5,000", "Unlimited"] },
        { name: "Data Validation", values: [true, true, true] },
        { name: "NexGen FactCheck™", values: [false, true, true] },
        { name: "Standard Dashboard", values: [true, true, true] },
      ],
    },
    {
      category: "Advanced Analytics",
      items: [
        { name: "Advanced Analytics", values: [false, true, true] },
        { name: "Priority Support", values: [false, true, true] },
        { name: "API Integration", values: [false, "Standard", "Full Access"] },
        { name: "Dedicated Manager", values: [false, false, true] },
      ],
    },
  ];

  return (
    <section className="bg-white py-10 md:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER - CENTERED & MOVED UP */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Pricing Plans</p>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--color-primary)] tracking-tighter mb-5">
            <span className="text-[var(--color-primary)]">Pricing</span>
          </h2>
          <p className=" font-medium text-base leading-relaxed">
            Choose the plan that best fits your market research needs. No hidden fees, just reliable data.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? "text-[var(--color-primary)]" : "text-foreground"}`}>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} className="w-12 h-6 bg-border rounded-full p-1 relative cursor-pointer active:scale-95 transition-transform">
              <motion.div animate={{ x: isAnnual ? 24 : 0 }} className="w-4 h-4 bg-[var(--color-primary)] rounded-full" />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? "text-[var(--color-primary)]" : "text-foreground"}`}>Annual</span>
          </div>
        </div>

        <div className="relative">
          {/* TOP CARDS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_25%_25%_25%] items-end">
            <div className="hidden md:block pb-12 pr-10">
              <h3 className="text-3xl font-black text-[var(--color-primary)] leading-tight tracking-tighter">Scale your <br /> insights with <br /> NexGen.</h3>
            </div>

            {plans.map((plan, idx) => (
              <div key={idx} className={`p-8 pb-10 rounded-t-[32px] flex flex-col h-full relative border-t border-x border-border ${plan.highlight ? "!border-[var(--color-accent)] !border-b-0 border-2 z-20 bg-white" : "border-b-0"}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-primary)] text-[9px] font-black uppercase px-4 py-1 rounded-full whitespace-nowrap">Most Popular</div>
                )}
                <h3 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-[var(--color-primary)] tracking-tighter">₹{plan.price}</span>
                  <span className="text-foreground text-sm font-medium">/mo</span>
                </div>
                <p className="text-[11px] text-foreground font-medium mb-8 leading-relaxed h-8">{plan.description}</p>
                <button className={`w-full py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer active:scale-95 ${plan.highlight ? "bg-[var(--color-accent)] text-[var(--color-primary)] shadow-lg shadow-[var(--color-accent)]/20" : "bg-[var(--color-primary)] text-white shadow-md"}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* COMPARISON TABLE - FIXED BORDERS */}
          <div className="border-x border-b border-slate-100 rounded-b-[32px] overflow-hidden">
            {comparisonFeatures.map((cat, catIdx) => (
              <React.Fragment key={catIdx}>
                {/* CATEGORY HEADER - Overflow visible for border continuity */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_25%_25%_25%] bg-slate-50/50 border-y border-slate-100">
                  <div className="px-8 py-4 text-[var(--color-primary)] font-bold text-[10px] uppercase tracking-[0.2em]">{cat.category}</div>
                  <div className="hidden md:block" />
                  <div className="hidden md:block border-x-2 border-[var(--color-accent)] bg-[var(--color-accent)]/[0.02] relative z-10" />
                  <div className="hidden md:block" />
                </div>
                
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="grid grid-cols-1 md:grid-cols-[1fr_25%_25%_25%] border-b border-slate-50 last:border-0">
                    <div className="p-5 px-8 text-sm font-semibold text-slate-600 flex items-center gap-2">{item.name} <Info className="w-3 h-3 opacity-20" /></div>
                    
                    {item.values.map((val, vIdx) => (
                      <div key={vIdx} className={`p-5 flex justify-center items-center text-sm font-bold relative ${vIdx === 1 ? "border-x-2 border-[var(--color-accent)] bg-[var(--color-accent)]/[0.02] z-10 -my-[1px] py-[21px]" : ""}`}>
                        {typeof val === "boolean" ? (
                          val ? <div className="bg-[var(--color-accent)]/20 p-1 rounded-full"><Check className="w-3.5 h-3.5 text-[var(--color-accent)] stroke-[4px]" /></div> : <Minus className="w-4 h-4 text-slate-200" />
                        ) : (
                          <span className="text-[var(--color-primary)] opacity-80">{val}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </React.Fragment>
            ))}
            
            {/* BOTTOM BUTTONS ROW */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_25%_25%_25%] border-t border-slate-100">
              <div />
              <div className="p-6 flex justify-center"><button className="w-full py-2.5 rounded-lg text-[9px] font-black bg-slate-50 text-slate-400 uppercase tracking-widest cursor-pointer active:scale-95">Select</button></div>
              <div className="p-6 flex justify-center border-x-2 border-b-2 border-[var(--color-accent)] rounded-b-[32px] bg-[var(--color-accent)]/[0.02] relative z-10 -mt-[1px]">
                <button className="w-full py-2.5 rounded-lg text-[9px] font-black bg-[var(--color-accent)] text-[var(--color-primary)] uppercase tracking-widest cursor-pointer active:scale-95 shadow-md">Get Professional</button>
              </div>
              <div className="p-6 flex justify-center"><button className="w-full py-2.5 rounded-lg text-[9px] font-black bg-slate-50 text-slate-400 uppercase tracking-widest cursor-pointer active:scale-95">Select</button></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;