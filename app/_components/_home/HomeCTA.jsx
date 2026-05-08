"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NexGenStrategicSection() {
  return (
    /* Wide padding (px-6 to px-12) and large bottom space for professional breathing */
    <section className="w-full pt-16 pb-30 flex items-center justify-center px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* --- Balanced Heading (Wide & Clean) --- */}
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-black tracking-tight text-primary leading-tight max-w-5xl uppercase">
          Driving Global Growth Through <br className="hidden md:block" />
          <span className="text-accent italic font-serif lowercase">actionable intelligence</span>
        </h2>

        {/* --- Strategic Subtext --- */}
        <p className="mt-6 text-sm md:text-base font-medium text-slate-600 max-w-3xl leading-relaxed">
          We deliver the high-precision data frameworks and strategic market insights required for 
          modern enterprises to navigate the complexities of international markets with certainty.
        </p>

        {/* --- Action Buttons --- */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-3.5 bg-primary text-white font-bold text-[11px] uppercase tracking-widest rounded-full hover:bg-primary/90 active:scale-95 transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2"
          >
            Start a project
          </Link>
          
          <Link
            href="/services"
            className="w-full sm:w-auto px-10 py-3.5 bg-transparent font-bold text-[11px] uppercase tracking-widest rounded-full hover:bg-slate-50 transition-all border border-slate-500 flex items-center justify-center gap-2 group text-primary"
          >
            Our Expertise
            <ArrowUpRight size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}