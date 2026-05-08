"use client";
import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import FlaskConical from "lucide-react/dist/esm/icons/flask-conical";
import BarChart2 from "lucide-react/dist/esm/icons/bar-chart-2";
import Globe from "lucide-react/dist/esm/icons/globe";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import Database from "lucide-react/dist/esm/icons/database";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";
import Map from "lucide-react/dist/esm/icons/map";
import Search from "lucide-react/dist/esm/icons/search";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import Languages from "lucide-react/dist/esm/icons/languages";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import ShoppingBag from "lucide-react/dist/esm/icons/shopping-bag";
import Users from "lucide-react/dist/esm/icons/users";
import Sprout from "lucide-react/dist/esm/icons/sprout";
import Monitor from "lucide-react/dist/esm/icons/monitor";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import Store from "lucide-react/dist/esm/icons/store";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import ServicesCTA from "./ServicesCTA";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "research-method",
    label: "Research Method",
    tagline: "The right methodology changes everything.",
    services: [
      {
        Icon: FlaskConical,
        title: "Qualitative Research",
        href: "/services/qualitative-research",
        desc: "Deep-dive into consumer motivations through in-depth interviews, focus groups, and ethnographic studies. We uncover the 'why' behind the numbers.",
      },
      {
        Icon: BarChart2,
        title: "Quantitative Research",
        href: "/services/quantitative-research",
        desc: "Large-scale structured surveys and statistical analysis to measure and validate consumer behaviour across India with 30% sample validation built in.",
      },
      {
        Icon: Globe,
        title: "Online Research Services",
        href: "/services/online-research-services",
        desc: "CAWI surveys, online panels, and digital data collection reaching verified respondents across metro, tier-2, and tier-3 India at scale.",
      },
      {
        Icon: BookOpen,
        title: "Secondary Research",
        href: "/services/secondary-research",
        desc: "Rigorous desk research drawing on published reports and proprietary archives to build the knowledge foundation for any primary study.",
      },
      {
        Icon: Database,
        title: "Data Collection",
        href: "/services/data-collection",
        desc: "End-to-end CATI, CAPI, and face-to-face fieldwork by 1000+ trained agents across 28 states — with real-time tracking and validated delivery.",
      },
    ],
  },
  {
    id: "reports-strategy",
    label: "Reports & Strategy",
    tagline: "Insights that drive decisions, not just documents.",
    services: [
      {
        Icon: TrendingUp,
        title: "Market Share Reports",
        href: "/services/market-share-reports",
        desc: "Precise market sizing, share analysis, and competitive benchmarking — giving you a clear picture of where you stand and where the opportunity lies.",
      },
      {
        Icon: Map,
        title: "Feasibility & Market Entry",
        href: "/services/feasibility-and-market-entry",
        desc: "Comprehensive go/no-go analysis for new markets covering demand sizing, regulatory landscape, and consumer readiness before you commit.",
      },
      {
        Icon: Search,
        title: "Competitor Analysis",
        href: "/services/competitor-analysis",
        desc: "Systematic mapping of competitor strategies, pricing, and positioning — so you can find the gaps and sharpen your own competitive edge.",
      },
      {
        Icon: Briefcase,
        title: "Consulting Services",
        href: "/services/consulting-services",
        desc: "Strategic advisory that translates research findings into actionable recommendations — from brand repositioning to pricing architecture.",
      },
      {
        Icon: Code2,
        title: "Survey Programming & Tabulation",
        href: "/services/survey-programming-and-tabulation",
        desc: "Professional questionnaire scripting, routing logic, and cross-tabulation delivered on leading platforms in tight timelines.",
      },
      {
        Icon: Languages,
        title: "Translation & Transcription",
        href: "/services/translation-and-transcription",
        desc: "Accurate translation of research instruments and verbatim transcription in 15+ Indian languages — no nuance lost across regions and dialects.",
      },
    ],
  },
  {
    id: "specialized",
    label: "Specialized Services",
    tagline: "Domain expertise for complex research challenges.",
    services: [
      {
        Icon: Rocket,
        title: "Start-up Research Solutions",
        href: "/services/start-up-research-solutions",
        desc: "Lean, fast-turnaround research packages for early-stage companies — validate your idea, size your market, and understand customers before you scale.",
      },
      {
        Icon: GraduationCap,
        title: "Academic Research Support",
        href: "/services/academic-research-support",
        desc: "IRB-compatible data collection, translations, and survey programming for universities and researchers across India and international sites.",
      },
      {
        Icon: ShoppingBag,
        title: "Mystery Shopping",
        href: "/services/mystery-shopping",
        desc: "Structured covert audits of retail outlets and customer-facing touchpoints — measuring compliance, experience quality, and brand standards.",
      },
      {
        Icon: Users,
        title: "Social Research",
        href: "/services/social-research",
        desc: "Community-level studies for NGOs, government bodies, and CSR programmes covering livelihood, health, education, and social impact assessment.",
      },
      {
        Icon: Sprout,
        title: "Agriculture Research",
        href: "/services/agriculture-research",
        desc: "On-ground surveys with farming communities across rural India — crop patterns, input usage, market linkages, and agri-input brand awareness.",
      },
      {
        Icon: Monitor,
        title: "E-Market Research",
        href: "/services/e-market-research",
        desc: "Digital consumer behaviour studies tracking online purchase journeys, platform preferences, and e-commerce brand perception.",
      },
      {
        Icon: Building2,
        title: "B2B Marketing Research",
        href: "/services/b2b-marketing-research",
        desc: "Decision-maker surveys and vendor perception tracking across enterprise, SME, and industrial segments — where sample quality matters most.",
      },
      {
        Icon: Store,
        title: "B2C Marketing Research",
        href: "/services/b2c-marketing-research",
        desc: "Consumer attitude, usage, and awareness studies at scale — FMCG, retail, lifestyle, and durables with nationally representative samples.",
      },
    ],
  },
];

