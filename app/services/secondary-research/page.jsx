import React from "react";
import { BookOpen } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel"; // adjust path

export const metadata = {
  title: "Secondary Market Research & Primary Research Services",
  description:
    "Comprehensive desk research services combining secondary market research data with primary insights to give you a 360-degree view of your industry.",
};

/* ── Carousel data — exact 6 nodes from /secondary-research.png ── */
const ecosystemItems = [
  {
    // label: "",
    value: "Government Databases",
    desc: "MOSPI · Census  · Ministry of Commerce.",
  },
  {
    // label: "",
    value: "Industry Reports",
    desc: "CMIE · Bloomberg · IBEF · Euromonitor.",
  },
  {
    // label: "",
    value: "Regulatory Filings",
    desc: "Compliance docs and official records.",
  },
  {
    // label: "",
    value: "Academic Journals",
    desc: "Peer-reviewed papers and white papers.",
  },
  {
    // label: "",
    value: "Export / Import Data",
    desc: "Trade databases and flow data.",
  },
  {
    // label: "",
    value: "Trade & Sector Media",
    desc: "Publications and industry analysis.",
  },
];

/* ─────────────────────────────────────────────────────────── */

export default function SecondaryResearchPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">

      {/* ── HERO — same pattern as other service pages ────── */}
      <section className="py-20 md:py-14 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            <span className="text-[var(--color-primary)]">SECONDARY</span>{" "}
            <span className="text-[var(--color-accent)]">RESEARCH</span>
          </h1>

          {/* Intro */}
          <p className="text-lg leading-relaxed text-black max-w-3xl">
            Alongside primary research, NexGen provides comprehensive secondary research
            and academic data collection services. Secondary research forms the evidence
            base on which primary study designs are built — sizing the market, mapping
            the competitive landscape, identifying existing knowledge, and ensuring that
            primary fieldwork addresses genuine gaps rather than duplicating what is
            already known.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-20">

        {/* ── DESK RESEARCH SECTION ─────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-[var(--color-primary)]">
                Desk Research & Competitive Intelligence
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              NexGen&apos;s secondary research team synthesises intelligence from authoritative
              sources including government databases (Ministry of Commerce, MOSPI, Census
              of India), industry publications (CMIE, Bloomberg, IBEF, Euromonitor),
              regulatory filings, academic journals, export-import databases, and
              sector-specific trade media. All sources are assessed for credibility and
              authority before inclusion in client deliverables.
            </p>

            <p className="text-lg leading-relaxed text-black">
              Competitive intelligence services extend beyond desk review to include
              analysis of competitor market share trajectories, pricing architecture,
              distribution reach, and new product activity — drawn from retail audit data,
              trade databases, expert interviews, and structured secondary analysis.
            </p>
          </div>

          {/* Right — carousel replacing /secondary-research.png */}
          <StatsCarousel
            items={ecosystemItems}
            heading="Secondary Research Ecosystem"
            subheading="Six Authoritative Source Categories"
            interval={4500}
          />
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <ServicesCTA />
      </div>
    </div>
  );
}