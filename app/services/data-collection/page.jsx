import React from "react";
import { GraduationCap, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel"; // adjust path

export const metadata = {
  title: "Quantitative and Qualitative Data Collection Services",
  description:
    "End-to-end research and data collection services. From field surveys to digital data gathering, we provide high-quality qualitative and quantitative data.",
};

/* ── Exact 3 pillars from /achademi-data-collection.png ─────── */
const academicItems = [
  {
    // label: "IRB-Compatible Consent",
    value: "IRB-Compatible Consent",
    desc: "Provided as standard.",
  },
  {
    // label: "Full Anonymisation",
    value: "Full Anonymisation",
    desc: "Before data transfer.",
  },
  {
    // label: "",
    value: "Multi-Mode Collection",
    desc: "CAWI · CAPI · CATI.",
  },
  {
    // label: "",
    value: "Publication-Ready Codebooks",
    desc: "SPSS · STATA · R · Excel.",
  },
  {
    // label: "",
    value: "Longitudinal Panel Mgmt",
    desc: "Repeated-measures & tracking.",
  },
];

const checkItems = [
  "IRB-compatible study design and informed consent documentation provided as standard",
  "Respondent recruitment, screening, and sampling aligned to the study's academic methodology",
  "Multi-mode collection — online surveys, CAPI, and CATI — to reach defined research populations",
  "Full data anonymisation prior to transfer; no personal identifiers in delivered datasets",
  "Data delivery in SPSS, STATA, R, CSV, and Excel with complete, publication-ready codebooks",
  "Longitudinal panel management for repeated-measures and tracking studies",
];

/* ─────────────────────────────────────────────────────────── */

export default function DataCollectionPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        {/* ── HERO HEADING — same pattern as other pages ─── */}
        <section className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
            <span className="text-[var(--color-primary)]">ACADEMIC</span>{" "}
            <span className="text-[var(--color-accent)]">DATA COLLECTION</span>
          </h1>
        </section>

        {/* ── CONTENT — full width, no image beside it ───── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — description */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-black">
              NexGen's academic data collection services support universities,
              public health bodies, government ministries, NGOs, and
              international development organisations. Our academic research
              team is experienced in designing and executing fieldwork that
              meets the procedural and ethical requirements of institutional
              governance frameworks, including IRB-compatible protocols where
              required.
            </p>
            <p className="text-base leading-relaxed text-black">
              Academic data collection at NexGen is structured to provide
              commissioning institutions with everything required for ethics
              approval and publication-ready data:
            </p>
          </div>

          {/* Right — checklist */}
          <ul className="space-y-3">
            {checkItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-black leading-relaxed"
              >
                <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── CAROUSEL — full width below content ──────── */}
        <StatsCarousel
          items={academicItems}
          heading="IRB-Compatible by Design"
          subheading="Academic Data Collection — Five Pillars"
          interval={4500}
        />

        {/* ── IRB DOCUMENTATION PACKAGE ──────────────── */}
        <section className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-[var(--color-primary)]">
              Academic Research Partners
              <span className="text-[var(--color-accent)]">
                {" "}
                — IRB Documentation Package
              </span>
            </h3>
            <p className="text-base leading-relaxed text-black">
              For projects requiring institutional ethics approval, NexGen
              provides an IRB Documentation Package on request, comprising
              consent form templates, respondent privacy notice, data handling
              and anonymisation protocol, sampling methodology statement, and a
              signed data processing agreement — facilitating smooth and timely
              ethics committee review.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <ServicesCTA />
      </div>
    </div>
  );
}
