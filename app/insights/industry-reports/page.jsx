// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FileText, Download, BarChart2 } from "lucide-react";
// import Image from "next/image";

// const reports = [
//   {
//     id: 1,
//     title: "India FMCG Market Outlook 2024",
//     category: "FMCG",
//     pages: 42,
//     type: "Premium",
//     image: "",
//     file: "/reports/fmcg-2024.pdf"
//   },
//   {
//     id: 2,
//     title: "Digital Consumer Behavior Trends",
//     category: "Technology",
//     pages: 28,
//     type: "Free",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
//     file: "/reports/digital-trends.pdf"
//   },
//   {
//     id: 3,
//     title: "Healthcare Sector Analysis: Post-COVID Shift",
//     category: "Healthcare",
//     pages: 35,
//     type: "Premium",
//     image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
//     file: "/reports/healthcare.pdf"
//   },
// ];

// export default function IndustryReportsPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
      
//       {/* ==========================================
//           HERO SECTION (BG-PRIMARY ONLY HERE)
//       ========================================== */}
//       <section className="relative bg-primary overflow-hidden">
//         <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Insights & Content</span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
//               Industry <span className="text-accent">Reports</span>
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Comprehensive market analysis and data-driven reports to guide your strategic decisions.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           CONTENT SECTION (LIGHT BACKGROUND BELOW)
//       ========================================== */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
        
//         {/* Report List */}
//         <div className="space-y-8">
//           {reports.map((report, idx) => (
//             <motion.div
//               key={report.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group"
//             >
//               {/* Image */}
//               <div className="relative w-full md:w-72 h-56 md:h-auto shrink-0">
//                 <Image src={report.image} alt={report.title} fill className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
//               </div>

//               {/* Details */}
//               <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-xs font-bold uppercase tracking-wider text-accent">{report.category}</span>
//                     {report.type === "Premium" && (
//                       <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
//                         Premium
//                       </span>
//                     )}
//                   </div>
//                   <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
//                     {report.title}
//                   </h3>
//                   <div className="flex items-center gap-4 text-sm text-slate-500">
//                     <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> {report.pages} Pages</span>
//                     <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Data Analytics</span>
//                   </div>
//                 </div>

//                 {/* Download Button */}
//                 <div className="mt-6 flex justify-end">
//                   <a 
//                     href={report.file} 
//                     download 
//                     className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-xl font-semibold text-sm hover:bg-accent-hover transition-all duration-300 shadow-md"
//                   >
//                     Download PDF <Download className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
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