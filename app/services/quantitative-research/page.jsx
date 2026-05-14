import React from "react";
import { Table, UserCheck, Phone, CheckCircle } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel";

export const metadata = {
  title: "Quantitative Data Collection & Research Services",
  description: "Expert quantitative research and data collection using F2F, telephonic, and CAWI surveys with statistical analysis to provide actionable insights for your business.",
};

/* ── Reusable sub-components ───────────────────────────────── */
const DataRow = ({ label, value }) => (
  <div className="flex justify-between items-start gap-4 py-4 border-b border-slate-100 last:border-0">
    <span className="text-base font-semibold text-slate-500 shrink-0">{label}</span>
    <span className="text-base font-black text-right text-[#2c1161]">{value}</span>
  </div>
);

const Tag = ({ text }) => (
  <span className="px-4 py-1.5 bg-slate-50 text-[11px] text-[#2c1161] font-bold uppercase tracking-widest rounded-lg border border-slate-200">
    {text}
  </span>
);

export default function QuantitativeResearchPage() {
  return (
    <div className="bg-white min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* ── SECTION 1: HERO (Exact Content) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-100 pb-20">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-[#2c1161] uppercase tracking-tighter leading-[0.9] italic">
              Quantitative <br />
              <span className="text-[#80cb29]">Research &</span> <br />
              Data Collection
            </h1>
            <div className="w-24 h-2 bg-[#80cb29] rounded-full" />
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-bold tracking-tight">
              Quantitative research is the foundation of measurable market intelligence.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 mt-6 font-medium">
              NexGen&apos;s quantitative data collection services are designed to generate
              statistically reliable findings at scale — enabling clients to measure
              market size, track brand performance over time, segment consumer
              populations, and benchmark their position against competitors with precision.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: CAWI (Exact Content) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <Table className="w-10 h-10 text-[#80cb29]" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter">CAWI Surveys</h2>
            </div>
            <p className="text-sm font-black text-[#80cb29] uppercase tracking-[0.3em]">Online Data Collection</p>
          </div>
          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold">
              Computer-Assisted Web Interviewing (CAWI) is NexGen&apos;s most widely deployed
              online data collection method. Our surveys reach respondents across desktop,
              mobile, and tablet devices through NexGen&apos;s proprietary consumer panel of
              over <b>20,00,000 pre-screened participants</b> spanning all major demographics,
              geographies, and consumer segments across India.
            </p>
            
            <p className="text-base leading-relaxed text-slate-600 font-medium">
              NexGen&apos;s CAWI platform supports adaptive questionnaire design — incorporating
              skip logic, response piping, MaxDiff scaling, conjoint analysis, and multimedia
              stimuli. Real-time fieldwork dashboards allow clients to monitor progress and
              data quality live. All online surveys include a respondent privacy notice, and
              data quality is maintained through automated checks for straight-lining, speeding,
              and open-text validation.
            </p>

            <div className="flex flex-wrap gap-3">
              {["20L+ Consumer Panel","Adaptive Design","Real-Time Dashboard","Multimedia Capable","3–5 Day Turnaround"].map(t => <Tag key={t} text={t} />)}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-2">
                <DataRow label="Panel Coverage" value="All-India, 300+ cities, all major consumer segments" />
                <DataRow label="Survey Formats" value="Brand tracking, concept testing, segmentation, NPS, U&A" />
                <DataRow label="Average Field Time" value="3–5 business days for n=500" />
                <DataRow label="Quality Controls" value="Straight-lining, speed detection, open-end review, deduplication" />
                <DataRow label="Data Delivery" value="SPSS, Excel, cross-tab reports, raw data export" />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CAPI (Exact Content) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <UserCheck className="w-10 h-10 text-[#80cb29]" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter">CAPI Surveys</h2>
            </div>
            <p className="text-sm font-black text-[#80cb29] uppercase tracking-[0.3em]">Face-to-Face Fieldwork</p>
          </div>
          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold">
              Computer-Assisted Personal Interviewing (CAPI) enables NexGen to reach
              respondents across the full breadth of India&apos;s geographic and demographic
              landscape, including rural and semi-urban populations.
            </p>

            <p className="text-base leading-relaxed text-slate-600 font-medium">
              All CAPI surveys are conducted on tablet-based devices with offline data capture,
              GPS location tagging, and interviewer photo verification — providing a complete
              digital audit trail for every interview. NexGen&apos;s interviewers are formally trained
              and assessed before deployment; Field Managers provide real-time supervision. 30%
              of all CAPI interviews are subject to independent back-check validation under
              NexGen&apos;s quality control programme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "In-home interviews for household consumption, lifestyle, and media studies.",
                "Central location tests (CLT) for product evaluation, pack testing, and sensory research.",
                "Mall and street intercept surveys for shopper and category research.",
                "In-store observational and intercept studies for retail and FMCG clients.",
                "Healthcare facility surveys targeting patients, caregivers, and front-line clinical staff.",
                "Rural fieldwork for hard-to-reach communities.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-[#80cb29] shrink-0" strokeWidth={3} />
                  <span className="text-base font-bold text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CATI (Exact Content) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-10 h-10 text-[#80cb29]" strokeWidth={2.5} />
              <h2 className="text-4xl md:text-5xl font-black text-[#2c1161] uppercase tracking-tighter">CATI Surveys</h2>
            </div>
            <p className="text-sm font-black text-[#80cb29] uppercase tracking-[0.3em]">Telephonic Data</p>
          </div>
          <div className="lg:col-span-7 space-y-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-bold">
              Computer-Assisted Telephone Interviewing (CATI) is NexGen&apos;s preferred
              methodology for B2B research, professional audience surveys, and studies
              requiring rapid national coverage.
            </p>

            <p className="text-base leading-relaxed text-slate-600 font-medium">
              NexGen&apos;s CATI facility uses structured interviewer scripts administered via a
              purpose-built platform with automated call management and real-time supervisor
              monitoring. Multi-language interviewing is available across all major Indian
              languages. CATI is particularly well-suited to B2B research, healthcare professional
              studies, customer satisfaction tracking, and large-scale telephone omnibus studies.
            </p>

            <div className="flex flex-wrap gap-3">
              {["B2B Audiences","Multi-Language","ESOMAR Compliant","Supervisor Monitored"].map(t => <Tag key={t} text={t} />)}
            </div>
          </div>
        </section>

        <ServicesCTA />
      </div>
    </div>
  );
}

const introCarouselItems = [
  { label: "Quantitative — Purpose", value: "WHAT", desc: "Measure & quantify at scale. Sample: n = 100 to 50,000+. Answers: WHAT is happening?" },
  { label: "Quantitative — Methods & Data", value: "CAWI · CAPI · CATI", desc: "Methods: CAWI · CAPI · CATI. Data type: Numbers, percentages, statistics." },
  { label: "Quantitative — Output", value: "QUANT", desc: "Best for: Tracking, sizing, benchmarking. Output: Dashboards, charts, cross-tabs." },
  { label: "Qualitative — Purpose", value: "WHY", desc: "Explore motivations & attitudes. Sample: n = 6 to 50. Answers: WHY is it happening?" },
  { label: "Qualitative — Methods & Data", value: "FGDs · IDIs · ETH", desc: "Methods: FGDs · IDIs · Ethnography. Data type: Words, themes, narratives." },
  { label: "Qualitative — Output", value: "QUAL", desc: "Best for: Concept dev, attitudes, behaviour. Output: Reports, themes, verbatims." },
];