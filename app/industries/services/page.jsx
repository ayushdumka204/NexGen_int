"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users,GraduationCap, Building2,Building, TrendingUp, Briefcase, Layers } from "lucide-react";

const data = {
  title: "Services",
  image: "https://source.unsplash.com/800x600/?business,services",
  subsections: {
    Education:
      "During last 2 decade we have successfully completed more than 1000 projects for academic and education industry. We assist academic institutions in data collection and analytical services.",
      "Real Estate & Construction":
      "We have more than 50 companies and startups from real estate and construction sector in India. Our real estate and construction services market includes markets for constructed buildings and engineering projects (e.g., highways and utility systems), and services provided by entities.",
    "Banking & Financial Services":
      "A number of banking and financial services companies served by NexGen for hundreds of market research assignments in India.",
    "Professional & Business Services":
      "Our business and professional service market covers services that provide support to businesses in all industries. We provide professional services offered to individuals and institutions across the globe.",
    Hospitality:
      "We are continuously serving companies in hospitality sector like Hotel, Hospital, Airlines & other hospitality sectors.",
    "Social Research Services":
      "NexGen has developed a separate division to cater the social sectors including government projects, ministries, govt departments, social sector agencies, etc.",
    "Other Services": "We cater other gamut of the service industry.",
  },
};

const iconMap = {
  Education: GraduationCap,
  "Real Estate & Construction": Building2,
  "Banking & Financial Services": TrendingUp,
  "Professional & Business Services": Briefcase,
  Hospitality: Building,
  "Social Research Services": Users,
  "Other Services": Layers,
  default: Briefcase,
};

export default function ServicesPage() {
  const items = Object.entries(data.subsections);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-nexgen-gradient min-h-screen flex items-center py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <div className="grid-pattern absolute inset-0 opacity-40"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent mb-6 border border-accent/20">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                Focus on Work
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                We deliver deep insights and data-driven solutions tailored
                specifically for the {data.title.toLowerCase()} sector.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative h-87.5 md:h-112.5 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* GRID LAYOUT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(([key, value], idx) => {
              const IconComponent = iconMap[key] || iconMap.default;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300 flex flex-col group"
                >
                  <div className="mb-6 h-14 w-14 flex items-center justify-center rounded-xl bg-primary/5 text-accent">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-accent">
                      {key}
                    </h3>
                    <p className="text-[15px] leading-relaxed">{value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
