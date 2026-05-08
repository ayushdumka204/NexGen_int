"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    /* Flex-col ensures everything stays exactly in the middle. */
    <div className="flex min-h-[85vh] w-full flex-col items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        
        {/* --- Minimal Tag --- */}
        <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-primary">
          Status: Under Development
        </span>

        {/* --- Main Heading --- */}
        <h1 className="mt-4 text-6xl md:text-8xl font-black tracking-tighter text-primary">
          Coming <span className="text-accent">Soon</span>
        </h1>

        {/* --- English Subtext --- */}
        <p className="mt-6 text-sm md:text-base font-medium text-black max-w-md mx-auto leading-relaxed">
          This page is currently being crafted for a better experience. 
        </p>

        {/* --- Centered Back Button --- */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95 shadow-xl shadow-primary/20"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}