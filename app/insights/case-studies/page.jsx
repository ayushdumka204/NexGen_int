import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InsightsCTA from "../_components/InsightsCTA";
import { caseStudies } from "./data";

function CaseStudyCard({ study }) {
  return (
    <Link
      href={`/insights/case-studies/${study.slug}`}
      className="group block border border-black/10 bg-white shadow-sm rounded-t-[28px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[28px] bg-slate-100/20">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover object-[50%_45%]"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          quality={70}
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-black leading-snug mb-4 line-clamp-2">
          {study.title}
        </h2>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors">
          Read Now
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────── */
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ────────────────────────────────────── */}
      <section className="border-b border-black/10 bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            {/* LEFT CONTENT */}
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-bold tracking-tight leading-[1.2] max-w-3xl">
                <span className="block text-[var(--color-primary)]">
                  Real research projects,
                </span>
                <span className="block text-[var(--color-accent)]">
                  real business impact.
                </span>
              </h1>

              <div className="mt-6 max-w-lg space-y-4 text-lg leading-relaxed text-black">
                <p>
                  Explore how NexGen delivers high-quality research through
                  structured methodologies, multi-phase studies, and data-driven
                  insights.
                </p>
                <p>
                  These case studies show practical execution for Pharma and
                  FMCG teams, with clear findings that help leadership make
                  confident, actionable decisions.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE - Updated for full 5663x5663 scale */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/case-study.jpg"
                  alt="Case study illustration"
                  fill
                  className="object-contain object-center transition-transform duration-700 hover:scale-[1.03]"
                  priority
                  quality={90}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRID ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      <InsightsCTA />
    </div>
  );
}
