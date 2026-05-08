"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesCTA = () => {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:pt-36 pb-4 flex flex-col items-center text-center">
        
        {/* --- OPTIMIZED HEADING --- */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight tracking-tighter mb-4 uppercase">
            Not sure where <span className="text-accent">to start?</span>
          </h2>

          {/* --- OPTIMIZED CONTENT --- */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-10 max-w-xl mx-auto">
            Talk to our research team — we&apos;ll map your business question to
            the right methodology at no cost. Book a free consultation.
          </p>

          {/* --- CENTERED BUTTONS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-primary font-black text-[11px] uppercase tracking-widest hover:opacity-90 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Book Free Consultation
              <ArrowRight size={15} strokeWidth={3} />
            </Link>

            <Link
              href="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-300 text-primary font-black text-[11px] uppercase tracking-widest hover:border-primary hover:bg-slate-50 transition-all duration-200"
            >
              Browse All Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesCTA;