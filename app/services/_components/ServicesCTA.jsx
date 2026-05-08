"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesCTA = () => {
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-primary leading-[1.08] tracking-tight mb-3">
              Not sure where
              <br />
              <span className="text-accent">to start?</span>
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Talk to our research team — we'll map your business question to
              the right methodology at no cost. Book a free consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap shadow-sm"
            >
              Book Free Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-primary font-semibold text-base hover:border-accent/40 hover:bg-[#f8f6fc] transition-colors duration-200 whitespace-nowrap"
            >
              Browse All 18 Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
