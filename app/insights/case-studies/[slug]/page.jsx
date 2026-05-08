// app/insights/case-studies/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InsightsCTA from "../../_components/InsightsCTA";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Play,
  Users,
  Clipboard,
  Search,
  Layers,
  Check,
  Quote,
} from "lucide-react";
import { caseStudies } from "../data";

const iconMap = {
  users: Users,
  clipboard: Clipboard,
  search: Search,
  layers: Layers,
};

const ApproachIcon = ({ type }) => {
  const Icon = iconMap[type];
  return Icon ? <Icon className="w-5 h-5" /> : null;
};

const Tag = ({ children }) => (
  <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-black/10 bg-white text-primary">
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p className="text-base font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 flex items-center gap-2">
    <span className="w-4 h-[2px] bg-[var(--color-primary)] inline-block" />
    {children}
  </p>
);

const H2 = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] leading-snug mb-6">
    {children}
  </h2>
);

const Divider = () => <hr className="border-[var(--color-border)] my-14" />;

const BulletItem = ({ children }) => (
  <li className="flex items-start gap-3 text-[17px] text-black leading-relaxed">
    <span className="mt-[11.5px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
    {children}
  </li>
);

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3 text-[15px] text-black leading-relaxed">
    <span className="mt-0.5 w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-black shrink-0">
      <Check className="w-3.5 h-3.5" />
    </span>
    {children}
  </li>
);

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── HERO ──────────────────────────────────── */}
      <section className="border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16 md:pb-20">
          {/* <div className="mb-10 overflow-hidden border border-[var(--color-border)] bg-white">
            <div className="relative h-[calc(100vw/2.6)] min-h-[340px] md:h-[420px] lg:h-[520px]">
              <Image
                src="/case-study-2.jpg"
                alt="Case study hero image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div> */}

          <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-black/70 mb-6">
            <Link
              href="/"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </Link>
            {/* <span >/</span> */}
            <Link
              href="/insights"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Insights
            </Link>
            {/* <span className="text-slate-300">/</span> */}
            <Link
              href="/insights/case-studies"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Case Studies
            </Link>
            {/* <span className="text-slate-300">/</span> */}
            <span className="text-[var(--color-primary)] font-semibold truncate max-w-[140px]">
              {study.title.split(' ')[0]}
            </span>
          </nav>

          <div className="max-w-3xl mx-auto text-center ">
            <div className="inline-flex justify-center w-full">
              <Tag>{study.tag}</Tag>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight">
              <span className="block text-[var(--color-primary)]">
                Multi-Phase Longitudinal Study of Indian Working Professionals
              </span>
              <span className="block text-[var(--color-accent)]">
                in Pharma & FMCG Sector
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* ── INTRO + QUICK FACTS SIDEBAR ─────────── */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 py-6">
          {/* Left — intro */}
          <div>
            <SectionLabel>Overview</SectionLabel>
            <div className="space-y-5">
              {study.intro.map((p, i) => (
                <p key={i} className="text-[16px] text-black leading-[1.9]">
                  {p}
                </p>
              ))}
            </div>

            {/* Services offered */}
            <div className="mt-10">
              <SectionLabel>Services Offered</SectionLabel>
              <ul className="space-y-3 mt-4">
                {study.servicesOffered.map((s, i) => (
                  <CheckItem key={i}>{s}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="mt-12 overflow-hidden border border-black/10 bg-white shadow-sm rounded-xl">
              <div className="relative h-[300px] sm:h-[360px] lg:h-[440px] w-full">
                <Image
                  src="/case-slug.jpg"
                  alt="Research workflow overview"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1023px) 100vw, 65vw"
                  quality={78}
                  loading="lazy"
                />
              </div>
              {/* <div className="bg-white px-6 py-4 text-black text-sm font-semibold">
                Research workflow overview
              </div> */}
            </div>
          </div>

          {/* Right — sticky quick facts */}
          <div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black mb-5">
                Quick Facts
              </p>
              <ul className="space-y-4">
                {study.quickFacts.map((f) => (
                  <li key={f.label} className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-black/70">
                      {f.label}
                    </span>
                    <span className="text-sm font-semibold text-[var(--color-primary)]">
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── OBJECTIVE ─────────────────────────────── */}
        <section className="mb-14">
          <H2>Client Objective</H2>
          {/* <H2>What the Client Needed</H2> */}
          <p className="text-[17px] text-black leading-[1.9] mb-8">
            {study.objective.body}
          </p>
          <p className="text-[14px] font-black uppercase tracking-[0.2em] text-black mb-4">
            The Study Aimed To
          </p>
          <ul className="space-y-3">
            {study.objective.points.map((pt, i) => (
              <BulletItem key={i}>{pt}</BulletItem>
            ))}
          </ul>
        </section>

        <Divider />

        {/* ── KEY HIGHLIGHT ─────────────────────────── */}
        <section className="mb-14">
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50 px-8 py-10 md:px-12 overflow-hidden">
            <p className="text-[14px] font-black tracking-[0.2em] mb-4 text-slate-900">
              Key Highlight
            </p>
            <p className="text-xl font-bold text-slate-900">
              {study.keyHighlight}
            </p>
          </div>
        </section>

        <Divider />

        {/* ── APPROACH ──────────────────────────────── */}
        <section className="mb-14">
          <H2>NexGen's Approach</H2>
          {/* <H2>How We Executed It</H2> */}
          <div className="grid sm:grid-cols-2 gap-5">
            {study.approach.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/10 bg-white p-7 hover:border-[var(--color-primary)]/20 hover:shadow-md transition-all duration-300"
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0">
                    <ApproachIcon type={a.icon} />
                  </span>
                  <h3 className="font-bold text-black text-sm leading-snug">
                    {a.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {a.points.map((pt, j) => (
                    <BulletItem key={j}>{pt}</BulletItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── CHALLENGES ────────────────────────────── */}
        <section className="mb-14">
          <H2>Challenges</H2>
          {/* <H2>What We Navigated</H2> */}
          <div className="space-y-4">
            {study.challenges.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-5 rounded-2xl border border-slate-200 p-6 hover:bg-slate-50 transition-colors duration-200"
              >
                {/* Number badge */}
                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-primary)]/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black text-[var(--color-primary)]">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-3">
                    {c.title}
                  </h3>
                  <ul className="space-y-2">
                    {c.points.map((pt, j) => (
                      <BulletItem key={j}>{pt}</BulletItem>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── OUTCOME + LEARNINGS ───────────────────── */}
        <section className="mb-14 grid md:grid-cols-2 gap-10">
          <div>
            <H2>Outcomes / Results</H2>
            {/* <H2>What We Delivered</H2> */}
            <ul className="space-y-3">
              {study.outcomes.map((o, i) => (
                <CheckItem key={i}>{o}</CheckItem>
              ))}
            </ul>
          </div>
          <div>
            <H2>Key Learnings</H2>
            <ul className="space-y-3">
              {study.keyLearnings.map((l, i) => (
                <BulletItem key={i}>{l}</BulletItem>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        {/* ── CONCLUSION ────────────────────────────── */}
        <section className="mb-14">
          <H2>Conclusion</H2>
          <div className="space-y-5">
            {study.conclusion.map((p, i) => (
              <p key={i} className="text-[17px] text-black leading-[1.9]">
                {p}
              </p>
            ))}
          </div>
        </section>
      </div>

      <InsightsCTA />
    </div>
  );
}
