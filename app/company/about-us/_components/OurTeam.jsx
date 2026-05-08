"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Award,
  Briefcase,
  GraduationCap,
  Building,
  Database,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Helper component for bullet points
// Changed items-center to items-start for better text alignment
const DetailItem = ({ icon: Icon, text }) => (
  <li className="flex items-start gap-2 text-black text-sm leading-relaxed text-left">
    <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
      <Icon className="w-3 h-3 text-accent" />
    </div>
    <span>{text}</span>
  </li>
);

export default function TeamSection() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const teamMembers = [
    {
      name: "Mr. Mahesh Mahtolia",
      role: "Founder Director",
      image: "/Mahesh.webp",
      highlights: [
        { text: "More than 20 Decade of experience in market research across the industry verticals. Vast experience of working in several product and service categories.", icon: Briefcase },
        { text: "Heading the research and marketing operations.", icon: Building },
        { text: "Dealing with national and international clients.", icon: Award },
        { text: "Mahesh has given a remarkable growth to the NexGen since its inception in 2007. He has capability to design and execute both quantitative and qualitative research projects.", icon: GraduationCap },
        { text: "He is a science post graduate from Kumaun University & management graduate from IPM.", icon: Briefcase },
        { text: "He has worked with ORG-MARG, Nielsen and IDC at various capacities.", icon: Briefcase },
      ],
      socials: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/mahesh-mahtolia-078a334/" },
        { icon: Twitter, href: "https://x.com/nexgen_research" },
        // { icon: Instagram, href: "#" },
        // { icon: Facebook, href: "#" },
      ],
    },
    {
      name: "Mr. Devendra Bhatt",
      role: "Director Client Services",
      image: "/Devendra.webp",
      highlights: [
        { text: "He looks after survey programming, database management, secondary research and analytical tools.", icon: Database },
        { text: "Before joining NexGen, Devendra has worked with companies like HCL Technologies, 3D Research, and Research360.", icon: Building },
        { text: "He has very good reputation in management institutions in India.", icon: GraduationCap },
        { text: "Devendra has assisted more than 20 startups for market research requirements.", icon: GraduationCap },
        { text: "Devendra has completed the BCA from Kumaun University and MCA from Uttarakhand, Open University Nainital.", icon: GraduationCap },
      ],
      socials: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/devendra-bhatt-6ba3bb75/" },
        { icon: Twitter, href: "https://x.com/devendraBhatt30" },
        // { icon: Instagram, href: "#" },
        // { icon: Facebook, href: "#" },
      ],
    },
    {
      name: "Mr. Tarun",
      role: "Operation Executive",
      image: "/Tarun.webp",
      highlights: [
        { text: "Around 2 decade of market research experience with NexGen.", icon: Briefcase },
        { text: "Science graduate and passionate market researcher.", icon: Database },
        { text: "Good exposure of database management and analytics.", icon: TrendingUp },
        { text: "Hands-on experience of Social Media and Google Adword campaigns.", icon: TrendingUp },
        { text: "Understanding of google metrics assist in secondary research.", icon: TrendingUp },
      ],
      socials: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" },
        // { icon: Instagram, href: "#" },
        // { icon: Facebook, href: "#" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] tracking-tight">
            The Team Behind Nexgen
          </h2>
        </div>

        {/* Grid - Added items-start to prevent height stretching */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {teamMembers.map((member, idx) => {
            const isExpanded = expandedCards[idx];

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl pt-12 pb-6 px-6 text-center border border-slate-100 shadow-sm transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-xl hover:shadow-accent/10 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-28 h-28 rounded-full mx-auto mb-4 ring-4 ring-slate-50 group-hover:ring-[var(--color-accent)]/30 transition-all duration-300 overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">
                  {member.name}
                </h3>
                <span className="text-[var(--color-accent)] text-sm font-bold uppercase tracking-wide">
                  {member.role}
                </span>

                {/* Highlights List - inline-flex to center the block, text-left inside items */}
                <ul className="mt-4 mb-4 space-y-2 inline-flex flex-col text-left min-h-[80px]  ">
                  {/* Show only first item if collapsed */}
                  {!isExpanded && (
                    <DetailItem
                      icon={member.highlights[0].icon}
                      text={member.highlights[0].text}
                    />
                  )}

                  {/* Show all items if expanded */}
                  {isExpanded &&
                    member.highlights.map((item, i) => (
                      <DetailItem key={i} icon={item.icon} text={item.text} />
                    ))}
                </ul>

                {/* Show More / Show Less Button */}
                {member.highlights.length > 1 && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-[var(--color-primary)] text-xs font-bold flex items-center justify-center gap-1 mx-auto mb-4 hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>
                )}

                {/* Social Icons - Always Visible */}
                <div className="flex justify-center items-center gap-3 mt-auto">
                  {member.socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}