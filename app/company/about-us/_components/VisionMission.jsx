"use client";
import React from "react";
import Image from "next/image";
import { Eye, Target, CheckCircle } from "lucide-react";

export default function VisionMissionSection() {
  // Points for Mission list
  // const missionPoints = [
  //   "Setting new benchmarks by constantly upgrading capabilities.",
  //   "Going the extra mile to fulfill commitments.",
  //   "Establishing long-lasting relationships based on trust.",
  // ];

  return (
    <div className="bg-slate-50">
      {/* ==========================================
          1. VISION SECTION (Light Theme)
      ========================================== */}
      <section className="relative min-h-screen flex items-center py-10 md:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6">
                <Eye className="w-4 h-4" />
                our Vision
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-primary)] leading-tight mb-6">
                Shaping the Future of <br />
                <span className="text-[var(--color-accent)]">
                  Market Research
                </span>
              </h2>

              <div className="space-y-4 text-black leading-relaxed text-base md:text-lg">
                <p>
                  We're a company that never stops trying to do it better.
                  Clients are the essence of our business with whom we deal. We
                  work tirelessly to satisfy our clients' requirements and
                  anticipate their needs. To exceed our client’s expectations,
                  always we strive to extend our best services.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[320px] md:h-[420px] lg:h-[520px] w-full overflow-hidden shadow-2xl border-4 border-white rounded-2xl bg-slate-100/30">
                <Image
                  src="/mission.jpg"
                  alt="Vision Image"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={72}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. MISSION SECTION (Dark Theme)
      ========================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative h-[320px] md:h-[420px] lg:h-[520px] w-full overflow-hidden shadow-sm rounded-2xl bg-slate-100/20">
                <Image
                  src="/vision.webp"
                  alt="Mission Image"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={72}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/20">
                <Target className="w-4 h-4" />
                Our Mission
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
                Empowering Decisions <br />
                with{" "}
                <span className="text-[var(--color-accent)]">
                  Actionable Insights
                </span>
              </h2>

              <div className="space-y-4 text-black leading-relaxed text-base md:text-lg mb-8">
                <p>
                  Our aim is to set new benchmarks in market research by
                  constantly upgrading our existing capabilities.
                </p>
                <p>
                  NexGen Research will never rest until its clients are
                  satisfied. We will 'go the extra mile' to fulfill our
                  commitments. NexGen endeavors to provide timely services and
                  client care with the mission of establishing a long-lasting
                  relationship and earning the trust of our clients for future
                  projects.
                </p>
                <p>
                  We have over the years, gathered expertise and accumulated
                  invaluable experience and know-how.
                </p>
              </div>

              {/* Bullet Points */}
              {/* <ul className="space-y-4">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
