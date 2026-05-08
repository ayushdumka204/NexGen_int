"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Education",
  points: [
    {
      title: "Academic Surveys",
      desc: "Assistance to PhD scholars in data collection",
    },
    {
      title: "Recent Topics",
      desc: "Quick surveys on current situations & trends",
    },
    {
      title: "B2C Surveys",
      desc: "Surveys with consumers on different topics",
    },
    { title: "B2B Surveys", desc: "Corporate or industrial surveys" },
    { title: "Diads or Triads", desc: "Supervisor-subordinate surveys" },
    { title: "Concept Validation", desc: "New concept test" },
  ],
};

export default function EducationPage() {
  return (
    <div className="bg-white text-[var(--color-primary)] font-sans flex flex-col items-center py-8 overflow-hidden relative min-h-screen">
      {/* --- BACKGROUND WATERMARK --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden h-[70vh]">
        <h2 className="text-[18vw] text-center font-black text-gray-100 opacity-20 uppercase leading-none tracking-tighter">
          {data.title}
        </h2>
      </div>

      <div className="max-w-7xl w-full relative z-10 flex flex-col items-center px-6 mb-20">
        {/* --- HEADER (No Badge, No Motion) --- */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-[var(--color-primary)]">
            {data.title}
          </h1>
          <div className="h-2 w-24 rounded-full bg-[var(--color-accent)] mx-auto mt-4" />
        </div>

        {/* --- COMPACT GRID (No Motion/Hover) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border border-[var(--color-border)] rounded-sm overflow-hidden bg-white shadow-sm">
          {data.points.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-10 h-[200px] flex flex-col justify-between border-r border-b border-[var(--color-border)] last:border-r-0"
            >
              {/* Numbering */}
              <div className="text-[var(--color-accent)] font-black text-4xl">
                0{idx + 1}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-[var(--color-primary)]/60 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-auto">
        <IndustriesCTA />
      </div>
    </div>
  );
}
