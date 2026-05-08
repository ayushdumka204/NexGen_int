import React from "react";
import Image from "next/image";
import {
  ScanSearch,
  Verified,
  BarChartHorizontal,
  PhoneForwarded,
  HeartPulse,
  Target,
} from "lucide-react";

export default function MysteryShoppingEditorial() {
  const applicationAreas = [
    {
      title: "Retail Service Audit",
      desc: "Staff conduct, product knowledge, upselling behaviour, queue management.",
      icon: <ScanSearch />,
    },
    {
      title: "Brand Standard Compliance",
      desc: "Visual merchandising, POP, pricing accuracy, planogram adherence.",
      icon: <Verified />,
    },
    {
      title: "Competitor Benchmarking",
      desc: "Comparative service quality, product availability, price positioning.",
      icon: <BarChartHorizontal />,
    },
    {
      title: "Contact Centre Quality",
      desc: "Call handling, script adherence, first-call resolution, empathy.",
      icon: <PhoneForwarded />,
    },
    {
      title: "Healthcare Experience",
      desc: "Reception conduct, wait times, consultation quality, compliance.",
      icon: <HeartPulse />,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-20">
          
          {/* Top Row: Title & Framework Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/5 border border-primary/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-hover">
                  Excellence Framework
                </p>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-[1.05] max-w-2xl">
                Mystery Shopping <br />
                <span className="text-gradient">Evaluation Cycle</span>
              </h2>
            </div>
            
            <div className="md:col-span-5 relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent opacity-10 rounded-full blur-3xl" />
              <p className="relative z-10 text-slate-600 text-lg leading-relaxed pl-6 border-l-4 border-accent py-2 bg-slate-50 rounded-r-2xl">
                NexGen's Mystery Shopping programme uses rigorously trained,
                anonymous shoppers to evaluate the real-world customer
                experience. Conducted in full accordance with ESOMAR's mystery
                shopping guidelines, the programme delivers objective, auditable
                evidence of service quality.
              </p>
            </div>
          </div>

          {/* Middle Row: The Responsive Image Portal (1208x510) */}
          <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 border-slate-100">
            {/* Aspect Ratio perfectly matching 1208/510 */}
            <div className="relative w-full aspect-[1208/510] bg-slate-50">
              <Image
                src="/chart.png"
                alt="Mystery Shopping Evaluation"
                fill
                className="object-contain p-2 md:p-4 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Subtle Caption Integrated directly on Image */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-[11px] leading-relaxed text-white/90 font-medium italic backdrop-blur-sm px-4 py-2 bg-black/10 rounded-full inline-block animate-fade-in-up">
                "Mystery Shopping evaluation cycle — from briefing through
                anonymous visit to analysis and debrief"
              </p>
            </div>
          </div>

          {/* Bottom Row: The Mosaic Application Areas */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8 max-w-3xl">
              <Target className="w-10 h-10 text-accent shrink-0" />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-primary">Core Application Areas</h3>
                <p className="text-slate-500 text-sm">Targeted domains where Mystery Shopping delivers the most impactful operational and brand insights.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
              {applicationAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="glass-card p-7 rounded-3xl border border-slate-100 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-lg group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:-rotate-3">
                    {React.cloneElement(area.icon, { className: "w-7 h-7" })}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-primary text-xl group-hover:text-accent-hover transition-colors leading-tight">
                      {area.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}