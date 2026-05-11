import React from "react";
import { Table, UserCheck, Phone, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel"; // adjust path

export const metadata = {
  title: "Quantitative Data Collection & Research Services",
  description:
    "Expert quantitative research and data collection using F2F, telephonic, and CAWI surveys with statistical analysis to provide actionable insights for your business.",
};

/* ── Reusable sub-components ───────────────────────────────── */
const DataRow = ({ label, value }) => (
  <div className="flex justify-between items-start gap-4 py-3 border-b border-slate-100 last:border-0">
    <span className="text-sm font-medium text-black shrink-0">{label}</span>
    <span className="text-sm font-bold text-right text-black">{value}</span>
  </div>
);

const Tag = ({ text }) => (
  <span className="px-3 py-1 bg-slate-100 text-[10px] text-black font-bold uppercase tracking-wider rounded">
    {text}
  </span>
);

const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
    <h2 className="text-3xl font-black text-[var(--color-primary)] uppercase tracking-tight">
      {title}
    </h2>
  </div>
);

const SubHeading = ({ label, desc }) => (
  <div className="border-t border-slate-200 pt-6 space-y-1">
    <p className="text-xl font-black text-[var(--color-primary)] uppercase tracking-tight">
      {label}
    </p>
    <p className="text-sm font-bold text-[var(--color-accent)]">{desc}</p>
  </div>
);

/* ── Carousel data — exact content from images ─────────────── */

// Picture1.png — Quant vs Qual comparison table
const introCarouselItems = [
  {
    label: "Quantitative — Purpose",
    value: "WHAT",
    desc: "Measure & quantify at scale. Sample: n = 100 to 50,000+. Answers: WHAT is happening?",
  },
  {
    label: "Quantitative — Methods & Data",
    value: "CAWI · CAPI · CATI",
    desc: "Methods: CAWI · CAPI · CATI. Data type: Numbers, percentages, statistics.",
  },
  {
    label: "Quantitative — Output",
    value: "QUANT",
    desc: "Best for: Tracking, sizing, benchmarking. Output: Dashboards, charts, cross-tabs.",
  },
  {
    label: "Qualitative — Purpose",
    value: "WHY",
    desc: "Explore motivations & attitudes. Sample: n = 6 to 50. Answers: WHY is it happening?",
  },
  {
    label: "Qualitative — Methods & Data",
    value: "FGDs · IDIs · ETH",
    desc: "Methods: FGDs · IDIs · Ethnography. Data type: Words, themes, narratives.",
  },
  {
    label: "Qualitative — Output",
    value: "QUAL",
    desc: "Best for: Concept dev, attitudes, behaviour. Output: Reports, themes, verbatims.",
  },
];

// CAWI.png — 5-stage panel-to-delivery process
const cawiCarouselItems = [
  {
    label: "Panel Recruitment",
    value: "01",
    desc: "200k+ screened respondents across All-India.",
  },
  {
    label: "Questionnaire Design",
    value: "02",
    desc: "Skip logic, MaxDiff, conjoint, stimuli, adaptive design.",
  },
  {
    label: "Multi-Device Delivery",
    value: "03",
    desc: "Desktop, Mobile, Tablet, Web, All platforms.",
  },
  {
    label: "Live Quality Monitoring",
    value: "04",
    desc: "Speed, Straight-line, dupe, open-text, auto-checks.",
  },
  {
    label: "Data Delivery",
    value: "05",
    desc: "SPSS, Excel, cross-tabs, raw in 3–5 days.",
  },
];

// CAPI.png — NexGen CAPI network breakdown
const capiCarouselItems = [
  {
    // label: "Fieldwork Network",
    value: "500+",
    desc: "Trained interviewers .",
  },
  {
    // label: "Cities Covered",
    value: "300+",
    desc: "Cities Covered .",
  },
  {
    // label: "GPS",
    value: "GPS",
    desc: "Every Interview .",
  },
  {
    // label: "30%",
    value: "30%",
    desc: "Back Validated .",
  },
];

