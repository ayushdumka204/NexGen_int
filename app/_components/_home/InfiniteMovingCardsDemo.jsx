"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, HelpCircle } from "lucide-react";

const testimonials = [
  {
    quote: "I have reviewed the dataset and found it very useful for the analysis. I would like to sincerely thank you for your valuable support in helping me collect the data for my work.",
    name: "Sonali Jain",
    title: "Academic Researcher",
  },
];

export default function TestimonialStage() {
  const [index, setIndex] = useState(0);

  const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-0">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-accent/10 rounded-2xl">
              <HelpCircle className="text-accent" size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <div className="flex justify-center gap-1.5 mt-4">
            <div className="w-16 h-1.5 bg-accent rounded-full" />
            <div className="w-4 h-1.5 bg-primary rounded-full" />
          </div>
        </div>

        {/* --- 3D Carousel Stage --- */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[450px]">
          
          {/* Navigation Arrows - Centered Vertically */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4 z-50 pointer-events-none">
            <button 
              onClick={prevStep}
              className="p-3 rounded-full bg-white shadow-2xl border border-slate-100 text-primary hover:text-accent transition-all active:scale-90 pointer-events-auto cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} strokeWidth={3} />
            </button>
            <button 
              onClick={nextStep}
              className="p-3 rounded-full bg-white shadow-2xl border border-slate-100 text-primary hover:text-accent transition-all active:scale-90 pointer-events-auto cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} strokeWidth={3} />
            </button>
          </div>

          <div className="relative w-full max-w-5xl flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {testimonials.map((item, i) => {
                const isCenter = i === index;
                const isLeft = i === (index - 1 + testimonials.length) % testimonials.length;
                const isRight = i === (index + 1) % testimonials.length;

                if (!isCenter && !isLeft && !isRight) return null;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.3,
                      scale: isCenter ? 1 : 0.8,
                      x: isCenter ? 0 : isLeft ? -220 : 220,
                      zIndex: isCenter ? 30 : 10,
                      filter: isCenter ? "blur(0px)" : "blur(4px)",
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className={`absolute w-[300px] md:w-[500px] p-8 md:p-12 rounded-[3rem] bg-white border-2 flex flex-col items-center text-center transition-colors duration-500 ${
                      isCenter ? "border-accent shadow-[0_20px_50px_rgba(128,203,41,0.15)]" : "border-slate-100 shadow-sm"
                    }`}
                  >
                    <Quote 
                      className={`mb-6 ${isCenter ? "text-accent" : "text-slate-200"}`} 
                      size={48} 
                      fill="currentColor" 
                    />
                    
                    {/* Fixed quotes for ESLint using &quot; */}
                    <p className={`text-sm md:text-lg leading-relaxed font-semibold mb-8 ${isCenter ? "text-slate-800" : "text-slate-400"}`}>
                      &quot;{item.quote}&quot;
                    </p>

                    <div>
                      <h4 className={`font-black uppercase tracking-[0.2em] text-xs md:text-sm ${isCenter ? "text-primary" : "text-slate-400"}`}>
                        {item.name}
                      </h4>
                      <div className={`h-1 w-8 mx-auto my-2 rounded-full ${isCenter ? "bg-accent" : "bg-slate-200"}`} />
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${isCenter ? "text-accent" : "text-slate-300"}`}>
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* --- Stepper Dots --- */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === i ? "w-12 bg-accent" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}