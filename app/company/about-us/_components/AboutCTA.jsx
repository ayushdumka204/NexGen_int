import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Users from "lucide-react/dist/esm/icons/users";

// ─────────────────────────────────────────────────────────────────────────────
// CompanyCTA — reusable across About Us, Careers, Join Paid Surveys subpages
//
// Props:
//   variant?: "default" | "careers" | "surveys"
//     "default"  → shows both cards (Careers + Join Paid Surveys)
//     "careers"  → hides Careers card, shows only Join Paid Surveys card
//     "surveys"  → hides Surveys card, shows only Careers card
//
// Usage:
//   <CompanyCTA />                        ← About Us page (both cards)
//   <CompanyCTA variant="careers" />      ← Careers page (only surveys card)
//   <CompanyCTA variant="surveys" />      ← Join Paid Surveys page (only careers card)
// ─────────────────────────────────────────────────────────────────────────────

export default function CompanyCTA({ variant = "default" }) {
  const showCareers = variant !== "surveys";
  const showSurveys = variant !== "careers";

  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-primary leading-[1.08] tracking-tight mb-4">
            Be part of
            <br />
            <span className="text-accent">something meaningful.</span>
          </h2>
          <p className="text-lg text-black leading-relaxed">
            Whether you want to build a career in research or share your
            opinions and earn — there's a place for you at NexGen.
          </p>
        </div>

        {/* Cards row */}
        <div
          className={`grid gap-5 ${
            showCareers && showSurveys
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 max-w-lg"
          }`}
        >
          {/* ── Careers card ── */}
          {showCareers && (
            <div className="group flex flex-col justify-between bg-[#f8f6fc] border border-border rounded-2xl p-8 hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(44,17,97,0.08)] transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-black text-primary mb-2">
                  Careers
                </h3>
                <p className="text-sm text-black leading-relaxed mb-6">
                  Join a team of researchers, analysts, and field specialists
                  who have been shaping India's market research landscape for
                  over two decades. We hire for attitude and train for skill.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Full-time & freelance openings",
                    "Research, operations, and tech roles",
                    "Pan-India locations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-black"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/company/carrers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors duration-200 self-start"
              >
                View Open Roles
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          )}

          {/* ── Join Paid Surveys card ── */}
          {showSurveys && (
            <div className="group flex flex-col justify-between bg-primary border border-primary rounded-2xl p-8 hover:shadow-[0_8px_32px_rgba(44,17,97,0.18)] transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                  <Users size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">
                  Join Paid Surveys
                </h3>
                <p className="text-sm text-white leading-relaxed mb-6">
                  Be part of India's largest research panel. Share your opinions
                  on brands, products, and services — and earn real rewards from
                  the comfort of your home. No experience needed.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Earn per survey completed",
                    "Flexible — work from anywhere",
                    "1,000,000+ panellists already enrolled",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-white"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/company/join-paid-surveys"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:bg-accent-hover transition-colors duration-200 self-start"
              >
                Join the Panel
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
