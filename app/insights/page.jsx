import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import BarChart2 from "lucide-react/dist/esm/icons/bar-chart-2";
import Newspaper from "lucide-react/dist/esm/icons/newspaper";
import Clock from "lucide-react/dist/esm/icons/clock";
import Tag from "lucide-react/dist/esm/icons/tag";
import InsightsCTA from "./_components/InsightsCTA";

// ─── Data ─────────────────────────────────────────────────────────────────────

const blogs = [
  {
    slug: "why-qualitative-research-still-matters",
    tag: "Research Method",
    title: "Why Qualitative Research Still Matters in a Data-Heavy World",
    excerpt:
      "Numbers tell you what is happening. Qualitative research tells you why. Here's why India's fastest-growing brands are bringing ethnography and IDIs back to the centre of their strategy process.",
    readTime: "5 min read",
    date: "April 2025",
  },
  {
    slug: "understanding-tier2-tier3-india-consumer",
    tag: "Consumer Insights",
    title: "Understanding the Tier-2 and Tier-3 India Consumer",
    excerpt:
      "India's next 300 million consumers don't think or buy like metro audiences. We break down the key behavioural differences brands must account for before expanding beyond the top 8 cities.",
    readTime: "6 min read",
    date: "March 2025",
  },
  {
    slug: "pricing-research-india-methods",
    tag: "Pricing Research",
    title:
      "Van Westendorp vs Gabor-Granger: Which Pricing Method Is Right for You?",
    excerpt:
      "Both methods answer a pricing question — but they answer different ones. This guide explains when to use each technique and what kind of data you get from both.",
    readTime: "7 min read",
    date: "February 2025",
  },
  {
    slug: "brand-health-tracking-guide",
    tag: "Brand Research",
    title: "A Practical Guide to Brand Health Tracking in India",
    excerpt:
      "Spontaneous awareness, aided recall, brand preference, and NPS — what to measure, how often, and how to turn tracking data into decisions your CMO will actually act on.",
    readTime: "8 min read",
    date: "January 2025",
  },
  {
    slug: "fmcg-mystery-shopping",
    tag: "Mystery Shopping",
    title:
      "How FMCG Brands Use Mystery Shopping to Protect Their Shelf Presence",
    excerpt:
      "Shelf visibility, stock availability, and retailer compliance — three factors that directly affect sales but rarely show up in a sales report. Here's how structured mystery shopping fixes that gap.",
    readTime: "5 min read",
    date: "December 2024",
  },
  {
    slug: "startup-market-research-when-and-how",
    tag: "Startups",
    title: "When Should a Startup Do Market Research — and How Much Is Enough?",
    excerpt:
      "Most founders either do too little and launch blind, or too much and delay forever. This guide gives you a lean framework for getting meaningful insight at each stage of your startup journey.",
    readTime: "6 min read",
    date: "November 2024",
  },
];

const caseStudies = [
  {
    tag: "Healthcare & Pharma",
    title: "Patient Journey Study for a Leading Pharma Brand",
    outcome:
      "Identified 3 critical drop-off points in the treatment pathway, enabling the client to redesign their HCP communication and increase treatment completion rates by 18%.",
    method: "In-depth Interviews + Quantitative Survey",
    scope: "8 cities, 600 respondents",
  },
  {
    tag: "FMCG",
    title: "New Product Concept Test for a Packaged Foods Brand",
    outcome:
      "Tested 4 product concepts with target consumers across North and West India. Two concepts were eliminated early, saving an estimated ₹2.4 Cr in development costs.",
    method: "Monadic Concept Testing",
    scope: "Delhi, Mumbai, Ahmedabad — 450 respondents",
  },
  {
    tag: "Education",
    title: "Brand Perception Study for a Leading Private University",
    outcome:
      "Revealed a significant gap between intended positioning and student perception, directly shaping the university's 2024 brand refresh and admissions communication.",
    method: "Brand Health Tracking + FGDs",
    scope: "5 cities, 300 students & parents",
  },
  {
    tag: "Automobile",
    title: "EV Readiness Study for an Automobile OEM",
    outcome:
      "Mapped consumer readiness, range anxiety triggers, and purchase barriers for EVs in tier-1 and tier-2 markets, informing the client's 2025 launch strategy.",
    method: "Usage & Attitude (U&A) Study",
    scope: "10 cities, 800 respondents",
  },
  {
    tag: "Startup",
    title: "Market Sizing & Feasibility Study for a D2C Startup",
    outcome:
      "Delivered a full TAM/SAM/SOM analysis and consumer segmentation in under 3 weeks, helping the founding team validate their category thesis ahead of a Series A raise.",
    method: "Secondary Research + CAWI Survey",
    scope: "Pan-India, 500 respondents",
  },
  {
    tag: "Financial Services",
    title: "Customer Experience Study for a Leading NBFC",
    outcome:
      "NPS and journey mapping study identified three high-friction touchpoints in the loan disbursement process. CSAT scores improved by 22 points within six months post-redesign.",
    method: "NPS + Customer Journey Mapping",
    scope: "4 metros, 700 customers",
  },
];

