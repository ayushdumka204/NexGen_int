// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Tv, Radio, Smartphone, MonitorPlay } from "lucide-react";

// export default function AdvertisingResearchPage() {
//   return (
//     <div className="bg-white text-slate-800">
//       {/* Hero Section */}
//       <section className="bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
//               <Tv className="w-3.5 h-3.5" /> Business Need
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
//               Advertising <span className="text-accent">Research</span>
//             </h1>
//             <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
//               Ensure your message lands. We test ad recall, message clarity, and emotional impact across all media channels.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
        
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-primary mb-4">Multi-Channel Testing</h2>
//           <p className="text-slate-600 max-w-2xl mx-auto">From TV spots to social media stories. We ensure consistency and impact.</p>
//         </div>

//         {/* Media Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
//           {[
//             { media: "Television (TVC)", icon: Tv, desc: "Script testing, moment-by-moment scoring." },
//             { media: "Digital & Social", icon: Smartphone, desc: "A/B testing, viewability, engagement metrics." },
//             { media: "Print & OOH", icon: MonitorPlay, desc: "Visual hierarchy, headline recall." },
//             { media: "Radio", icon: Radio, desc: "Audio recall, brand linkage." },
//           ].map((item, idx) => (
//             <div key={idx} className="flex gap-6 p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors">
//               <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
//                 <item.icon className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary mb-2">{item.media}</h3>
//                 <p className="text-slate-500">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Visual Section */}
//         <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
//           <Image src="" alt="Marketing Meeting" fill className="object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12">
//             <div className="text-white">
//               <h3 className="text-2xl font-bold mb-2">Pre-Launch Confidence</h3>
//               <p className="text-white/80">Validate creative assets before spending your media budget.</p>
//             </div>
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