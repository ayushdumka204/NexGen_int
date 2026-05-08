"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className=" py-20 flex items-center justify-center px-6 bg-white relative overflow-hidden">

      {/* subtle accent glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[var(--color-accent)]/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[280px] h-[280px] bg-[var(--color-accent)]/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-xl text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/15 flex items-center justify-center">
            <CheckCircle size={34} className="text-[var(--color-accent)]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] mb-4">
          Thank You!
        </h1>

        {/* Subtext */}
        <p className="text-xl leading-relaxed mb-8">
          Your request has been successfully submitted.  
          Our team will get in touch with you shortly.
        </p>

        {/* Single CTA */}
        <Link
          href="/"
          className="inline-block px-7 py-3 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-bold hover:bg-[var(--color-accent-hover)] transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}