const stats = [
  { value: "1M+", label: "Consumer Panel" }, // 1,000,000+ verified panel
  { value: "1000+", label: "Active Clients" }, // Over 300 active clients
  { value: "5000+", label: "Projects Delivered" }, // 2,000+ projects
  { value: "20+", label: "Years of Service" }, // 1,000+ freelance researchers
];

// ─── Reusable card ─────────────────────────────────────────────────────────────
function ServiceCard({ Icon, title, href, desc, featured = false }) {
  if (featured) {
    return (
      <Link
        href={href}
        className="group flex flex-col sm:flex-row items-start gap-6 bg-[#f8f6fc] rounded-2xl p-8 mb-4 border border-border hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(44,17,97,0.07)] transition-all duration-300"
      >
        {/* ✅ Icon fix — use variable, not JSX tag syntax */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
          <Icon size={22} className="text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-primary transition-colors">
              {title}
            </h3>
            <span className="text-[10px] font-bold  text-accent px-2.5 py-0.5 rounded-full">
              Most Popular
            </span>
          </div>
          <p className="text-sm text-black leading-relaxed max-w-xl">
            {desc}
          </p>
          {/* Learn more — always visible */}
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-accent">
            Learn more{" "}
            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-[0_4px_24px_rgba(44,17,97,0.07)] transition-all duration-300 bg-white"
    >
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors shrink-0">
        <Icon size={18} className="text-accent" />
      </div>
      <h3 className="text-[15px] font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-sm text-black leading-relaxed flex-1">
        {desc}
      </p>
      {/* Learn more — always visible */}
      <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-accent">
        Learn more{" "}
        <ChevronRight
          size={14}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </span>
    </Link>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO — white, open, airy ══ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          {/* Heading + stats */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-black text-primary leading-[1.05] tracking-tight mb-5">
                18 research
                <br />
                services. <span className="text-accent">One</span>
                <br />
                <span className="text-accent">unified framework.</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-lg text-black">
                From qualitative discovery to large-scale data collection —
                every NexGen service runs on the same six-stage research
                process, applied consistently across methods and sectors.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4 shrink-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center rounded-2xl px-6 py-5 min-w-[96px] border border-border"
                >
                  <span className="text-3xl font-black text-primary leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-black font-semibold mt-1.5 text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category tab nav */}
          <nav
            className="border-t border-border -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            aria-label="Service categories"
          >
            <div className="flex overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="shrink-0 px-6 py-4 text-sm font-semibold text-primary hover:text-primary border-b-2 border-transparent hover:border-accent transition-all duration-150 whitespace-nowrap"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section 1: Research Method ── */}
        <section
          id={categories[0].id}
          aria-labelledby="h-research-method"
          className="py-16 md:py-20 border-b border-border"
        >
          <div className="mb-10">
            {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">
              01
            </span> */}
            <h2
              id="h-research-method"
              className="text-3xl font-black text-primary mt-1"
            >
              {categories[0].label}
            </h2>
            <p className="text-base text-black mt-1">
              {categories[0].tagline}
            </p>
          </div>

          {/* Featured first */}
          <ServiceCard {...categories[0].services[0]} featured />

          {/* Rest — 2 col / 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories[0].services.slice(1).map((svc) => (
              <ServiceCard key={svc.href} {...svc} />
            ))}
          </div>
        </section>

        {/* ── Section 2: Reports & Strategy — numbered list ── */}
        <section
          id={categories[1].id}
          aria-labelledby="h-reports-strategy"
          className="py-16 md:py-20 border-b border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">
                02
              </span> */}
              <h2
                id="h-reports-strategy"
                className="text-3xl font-black text-primary mt-1"
              >
                {categories[1].label}
              </h2>
              <p className="text-base text-black mt-1">
                {categories[1].tagline}
              </p>
            </div>
            <span className="text-xs font-bold text-accent bg-accent/8 border border-accent/20 px-3 py-1 rounded-full self-start sm:self-auto">
              {categories[1].services.length} services
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {categories[1].services.map(({ Icon, title, href, desc }, idx) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-5 py-7 border-b border-border last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 -mx-4 px-4 rounded-xl transition-colors duration-200"
              >
                {/* <span className="text-[11px] font-black text-accent/35 tabular-nums w-5 shrink-0 mt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span> */}
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={17} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-primary group-hover:text-accent transition-colors mb-1.5 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-black leading-relaxed mb-3">
                    {desc}
                  </p>
                  {/* Learn more — always visible */}
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-accent">
                    Learn more
                    <ArrowRight
                      size={13}
                      strokeWidth={2.5}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Section 3: Specialized — compact 4-col ── */}
        <section
          id={categories[2].id}
          aria-labelledby="h-specialized"
          className="py-16 md:py-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">
                03
              </span> */}
              <h2
                id="h-specialized"
                className="text-3xl font-black text-primary mt-1"
              >
                {categories[2].label}
              </h2>
              <p className="text-base text-black mt-1">
                {categories[2].tagline}
              </p>
            </div>
            <span className="text-xs font-bold text-accent bg-accent/8 border border-accent/20 px-3 py-1 rounded-full self-start sm:self-auto">
              {categories[2].services.length} services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories[2].services.map(({ Icon, title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col bg-white border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent transition-colors duration-300"
                  aria-hidden="true"
                />
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors shrink-0">
                  <Icon size={17} className="text-accent" />
                </div>
                <h3 className="text-[14px] font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-black leading-relaxed flex-1">
                  {desc}
                </p>
                {/* Learn more — always visible */}
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-accent">
                  Learn more{" "}
                  <ChevronRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ══ CTA — white bg, accent accents ══ */}
      <ServicesCTA />
    </main>
  );
}
