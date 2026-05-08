import React, { useRef } from "react";
import Image from "next/image";
  ShieldCheck, Search, Users, Zap, MapPin, 
  Database, FileCheck, Award, ChevronRight, ChevronLeft 
} from "lucide-react";

const CONTROLS = [
  { title: "Back-check Validation", metric: "30% Sample", desc: "Respondents independently re-contacted by supervisors.", icon: <Search /> },
  { title: "Full Qualitative Review", metric: "100% Audit", desc: "Transcripts reviewed against audio/video recordings.", icon: <Database /> },
  { title: "Interviewer Competency", metric: "Certified", desc: "Formal assessed training before any field deployment.", icon: <Users /> },
  { title: "Field Supervision", metric: "Real-time", desc: "Field Managers monitor and apply corrective action.", icon: <Zap /> },
  { title: "GPS & Photo Proof", metric: "Verified", desc: "Every interview generates a location stamp.", icon: <MapPin /> },
  { title: "Data Integrity Checks", metric: "Logic Audit", desc: "Reviewed for inconsistencies and response patterns.", icon: <FileCheck /> },
  { title: "Source Authentication", metric: "Credibility", desc: "All secondary sources verified before inclusion.", icon: <Award /> },
];

export default function QualitySleekSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section (Very Minimal) --- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.2em]">ISO 9001:2015</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Quality <span className="text-accent italic">Certified.</span>
            </h2>
          </div>

          {/* Custom Navigation */}
          <div className="flex gap-3">
            <button onClick={() => scroll("left")} className="p-4 rounded-full border border-white/10 hover:bg-accent hover:text-primary text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="p-4 rounded-full border border-white/10 hover:bg-accent hover:text-primary text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- Main Content Row (Flex, Not Grid) --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Fixed Visual Frame */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                alt="Data Quality"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-xs text-white/60 font-medium italic">
                "Operationalised controls across all research modes."
              </p>
            </div>
          </div>

          {/* Horizontal Scroll Area */}
          <div 
            ref={scrollRef}
            className="w-full flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4"
          >
            {CONTROLS.map((item, idx) => (
              <div 
                key={idx} 
                className="min-w-[280px] md:min-w-[320px] snap-start glass-card p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/[0.08] transition-all duration-500 group"
              >
                <div className="space-y-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    {React.cloneElement(item.icon, { className: "w-6 h-6 stroke-[1.5]" })}
                  </div>
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-accent uppercase tracking-widest block">{item.metric}</span>
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-2 pt-6 border-t border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors">Verified Layer 0{idx+1}</span>
                </div>
              </div>
            ))}

            {/* Special Final Card */}
            <div className="min-w-[280px] md:min-w-[320px] snap-start bg-accent rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center group cursor-pointer overflow-hidden relative">
               <Award className="w-12 h-12 text-primary mb-4" />
               <h5 className="font-black text-primary text-xl mb-4 italic leading-tight">Ready for <br /> Certified Data?</h5>
               <button className="text-[10px] font-black text-white bg-primary px-6 py-3 rounded-full hover:scale-105 transition-transform uppercase tracking-widest">
                  Get PDF Report
               </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}