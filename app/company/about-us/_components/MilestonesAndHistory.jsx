"use client";
import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2007",
    content: "Incorporated in 2007 NexGen is one of the premier market research agency in India."
  },
  {
    year: "2008",
    content: "Started NexGen Healthcare Research Services: Established a panel of Super Specialist in major metro cities in India."
  },
  {
    year: "2010",
    content: "Operational in more than 50 cities in India."
  },
  {
    year: "2011",
    content: "Started secondary research with focus on data from Govt websites, published research reports, and various paid sources."
  },
  {
    year: "2014",
    content: "Achieved a sample size of more than 10,00,000 consumers in a calendar year."
  },
  {
    year: "2017",
    content: "Started the multidimensional services:",
    list: [
      "NexGen Digital Marketing.",
      "NexGen Lead Generation.",
      "NexGen Sales Promotion."
    ]
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-20 md:py-32 bg-nexgen-gradient overflow-hidden relative">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Our Journey
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[var(--color-accent)]" />
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">

            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative flex items-center w-full ${
                  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Card */}
                <div className={`w-full md:w-[46%] pl-12 md:pl-0 ${
                  idx % 2 === 0 ? "md:pr-10" : "md:pl-10"
                }`}>
                  <div className="glass-card rounded-2xl px-5 py-4 glow-green">

                    {/* Year */}
                    <span className="text-3xl md:text-4xl font-black text-[var(--color-accent)] leading-none">
                      {item.year}
                    </span>

                    {/* Content */}
                    <p className="mt-2 text-white/80 leading-relaxed text-sm md:text-base">
                      {item.content}
                    </p>

                    {/* List */}
                    {item.list && (
                      <ul className="mt-2 space-y-1">
                        {item.list.map((listItem, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[#2c1161] shadow-lg transform -translate-x-1/2 z-10" />

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}