// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { TestTube, Lightbulb, ThumbsUp, Package } from "lucide-react";

// export default function ProductTestingPage() {
//   return (
//     <div className="bg-white text-slate-800">
//       {/* Hero Section */}
//       <section className="bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
//               <TestTube className="w-3.5 h-3.5" /> Business Need
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
//               Product Testing & <span className="text-accent">Concept</span>
//             </h1>
//             <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
//               Don't guess. Test. From initial concept to final packaging, we validate your innovations with real consumer feedback.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
//           <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
//             <Image src="" alt="Product Testing" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
//           </div>

//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold mb-6">
//               <Lightbulb className="w-3.5 h-3.5" /> Innovation Pipeline
//             </div>
//             <h2 className="text-3xl font-bold text-primary mb-6">Iterate Until It's Perfect</h2>
//             <p className="text-slate-600 text-lg leading-relaxed mb-8">
//               Whether you are launching a new flavor or a tech gadget, testing minimizes risk. We evaluate concept appeal, product performance, and packaging impact.
//             </p>
            
//             {/* Process Steps */}
//             <div className="relative pl-8 space-y-6">
//               <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-200" />
//               {[
//                 "Concept Screening",
//                 "Product Optimization",
//                 "Packaging Evaluation",
//               ].map((step, idx) => (
//                 <div key={idx} className="relative">
//                   <div className="absolute -left-5 w-4 h-4 rounded-full bg-accent border-4 border-white" />
//                   <h3 className="font-bold text-slate-800">{step}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Feature Grid */}
//         <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
//           <div className="flex items-center gap-3 mb-8">
//             <Package className="w-6 h-6 text-primary" />
//             <h3 className="text-xl font-bold text-primary">What We Evaluate</h3>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//             {["Taste", "Texture", "Scent", "Packaging"].map((attr, idx) => (
//               <div key={idx} className="p-4 bg-white rounded-xl shadow-sm">
//                 <span className="font-bold text-slate-700">{attr}</span>
//               </div>
//             ))}
//           </div>
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