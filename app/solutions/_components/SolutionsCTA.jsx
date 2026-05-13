import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SolutionsCTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Container restricted to ~80% width and centered */}
        <div className="mx-auto w-full lg:w-[80%] flex flex-col items-center text-center">
          
          {/* Content Part - Full width of the 80% container */}
          <div className="mb-10 w-full">
            <h2 className="text-4xl sm:text-5xl font-black text-primary leading-[1.08] tracking-tight mb-4">
              Know the question.
              <br />
              <span className="text-accent">We'll find the answer.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed w-full">
              Book a free 30-minute discovery call — our research team will map
              your business challenge to the right solution and give you a clear
              scope before you commit to anything.
            </p>
          </div>

          {/* Buttons Part - Side by Side (Horizontal) and centered below content */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              href="tel:+919719330666" // Using tel link for direct consultation call
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-base hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap shadow-sm w-full sm:w-auto"
            >
              Book Free Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 text-primary font-semibold text-base hover:border-accent hover:bg-[#f8f6fc] transition-colors duration-200 whitespace-nowrap w-full sm:w-auto"
            >
              Browse All Solutions
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;