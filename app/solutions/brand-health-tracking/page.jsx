// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Activity, TrendingUp, BarChart2, Zap } from "lucide-react";

// export default function BrandHealthTrackingPage() {
//   return (
//     <div className="bg-white text-slate-800">
//       {/* Hero Section */}
//       <section className="bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
//               <Activity className="w-3.5 h-3.5" /> Business Need
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
//               Brand Health <span className="text-accent">Tracking</span>
//             </h1>
//             <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
//               Continuous monitoring of your brand's vitality. We measure awareness, loyalty, and perceived quality to ensure your brand stays ahead of the curve.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section - Metrics Focus */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-primary mb-6">Diagnose. Monitor. Optimise.</h2>
//             <p className="text-slate-600 text-lg leading-relaxed mb-8">
//               A healthy brand is a growing brand. Our tracking solutions provide a comprehensive diagnostic of your brand's strengths and weaknesses compared to competitors.
//             </p>
            
//             <div className="space-y-4">
//               {[
//                 { title: "Brand Awareness", desc: "Top-of-mind and aided recall metrics." },
//                 { title: "Brand Loyalty", desc: "Net Promoter Score (NPS) and retention rates." },
//                 { title: "Brand Image", desc: "Association with key attributes and values." },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
//                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 text-accent">
//                     <TrendingUp className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-primary">{item.title}</h3>
//                     <p className="text-sm text-slate-500">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
//             <Image src="" alt="Analytics Dashboard" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
//           </div>
//         </div>

//         {/* KPI Visualization Section */}
//         <div className="bg-slate-50 p-8 md:p-12 rounded-3xl">
//           <h3 className="text-xl font-bold text-primary mb-8 text-center">Key Performance Indicators We Track</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//              {[
//                 { value: "Brand Equity", icon: BarChart2 },
//                 { value: "Ad Recall", icon: Zap },
//                 { value: "Share of Voice", icon: TrendingUp },
//                 { value: "Sentiment Score", icon: Activity },
//              ].map((kpi, idx) => (
//                 <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-accent transition-colors">
//                    <kpi.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
//                    <span className="text-sm font-bold text-slate-700">{kpi.value}</span>
//                 </div>
//              ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import Solutions from "../../solutions/page";
import React from 'react'

const page = () => {
  return (
    <div>
      <Solutions/>
    </div>
  )
}

export default page