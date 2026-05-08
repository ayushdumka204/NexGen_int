"use client";
import React from "react";
import Image from "next/image";
import { Home, Globe, Lightbulb, MapPin, ShieldCheck } from "lucide-react";

export default function AboutUsSection() {
  const features = [
    { title: "Deeper Experience with Global and National", icon: Globe },
    { title: "Thoughtful Solutions with Priorities", icon: Lightbulb },
    { title: "All India Coverage", icon: MapPin },
    { title: "Quality with Cost", icon: ShieldCheck },
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* LEFT: CONTENT AREA */}
          <div className="pt-16 lg:pt-20">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <a
                href="/"
                className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </a>
              <span>/</span>
              <span className="text-[var(--color-primary)] font-medium">
                Company
              </span>
            </nav>

            {/* Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-primary)] tracking-tight mb-5">
                About <span className="text-[var(--color-accent)]">NexGen</span>
              </h1>

              <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-semibold tracking-wide border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Turning Data Into Decisions
              </div>
            </div>

            {/* Content Text (New + Old Combined) */}
            <div className="space-y-5 text-[15px] leading-relaxed text-black">
              {/* Paragraph 1: From New Content */}
              <p>
                NexGen Market Research Services is one of India’s most trusted
                and experienced market research agencies, with over 2 decades of
                uninterrupted fieldwork, analysis, and strategic insight
                delivery across India and South Asia. We partner with leading
                brands, government bodies, healthcare organisations, and
                academic institutions to design and execute research programmes
                that inform strategy, validate decisions, and unlock growth.
              </p>

              {/* Paragraph 3: From Old Content (Kept unique context) */}
              <p>
                Our end-to-end research capability spans quantitative data
                collection, qualitative enquiry, secondary desk research, and
                academic fieldwork — all delivered through a single, accountable
                partner. Whether a client requires a rapid online survey, a
                nationally representative face-to-face study, a sensitive
                qualitative exploration, or a multi-year tracking programme,
                NexGen brings the methodology, the infrastructure, and the
                analytical rigour to deliver results that stand up to scrutiny.
              </p>

              {/* Paragraph 4: From Old Content (Kept unique stats) */}
              {/* <p>
                Instead of sighting opportunity as just another business deal, NexGen believes in building a lasting relationship with clients. Since its inception, NexGen has established many friends & clients among international companies. With our ever-expanding research network, currently spanning 300 cities within India across all region, NexGen is excellently poised to enable you to reach your target market.
              </p> */}
            </div>
          </div>

          {/* RIGHT: IMAGE AREA */}
          <div className="hidden lg:flex flex-col pt-16 lg:pt-20">
            <div className="h-[52px] mb-8" />

            <div className="relative flex-grow w-full overflow-hidden shadow-sm border border-slate-200 group bg-slate-100/30 rounded-2xl">
              <Image
                src="/about-us.jpg"
                alt="About NexGen Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1279px) 100vw, 38vw"
                quality={74}
                priority
              />
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-16 pb-20">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors mb-3">
                <item.icon className="w-5 h-5" />
              </div>

              <h4 className="text-sm font-semibold text-black leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
