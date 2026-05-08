import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import HeartPulse from "lucide-react/dist/esm/icons/heart-pulse";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Factory from "lucide-react/dist/esm/icons/factory";
import Car from "lucide-react/dist/esm/icons/car";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import ShoppingCart from "lucide-react/dist/esm/icons/shopping-cart";
import Landmark from "lucide-react/dist/esm/icons/landmark";
import Building from "lucide-react/dist/esm/icons/building";
import PackageOpen from "lucide-react/dist/esm/icons/package-open";
import IndustriesCTA from "./_components/IndustriesCTA";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "primary-sectors",
    label: "Primary Sectors",
    tagline: "Deep domain expertise across India's core growth industries.",
    services: [
      {
        Icon: HeartPulse,
        title: "Healthcare & Pharma",
        href: "/industries/healthcare-pharma",
        desc: "From patient journey studies to pharma brand tracking and OTC consumer behaviour — we help healthcare brands make evidence-based decisions in a highly regulated, fast-evolving market.",
      },
      {
        Icon: Cpu,
        title: "Technology & IT",
        href: "/industries/technology",
        desc: "Product-market fit studies, user experience research, and enterprise buyer surveys for SaaS, hardware, and IT services companies scaling across India and globally.",
      },
      {
        Icon: Factory,
        title: "Manufacturing",
        href: "/industries/manufacturing",
        desc: "Dealer satisfaction studies, distributor channel audits, and industrial buyer research — covering both B2B and B2C segments across sectors like chemicals, packaging, and engineering goods.",
      },
      {
        Icon: Car,
        title: "Automobile",
        href: "/industries/automobile",
        desc: "Vehicle ownership studies, brand perception tracking, and after-sales experience audits — tailored for OEMs, dealerships, and EV entrants navigating a rapidly shifting Indian auto market.",
      },
      {
        Icon: GraduationCap,
        title: "Education",
        href: "/industries/education",
        desc: "Student and parent perception studies, institution brand health tracking, and EdTech usage research — helping universities, schools, and online learning platforms grow with data.",
      },
    ],
  },
  {
    id: "more-industries",
    label: "More Industries",
    tagline: "Specialized research for every corner of the Indian economy.",
    services: [
      {
        Icon: ShoppingCart,
        title: "FMCG & Retail",
        href: "/industries/fmcg-and-retail",
        desc: "Shopper behaviour studies, retail shelf audits, brand equity tracking, and new product concept tests — for FMCG brands and modern trade players competing in India's diverse consumer markets.",
      },
      {
        Icon: Landmark,
        title: "Financial Services",
        href: "/industries/financial-services",
        desc: "Customer satisfaction and NPS studies, product awareness research, and regulatory perception tracking — for banks, NBFCs, insurance companies, and fintech startups.",
      },
      {
        Icon: Building,
        title: "Real Estate",
        href: "/industries/real-estate",
        desc: "Home buyer sentiment surveys, locality demand mapping, and developer brand perception studies — giving real estate companies the ground-level insight needed to price, position, and sell effectively.",
      },
      {
        Icon: PackageOpen,
        title: "D2C",
        href: "/industries/direct-to-consumer",
        desc: "Customer cohort studies, category discovery research, and post-purchase experience surveys — helping direct-to-consumer brands understand exactly who their buyers are and why they convert.",
      },
    ],
  },
];

const stats = [
  { value: "9", label: "Industries" },
  { value: "11", label: "States Covered" },
  { value: "2+", label: "Decade Experience" },
  { value: "500+", label: "Studies Done" },
];

// ─── Reusable card ─────────────────────────────────────────────────────────────
function IndustryCard({ Icon, title, href, desc, featured = false }) {
  if (featured) {
    return (
      <Link
        href={href}
        className="group flex flex-col sm:flex-row items-start gap-6 bg-[#f8f6fc] rounded-2xl p-8 mb-4 border border-border hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(44,17,97,0.07)] transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
          <Icon size={22} className="text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
              {title}
            </h3>
            <span className="text-[10px] font-bold bg-accent/10 text-accent px-2.5 py-0.5 rounded-full">
              Top Sector
            </span>
          </div>
          <p className="text-sm text-black leading-relaxed max-w-xl">
            {desc}
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-accent">
            Explore research{" "}
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
export default function IndustriesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO ══ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-0">
          {/* Heading + stats */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-black text-primary leading-[1.05] tracking-tight mb-5">
                Research built for
                <br />
                <span className="text-accent">your industry,</span>
                <br />
                not just your brief.
              </h1>
              <p className="text-lg text-black leading-relaxed max-w-lg">
                Every industry has its own language, buyers, and decision
                cycles. NexGen&apos;s sector specialists bring pre-built frameworks
                and domain knowledge — so you get faster, sharper answers.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4 shrink-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center bg-[#f8f6fc] rounded-2xl px-6 py-5 min-w-[96px] border border-border"
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
            aria-label="Industry categories"
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
      <div id="industries" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section 1: Primary Sectors — featured + grid ── */}
        <section
          id={categories[0].id}
          aria-labelledby="h-primary"
          className="py-16 md:py-20 border-b border-border"
        >
          <div className="mb-10">
            {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">
              01
            </span> */}
            <h2
              id="h-primary"
              className="text-3xl font-black text-primary mt-1"
            >
              {categories[0].label}
            </h2>
            <p className="text-base text-black mt-1">
              {categories[0].tagline}
            </p>
          </div>

          {/* Featured first */}
          <IndustryCard {...categories[0].services[0]} featured />

          {/* Rest — 2 col / 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories[0].services.slice(1).map((svc) => (
              <IndustryCard key={svc.href} {...svc} />
            ))}
          </div>
        </section>

        {/* ── Section 2: More Industries — numbered list ── */}
        <section
          id={categories[1].id}
          aria-labelledby="h-more"
          className="py-16 md:py-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">
                02
              </span> */}
              <h2 id="h-more" className="text-3xl font-black text-primary mt-1">
                {categories[1].label}
              </h2>
              <p className="text-base text-black mt-1">
                {categories[1].tagline}
              </p>
            </div>
            <span className="text-xs font-bold text-accent bg-accent/8 border border-accent/20 px-3 py-1 rounded-full self-start sm:self-auto">
              {categories[1].services.length} industries
            </span>
          </div>

          {/* Two-column numbered list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {categories[1].services.map(({ Icon, title, href, desc }, idx) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-5 py-7 border-b border-border last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 hover:bg-[#f8f6fc] -mx-4 px-4 rounded-xl transition-colors duration-200"
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
      </div>

      {/* ══ CTA — white ══ */}
      <IndustriesCTA />
    </main>
  );
}
