"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";

const getIcon = (name) =>
  dynamic(() => import("lucide-react").then((mod) => mod[name]), {
    ssr: false,
  });

const expertiseData = {
  market: {
    title: "Market Research",
    headline: "Strategic Market Insights",
    description:
      "Uncover opportunities and mitigate risks with our comprehensive market analysis backed by 20 years of excellence.",
    icon: "TrendingUp",
    services: [
      {
        name: "Advertising Research",
        icon: "BarChart2",
        link: "/solutions/advertising-research",
      },
      { name: "Consumer Research", icon: "Users", link: "#" },
      {
        name: "Pricing Research",
        icon: "DollarSign",
        link: "/solutions/pricing-research",
      },
      {
        name: "B2B Marketing Research",
        icon: "Briefcase",
        link: "/services/b2b-marketing-research",
      },
      {
        name: "Product Test & Analysis",
        icon: "Package",
        link: "/solutions/product-testing-and-concept",
      },
      {
        name: "Social Research",
        icon: "PieChart",
        link: "/services/social-research",
      },
      {
        name: "Agriculture Research",
        icon: "Leaf",
        link: "/services/agriculture-research",
      },
      {
        name: "E Market Research",
        icon: "ShoppingCart",
        link: "/services/e-market-research",
      },
    ],
  },
  healthcare: {
    title: "Healthcare Research",
    headline: "Health & Pharma Solutions",
    description:
      "Specialized insights for pharmaceuticals, hospitals, and public health sectors with 20 years of precision.",
    icon: "HeartPulse",
    services: [
      {
        name: "Pharmaceutical Research",
        icon: "Pill",
        link: "#",
      },
      {
        name: "Hospital Feasibility Studies",
        icon: "Building2",
        link: "#",
      },
      {
        name: "Patient Research",
        icon: "Stethoscope",
        link: "#",
      },
      {
        name: "Health Care and Public Health",
        icon: "HeartPulse",
        link: "/industries/healthcare-pharma",
      },
      {
        name: "Concept Testing",
        icon: "Lightbulb",
        link: "#",
      },
      {
        name: "Consulting Services",
        icon: "ClipboardList",
        link: "/services/consulting-services",
      },
      {
        name: "Report & Presentation",
        icon: "FileText",
        link: "#",
      },
    ],
  },
  data: {
    title: "Data Collection",
    headline: "Robust Data Acquisition",
    description:
      "From fieldwork to digital surveys, we gather precise data with a 20-year legacy of speed and accuracy.",
    icon: "Database",
    services: [
      {
        name: "Data Collection",
        icon: "FileSearch",
        link: "/services/data-collection",
      },
      {
        name: "Secondary Data Collection",
        icon: "BookOpen",
        link: "/services/secondary-research",
      },
      {
        name: "FGD’s/IDI’s/Ethnographies",
        icon: "MessagesSquare",
        link: "#",
      },
      {
        name: "Moderation & Transcription",
        icon: "Mic",
        link: "#",
      },
      {
        name: "Translation and Transcription Services",
        icon: "Languages",
        link: "#",
      },
      {
        name: "Survey Programming",
        icon: "Code",
        link: "#",
      },
      {
        name: "Data Tabulation",
        icon: "Table2",
        link: "#",
      },
      {
        name: "Data Analysis",
        icon: "PieChart",
        link: "#",
      },
    ],
  },
};

export default function DomainExpertise() {
  const [activeTab, setActiveTab] = useState("market");
  const currentData = expertiseData[activeTab];

  const MainIcon = useMemo(() => getIcon(currentData.icon), [currentData.icon]);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-100/50 overflow-hidden py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-(--color-primary) tracking-tight">
            Domain Expertise
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-1.5 rounded-xl shadow-md border border-slate-200 gap-1">
            {Object.entries(expertiseData).map(([key, value]) => {
              const isActive = activeTab === key;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const TabIcon = useMemo(() => getIcon(value.icon), [value.icon]);

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-accent text-(--color-primary) shadow-sm"
                      : "hover:text-(--color-primary) hover:bg-slate-50 text-slate-500"
                  }`}
                >
                  <TabIcon size={16} />
                  <span className="hidden sm:block">{value.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* LEFT - Purple/Primary Card */}
          <div className="lg:col-span-4 bg-(--color-primary) rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-xl border border-white/5">
            <div className="space-y-4">
              <div className="p-3 bg-accent rounded-xl w-fit shadow-lg shadow-accent/20">
                <MainIcon size={24} className="text-(--color-primary)" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold leading-tight">
                  {currentData.headline}
                </h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed max-w-[280px]">
                  {currentData.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <Link href="/services" className="flex items-center gap-2 text-accent font-bold text-[13px] cursor-pointer group">
                Explore Services
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT - Grid Cards with Borders and Shadows */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {currentData.services.map((service) => {
              const ServiceIcon = getIcon(service.icon);

              return (
                <Link
                  key={service.name}
                  href={service.link}
                  className="group bg-white p-4 rounded-[1.5rem] border border-slate-200 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[130px] relative"
                >
                  <div className="flex flex-col items-center w-full space-y-3">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-105 transition-transform duration-300">
                      <ServiceIcon size={24} />
                    </div>
                    <h4 className="font-semibold text-xs leading-snug px-1 text-slate-900">
                      {service.name}
                    </h4>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight size={12} className="text-accent" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}