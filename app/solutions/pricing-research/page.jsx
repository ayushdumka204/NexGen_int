// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { DollarSign, Percent, TrendingDown, Scale } from "lucide-react";

// export default function PricingResearchPage() {
//   return (
//     <div className="bg-white text-slate-800">
//       {/* Hero Section */}
//       <section className="bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
//               <DollarSign className="w-3.5 h-3.5" /> Business Need
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
//               Pricing <span className="text-accent">Research</span>
//             </h1>
//             <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
//               The difference between profit and loss. We find the sweet spot where value meets willingness to pay.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-20">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
//           <div>
//             <h2 className="text-3xl font-bold text-primary mb-6">Optimal Price Discovery</h2>
//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Pricing is a lever for profitability. Our research methods—Van Westendorp, Gabor-Granger, and Conjoint Analysis—reveal the optimal price point for your market.
//             </p>

//             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
//               <div className="flex items-center justify-between border-b pb-2">
//                 <span className="font-bold text-slate-700">Price Elasticity</span>
//                 <span className="text-accent font-mono">High Impact</span>
//               </div>
//               <div className="flex items-center justify-between border-b pb-2">
//                 <span className="font-bold text-slate-700">Competitive Benchmarking</span>
//                 <span className="text-accent font-mono">Essential</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-slate-700">Revenue Forecast</span>
//                 <span className="text-accent font-mono">Accurate</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
//             <Image src="" alt="Pricing Strategy" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
//           </div>
//         </div>

//         {/* Methodology Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: "Van Westendorp", desc: "Identifying acceptable price ranges.", icon: Scale },
//             { title: "Conjoint Analysis", desc: "Understanding trade-offs customers make.", icon: TrendingDown },
//             { title: "Gabor-Granger", desc: "Direct pricing sensitivity measurement.", icon: Percent },
//           ].map((method, idx) => (
//             <div key={idx} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
//               <method.icon className="w-8 h-8 text-accent mb-4" />
//               <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
//               <p className="text-slate-500">{method.desc}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import ComingSoon from '../../_components/utils/comingsoon'
import React from 'react'

const page = () => {
  return (
    <div>
      <ComingSoon/>
    </div>
  )
}

export default page