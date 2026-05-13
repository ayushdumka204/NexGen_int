"use client";
import Link from "next/link";
import { ArrowRight, FlaskConical, BarChart2, Globe, BookOpen, Database, TrendingUp, Map, Search, Briefcase, Code2, Languages, Rocket, GraduationCap, ShoppingBag, Users, Sprout, Monitor, Building2, Store, ChevronRight } from "lucide-react";
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
  { value: "1M+", label: "Consumer Panel", desc: "Access to a vast network of verified respondents for diverse insights." },
  { value: "1000+", label: "Active Clients", desc: "Trusted by global leaders for consistent and reliable research data." },
  { value: "5000+", label: "Projects Delivered", desc: "A proven track record of successful high-impact research studies." },
  { value: "20+", label: "Years of Service", desc: "Decades of deep domain expertise in the Indian market." },
];

// ─── Reusable card (Unified Design) ─────────────────────────────────────────────
function UnifiedServiceCard({ Icon, title, href, desc }) {
  return (
    <Link
      href={href}
      className="group flex flex-col border border-accent rounded-xl p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon size={18} className="text-accent" />
        </div>
        <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
      </div>
      <h3 className="text-[15px] font-black text-primary mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">
        {desc}
      </p>
    </Link>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO ══ */}
      <section className="bg-white overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mt-5.5">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              NexGen Research Services
            </span>
          </div>

          <div className="w-full mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight mb-4">
              20+ years of experience <br/>
              <span className="text-accent">One unified framework.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 w-full">
              From qualitative discovery to large-scale data collection — every NexGen service 
              runs on the same six-stage research process, applied consistently across methods and sectors worldwide.
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

          {/* Bottom Nav */}
          <nav className="mt-10 border-t border-slate-100 pt-2">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3">
              <div className="shrink-0 border-r border-slate-200 pr-5">
                <Search size={18} className="text-slate-400" />
              </div>
              <div className="flex gap-6">
                {categories.map((cat) => (
                  <a key={cat.id} href={`#${cat.id}`} className="shrink-0 text-[11px] font-bold text-slate-500 hover:text-accent transition-colors whitespace-nowrap uppercase tracking-widest">
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category, index) => (
          <section key={category.id} id={category.id} className="relative py-20 border-b border-slate-100 last:border-0">
            {/* Main Content Area */}
            <div className="mb-12">
              <div className="flex items-baseline gap-4 mb-2">
                {/* 01, 02, 03 Numbering directly before the label */}
                <span className="text-2xl font-black text-accent tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">
                  {category.label}
                </h2>
              </div>
              <p className="text-lg text-slate-500 font-medium pl-10">
                {category.tagline}
              </p>
            </div>

            {/* Grid 3 set format (Responsive 3-column) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((svc) => (
                <UnifiedServiceCard key={svc.href} {...svc} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <ServicesCTA />
    </main>
  );
}