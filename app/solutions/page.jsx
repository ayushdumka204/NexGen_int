import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Smile, Activity, Tag, FlaskConical, Megaphone, PieChart, Search } from "lucide-react";
import SolutionsCTA from "./_components/SolutionsCTA";

// ─── Data ─────────────────────────────────────────────────────────────────────

const solutions = [
  {
    Icon: ShieldCheck,
    title: "Brand Health Tracking",
    desc: "Continuously monitor your brand's awareness, consideration, preference, and loyalty against key competitors. Our tracking studies give you a real-time pulse on how your brand is perceived.",
  },
  {
    Icon: Smile,
    title: "Customer Experience (CX)",
    desc: "Measure satisfaction, effort, and loyalty at every touchpoint in the customer journey. From NPS and CSAT to in-depth journey mapping — we help you find the friction points.",
  },
  {
    Icon: Activity,
    title: "Usage & Attitude (U&A)",
    desc: "Understand how consumers actually use your category — when, why, how often, and alongside what else. U&A studies build the foundational market map for decision making.",
  },
  {
    Icon: Tag,
    title: "Pricing Research",
    desc: "Find the price your market will pay — and the ceiling beyond which demand drops. We use Van Westendorp and conjoint techniques to give you a data-backed pricing architecture.",
  },
  {
    Icon: FlaskConical,
    title: "Product Testing & Concept",
    desc: "Validate before you launch. From early concept screening to monadic product tests and pack design evaluation — we tell you what works and what target consumer actually wants.",
  },
  {
    Icon: Megaphone,
    title: "Advertising Research",
    desc: "Test your creative before it goes live — or diagnose why a campaign underperformed. Pre-testing and post-campaign evaluation studies that give your marketing team clear direction.",
  },
  {
    Icon: PieChart,
    title: "Consumer Segmentation",
    desc: "Stop marketing to everyone. Our segmentation studies identify the distinct consumer groups in your category — profiling each by attitudes, behaviours, and needs for precision targeting.",
  },
];

const stats = [
  { value: "1M+", label: "Consumer Panel", desc: "Access to a vast network of verified respondents for diverse insights." },
  { value: "1000+", label: "Active Clients", desc: "Trusted by global leaders for consistent and reliable research data." },
  { value: "5000+", label: "Projects Delivered", desc: "A proven track record of successful high-impact research studies." },
  { value: "20+", label: "Years of Service", desc: "Decades of deep domain expertise in the Indian market." },
];

// ─── Reusable card (Unified Design) ─────────────────────────────────────────────
function SolutionCard({ Icon, title, desc, featured = false }) {
  return (
    <div
      className={`group flex flex-col border border-accent rounded-xl p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ${featured ? 'lg:col-span-3' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon size={18} className="text-accent" />
        </div>
        <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform" />
      </div>
      <h3 className="text-[15px] font-black text-primary mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">
        {desc}
      </p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO — Single Window Optimized ══ */}
      <section className="bg-white overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mt-[10px]">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Research Solutions
            </span>
          </div>

          <div className="w-full mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight mb-4">
              Answer the question <span className="text-accent">your business</span> is actually asking.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 w-full">
              Business problems don&apos;t come labelled with a methodology. Our solutions are organised 
              around the decisions you need to make — so you find the right framework.
            </p>
          </div>

          <div className="w-full border-t border-dashed border-accent/50 mb-10"></div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="group flex flex-col p-5 border border-accent rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-primary tracking-tight">{s.value}</span>
                  <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide mb-2">{s.label}</h3>
                <p className="text-[12px] text-slate-500 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>

          <nav className="mt-10 border-t border-slate-100 pt-2">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3">
              <div className="shrink-0 border-r border-slate-200 pr-5">
                <Search size={18} className="text-slate-400" />
              </div>
              <div className="flex gap-6">
                {["By Business Need", "How it works"].map((label) => (
                  <a key={label} href={`#${label.toLowerCase().replace(/\s+/g, '-')}`} className="shrink-0 text-[11px] font-bold text-slate-500 hover:text-accent whitespace-nowrap uppercase tracking-widest">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 01 */}
        <section id="by-business-need" className="relative py-20 border-b border-slate-100">
          <span className="absolute top-10 left-0 text-[120px] font-black text-slate-50 select-none -z-10 leading-none">01</span>
          <div className="mb-12 relative z-10">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tight">By Business Need</h2>
            <p className="text-lg text-slate-500 mt-2 font-medium">Match your business questions to the right research approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((svc, index) => (
              <SolutionCard key={index} {...svc} featured={index === 0} />
            ))}
          </div>
        </section>

        {/* Section 02 */}
        <section id="how-it-works" className="relative py-20">
          <span className="absolute top-10 left-0 text-[120px] font-black text-slate-50 select-none -z-10 leading-none">02</span>
          <div className="mb-12 relative z-10">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tight">How it works</h2>
            <p className="text-lg text-slate-500 mt-2 font-medium">From brief to insight in three decision-ready steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Share your question", desc: "Tell us the decision you're trying to make. We'll identify the right solution and scope a study around your exact need." },
              { step: "02", title: "We design the study", desc: "Our team builds the methodology, questionnaire, and sample plan. You review and approve before fieldwork begins." },
              { step: "03", title: "Get actionable insight", desc: "Findings are delivered as a decision-ready report. Every output comes with specific recommendations tied to your goals." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col p-7 border border-accent rounded-xl bg-white shadow-sm transition-all">
                <span className="text-4xl font-black text-accent mb-4">{step}</span>
                <h3 className="text-[15px] font-black text-primary uppercase mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SolutionsCTA />
    </main>
  );
}