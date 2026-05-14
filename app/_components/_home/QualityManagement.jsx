"use client";

import Image from "next/image";
import { Check, Radio } from "lucide-react";
import Link from "next/link";

const qualityFeatures = [
  {
    title: "Quantitative Research",
    description: "Includes validation of 30% of sample size.",
  },
  {
    title: "Qualitative Research",
    description: "is 100% fully reviewed by management.",
  },
  {
    title: "Compulsory Training",
    description: "Formal training for all new interviewers is mandatory.",
  },
  {
    title: "Global Standards",
    description: "Adhere to established ESOMAR, CASRO, and MSPA Standards.",
  },
  {
    title: "Field Pilots",
    description: "Pilot study of questionnaire and guidelines.",
  },
  {
    title: "Client Participation",
    description:
      "Clients are invited and encouraged to attend all training sessions.",
  },
];

export default function QualityManagement() {
  return (
    <section className="bg-white pt-16 py-18 overflow-hidden">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP HEADING */}
        <div className="mb-8">
          {/* <span className="text-sm font-bold tracking-widest uppercase text-accent">
            What We Provide
          </span> */}

      <h2 className="text-4xl md:text-5xl font-black text-(--color-primary) mt-4 leading-tight pl-4 md:pl-4">
        Operations & Quality 
        <span className="text-accent"> Management</span>
      </h2>
        </div>
        {/* FEATURED IMAGE CARD */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-sm">
          <Image
            src="/QualityManagement.jpeg"
            alt="Quality Management"
            width={1200}
            height={600}
            className="w-full h-75 md:h-100 object-cover"
            priority
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-r from-(--color-primary)/95 to-(--color-primary)/60" />

          {/* TEXT CONTENT */}
          <div className="absolute inset-0 flex items-center px-6 md:px-16">
            {/* max-w-lg hata diya taaki content poori width le sake */}
            <div className="w-full max-w-7xl text-white"> 
              <p className="text-sm mb-4 text-accent font-bold uppercase tracking-wide">
                Featured Insight
              </p>
              {/* text-lg ko thoda bada (text-xl ya 2xl) bhi kar sakta hai agar zyada khali lage */}
              <p className="text-lg md:text-xl leading-relaxed">
                NexGen has a proprietary{" "}
                <span className="font-bold text-accent">
                  Quality Measurement Tool FactCheck
                </span>
                . We use an operating manual that outlines strict research
                guidelines. Emphasis is placed on{" "}
                <span className="font-bold"> quality control</span> to achieve
                the accurate results. Fieldwork is always handled by qualified
                professionals throughout the country. Randomly selected data is{" "}
                <span className="font-bold">
                  validated by the respective Field Manager
                </span>{" "}
                for quality control purposes.
              </p>
            </div>
          </div>        
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8">
          {qualityFeatures.map((item) => (
            <div
              key={item.title}
              // Added border-slate-300 and shadow-lg as requested
              className="bg-gray-50 rounded-3xl p-8 flex flex-col border border-slate-300 shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300 group"
            >
              {/* FIXED HEIGHT CONTENT AREA */}
              <div className="flex flex-col h-full">
                {/* TITLE — fixed height to align */}
                <h3 className="text-xl font-bold text-(--color-accent) mb-2 leading-tight min-h-12">
                  {item.title}
                </h3>

                {/* DESCRIPTION — flexible */}
                <p className="text-black text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* BUTTON — pinned bottom */}
                {/* <button className="mt-6 text-sm font-bold text-accent flex items-center gap-2 group-hover:gap-3 transition-all duration-300 w-fit cursor-pointer">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}