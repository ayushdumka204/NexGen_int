"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamic Import of Earth - This is the key optimization
const Earth = dynamic(() => import("../ui/Earth"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      {/* Placeholder while 3D Globe loads */}
      <div className="w-48 h-48 rounded-full border border-dashed border-white/20 animate-pulse" />
    </div>
  ),
});

// const regions = [
//   { title: "North", cities: ["Delhi", "Haldwani", "Lucknow", "Chandigarh"], pos: "lg:top-[5%] lg:left-0 xl:left-[5%]" },
//   { title: "West", cities: ["Mumbai", "Pune", "Ahmedabad"], pos: "lg:top-[5%] lg:right-0 xl:right-[5%]" },
//   { title: "South", cities: ["Chennai", "Bengaluru"], pos: "lg:bottom-[5%] lg:left-0 xl:left-[5%]" },
//   { title: "East", cities: ["Kolkata", "Guwahati"], pos: "lg:bottom-[5%] lg:right-0 xl:right-[5%]" },
// ];

export default function GlobalNetwork() {
  return (
    <section className="relative w-full min-h-screen py-12 md:py-8 overflow-x-clip bg-[var(--color-primary)] flex flex-col items-center">
      {" "}
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,203,41,0.08),transparent_70%)] pointer-events-none" />
      {/* Header */}
      <div className="relative z-30 text-center px-4 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight text-center">
          <span className="text-[var(--color-accent)] underline">
            All INDIA PROGESS
          </span>
        </h2>
      </div>
      {/* Main Responsive Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center flex-grow">
        {" "}
        {/* GLOBE CONTAINER */}
        <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] aspect-square transition-all duration-500">
          {/* Inner Glow Ring */}
          <div className="absolute inset-4 md:inset-8 rounded-full border border-[var(--color-accent)]/20 shadow-[0_0_20px_rgba(128,203,41,0.08)]" />

          {/* Dynamically Loaded Earth */}
          <Earth className="drop-shadow-[0_0_60px_rgba(128,203,41,0.2)]" />
        </div>
        {/* CARDS CONTAINER - Replaced motion.div with CSS animation */}
        {/* <div className="mt-8 grid grid-cols-2 gap-4 w-full md:max-w-2xl lg:mt-0 lg:max-w-none lg:block">
          {regions.map((region, idx) => (
            <div 
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`
                relative lg:absolute ${region.pos} z-20
                p-4 md:p-5 lg:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl
                hover:border-[var(--color-accent)]/40 transition-colors duration-300
                w-full lg:max-w-[220px] xl:max-w-[260px]
                animate-fade-in-up
              `}
            >
              <h3 className="text-[var(--color-accent)] font-bold text-xs md:text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 shrink-0" /> {region.title}
              </h3>
              <ul className="space-y-1">
                {region.cities.map((city, i) => (
                  <li key={i} className="text-white/80 text-[13px] md:text-base font-medium">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
