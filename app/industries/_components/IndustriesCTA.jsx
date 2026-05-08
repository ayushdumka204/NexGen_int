import { ArrowRight } from "lucide-react";
import Link from "next/link";

const IndustriesCTA = () => {
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-primary leading-[1.08] tracking-tight mb-3">
              Don't see your
              <span className="text-accent"> industry?</span>
            </h2>
            <p className="text-lg text-black leading-relaxed">
              We've delivered research across 30+ sectors. If your industry
              isn't listed, our team will build a custom research framework
              tailored to your market — at no cost to explore.
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
              href="/industries"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-primary font-semibold text-base hover:border-accent/40 hover:bg-[#f8f6fc] transition-colors duration-200 whitespace-nowrap"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
