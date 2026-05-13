import Link from "next/link";
import { ArrowRight, ChevronRight, HeartPulse, Cpu, Factory, Car, GraduationCap, ShoppingCart, Landmark, Building, PackageOpen, Search } from 'lucide-react';
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

// New Stats with relevant descriptions
const heroStats = [
  { value: "1M+", label: "Consumer Panel", desc: "Access to a vast network of verified respondents for diverse insights." },
  { value: "1000+", label: "Active Clients", desc: "Trusted by global leaders for consistent and reliable research data." },
  { value: "5000+", label: "Projects Delivered", desc: "A proven track record of successful high-impact research studies." },
  { value: "20+", label: "Years of Service", desc: "Decades of deep domain expertise in the Indian market." },
];

// ─── Reusable card (Updated with Stable Thin Green Borders) ────────────────────────
function IndustryCard({ Icon, title, href, desc, featured = false }) {
  return (
    <Link
      href={href}
      className={`group flex flex-col border border-accent rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}
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
    </Link>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function IndustriesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO — Single Window Optimized ══ */}
      <section className="bg-white overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mt-5.5">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Sector Specialization
            </span>
          </div>

          <div className="w-full mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight mb-4">
              Research built for your industry, <br/><span className="text-accent">not just your brief.
              </span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 w-full">
              Every industry has its own language, buyers, and decision cycles. NexGen&apos;s sector specialists bring 
              pre-built frameworks and domain knowledge — so you get faster, sharper answers.
            </p>
          </div>

          <div className="w-full border-t border-dashed border-accent/50 mb-10"></div>

          {/* New Stats Cards with relevant descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroStats.map((s) => (
              <div key={s.label} className="group flex flex-col p-5 border border-accent rounded-xl bg-white shadow-sm transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-primary tracking-tight">{s.value}</span>
                  <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide mb-2">{s.label}</h3>
                <p className="text-[12px] text-slate-500 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Nav with Search */}
          <nav className="mt-10 border-t border-slate-100 pt-2">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3">
              <div className="shrink-0 border-r border-slate-200 pr-5">
                <Search size={18} className="text-slate-400" />
              </div>
              <div className="flex gap-6">
                {categories.map((cat) => (
                  <a key={cat.id} href={`#${cat.id}`} className="shrink-0 text-[11px] font-bold text-slate-500 hover:text-accent whitespace-nowrap uppercase tracking-widest">
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div id="industries" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="mb-20 last:mb-0">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight">{category.label}</h2>
              <p className="text-slate-500 mt-2">{category.tagline}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((svc) => (
                <IndustryCard key={svc.href} {...svc} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ══ CTA Section — Automatically controlled by IndustriesCTA component ══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full lg:w-[80%]">
              <IndustriesCTA />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}