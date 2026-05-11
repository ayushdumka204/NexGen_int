// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Users, Target, UserPlus, BarChart } from "lucide-react";

// export default function ConsumerSegmentationPage() {
//   return (
//     <div className="bg-white text-slate-800">
//       {/* Hero Section */}
//       <section className="bg-[var(--color-primary)] pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
//               <Users className="w-3.5 h-3.5" /> Business Need
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
//               Consumer <span className="text-accent">Segmentation</span>
//             </h1>
//             <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
//               One size fits none. We divide your market into distinct groups based on needs, behaviors, and demographics.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-primary mb-6">Know Your Audience</h2>
//             <p className="text-slate-600 text-lg leading-relaxed mb-8">
//               Effective targeting starts with segmentation. We move beyond basic demographics to psychographics and behavioral clustering.
//             </p>
            
//             <div className="space-y-6">
//               {[
//                 { title: "Demographic", desc: "Age, Income, Gender, Location." },
//                 { title: "Psychographic", desc: "Lifestyle, Values, Personality." },
//                 { title: "Behavioral", desc: "Usage rate, Loyalty, Purchase habits." },
//               ].map((item, idx) => (
//                 <div key={idx} className="border-l-4 border-accent pl-6">
//                   <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
//                   <p className="text-slate-500">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
//             <Image src="" alt="Diverse Group of People" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
//           </div>
//         </div>

//         {/* Persona Cards */}
//         <div className="bg-slate-50 p-8 md:p-12 rounded-3xl">
//           <div className="flex items-center gap-3 mb-8">
//             <Target className="w-6 h-6 text-primary" />
//             <h3 className="text-xl font-bold text-primary">Sample Segments</h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { name: "The Value Seeker", trait: "Price Sensitive" },
//               { name: "The Early Adopter", trait: "Tech Enthusiast" },
//               { name: "The Loyalist", trait: "High Retention" },
//             ].map((persona, idx) => (
//               <div key={idx} className="p-6 bg-white rounded-xl border border-slate-100 text-center">
//                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
//                   <UserPlus className="w-6 h-6" />
//                 </div>
//                 <h4 className="font-bold text-slate-800">{persona.name}</h4>
//                 <p className="text-sm text-slate-500">{persona.trait}</p>
//               </div>
//             ))}
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