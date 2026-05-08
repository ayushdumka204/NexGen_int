import Image from "next/image";
import { Target, CheckCircle2, BarChart3 } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Market Research Survey and Reports | Data Analysis",
};

export default function MarketShareReports() {
  const benefits = [
    "Understanding market conditions",
    "Improving marketing programs",
    "Identifying the key concerns",
    "Building the future strategies",
  ];

  return (
    <div className="bg-white text-primary pb-24">
      {/* 🟢 HEADER: Centered & Balanced */}
      <section className="py-10 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-10">
          Market Share <span className="text-accent">Reports</span>
        </h1>
        <p className="text-lg font-medium leading-relaxed max-w-4xl mx-auto text-black">
          NexGen is a government authorised market research reports to give the
          MARKET SHARE CERTIFICATE to the companies in India which can
          facilitate them to offer the bids/tender in Government departments. We
          get the market share data by tracking the sales data of the companies
          and by studying the competitions.
        </p>
      </section>

      {/* 🟢 MAIN CONTENT */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            <p className="text-base md:text-lg leading-relaxed text-black">
              Competition research involves identifying the competitors,
              evaluating their strengths and weaknesses and evaluating the
              strengths and weaknesses of their products and services. We track
              the sales data of most selling brands. Our market share report
              consist the market share of the major SKUs of the competition
              brands.
            </p>

            <div className="flex gap-5 py-8 border-t border-primary">
              <Target className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">
                  Competitor Categorization
                </h3>
                <p className="text-base leading-relaxed text-black">
                  NexGen categories competitors into two different categories;
                  direct and indirect competitors. Direct competitors are
                  targeting the same customer base but the indirect competitors
                  may have slightly similar product or service but target the
                  same or different audience.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2 text-primary">
                <BarChart3 size={16} /> Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={18} />
                    <span className="text-base font-medium text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Simple Image Part */}
          <div className="w-full">
            <div className="overflow-hidden bg-slate-50 border border-primary relative aspect-auto lg:aspect-square">
              <Image
                src="/market-share-report.jpg"
                alt="Market Analysis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <ServicesCTA/>
    </div>
  );
}
