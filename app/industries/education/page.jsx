"use client";
import React from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Laptop, 
  Lightbulb, 
  ChevronRight, 
  Users, 
  TrendingUp, 
  Award,
  BarChart3,
  Clock,
  Briefcase
} from "lucide-react";
import IndustriesCTA from "../_components/IndustriesCTA";

const data = {
  title: "Education & Learning",
  intro: "At NexGen International, we empower educational institutions to bridge the gap between traditional learning and future-ready skills. From school feasibility to EdTech market mapping, we provide the data that shapes the future of the next generation.",
  subsections: [
    {
      title: "K-12 & Schooling",
      icon: <BookOpen size={40} />,
      accentColor: "border-[#80cb29]", 
      bgColor: "bg-[#80cb29]/5",
      content: "We provide comprehensive research for the K-12 sector, focusing on school infrastructure feasibility, curriculum demand, and parental expectations. Our data helps institutions build environments where students truly thrive.",
      features: ["School Feasibility Studies", "Parental Decision Mapping", "Infrastructure Audits", "Curriculum Gap Analysis"]
    },
    {
      title: "Higher Education & Universities",
      icon: <GraduationCap size={40} />,
      accentColor: "border-blue-400",
      bgColor: "bg-blue-50/50",
      content: "For universities and professional colleges, we analyze student enrollment trends, course popularity, and campus reputation. We help higher-ed leaders stay competitive in an increasingly globalized academic market.",
      features: ["University Brand Perception", "Course Demand Forecasting", "Lateral Entry Research", "Placement Success Audits"]
    },
    {
      title: "EdTech & Digital Learning",
      icon: <Laptop size={40} />,
      accentColor: "border-purple-400",
      bgColor: "bg-purple-50/50",
      content: "The digital classroom is the new frontier. We specialize in EdTech market penetration, app usability research, and online learner behavior analysis to help digital platforms scale effectively.",
      features: ["LMS Usability Testing", "EdTech Market Mapping", "Digital Learner Insights", "Subscription Model Analysis"]
    },
    {
      title: "Vocational & Skill Training",
      icon: <Lightbulb size={40} />,
      accentColor: "border-[#80cb29]",
      bgColor: "bg-[#80cb29]/5",
      content: "Closing the skill gap is critical. We work with vocational training centers and professional institutes to identify industry-specific skill requirements and the effectiveness of certification programs.",
      features: ["Skill Gap Analysis", "Corporate Training Trends", "Certification ROI Studies", "Vocational Market Reach"]
    }
  ]
};

export default function EducationPage() {
  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION (Purple Theme + CENTER ALIGNED) --- */}
      <section className="bg-[#2c1161] py-20 px-6 text-center border-b-8 border-[#80cb29]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            <span className="text-[#80cb29]">Education</span>
          </h1>
          <div className="h-1.5 w-16 bg-[#80cb29] mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-purple-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS (Clean Minimal Cards) --- */}
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

      {/* --- STATS BAR --- */}
      <section className="bg-[#2c1161] py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="space-y-4 group">
            <Clock className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">20+ Yrs</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Academic Research Legacy</p>
          </div>
          <div className="space-y-4 group">
            <BarChart3 className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">5000+</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Insights Delivered</p>
          </div>
          <div className="space-y-4 group">
            <Briefcase className="mx-auto text-[#80cb29] group-hover:scale-110 transition-transform" size={40} />
            <h4 className="text-5xl font-black italic">1000+</h4>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Global Institutional Clients</p>
          </div>
        </div>
      </section>

      <div className="py-10">
        <IndustriesCTA />
      </div>
    </div>
  );
}