const projectUpdates = [
  { sector: "Academic (Education)", count: 5 },
  { sector: "Startups", count: 3 },
  { sector: "Services", count: 2 },
  { sector: "Manufacturing", count: 1 },
];
const totalOngoing = projectUpdates.reduce((s, p) => s + p.count, 0);

const news = [
  {
    date: "April 2025",
    title: "NexGen completes 3,000th research project",
    body: "After 2 decade of delivering market research across India, NexGen crossed the 3,000-project milestone — spanning healthcare, FMCG, education, and startup sectors.",
  },
  {
    date: "March 2025",
    title: "Field network now active across all 28 states",
    body: "Our freelance researcher network has reached full coverage across every Indian state, enabling same-week fieldwork deployment even in tier-3 geographies.",
  },
  {
    date: "February 2025",
    title: "FactCheck adopted by 3 new enterprise clients",
    body: "NexGen's proprietary data validation platform FactCheck — enabling real-time fieldwork quality monitoring — was onboarded by three new enterprise clients this quarter.",
  },
];

const stats = [
  { value: "3,000+", label: "Projects Delivered" },
  { value: "500+", label: "Brands Served" },
  { value: "2+", label: "Deacde Experience" },
  { value: "18+", label: "Articles Published" },
];

const navSections = [
  { id: "blogs", label: "Blogs & Articles" },
  { id: "case-studies", label: "Case Studies" },
  { id: "project-updates", label: "Project Updates" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function InsightsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ══ HERO ══ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-0">
          {/* <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-accent" aria-hidden="true" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">
              Insights
            </span>
          </div> */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-black text-primary leading-[1.05] tracking-tight mb-5">
                Research thinking,
                <br />
                <span className="text-accent">made accessible.</span>
              </h1>
              <p className="text-lg text-black leading-relaxed max-w-lg">
                Blogs, case studies, and live project updates — everything we
                know about research methodology, Indian consumer behaviour, and
                data-driven strategy, shared openly.
              </p>
            </div>

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

          <nav
            className="border-t border-border -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            aria-label="Insights sections"
          >
            <div className="flex overflow-x-auto no-scrollbar">
              {navSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 px-6 py-4 text-sm font-semibold text-black hover:text-primary border-b-2 border-transparent hover:border-accent transition-all duration-150 whitespace-nowrap"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── 01 Blogs ── */}
        <section
          id="blogs"
          aria-labelledby="h-blogs"
          className="py-16 md:py-20 border-b border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">01</span> */}
              <h2
                id="h-blogs"
                className="text-3xl font-black text-primary mt-1"
              >
                Blogs & Articles
              </h2>
              <p className="text-base text-black mt-1">
                Practical research thinking for marketers, strategists, and
                founders.
              </p>
            </div>
            <Link
              href="/insights/blogs-and-articles"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline self-start sm:self-auto shrink-0"
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>

          {/* Featured */}

          <div
            //Made div instead of Link
            // href={`/insights/blogs-and-articles/${blogs[0].slug}`}
            className="group flex flex-col sm:flex-row items-start gap-6 bg-[#f8f6fc] rounded-2xl p-8 mb-4 border border-border hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(44,17,97,0.07)] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
              <BookOpen size={22} className="text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold bg-accent/10 text-accent px-2.5 py-0.5 rounded-full">
                  {blogs[0].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary  transition-colors mb-2">
                {blogs[0].title}
              </h3>
              <p className="text-sm text-black leading-relaxed max-w-xl">
                {blogs[0].excerpt}
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.slice(1).map((blog) => (
              //Made div in place of Link
              <div
                key={blog.slug}
                // href={`/insights/blogs-and-articles/${blog.slug}`}
                className="group flex flex-col border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-[0_4px_24px_rgba(44,17,97,0.07)] transition-all duration-300 bg-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold bg-accent/10 text-accent px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Tag size={9} /> {blog.tag}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-primary mb-2 transition-colors leading-snug flex-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-black leading-relaxed line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-black font-medium">
                    {blog.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 Case Studies — numbered list ── */}
        <section
          id="case-studies"
          aria-labelledby="h-cases"
          className="py-16 md:py-20 border-b border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">02</span> */}
              <h2
                id="h-cases"
                className="text-3xl font-black text-primary mt-1"
              >
                Case Studies
              </h2>
              <p className="text-base text-black mt-1">
                Real research, real outcomes — across sectors and methodologies.
              </p>
            </div>
            <Link
              href="/insights/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline self-start sm:self-auto shrink-0"
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {caseStudies.map(({ tag, title, outcome, method, scope }, idx) => (
              <div
                key={title}
                // href="/insights/case-studies"
                className="group flex items-start gap-5 py-7 border-b border-border last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 hover:bg-[#f8f6fc] -mx-4 px-4 rounded-xl transition-colors duration-200"
              >
                {/* <span className="text-[11px] font-black text-accent/35 tabular-nums w-5 shrink-0 mt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span> */}
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <BarChart2 size={17} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold bg-accent/10 text-accent px-2 py-0.5 rounded-full inline-block mb-2">
                    {tag}
                  </span>
                  <h3 className="text-[15px] font-bold text-primary  transition-colors mb-1.5 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-black leading-relaxed mb-3">
                    {outcome}
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] text-black font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      {method}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      {scope}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 Project Updates ── */}
        <section
          id="project-updates"
          aria-labelledby="h-updates"
          className="py-16 md:py-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">03</span> */}
              <h2
                id="h-updates"
                className="text-3xl font-black text-primary mt-1"
              >
                Project Updates & News
              </h2>
              <p className="text-base text-black mt-1">
                A live look at what NexGen is working on right now.
              </p>
            </div>
            <Link
              href="/insights/project-updates-and-news"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline self-start sm:self-auto shrink-0"
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Live counter card */}
            <div className="flex flex-col bg-[#f8f6fc] rounded-2xl p-8 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-sm font-bold text-primary">
                  Live — Ongoing Projects
                </span>
              </div>

              <div className="flex items-end gap-3 mb-8">
                <span className="text-7xl font-black text-primary leading-none">
                  {totalOngoing}
                </span>
                <span className="text-base text-black font-semibold pb-2">
                  active studies
                </span>
              </div>

              <div className="space-y-4 flex-1">
                {projectUpdates.map(({ sector, count }) => (
                  <div
                    key={sector}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-black font-medium">
                        {sector}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-black tabular-nums">
                      {count} project{count > 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-black font-medium mt-8 pt-6 border-t border-border">
                Updated regularly from NexGen operations dashboard.
              </p>
            </div>

            {/* News items */}
            <div className="flex flex-col gap-4">
              {news.map(({ date, title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-5 p-6 border border-border rounded-2xl hover:bg-[#f8f6fc] transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Newspaper size={17} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-[11px] text-black font-semibold">
                      {date}
                    </span>
                    <h3 className="text-[14px] font-bold text-primary mt-0.5 mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-black leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ══ CTA ══ */}
      <InsightsCTA />
    </main>
  );
}
