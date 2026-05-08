"use client";
import React, { useState } from "react";
import { Layers, Users, Building, Briefcase, RefreshCw } from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Technology",
  subsections: {
    IT: "NexGen works closely with the IT industry. We have served more than 100 small, medium and large IT companies during last 2 decades.",
    Communication:
      "Our communication industry exposure includes studies like customers satisfaction, retail store audits and expectations of the consumers.",
    Media:
      "We have served more than 10 media houses for various research requirements in India.",
  },
};

const iconMap = {
  IT: Layers,
  Communication: Users,
  Media: Building,
  default: Briefcase,
};

export default function TechnologyPage() {
  const items = Object.entries(data.subsections);
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="bg-white text-[var(--color-primary)] font-sans flex flex-col justify-center py-10 px-6">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          {data.title}
        </h1>
        <div className="h-1.5 w-16 bg-[var(--color-accent)] mx-auto mt-6" />
      </div>

      {/* --- FLIP CARDS GRID --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {items.map(([key, value], idx) => {
          const IconComponent = iconMap[key] || iconMap.default;
          const isFlipped = flippedIndex === idx;

          return (
            <div
              key={key}
              onClick={() => setFlippedIndex(isFlipped ? null : idx)}
              className="group h-[280px] [perspective:1200px] cursor-pointer"
            >
              <div
                className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
              >
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white border-2 border-[var(--color-border)] flex flex-col items-center justify-center p-8 [backface-visibility:hidden]">
                  <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-[var(--color-border)]/30 text-[var(--color-accent)]">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-center">
                    {key}
                  </h3>

                  {/* Updated UX Indicator (As per your changes) */}
                  <div className="absolute bottom-6 flex items-center gap-2 text-[var(--color-accent)] transition-colors animate-pulse">
                    <RefreshCw size={14} />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                      Tap to view
                    </span>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[var(--color-primary)] p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                  <div className="absolute top-6 left-6 opacity-10 text-white">
                    <IconComponent size={30} />
                  </div>

                  <h3 className="text-lg font-bold mb-4 text-[var(--color-accent)] uppercase tracking-wider">
                    {key}
                  </h3>

                  <p className="text-[14px] leading-relaxed text-white/90 font-medium">
                    {value}
                  </p>

                  <div className="mt-6 h-1 w-10 bg-[var(--color-accent)] rounded-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <IndustriesCTA />
    </div>
  );
}
