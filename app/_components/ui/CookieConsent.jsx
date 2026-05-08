// "use client";

// import React, { useState, useEffect } from "react";
// import { loadGoogleAnalytics } from "../utils/loadAnalytics";

// export default function CookieConsent() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("nexgen");

//     if (!consent) {
//       const timer = setTimeout(() => setIsVisible(true), 1500);
//       return () => clearTimeout(timer);
//     }

//     if (consent === "accepted") {
//       loadGoogleAnalytics();
//     }
//   }, []);

//   const handleChoice = (choice) => {
//     localStorage.setItem("nexgen", choice);

//     if (choice === "accepted") {
//       loadGoogleAnalytics();
//     }

//     setIsVisible(false);
//   };
//   if (!isVisible) return null;
//   return (
//     <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[9999] animate-in fade-in slide-in-from-bottom-5 duration-500">
//       <div className="bg-white border border-primary/5 shadow-[0_15px_50px_-12px_rgba(0,0,0,0.1)] p-6 rounded-3xl">
//         {/* --- Content --- */}
//         <div className="mb-6">
//           <h2 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
//             Cookies Consent
//           </h2>
//           <p className="text-sm font-medium leading-relaxed">
//             We use essential cookies to optimize your experience on{" "}
//             <span className="text-primary font-bold">NexGen</span>. By
//             continuing, you help us refine our research insights and provide a
//             more personalized service.
//           </p>
//         </div>

//         {/* --- Actions --- */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => handleChoice("accepted")}
//             className="flex-1 px-5 py-2.5 bg-primary text-white text-[11px] font-bold uppercase tracking-widest rounded-full cursor-pointer"
//           >
//             Accept All
//           </button>
//           <button
//             onClick={() => handleChoice("rejected")}
//             className="px-5 py-2.5  text-primary text-[11px] font-bold uppercase tracking-widest rounded-full cursor-pointer"
//           >
//             Reject
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
