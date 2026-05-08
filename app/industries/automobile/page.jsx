"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Automobile",
  points: [
    { title: "Mystery Shopping", desc: "Sales and Service Evaluation." },
    {
      title: "Consumer Satisfaction",
      desc: " Satisfaction with sales, Service, Features, Performance.",
    },
    {
      title: "Consumer Insight",
      desc: "Awareness, Perception, U&A, Assessment.",
    },
    {
      title: "Feasibility Studies",
      desc: "Open a new showroom, plant or unit.",
    },
  ],
};

export default function AutomobilePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-[var(--color-primary)] font-sans flex flex-col py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* --- HEADER (Top Center) --- */}
      <div className="w-full max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none m-0 p-0 text-[var(--color-primary)]">
          {data.title}
        </h1>
        <p className="font-bold uppercase tracking-[0.3em] text-[10px] mt-2 opacity-60">
          Sector Expertise & Insights
        </p>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* --- LEFT SIDE: THE NAVIGATOR --- */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {data.points.map((item, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`group w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300  ${
                activeIndex === idx
                  ? "bg-[var(--color-accent)] border-[var(--color-primary)] "
                  : "bg-white text-[var(--color-primary)]"
              }`}
            >
              <span
                className={`text-[15px] font-black uppercase tracking-tight transition-colors ${
                  activeIndex === idx
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-primary)]"
                }`}
              >
                {item.title}
              </span>
              <ArrowRight
                size={18}
                className={`transition-all ${
                  activeIndex === idx
                    ? "opacity-100 translate-x-0 text-primary"
                    : "opacity-0 -translate-x-2"
                }`}
              />
            </button>
          ))}
        </div>

        {/* --- RIGHT SIDE: THE CONTENT VIEW --- */}
        <div className="lg:col-span-8">
          <div className="relative min-h-[400px] bg-gray-50 border border-[var(--color-border)] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center transition-all duration-500">
            {/* Number Indicator */}
            <span className="text-[var(--color-accent)] font-black text-6xl mb-6 block leading-none">
              0{activeIndex + 1}
            </span>

            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight text-[var(--color-primary)]">
              {data.points[activeIndex].title}
            </h3>

            <p className="text-lg font-medium leading-relaxed max-w-2xl text-black/80">
              {data.points[activeIndex].desc}
            </p>

            {/* Minimal Accent Line */}
            <div className="h-1.5 w-16 bg-[var(--color-accent)] mt-10 rounded-full" />
          </div>
        </div>
      </div>
      <IndustriesCTA />
    </div>
  );
}
