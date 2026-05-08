"use client";

import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DEFAULT DATA — override via `items` prop
───────────────────────────────────────────── */
const DEFAULT_ITEMS = [
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

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function Card({ stat, dim }) {
  return (
    <div
      className={`
        w-full bg-white border border-[var(--color-border)] flex flex-col
        items-center justify-center text-center
        px-8 py-10 rounded-2xl transition-shadow duration-700
        ${dim ? "shadow-none" : "shadow-[0_8px_40px_rgba(44,17,97,0.13)]"}
      `}
    >
      <span
        className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${
          dim ? "text-[var(--color-primary)]/40" : "text-[var(--color-accent)]"
        }`}
      >
        {stat.label}
      </span>

      <h3
        className={`font-extrabold leading-tight tracking-tighter mb-4 break-words w-full text-center ${
          stat.value.length > 8
            ? "text-2xl sm:text-3xl"
            : stat.value.length > 4
              ? "text-4xl sm:text-5xl"
              : "text-5xl sm:text-6xl"
        } ${dim ? "text-[var(--color-primary)]/40" : "text-[var(--color-primary)]"}`}
      >
        {stat.value}
      </h3>

      <div
        className={`w-10 h-[3px] rounded-full mb-5 ${
          dim ? "bg-[var(--color-border)]" : "bg-[var(--color-accent)]"
        }`}
      />

      {!dim && (
        <p className="text-sm font-medium leading-relaxed max-w-[260px] text-black">
          {stat.desc}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CAROUSEL
   Props:
   - items[]         — array of { label, value, desc }
   - heading         — top accent label text
   - subheading      — main bold heading below
   - interval        — autoplay ms (default 5500)
   - className       — extra classes on <section>
───────────────────────────────────────────── */
export default function StatsCarousel({
  items = DEFAULT_ITEMS,
  heading = "Our Reach & Track Record",
  subheading = "Clients, Projects & Panel Size",
  interval = 5500,
  className = "",
}) {
  const total = items.length;
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setIndex((prev) => (prev + 1) % total),
      interval,
    );
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [total, interval]);

  const goTo = (i) => {
    if (i === index) return;
    setIndex(i);
    startTimer();
  };

  const wrap = (i) => ((i % total) + total) % total;
  const prevIdx = wrap(index - 1);
  const nextIdx = wrap(index + 1);

  return (
    <section
      className={`w-full py-16 bg-white flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Heading */}
      {(heading || subheading) && (
        <div className="text-center mb-12 px-4">
          {heading && (
            <p className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[var(--color-accent)] mb-3">
              {heading}
            </p>
          )}
          {subheading && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight leading-snug">
              {subheading}
            </h2>
          )}
          <div className="mx-auto mt-4 w-12 h-[3px] rounded-full bg-[var(--color-accent)]" />
        </div>
      )}

      {/* Cards stage */}
      <div className="relative w-full max-w-6xl flex items-center justify-center h-[250px]">
        {/* LEFT */}
        <div className="absolute left-0 sm:left-4 md:left-12 lg:left-20 z-10 pointer-events-none scale-[0.78] opacity-40">
          <div className="w-[220px] sm:w-[260px] md:w-[320px]">
            <Card stat={items[prevIdx]} dim />
          </div>
        </div>

        {/* CENTER */}
        <div
          key={index}
          className="relative z-20 w-[280px] sm:w-[320px] md:w-[380px] animate-card-in"
        >
          <Card stat={items[index]} />
        </div>

        {/* RIGHT */}
        <div className="absolute right-0 sm:right-4 md:right-12 lg:right-20 z-10 pointer-events-none scale-[0.78] opacity-40">
          <div className="w-[220px] sm:w-[260px] md:w-[320px]">
            <Card stat={items[nextIdx]} dim />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2.5 mt-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-700 ${
              i === index
                ? "w-10 bg-[var(--color-accent)]"
                : "w-2.5 bg-[var(--color-border)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/*
  ── REQUIRED: Add to globals.css ──────────────────────

  @keyframes cardIn {
    0%   { transform: scale(0.65); opacity: 0; }
    60%  { transform: scale(1.03); opacity: 1; }
    100% { transform: scale(1);    opacity: 1; }
  }
  .animate-card-in {
    animation: cardIn 0.9s cubic-bezier(0.25, 1, 0.5, 1) both;
  }
*/
