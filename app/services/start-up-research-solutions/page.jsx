"use client";
import React from "react";
import Image from "next/image";
import { Lightbulb, BarChart3, Globe, ShieldCheck } from "lucide-react";
import ServicesCTA from "../_components/ServicesCTA";

const data = {
  // Title ko split kiya hai do colors ke liye
  titlePart1: "Start Up",
  titlePart2: "Solution",
  description:
    "To serve exclusively to the market research agency for startups we have a separate division, Research360. We offer end to end, 360 degree services to startups. Our services includes:",
  sections: [
    {
      category: "Business Registrations",
      icon: ShieldCheck,
      items: [
        {
          label: "Company Registrations",
          detail:
            "Private Limited company, LLP, Partnership or Proprietorship etc.",
        },
        {
          label: "Other Registrations",
          detail: "GST, Trademark, TAN, PAN, Current Account, MSME etc.",
        },
      ],
    },
    {
      category: "Consulting Services",
      icon: Lightbulb,
      items: [
        {
          label: "Business Idea/Concept",
          detail: "Ideal business/ startup suggestions.",
        },
        {
          label: "Investment and Prospects",
          detail: "Ideal amount to be invested and future prospects.",
        },
        { label: "Brand Name", detail: "Startup Name" },
      ],
    },
    {
      category: "Market Research",
      icon: BarChart3,
      items: [
        {
          label: "Feasibility Study",
          // Added extra spacing for Market Research points
          detail:
            "a. Location analysis: Ideal location / cities to start the business\n\nb. Market overview and trend: Market size, competitors, growth, SWOT, etc.\n\nc. Consumer’s studies: Consumer’s perception, acceptance, customer engagement, psychometric analysis, habits, etc.",
        },
        {
          label: "Concept Test",
          detail:
            "Likeability of the new concept, willingness to go, cost willing to pay etc.",
        },
      ],
    },
    {
      category: "Digital Presence",
      icon: Globe,
      items: [
        {
          label: "Website Design",
          detail: "Website development and promotions.",
        },
        {
          label: "Digital Marketing",
          detail:
            "Online/ Google promotions, SEO, SMO, and lead generation, etc.",
        },
      ],
    },
  ],
  image:
    "/start-up-sol.jpg",
};

export default function StartUpSolution() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-primary)] font-sans py-6 px-6 md:px-12">
      {/* --- TOP HEADER (Centered) --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        {/* Title with Split Colors */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
          <span className="text-[var(--color-accent)]">{data.titlePart1}</span>{" "}
          <span className="text-[var(--color-primary)]">{data.titlePart2}</span>
        </h1>
        {/* Description in Lowercase (Normal Sentence Case) */}
        <p className="text-[14px] text-black md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* --- MAIN CONTENT & IMAGE GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT: Services Roadmap (8 Columns) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sections.map((section, idx) => (
            <div
              key={idx}
              className="p-8 border border-[var(--color-border)] rounded-2xl bg-gray-50/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-xl">
                  <section.icon size={22} />
                </div>
                <h3 className="text-lg font-black tracking-tight">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-8">
                {" "}
                {/* Increased vertical gap between items */}
                {section.items.map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-base font-black tracking-wider text-black mb-2 group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </h4>
                    {/* detail text with whitespace-pre-line and better leading */}
                    <p className="text-base text-black leading-[1.8] whitespace-pre-line">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Featured Visual (4 Columns) - Sticky */}
        <div className="lg:col-span-4">
          <div className="relative h-[500px] aspect-[3/3] overflow-hidden border border-[var(--color-border)] shadow-sm">
            <Image
              src={data.image}
              alt="StartUp Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-white text-2xl font-black uppercase tracking-tighter leading-tight">
                Empowering the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServicesCTA />
    </div>
  );
}
