"use client";
import React from "react";
import Image from "next/image";
import ServicesCTA from "../_components/ServicesCTA";

export default function B2CResearchSection() {
  return (
    <section className="bg-white min-h-screen py-10 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Sharp Image Container */}
          <div className="relative group">
            <div className="relative z-10 w-full aspect-[5/3] overflow-hidden border border-[var(--color-border)] bg-gray-50">
              <Image
                src="/B2C-Marketing.jpg" // Apni image ka path yaha dalo
                alt="B2C Research"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="flex flex-col">
            {/* Two-Color Heading */}
            <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
              <span className="text-[var(--color-primary)]">B2C</span>{" "}
              <span className="text-[var(--color-accent)]">RESEARCH</span>
            </h2>

            {/* Accent Line */}
            <div className="h-1 w-20 bg-[var(--color-accent)] mb-8" />

            <div className="space-y-6">
              <p className="text-2xl font-bold text-[var(--color-primary)] leading-snug">
                B2C research involves directly the end customers.
              </p>

              <p className="text-lg leading-relaxed border-l-4 text-black border-[var(--color-border)] pl-6">
                We take the responses from the consumers about any product or
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServicesCTA />
    </section>
  );
}
