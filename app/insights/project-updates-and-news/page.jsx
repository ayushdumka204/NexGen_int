"use client";
import React from "react";
import { Calendar, TrendingUp, Users, Briefcase, Factory, GraduationCap } from "lucide-react";
import InsightsCTA from "../_components/InsightsCTA";

/* ── Data ──────────────────────────────────────────────────── */
const updates = [
  {
    id: 1,
    title: "Total Ongoing Projects",
    date: "April 2026",
    type: "Status",
    icon: TrendingUp,
    stat: { value: "11", label: "Live Projects" },
    content:
      "Currently managing 11 live projects, ensuring data accuracy and timeline compliance for all our partners.",
    highlights: [
      "Across 4 active sectors simultaneously",
      "Real-time fieldwork monitoring on all projects",
      "Dedicated project manager assigned to each study",
    ],
  },
  {
    id: 2,
    title: "Academic (Education Research)",
    date: "April 2026",
    type: "Sector Focus",
    icon: GraduationCap,
    stat: { value: "5", label: "Active Studies" },
    content:
      "Deep-diving into the education sector with 5 active studies aimed at improving learning outcomes and student satisfaction.",
    highlights: [
      "University and institutional partnerships",
      "IRB-compatible study designs across all projects",
      "Longitudinal tracking across student cohorts",
    ],
  },
  {
    id: 3,
    title: "Startup",
    date: "April 2026",
    type: "Sector Focus",
    icon: Briefcase,
    stat: { value: "3", label: "Startups Served" },
    content:
      "Fueling growth for 3 dynamic startups by providing actionable market intelligence and competitive benchmarking.",
    highlights: [
      "Go-to-market sizing and opportunity assessment",
      "Competitive landscape mapping",
      "Consumer validation for early-stage products",
    ],
  },
  {
    id: 4,
    title: "Service",
    date: "April 2026",
    type: "Sector Focus",
    icon: Users,
    stat: { value: "2", label: "Audits Underway" },
    content:
      "Executing 2 comprehensive service-level audits to help clients maintain brand standards and elevate customer experience.",
    highlights: [
      "Mystery shopping and NPS measurement",
      "Multi-location brand standard compliance checks",
      "Contact centre and in-branch service evaluation",
    ],
  },
  {
    id: 5,
    title: "Manufacturing",
    date: "April 2026",
    type: "Sector Focus",
    icon: Factory,
    stat: { value: "1", label: "Dedicated Study" },
    content:
      "Optimizing operations with 1 dedicated manufacturing study, focusing on efficiency and quality compliance.",
    highlights: [
      "Supplier and vendor satisfaction benchmarking",
      "Process quality audit across production units",
      "Workforce perception and engagement study",
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */

export default function UpdatesPage() {
  return (
    <div className="bg-white text-[var(--color-primary)] font-sans">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">
            <span className="text-[var(--color-primary)]">Project</span>{" "}
            <span className="text-[var(--color-accent)]">Updates</span>
          </h1>
          <div className="h-2 w-24 rounded-full bg-[var(--color-accent)] mx-auto" />
          <p className="text-lg font-medium text-black mt-4 max-w-2xl mx-auto leading-relaxed">
            Stay up to date with our latest expansions, partnerships, and
            company milestones.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="relative border-l-2 border-[var(--color-border)] pl-10 space-y-16">
          {updates.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative">

                {/* Timeline dot */}
                <div className="absolute -left-[45px] top-6 w-2 h-2 rounded-full bg-[var(--color-accent)] ring-8 ring-white" />

                <article className="bg-white border border-[var(--color-border)] rounded-sm overflow-hidden shadow-sm">

                  {/* Card header */}
                  <div className="flex items-center justify-between gap-4 px-8 py-5 border-b border-[var(--color-border)]">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-sm bg-[var(--color-accent)]/15 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[var(--color-primary)]" />
                      </span>
                      <span className="px-3 py-1 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase tracking-widest">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-widest shrink-0">
                      <Calendar size={13} className="text-[var(--color-accent)]" />
                      {item.date}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                      {/* Stat block */}
                      <div className="shrink-0 flex flex-col items-center justify-center border border-[var(--color-border)] rounded-sm px-8 py-5 text-center min-w-[120px]">
                        <span className="text-4xl font-black text-[var(--color-accent)] leading-none">
                          {item.stat.value}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black mt-1.5">
                          {item.stat.label}
                        </span>
                      </div>

                      {/* Text content */}
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-black text-[var(--color-primary)] uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-base font-medium text-black leading-relaxed">
                          {item.content}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2 pt-1">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-black">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <InsightsCTA />
    </div>
  );
}