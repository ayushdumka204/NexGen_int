"use client";

import Image from "next/image";
import { Check, Radio } from "lucide-react";
import Link from "next/link";

const academicServices = [
  "Quantitative Data Collection",
  "Qualitative Data Collection",
  "Translations",
  "Survey Programming",
  "Data Tabulation",
  "Data Analysis",
];

export default function MergedResearchSection() {
  return (
    <div className="bg-(--color-background) min-h-dvh overflow-x-clip">
      
      {/* ---------- SECTION 1 (Startup - Image Left) ---------- */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE - Rectangle Landscape (Left) */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[600px] aspect-[16/10] overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
              <Image
                src="/start-up.JPG"
                alt="Startup Market Research Team"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
                sizes="(max-width: 1023px) 100vw, 600px"
                quality={85}
              />
            </div>
          </div>

          {/* CONTENT - Right Side */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-[1.1] mb-6 text-(--color-primary) tracking-tight whitespace-pre-line">
              Startup Market {"\n"}
              <span className="text-accent">
                Research Services
              </span>
            </h1>

            {/* Description - Made slightly heavier/harder */}
            <p className="text-base md:text-lg leading-[1.6] mb-8 max-w-xl text-slate-800 font-semibold italic md:not-italic">
              Validate your idea. Know your market. Build what people want.
              <span className="block mt-2 text-slate-600 font-medium italic">
                At NexGen, we help startups make smarter decisions from Day 1.
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                "Market Sizing & Segmentation",
                "Feasibility Studies",
                "Competitive Analysis",
                "Pricing Research",
                "Marketing Research",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold group">
                  <Check size={18} className="text-accent stroke-[4] shrink-0" />
                  <span className="text-sm text-(--color-primary)">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-sm font-black rounded-full shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all active:scale-95">
              Free 30-Min Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 2 (Academic - Image Right) ---------- */}
      <section className="py-16 md:pt-12 pb-12 bg-(--color-background)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* CONTENT - Left Side */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-(--color-primary) leading-[1.1] tracking-tight whitespace-pre-line">
              Trusted {"\n"}
              Academic Research Partner{"\n"}
              <span className="text-accent">NexGen</span>
            </h2>

            {/* Description - Heavier weight */}
            <p className="mt-6 text-base md:text-lg leading-[1.6] max-w-lg text-slate-800 font-semibold">
              NexGen provides exclusive marketing research services to the
              academic domain globally. We are the precision backbone for top institutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mt-8">
              {academicServices.map((item) => (
                <div key={item} className="flex items-center gap-2.5 font-bold">
                  <Radio size={16} className="text-accent stroke-[4] shrink-0" />
                  <span className="text-xs md:text-sm text-(--color-primary)">{item}</span>
                </div>
              ))}
            </div>

            {/* Decade Counter */}
            <div className="flex items-center gap-6 mt-12 pt-10 border-t border-slate-300">
              <div className="text-6xl md:text-7xl font-black text-accent leading-none tracking-tighter">
                2
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-accent/30 rounded-full h-14"></div>
                <p className="text-[10px] md:text-[11px] font-black tracking-widest uppercase leading-tight text-slate-700 max-w-[180px]">
                  decades of unbeaten trust from global customers
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE - Rectangle Landscape (Right) */}
          <div className="flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[600px] aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
              <Image
                src="/trusted-academic.JPG"
                alt="Academic Research Expert"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                sizes="(max-width: 1023px) 100vw, 600px"
                quality={85}
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}