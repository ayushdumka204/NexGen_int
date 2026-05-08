"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What is NexGen international?",
    answer:
      "NexGen is a data-driven research ecosystem that provides actionable insights for global enterprises. We leverage a network of 1000+ experts to deliver precision analytics across various industrial sectors.",
  },
  {
    question: "How do I start a project with you?",
    answer:
      "Getting started is simple. You can book a discovery call or submit your project brief. Our team will analyze your requirements and match you with the right subject matter experts from our global panel.",
  },
  {
    question: "Can I track project progress in real-time?",
    answer:
      "Absolutely. Our NexGen dashboard provides a transparent, real-time view of data collection progress, audit cycles, and milestone completions to keep you updated throughout the process.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    /* Top padding reduced to py-12 for a tighter look */
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* --- SECTION HEADING: mb-8 instead of mb-16 to kill extra gap --- */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="p-2.5 bg-accent/10 rounded-xl">
              <HelpCircle className="text-accent" size={28} />
            </div>
          </div>
          <h2 className="text-[32px] md:text-[36px] font-black text-primary uppercase tracking-tighter leading-none">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>

          <div className="flex justify-center gap-1.5 mt-3 mb-0">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <div className="w-3 h-1 bg-primary rounded-full" />
          </div>

          <p className="text-slate-600 mt-1 font-semibold text-[15px]">
            Clear your doubts before starting your research journey with us.
          </p>
        </div>

        {/* --- FAQ ACCORDION (BOXED VERSION) --- */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            
            return (
              <div 
                key={idx}
                className={`group border-2 transition-all duration-300 bg-white ${
                  isOpen 
                    ? 'border-accent shadow-[0_8px_25px_-10px_rgba(128,203,41,0.15)]' 
                    : 'border-slate-100 hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? 'text-accent' : 'text-primary'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`shrink-0 ml-4 p-1 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-primary'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-slate-600 text-[14px] leading-relaxed font-medium border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* --- BOTTOM SUPPORT CTA --- */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            Still have questions? 
            <a href="/contact" className="ml-2 text-primary hover:text-accent transition-colors underline decoration-2 underline-offset-4">
              Contact Support
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;