"use client";
import React, { useState } from "react";
import { Heart, Stethoscope, Pill, Briefcase, RefreshCw } from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Healthcare",
  subsections: {
    "Healthcare Services":
      "NexGen has expertise in healthcare research services such as medical and diagnostic laboratory services, dental services, home health care and other healthcare services. We have done a number of feasibility studies to open the hospitals, medical colleges, nursing homes and other specialised services in healthcare sector.",
    "Medical Devices":
      "We have successfully executed a large number of research studies related to medical devices used in diagnosis, treatment and monitoring of medical conditions including in-vitro diagnostic devices, dental equipment and supplies, ophthalmic devices, cardiovascular devices, hospital supplies and other medical devices.",
    "Pharmaceutical Drugs":
      "NexGen has vast experience in in conducting the pharmaceutical drug research related to various diseases like TB, HIV, Cardiovascular drugs, Gastrointestinal drugs, Cancer drugs and other drugs.",
  },
};

const iconMap = {
  "Healthcare Services": Heart,
  "Medical Devices": Stethoscope,
  "Pharmaceutical Drugs": Pill,
  default: Briefcase,
};

export default function HealthcarePage() {
  const items = Object.entries(data.subsections);
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="bg-white text-(--color-primary) font-sans flex flex-col justify-center py-10 px-6">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          {data.title}
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto mt-6" />
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
              className="group h-75 perspective-distant cursor-pointer"
            >
              <div
                className={`relative h-full w-full transition-all duration-700 transform-3d ${isFlipped ? "transform-[rotateY(180deg)]" : "group-hover:transform-[rotateY(180deg)]"}`}
              >
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white border-2 border-border flex flex-col items-center justify-center p-8 backface-hidden">
                  <div className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl bg-border/30 text-accent">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-center">
                    {key}
                  </h3>

                  {/* UX Indicator */}
                  <div className="absolute bottom-6 flex items-center gap-2 text-accent transition-colors animate-pulse">
                    <RefreshCw size={14} />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                      Tap to view
                    </span>
                  </div>
                </div>

                {/* --- BACK SIDE (The Bold Primary Look) --- */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-(--color-primary) p-10 text-white transform-[rotateY(180deg)] backface-hidden flex flex-col justify-center items-center text-center">
                  <div className="absolute top-6 left-6 opacity-10 text-white">
                    <IconComponent size={30} />
                  </div>

                  <h3 className="text-lg font-bold mb-4 text-accent uppercase tracking-wider">
                    {key}
                  </h3>

                  <p className="text-[14px] leading-relaxed text-white/90 font-medium">
                    {value}
                  </p>

                  <div className="mt-6 h-1 w-10 bg-accent rounded-full" />
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
