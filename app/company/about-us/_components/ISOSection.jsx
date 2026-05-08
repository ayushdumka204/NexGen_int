"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";
import Image from "next/image";

export default function ISOSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
              ISO 9001:2015 — <br />
              <span className="text-accent">
                Independently Certified Quality
              </span>
            </h2>

            {/* Content Text (Exact as provided) */}
            <p className="text-black text-base md:text-lg leading-relaxed">
              NexGen Market Research Services is independently certified to ISO
              9001:2015, affirming our commitment to process excellence, client
              satisfaction, and continual improvement across every research
              engagement. Our Quality Management System governs the complete
              research lifecycle, from briefing and instrument design through
              fieldwork execution, data processing, and final reporting.
            </p>
          </motion.div>

          {/* RIGHT: Certificate Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent opacity-10 rounded-full blur-3xl" />

            {/* Card Container */}
            <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100">
              {/* Certificate Image Container */}
              {/* Added 'relative' class here for Next/Image 'fill' to work */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                <Image
                  src="/ISO.jpg"
                  alt="ISO 9001:2015 Certificate"
                  fill // Use fill instead of width/height
                  className="object-cover" // object-cover ensures it fills the area nicely
                  quality={100} // Force max quality
                  priority // Load faster
                />

                {/* Watermark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>

              {/* Download Button */}
              <div className="mt-6 text-center">
                <a
                  href="/iso-certificate.pdf"
                  download="NexGen_ISO_Certificate.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg group"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download Certificate
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
