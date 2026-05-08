"use client";
import React from "react";
import { 
  ShoppingBag, 
  Zap, 
  BarChart3, 
  ChevronRight, 
  Users, 
  Truck, 
  Smartphone,
  Clock,
  Briefcase 
} from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "D2C & E-Commerce",
  intro: "At NexGen International, we empower Direct-to-Consumer brands to bypass the middleman and build lasting relationships with their audience. We provide the data-driven strategy needed to scale your digital storefront and optimize customer lifetime value.",
  subsections: [
    {
      title: "Digital Brand Launch",
      icon: <Zap size={40} />,
      accentColor: "border-[#80cb29]", 
      bgColor: "bg-[#80cb29]/5",
      content: "We provide end-to-end research for new D2C entrants. From identifying niche market gaps to testing product-market fit, our insights ensure your brand enters the digital space with a high conversion strategy.",
      features: ["Niche Market Identification", "Product-Market Fit Testing", "Competitor Digital Audits", "Initial Launch Strategy"]
    },
    {
      title: "Customer Acquisition & Retention",
      icon: <Users size={40} />,
      accentColor: "border-blue-400",
      bgColor: "bg-blue-50/50",
      content: "Acquiring a customer is just the start. We analyze buyer journey bottlenecks, churn rates, and loyalty drivers to help D2C brands increase their repeat purchase rates and average order value (AOV).",
      features: ["Buyer Journey Mapping", "Churn Rate Analysis", "Loyalty Program Effectiveness", "Customer Lifetime Value (CLV)"]
    },
    {
      title: "Mobile & Social Commerce",
      icon: <Smartphone size={40} />,
      accentColor: "border-purple-400",
      bgColor: "bg-purple-50/50",
      content: "Mapping the behavior of the smartphone shopper. We track how social media influence leads to direct purchases and help brands optimize their mobile-first checkout experiences.",
      features: ["Social Commerce Trends", "Mobile App Usability Audits", "Influencer Impact Research", "Digital Checkout Optimization"]
    },
    {
      title: "Direct Logistics & Fulfillment",
      icon: <Truck size={40} />,
      accentColor: "border-[#80cb29]",
      bgColor: "bg-[#80cb29]/5",
      content: "Delivery experience is brand experience. We analyze last-mile delivery satisfaction, packaging impact, and return logistics to ensure your brand's physical touchpoint is as seamless as the digital one.",
      features: ["Last-Mile Delivery Audits", "Packaging Perception Studies", "Return Logistics Efficiency", "Fulfillment Speed Analysis"]
    }
  ]
};

export default function D2CPage() {
  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#2c1161] py-20 px-6 text-center border-b-8 border-[#80cb29]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            <span className="text-[#80cb29]">D2C</span>
          </h1>
          <div className="h-1.5 w-16 bg-[#80cb29] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-purple-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS (Clean Cards) --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="space-y-20">
          {data.subsections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* SIDEBAR */}
              <div className={`lg:w-1/3 p-12 flex flex-col items-center lg:items-start text-center lg:text-left ${section.bgColor} border-b-4 lg:border-b-0 lg:border-r-4 ${section.accentColor}`}>
                <div className="mb-6 p-5 rounded-2xl bg-white text-[#2c1161] shadow-sm transition-transform hover:scale-110 duration-300">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-black text-[#2c1161] uppercase tracking-tight leading-tight">
                  {section.title}
                </h2>
              </div>

              {/* CONTENT AREA */}
              <div className="lg:w-2/3 p-12 bg-white flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-slate-700 font-medium mb-8">
                  {section.content}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-xl border border-slate-100 group hover:bg-white hover:border-[#2c1161] transition-all">
                      <div className="h-6 w-6 rounded-full bg-[#2c1161] text-[#80cb29] flex items-center justify-center shrink-0">
                        <ChevronRight size={12} strokeWidth={4} />
                      </div>
                      <span className="font-bold text-[#2c1161] text-[12px] uppercase tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATS BAR (YOUR STATS) --- */}
      <section className="bg-[#2c1161] py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="space-y-4 group">
            <Clock className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">20+ Yrs</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Excellence in Service</p>
          </div>
          <div className="space-y-4 group">
            <BarChart3 className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">5000+</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Projects Successfully Executed</p>
          </div>
          <div className="space-y-4 group">
            <Briefcase className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">1000+</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Clients Served Globally</p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <IndustriesCTA />
      </div>
    </div>
  );
}