// CATI.png — 5 audience types for telephonic data
const catiCarouselItems = [
  {
    // label: "",
    value: "B2B Research",
    desc: "Senior decision makers & procurement heads .",
  },
  {
    // label: "",
    value: "Healthcare Professionals",
    desc: "Doctors, pharmacists, and clinical staff.",
  },
  {
    // label: "",
    value: "Customer Satisfaction",
    desc: "Post-purchase NPS & CX tracking.",
  },
  {
    // label: "",
    value: "Rural & Remote Audiences",
    desc: "Hard to reach communities.",
  },
  {
    // label: "",
    value: "Omnibus Studies",
    desc: "Rapid multi-client national surveys.",
  },
];

/* ─────────────────────────────────────────────────────────── */

export default function QuantitativeResearchPage() {
  return (
    <div className="bg-white min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

        {/* ── SECTION 1: INTRO ──────────────────────────────── */}
        <section className="space-y-12">
          {/* Top — heading + intro text full width */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] uppercase tracking-tight leading-tight">
              Quantitative Research &<br />Data Collection
            </h1>
            <p className="text-lg leading-relaxed text-black">
              Quantitative research is the foundation of measurable market intelligence.
              NexGen&apos;s quantitative data collection services are designed to generate
              statistically reliable findings at scale — enabling clients to measure
              market size, track brand performance over time, segment consumer
              populations, and benchmark their position against competitors with precision.
            </p>
          </div>

          {/* Bottom — carousel centered */}
          <StatsCarousel
            items={introCarouselItems}
            heading="Research Approach"
            subheading="Quantitative vs Qualitative"
            interval={5000}
          />
        </section>

        {/* ── SECTION 2: CAWI ───────────────────────────────── */}
        <section className="space-y-10">
          {/* Heading row */}
          <div className="space-y-2">
            <SectionHeading icon={Table} title="Online Surveys — CAWI" />
            <p className="text-base leading-relaxed text-black max-w-3xl pl-8">
              Computer-Assisted Web Interviewing (CAWI) is NexGen&apos;s most widely deployed
              online data collection method. Our surveys reach respondents across desktop,
              mobile, and tablet devices through NexGen&apos;s proprietary consumer panel of
              over 20,00,000 pre-screened participants spanning all major demographics,
              geographies, and consumer segments across India.
            </p>
          </div>

          {/* Two columns: details left, carousel right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="space-y-6">
              <SubHeading
                label="Online Data Collection (CAWI)"
                desc="Scalable, rapid and cost-effective online surveys"
              />
              <p className="text-sm leading-relaxed text-black">
                NexGen&apos;s CAWI platform supports adaptive questionnaire design — incorporating
                skip logic, response piping, MaxDiff scaling, conjoint analysis, and multimedia
                stimuli. Real-time fieldwork dashboards allow clients to monitor progress and
                data quality live. All online surveys include a respondent privacy notice, and
                data quality is maintained through automated checks for straight-lining, speeding,
                and open-text validation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["20L+ Consumer Panel","Adaptive Design","Real-Time Dashboard","Multimedia Capable","3–5 Day Turnaround"].map(t => <Tag key={t} text={t} />)}
              </div>
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 ">
                <DataRow label="Panel Coverage"  value="All-India, 300+ cities, all major consumer segments" />
                <DataRow label="Survey Formats"  value="Brand tracking, concept testing, segmentation, NPS, U&A" />
                <DataRow label="Average Field Time" value="3–5 business days for n=500" />
                <DataRow label="Quality Controls" value="Straight-lining, speed detection, open-end review, deduplication" />
                <DataRow label="Data Delivery"   value="SPSS, Excel, cross-tab reports, raw data export" />
              </div>
            </div>

            {/* Right — carousel */}
            <StatsCarousel
              items={cawiCarouselItems}
              heading="CAWI End-to-End Process"
              subheading="5 Stages from Panel to Delivery"
              interval={4500}
            />
          </div>
        </section>

        {/* ── SECTION 3: CAPI ───────────────────────────────── */}
        <section className="space-y-10">
          {/* Heading row */}
          <div className="space-y-2">
            <SectionHeading icon={UserCheck} title="Face-to-Face Surveys — CAPI" />
            <p className="text-base leading-relaxed text-black max-w-3xl pl-8">
              Computer-Assisted Personal Interviewing (CAPI) enables NexGen to reach
              respondents across the full breadth of India&apos;s geographic and demographic
              landscape, including rural and semi-urban populations that online panels
              cannot adequately represent. NexGen operates one of India&apos;s most extensive
              face-to-face fieldwork networks, with 500+ trained interviewers across 300+ cities.
            </p>
          </div>

          {/* Two columns: carousel left, details right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — carousel */}
            <StatsCarousel
              items={capiCarouselItems}
              heading="NexGen CAPI Network"
              subheading="500+ Interviewers, 300+ Cities"
              interval={4000}
            />

            {/* Right */}
            <div className="space-y-6">
              <SubHeading
                label="Face-to-Face Surveys (CAPI)"
                desc="Pan-India fieldwork — 500+ interviewers, 300+ cities"
              />
              <p className="text-sm leading-relaxed text-black">
                All CAPI surveys are conducted on tablet-based devices with offline data capture,
                GPS location tagging, and interviewer photo verification — providing a complete
                digital audit trail for every interview. NexGen&apos;s interviewers are formally trained
                and assessed before deployment; Field Managers provide real-time supervision. 30%
                of all CAPI interviews are subject to independent back-check validation under
                NexGen&apos;s quality control programme.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Tablet-Based","GPS & Photo Verified","In-Home | CLT | Mall | Healthcare"].map(t => <Tag key={t} text={t} />)}
              </div>
              <div className="space-y-2 pt-2">
                <p className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wide">
                  Face-to-face data collection supports:
                </p>
                <ul className="space-y-2">
                  {[
                    "In-home interviews for household consumption, lifestyle, and media studies.",
                    "Central location tests (CLT) for product evaluation, pack testing, and sensory research.",
                    "Mall and street intercept surveys for shopper and category research.",
                    "In-store observational and intercept studies for retail and FMCG clients.",
                    "Healthcare facility surveys targeting patients, caregivers, and front-line clinical staff.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-black">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CATI ───────────────────────────────── */}
        <section className="space-y-10">
          {/* Heading row */}
          <div className="space-y-2">
            <SectionHeading icon={Phone} title="Telephonic Surveys — CATI" />
            <p className="text-base leading-relaxed text-black max-w-3xl pl-8">
              Computer-Assisted Telephone Interviewing (CATI) is NexGen&apos;s preferred
              methodology for B2B research, professional audience surveys, and studies
              requiring rapid national coverage. NexGen&apos;s centralised CATI operations use
              standardised, supervisor-monitored scripts, maximising interviewer consistency
              and response reliability.
            </p>
          </div>

          {/* Two columns: details left, carousel right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="space-y-6">
              <SubHeading
                label="Telephonic Surveys (CATI)"
                desc="Centralised, monitored telephonic data collection"
              />
              <p className="text-sm leading-relaxed text-black">
                NexGen&apos;s CATI facility uses structured interviewer scripts administered via a
                purpose-built platform with automated call management and real-time supervisor
                monitoring. Multi-language interviewing is available across all major Indian
                languages. CATI is particularly well-suited to B2B research, healthcare professional
                studies, customer satisfaction tracking, and large-scale telephone omnibus studies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["B2B Audiences","Multi-Language","ESOMAR Compliant","Supervisor Monitored"].map(t => <Tag key={t} text={t} />)}
              </div>
            </div>

            {/* Right — carousel */}
            <StatsCarousel
              items={catiCarouselItems}
              heading="CATI Best-Use Scenarios"
              subheading="5 Audience Types for Telephonic Research"
              interval={4500}
            />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <ServicesCTA />
      </div>
    </div>
  );
}