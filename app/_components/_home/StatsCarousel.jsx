"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS_ITEMS = [
  {
    label: "Clients Served",
    value: "1000+",
    desc: "Delivering research results across diverse industries worldwide.",
  },
  {
    label: "Projects Delivered",
    value: "5000+",
    desc: "Successfully delivered with precision and actionable insights.",
  },
  {
    label: "Years of Service",
    value: "20+",
    desc: "Expert professionals in our global network ready for any scale.",
  },
  {
    label: "Consumer Panel",
    value: "1,000,000+",
    desc: "A massive, verified panel ensuring high-quality data insights.",
  },
];

export default function StatsGrid() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADING SECTION --- */}
        <div className="text-center mb-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#80cb29] mb-3">
            Our Reach & Track Record
          </p>
          {/* Color changed to #2c1161 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2c1161] tracking-tighter">
            Clients, Projects & Panel Size
          </h2>
          <div className="mx-auto mt-6 w-16 h-1.5 rounded-full bg-[#80cb29]" />
        </div>

        {/* --- 2x2 GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STATS_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              /* Border with subtle green theme (#80cb29 at 20% opacity) */
              className="group relative bg-white p-10 border border-[#80cb29]/20 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(44,17,97,0.08)] hover:border-[#80cb29]/50 hover:-translate-y-1"
            >
              {/* Top Accent Label */}
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#80cb29] transition-colors">
                {item.label}
              </span>

              {/* Stat Value with #2c1161 */}
              <h3 className="text-5xl md:text-6xl font-black text-[#2c1161] mt-4 mb-6 tracking-tighter">
                {item.value}
              </h3>

              {/* Minimalist Divider */}
              <div className="w-12 h-1 bg-[#80cb29] rounded-full mb-6" />

              {/* Description */}
              <p className="text-slate-600 text-base font-medium leading-relaxed max-w-sm">
                {item.desc}
              </p>
              
              {/* Subtle Corner Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#80cb29]/5 rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}