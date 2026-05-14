"use client"; // Next.js App Router ke liye zaroori hai

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Tag, 
  Briefcase, 
  Globe, 
  Info, 
  Calendar, 
  User, 
  ChevronRight 
} from 'lucide-react';

const SAMPLES = [
  {
    category: "Topic Suggestion",
    title: "Impact of Supervisor-Subordinate Relationship on Employee Performance",
    tags: ["HR Management", "Organizational Behaviour"],
    service: "Topic Selection & Research Design",
    area: "Human Resource Management",
    desc: "A comprehensive study exploring how leadership styles and supervisor support influence subordinate productivity and workplace morale.",
    date: "12-05-2022",
    author: "NexGen Team"
  },
  {
    category: "Case Study Sample",
    title: "Understanding Parenting Behaviors and Child Development Among Indian Parents",
    tags: ["Social Psychology", "Parenting Styles"],
    service: "Qualitative Research Guidance",
    area: "Psychology / Sociology",
    desc: "A detailed exploration into cultural parenting norms in India and their long-term impact on child psychology and behavioral growth.",
    date: "18-04-2024",
    author: "NexGen Team"
  }
];

const WorkSamples = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADING --- */}
        <div className="text-center mb-16 relative z-0">
          <h2 className="text-[36px] font-black text-[#002147] uppercase tracking-tighter">
            Check Out Our <span className="text-[#80cb29]">Work Samples</span>
          </h2>
          
          {/* --- MIX COLOR UNDERLINE --- */}
          <div className="flex justify-center gap-1.5 mb-4">
            <div className="w-16 h-1.5 bg-[#80cb29] rounded-full" />
            <div className="w-4 h-1.5 bg-[#002147] rounded-full" />
          </div>
          
          <p className="text-slate-700 mt-2 max-w-2xl mx-auto font-semibold text-[15px] leading-relaxed">
            Take a look at our high-quality research drafts and data analysis reports delivered to clients worldwide.
          </p>
        </div>

        {/* --- SAMPLES GRID --- */}
        <div className="grid lg:grid-cols-2 gap-10 lg:px-8 -mt-8 relative z-10"> 
          {SAMPLES.map((sample, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-none border-[1.5px] border-[#002147] p-6 shadow-[8px_8px_0px_0px_rgba(0,33,71,0.08)] hover:shadow-[12px_12px_0px_0px_rgba(128,203,41,0.2)] transition-all duration-400 flex flex-col relative"
            >
              
              {/* Top Content Area */}
              <div className="pb-4">
                <span className="inline-block px-3 py-1 bg-[#80cb29] text-[#002147] text-[10px] font-bold mb-3 uppercase tracking-widest">
                  {sample.category}
                </span>
                
                <h3 className="text-[20px] font-bold text-[#002147] mb-5 leading-tight tracking-tight h-14 line-clamp-2">
                  {sample.title}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[13px]">
                    <Tag size={14} className="text-[#80cb29] shrink-0" />
                    <span className="font-bold text-[#002147] min-w-[60px]">Tag :</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {sample.tags.map(t => (
                        <span key={t} className="bg-slate-50 px-2 py-0.5 border border-slate-200 text-[11px] font-medium text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[13px]">
                    <Briefcase size={14} className="text-[#80cb29] shrink-0" />
                    <span className="font-bold text-[#002147] min-w-[60px]">Service :</span>
                    <span className="text-slate-600 font-medium">{sample.service}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[13px]">
                    <Globe size={14} className="text-[#80cb29] shrink-0" />
                    <span className="font-bold text-[#002147] min-w-[120px]">Area of Research :</span>
                    <span className="text-slate-600 font-medium">{sample.area}</span>
                  </div>

                  <div className="flex items-start gap-2 text-[13px] pt-1 border-t border-slate-100 mt-2">
                    <Info size={14} className="text-[#80cb29] shrink-0 mt-1" />
                    <p className="text-slate-600 leading-snug font-medium">
                      <span className="font-bold text-[#002147]">Description :</span> {sample.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* --- SCROLLABLE DOCUMENT PREVIEW --- */}
              <div className="py-3">
                <div className="w-full h-[300px] bg-slate-50 border border-slate-200 overflow-y-auto p-4 custom-scrollbar">
                   <div className="bg-white p-6 min-h-[500px] w-full border border-slate-100 shadow-sm">
                      <FileText size={28} className="mx-auto text-slate-200 mb-3" />
                      <h4 className="text-[#002147] font-black mb-1 uppercase tracking-tighter text-[10px] text-center underline decoration-[#80cb29]">
                        Research Preview
                      </h4>
                      <div className="space-y-2 mt-4">
                        <div className="h-2 bg-slate-50 rounded w-full"></div>
                        <div className="h-2 bg-slate-50 rounded w-[90%]"></div>
                        <div className="h-2 bg-slate-50 rounded w-full"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- FOOTER --- */}
              <div className="mt-auto pt-4 border-t border-[#002147]/10 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500">
                  <span className="flex items-center gap-1.5 uppercase">
                    <Calendar size={13} className="text-[#80cb29]" /> {sample.date}
                  </span>
                  <span className="flex items-center gap-1.5 uppercase">
                    <User size={13} className="text-[#80cb29]" /> {sample.author}
                  </span>
                </div>
                {/* Next.js Link Component */}
                <Link 
                  href="/contact" 
                  className="flex items-center gap-1 text-[#002147] font-black text-[11px] uppercase tracking-widest hover:text-[#80cb29] transition-all"
                >
                  Full Report <ChevronRight size={14} />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scrollbar Styling for Global CSS or Tailwind */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #002147;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #80cb29;
        }
      `}</style>
    </section>
  );
};

export default WorkSamples;