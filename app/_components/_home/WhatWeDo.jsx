"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import Image from "next/image";
import ArrowButton from "../utils/ArrowButton.jsx";

const SLIDES = [
  { url: "/infographics.jpeg", alt: "Data Collection & Analysis" },
  { url: "/infographics3.jpeg", alt: "Market Insights Team" },
];

const DELAY = 3500;

const WhatWeDo = () => {
  const total = SLIDES.length;
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const hovered = useRef(false);

  /* autoplay */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hovered.current) setIdx((i) => (i + 1) % total);
    }, DELAY);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  /* manual nav */
  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + total) % total);
    resetTimer();
  }, [total, resetTimer]);
  const next = useCallback(() => {
    setIdx((i) => (i + 1) % total);
    resetTimer();
  }, [total, resetTimer]);

  // Logic to show 1 full image at a time
  // Track is 200% wide because of clones, but we slide 100% of the viewport width per step
  const slideWidthPct = 100; 
  const offset = idx * (100 / total); 

  return (
    <section className="relative py-20 md:pt-36 pb-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT — Content ─────────────────────────────── */}
          <div className="flex flex-col text-center lg:text-left h-full justify-center py-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-8">
              Driving Growth Through <br />
              <span className="text-[var(--color-accent)]">Deep Insights</span>
            </h2>

            <div className="max-w-xl mx-auto lg:mx-0 space-y-6 text-black">
              <p className="text-lg leading-relaxed">
                With over <span className="font-bold">18 years of excellence</span>, 
                NexGen Market Research Services is a multidisciplinary agency 
                specializing in end-to-end data collection and field-based insights.
              </p>
              <p className="text-lg leading-relaxed">
                We empower businesses across <span className="font-bold text-[var(--color-primary)]">all industry verticals</span> by 
                leveraging a powerful network of 1,000+ field agents to deliver 
                precise CATI surveys, mystery shopping, and consumer behavior analysis 
                nationwide.
              </p>
            </div>
          </div>

          {/* ── RIGHT — slider ──────────────────────────────── */}
          <div
            className="w-full relative group overflow-hidden"
            onMouseEnter={() => {
              hovered.current = true;
            }}
            onMouseLeave={() => {
              hovered.current = false;
            }}
          >
            <div
              className="flex will-change-transform"
              style={{
                width: `${total * 200}%`, // Ensure container fits all original + cloned items
                transform: `translateX(-${idx * (100 / (total * 2))}%)`,
                transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {[...SLIDES, ...SLIDES].map((slide, i) => (
                <div
                  key={i}
                  aria-hidden={i >= total}
                  className="px-2"
                  style={{ width: `${100 / (total * 2)}%` }} // Each slide takes exactly 1 full view
                >
                  {/* Reduced height from aspect-[4/5] to aspect-video or fixed h-[380px] */}
                  <div className="relative aspect-video lg:h-[380px] w-full overflow-hidden bg-slate-200 rounded-xl shadow-sm">
                    <Image
                      src={slide.url}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      quality={85}
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowButton direction="left" visible onClick={prev} />
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowButton direction="right" visible onClick={next} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhatWeDo);