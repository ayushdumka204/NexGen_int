// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Calendar, MapPin, ArrowRight } from "lucide-react";

// const events = [
//   {
//     id: 1,
//     title: "NexGen Annual Research Summit 2024",
//     date: "Jan 15, 2024",
//     location: "The Leela, Mumbai",
//     type: "Conference",
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
//     status: "Upcoming"
//   },
//   {
//     id: 2,
//     title: "Webinar: Future of Healthcare Data",
//     date: "Dec 10, 2023",
//     location: "Online Event",
//     type: "Webinar",
//     image: "https://images.unsplash.com/photo-1587825140708-dfaf72ba4b84?q=80&w=1200&auto=format&fit=crop",
//     status: "Register Now"
//   },
//   {
//     id: 3,
//     title: "Market Research Workshop",
//     date: "Nov 25, 2023",
//     location: "IIM Bangalore",
//     type: "Workshop",
//     image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
//     status: "Closed"
//   },
// ];

// export default function EventsPage() {
//   return (
//     <div className="min-h-screen bg-slate-50">
      
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
//             <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Updates</span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
//               Upcoming <span className="text-accent">Events</span>
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Join us at conferences, webinars, and workshops around the globe.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           CONTENT SECTION (LIGHT BACKGROUND BELOW)
//       ========================================== */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
        
//         {/* Events Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event, idx) => (
//             <motion.div
//               key={event.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden"
//             >
              
//               {/* Image Container */}
//               <div className="relative h-56 w-full overflow-hidden">
//                 <Image 
//                   src={event.image} 
//                   alt={event.title} 
//                   fill 
//                   className="object-cover" 
//                 />
//                 <div className="absolute top-4 right-4 z-10">
//                   <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-primary backdrop-blur">
//                     {event.type}
//                   </span>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <div className="flex items-center gap-2 text-sm text-accent font-semibold mb-2">
//                   <Calendar className="w-4 h-4" />
//                   {event.date}
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight">{event.title}</h3>
                
//                 <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
//                   <MapPin className="w-4 h-4" />
//                   {event.location}
//                 </div>

//                 {/* Button (Clickable) */}
//                 <div className="mt-auto">
//                   <a 
//                     href="#" // Replace with actual event link
//                     className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
//                       event.status === 'Closed' 
//                         ? 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
//                         : 'bg-primary text-white hover:bg-accent hover:text-primary'
//                     }`}
//                   >
//                     {event.status === 'Closed' ? 'Event Closed' : event.status}
//                     {event.status !== 'Closed' && <ArrowRight className="w-4 h-4" />}
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