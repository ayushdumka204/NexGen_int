import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Smile from "lucide-react/dist/esm/icons/smile";
import Activity from "lucide-react/dist/esm/icons/activity";
import Tag from "lucide-react/dist/esm/icons/tag";
import FlaskConical from "lucide-react/dist/esm/icons/flask-conical";
import Megaphone from "lucide-react/dist/esm/icons/megaphone";
import PieChart from "lucide-react/dist/esm/icons/pie-chart";
import SolutionsCTA from "./_components/SolutionsCTA";

// ─── Data ─────────────────────────────────────────────────────────────────────

const solutions = [
  {
    Icon: ShieldCheck,
    title: "Brand Health Tracking",
    desc: "Continuously monitor your brand's awareness, consideration, preference, and loyalty against key competitors. Our tracking studies give you a real-time pulse on how your brand is perceived — and alert you the moment something shifts.",
  },
  {
    Icon: Smile,
    title: "Customer Experience (CX)",
    desc: "Measure satisfaction, effort, and loyalty at every touchpoint in the customer journey. From NPS and CSAT to in-depth journey mapping — we help you find the friction points that are quietly costing you retention.",
  },
  {
    Icon: Activity,
    title: "Usage & Attitude (U&A)",
    desc: "Understand how consumers actually use your category — when, why, how often, and alongside what else. U&A studies build the foundational market map that strategy, innovation, and communication decisions all flow from.",
  },
  {
    Icon: Tag,
    title: "Pricing Research",
    desc: "Find the price your market will pay — and the ceiling beyond which demand drops. We use Van Westendorp, Gabor-Granger, and conjoint techniques to give you a defensible, data-backed pricing architecture.",
  },
  {
    Icon: FlaskConical,
    title: "Product Testing & Concept",
    desc: "Validate before you launch. From early concept screening to monadic product tests and pack design evaluation — we tell you what works, what doesn't, and what your target consumer actually wants from your product.",
  },
  {
    Icon: Megaphone,
    title: "Advertising Research",
    desc: "Test your creative before it goes live — or diagnose why a campaign underperformed. Pre-testing, post-campaign evaluation, and message recall studies that give your marketing team clear direction, not just scores.",
  },
  {
    Icon: PieChart,
    title: "Consumer Segmentation",
    desc: "Stop marketing to everyone. Our segmentation studies identify the distinct consumer groups in your category — profiling each by attitudes, behaviours, and needs — so you can target, position, and communicate with precision.",
  },
];

const stats = [
  { value: "7", label: "Solutions" },
  { value: "2+", label: "Decade Experience" },
  { value: "11", label: "States Covered" },
  { value: "300+", label: "Brands Served" },
];

// ─── Reusable card (Href Removed, UI Same) ─────────────────────────────────────
function SolutionCard({ Icon, title, desc, featured = false }) {
  if (featured) {
    return (
      <div className="group flex flex-col sm:flex-row items-start gap-6 bg-[#f8f6fc] rounded-2xl p-8 mb-4 border border-border hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(44,17,97,0.07)] transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
          <Icon size={22} className="text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-primary transition-colors">
              {title}
            </h3>
            <span className="text-[10px] font-bold bg-accent/10 text-accent px-2.5 py-0.5 rounded-full">
              Most Requested
            </span>
          </div>
          <p className="text-sm text-black leading-relaxed max-w-xl">
            {desc}
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-accent">
            Explore solution{" "}
            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-[0_4px_24px_rgba(44,17,97,0.07)] transition-all duration-300 bg-white">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors shrink-0">
        <Icon size={18} className="text-accent" />
      </div>
      <h3 className="text-[15px] font-bold text-primary mb-2 transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-sm text-black leading-relaxed flex-1">
        {desc}
      </p>
      <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-accent">
        Learn more{" "}
        <ChevronRight
          size={14}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </span>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO ══ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-0">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-black text-primary leading-[1.05] tracking-tight mb-5">
                Answer the question
                <br />
                <span className="text-accent">your business</span>
                <br />
                is actually asking.
              </h1>
              <p className="text-lg text-black leading-relaxed max-w-lg">
                Business problems don&apos;t come labelled with a methodology. Our
                solutions are organised around the decisions you need to make —
                so you find the right research framework without needing to know
                the jargon.
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-4 shrink-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center bg-[#f8f6fc] rounded-2xl px-6 py-5 min-w-[96px] border border-border"
                >
                  <span className="text-3xl font-black text-foreground leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-black font-semibold mt-1.5 text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <nav
            className="border-t border-border -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            aria-label="Solution categories"
          >
            <div className="flex overflow-x-auto no-scrollbar">
              <a
                href="#by-business-need"
                className="shrink-0 px-6 py-4 text-sm font-semibold text-foreground hover:text-primary border-b-2 border-transparent hover:border-accent transition-all duration-150 whitespace-nowrap"
              >
                By Business Need
              </a>
            </div>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          id="by-business-need"
          aria-labelledby="h-by-business-need"
          className="py-16 md:py-20 border-b border-border"
        >
          <div className="mb-10">
            <h2
              id="h-by-business-need"
              className="text-3xl font-black text-primary mt-1"
            >
              By Business Need
            </h2>
            <p className="text-base text-black mt-1">
              Start with your question. We&apos;ll match you to the right approach.
            </p>
          </div>

          <SolutionCard {...solutions[0]} featured />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 ">
            {solutions.slice(1, 4).map((svc, index) => (
              <SolutionCard key={index} {...svc} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.slice(4).map((svc, index) => (
              <SolutionCard key={index} {...svc} />
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20" aria-labelledby="h-how">
          <div className="mb-10">
            <h2 id="h-how" className="text-3xl font-black text-primary mt-1">
              How it works
            </h2>
            <p className="text-base text-black mt-1">
              From brief to insight in three steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Share your question",
                desc: "Tell us the decision you're trying to make — a product launch, a pricing change, a brand relaunch. We'll identify the right solution and scope a study around your exact need.",
              },
              {
                step: "02",
                title: "We design the study",
                desc: "Our research team builds the methodology, questionnaire, and sample plan. You review and approve before fieldwork begins — no surprises, full transparency.",
              },
              {
                step: "03",
                title: "Get actionable insight",
                desc: "Findings are delivered as a clear, decision-ready report — not a data dump. Every output comes with specific recommendations tied to your original business question.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative flex flex-col rounded-2xl p-7 border border-border"
              >
                <span className="text-5xl font-black text-accent leading-none mb-4 select-none">
                  {step}
                </span>
                <h3 className="text-[15px] font-bold text-primary mb-2">
                  {title}
                </h3>
                <p className="text-sm text-black leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SolutionsCTA />
    </main>
  );
}