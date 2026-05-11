import React from "react";
import Image from "next/image";
import { FiPlus, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Market Entry Reports and Consulting Support",
  description:
    "NexGen provides feasibility and market entry reports with in-depth analysis and consulting support for informed business decisions.",
};

export default function FeasibilityPremium() {
  const highlights = [
    "Our feasibility studies find put the potential, viability and practicability of a new business. Our feasibility report answers the questions related to success or failure of a new business venture.",
    "Feasibility studies are the best way to validate the new business concept for any productor service.",
    "A feasibility study includes all the actions that are needed to be taken to determine whether a business idea is likely to succeed.",
    "It is a stepwise process that helps weigh the pros and cons of each step prior to getting into the actual process.",
    "It provides results for key decisions that may be, moving forward with the idea, refining it or leaving it altogether.",
  ];

  const mainAnalysisSections = [
    {
      title: "Financial Feasibility",
      text: "The study involves the determination of the funds required to start a business. Another important aspect of the feasibility study is to calculate the return on investment (ROI).",
    },
    {
      title: "Market and Marketing Feasibility",
      text: "An essential part of the feasibility study is the market feasibility. NexGen dedicated team collects important details including the size, retail value and trends of the industry. The particular market is also analyzed along with the future market potential. We do a detailed evaluation to ensure the success of the business. The competitive landscape is also prepared. The firm, thus, adopts the most appropriate strategy of positioning itself relative to the competition.The degree of acceptability of the deliverable exhibited by the proposed target audience may be generated. It ensures that the right product is produced for the right clients. Pricing strategies and decisions are taken.",
    },
    {
      title: "Technical feasibility",
      text: "NexGen have the expertise in doing the technical feasibility of any product or service. We evaluate the support system required for smooth operations of the business. We try to figure out the availability of resources in terms of the required labor, material and relevant technologies. Our team also do the evaluation of essential systems including hardware, software and technological requirements of the overall system.",
    },
    {
      title: "Organizational and Operational Feasibility",
      text: "Availability of the most suitable and cost effective human resource is critical for any business. We do the organisational structure and operational feasibility in every project.",
    },
    {
      title: "Location analysis",
      text: "For any business location plays crucial role. Location analysis is one of the most important aspect in our feasibility study. We track the locality profile, location profile, demographic profile of the residents or market, traffic movement, and other important areas impacts the business.",
    },
  ];

  return (
    <div className="bg-white text-primary pb-20">
      {/* 🟢 HERO SECTION: Pure Typography */}
      <section className="py-10 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 leading-[0.9]">
            <span className="text-primary">Feasibility /</span>
            <span className="text-accent"> Market Entry</span>{" "}
            <span className="text-primary">Reports</span>
          </h1>
          <p className="text-lg md:text-base leading-relaxed max-w-4xl mx-auto font-medium text-black">
            The dynamic nature of today’s business environment has led to an
            increase in the risks and uncertainties. Increased level of
            awareness of the customers has led to a dramatic increase in
            competition as more and more companies are now trying to cater to
            the needs of these customers. Entering into a new business without
            doing the in-depth analysis can be challenging. To ensure
            profitability, it becomes essential to conduct detailed analysis
            before venturing into the new business. The feasibility study done
            by NexGen are in-depth analysis of all aspects.
          </p>
        </div>
      </section>

      {/* 🟢 HIGHLIGHTS: Clean Grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highlights.map((text, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-accent transition-all group shadow-sm"
              >
                <FiCheckCircle className="text-accent mb-4" size={24} />
                <p className="text-sm leading-relaxed text-black font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 MAIN CONTENT: Accordion + Side Image */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Intro Paragraph */}
          <div className="max-w-4xl mb-20 p-8 border-l-4 border-accent bg-slate-50 rounded-r-3xl">
            <p className="text-lg text-black leading-relaxed font-medium">
              The business plan is dependent on the feasibility study. A
              feasibility study also determines alternatives and solutions which
              may otherwise not have been known. A feasibility study determines
              the companies or individuals in attaining a broad picture and the
              detailed analysis of the profitability of its future business.It
              can gain knowledge about the project before investing budget, time
              or other resources into it. Sometimes, the scope of the project
              may be drastically changed.It enables the organization to focus on
              both short and long term goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* ACCORDION LIST (Left Side) */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight">
                Our Detailed <span className="text-accent">Evaluation</span>{" "}
                Areas
              </h2>

              <div className="divide-y divide-slate-100 border-t border-slate-100">
                {mainAnalysisSections.map((sec, i) => (
                  <details key={i} className="group py-6" open={i === 1}>
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <div className="flex items-center gap-6">
                        <span className="text-4xl font-black group-open:text-accent transition-colors">
                          0{i + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                          {sec.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-open:bg-accent group-open:text-primary transition-all group-open:rotate-45">
                        <FiPlus size={20} />
                      </div>
                    </summary>
                    <div className="pr-4 pt-6">
                      <p className=" leading-relaxed text-lg text-black">{sec.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* SIDE IMAGES (Right Side) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden shadow-sm border-8 border-white relative h-100">
                <Image
                  src="/Market-Entry-Reports.jpg"
                  alt="NexGen Feasibility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-between">
                <p className="text-sm font-bold leading-relaxed mb-6">
                  It enables the organization to focus on both short and long
                  term goals.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-accent"></div>
                  <span className="text-accent text-[10px] font-black uppercase tracking-widest">
                    NexGen international
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesCTA />
    </div>
  );
}
