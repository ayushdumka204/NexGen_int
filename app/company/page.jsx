// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ShieldCheck, Layers, MapPin, Scale, Lightbulb, Award, ArrowUpRight } from "lucide-react";

// export default function WhyNexGenPage() {
//   return (
//     <div className="bg-background text-foreground">
      
//       {/* HERO SECTION */}
//       <section className="bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
//               <Award className="w-3.5 h-3.5" />
//               Why NexGen
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
//               Why Leading Organisations <br />
//               <span className="text-accent">Choose NexGen</span>
//             </h1>
            
//             <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
//               Certified quality, ethical governance, and deep expertise — the partner of choice for reliable data.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">

//         {/* INTRO & IMAGE SECTION */}
//         <section className="mb-16">
//           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//               <div>
//                 <p className="text-foreground text-lg leading-relaxed mb-6">
//                   NexGen’s combination of certified quality management, ethical research governance, deep methodological expertise, and pan-India operational scale makes us the research partner of choice for organisations that cannot afford to act on unreliable data.
//                 </p>
//                 <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
//                   <ShieldCheck className="w-4 h-4" />
//                   Trusted by 100+ Organisations
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="aspect-video border border-border overflow-hidden bg-background">
//                   <Image
//                     src=""
//                     alt="Team Strategy"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <p className="text-xs text-foreground mt-3 text-center">
//                   Five pillars of the NexGen difference
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* BENTO GRID - 5 PILLARS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {/* 1. CERTIFIED QUALITY (Wide Card - Dark) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="md:col-span-2 bg-[var(--color-primary)] text-white p-8 rounded-3xl relative overflow-hidden"
//           >
//             <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl" />
//             <div className="relative z-10">
//               <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
//                 <ShieldCheck className="w-5 h-5 text-accent" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3">Certified Quality, End to End</h3>
//               <p className="text-white/70 text-base leading-relaxed">
//                 ISO 9001:2015 certification means NexGen’s research processes are independently audited against an internationally recognised standard. Clients receive research they can defend to boards, regulators, and academic review panels.
//               </p>
//             </div>
//           </motion.div>

//           {/* 2. FULL-SPECTRUM METHODOLOGY (Tall Card - Light) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="md:row-span-2 bg-white border border-border p-8 rounded-3xl relative"
//           >
//             <div className="absolute top-0 right-0 w-16 h-16 bg-primary opacity-5 rounded-full blur-xl" />
//             <div className="relative z-10 h-full flex flex-col">
//               <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
//                 <Layers className="w-5 h-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-primary mb-3">Full-Spectrum Methodology</h3>
//               <p className="text-foreground text-sm leading-relaxed flex-grow">
//                 From large-scale online data collection and face-to-face CAPI surveys to in-depth qualitative research — NexGen provides the full spectrum of market research services from a single accountable partner, eliminating coordination risk.
//               </p>
//             </div>
//           </motion.div>

//           {/* 3. PAN-INDIA REACH (Small Card - Light) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="bg-white border border-slate-200 p-8 rounded-3xl"
//           >
//             <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
//               <MapPin className="w-5 h-5 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold text-primary mb-3">Unmatched Pan-India Reach</h3>
//             <p className="text-foreground text-sm leading-relaxed">
//               500+ trained interviewers across 300+ cities spanning Tier 1, Tier 2/3 towns, and rural geographies. Representative coverage of India’s full landscape.
//             </p>
//           </motion.div>

//           {/* 4. ETHICAL GOVERNANCE (Small Card - Light) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="bg-white border border-border p-8 rounded-3xl"
//           >
//             <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
//               <Scale className="w-5 h-5 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold text-primary mb-3">Ethical Research Governance</h3>
//             <p className="text-foreground text-sm leading-relaxed">
//               Adherence to ESOMAR and MRSI standards. IRB-compatible protocols. Confidentiality and consent are non-negotiable.
//             </p>
//           </motion.div>

//           {/* 5. INSIGHT, NOT JUST DATA (Wide Card - Accent/Green) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="md:col-span-3 bg-accent/10 border border-accent/20 p-8 rounded-3xl"
//           >
//             <div className="flex flex-col md:flex-row items-start gap-6">
//               <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
//                 <Lightbulb className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-primary mb-2">Insight, Not Just Data</h3>
//                 <p className="text-foreground text-base leading-relaxed max-w-4xl">
//                   NexGen’s deliverables are designed to drive decisions. Every client report is structured around research objectives, written for the intended audience, and accompanied by clear, evidence-based recommendations.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </div>

//       </div>
//     </div>
//   );
// }

import ComingSoon from '../_components/utils/comingsoon'
import React from 'react'

const page = () => {
  return (
    <div>
      <ComingSoon/>
    </div>
  )
}

export default page