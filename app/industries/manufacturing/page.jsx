"use client";
import React, { useState } from "react";
import {
  Shield,
  Sprout,
  Cpu,
  ShoppingCart,
  Car,
  Briefcase,
  RefreshCw,
} from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Manufacturing",
  subsections: {
    Defence:
      "We have done some in-depth studies in defence sector. Our defence sector reports being quoted by some of the foreign embassies.",
    Agriculture:
      "NexGen has done the intense coverage of the rural India. We have successfully executed a large number of research projects focused to agriculture sector and farmers in India.",
    "Electricals and Electronics":
      "There are number of electrical and electronic appliances companies have approached us for market research. Now we have a number of clients from white goods industry.",
    // FMCG: "NexGen has a large number of clients from the Fast Moving Consumer Goods sector. We do a lot of Feasibility & U&A studies for FMCG products in India.",
    Automobiles:
      "We are proud to have some of the world leading automotive companies as our regular clients. Some of the main automobile studies includes vehicular preferences, features, and expectations.",
  },
};

const iconMap = {
  Defence: Shield,
  Agriculture: Sprout,
  "Electricals and Electronics": Cpu,
  FMCG: ShoppingCart,
  Automobiles: Car,
  default: Briefcase,
};

export default function ManufacturingPage() {
  const items = Object.entries(data.subsections);
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white text-[var(--color-primary)] font-sans flex flex-col justify-center py-10 px-6">
      {/* --- HEADER (Clean & Compact) --- */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          {data.title}
        </h1>
        <div className="h-1.5 w-16 bg-[var(--color-accent)] mx-auto mt-6" />
      </div>

      {/* --- FLIP CARDS GRID (The Bold Design) --- */}
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
                {/* --- FRONT SIDE (Minimal & Professional) --- */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white border-2 border-[var(--color-border)] flex flex-col items-center justify-center p-8 [backface-visibility:hidden]">
                  <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-[var(--color-border)]/30 text-[var(--color-accent)]">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-center">
                    {key}
                  </h3>

                  {/* UX HINT: Subtle pulse icon to indicate flip */}
                  <div className="absolute bottom-6 flex items-center gap-2 text-[var(--color-accent)] transition-colors animate-pulse">
                    <RefreshCw size={14} className="rotate-45" />
                    {/* <span className="text-[9px] font-bold uppercase tracking-[0.2em]">View Details</span> */}
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      Tap to view
                    </span>
                  </div>
                </div>

                {/* --- BACK SIDE (The Bold Primary Look you liked) --- */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[var(--color-primary)] p-10 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                  {/* Subtle Background Icon Decor */}
                  <div className="absolute top-6 left-6 opacity-10">
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
