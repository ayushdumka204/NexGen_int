"use client";
import React, { useState } from "react";
import Image from "next/image";
import { b2bContent } from "./data";
import ServicesCTA from "../_components/ServicesCTA";

function splitTitle(title = "") {
  const [first = "", ...rest] = title.split(" ");
  return { first, rest: rest.join(" ") };
}

export default function B2BResearch() {
  const [activeTab, setActiveTab] = useState(0);

  const { first: headerFirst, rest: headerRest } = splitTitle(
    b2bContent.header.title,
  );

  const { first: tabFirst, rest: tabRest } = splitTitle(
    b2bContent.tabs[activeTab]?.title,
  );

  return (
    <section className="bg-[var(--color-background)] pb-10 px-4 md:px-10 overflow-hidden font-sans">
      {/* --- Main Header Section (Two-color heading) --- */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
          <span className="text-[var(--color-primary)]">{headerFirst}</span>{" "}
          <span className="text-[var(--color-accent)]">{headerRest}</span>
        </h1>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed text-black">
          {b2bContent.header.desc}
        </p>
      </div>

      {/* --- Custom Premium Tabs --- */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[var(--color-border)] pb-4">
          {b2bContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[var(--color-primary)] text-white shadow-none scale-105"
                  : "text-[var(--color-primary)] hover:bg-[var(--color-border)]/50"
              } cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Content Area (Height auto rakhi hai taaki content crop na ho) --- */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white border border-[var(--color-border)] p-8 md:p-16 rounded-[2.5rem] overflow-hidden relative min-h-fit"
        >
          {/* Left Side: Text */}
          <div className="order-2 lg:order-1 h-full flex flex-col justify-center">
            {/* Heading Fix: Tab change hone par ye update hogi */}
            <h2 className="text-3xl font-black mb-6">
              <span className="text-[var(--color-primary)]">{tabFirst}</span>{" "}
              <span className="text-[var(--color-accent)]">{tabRest}</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8 text-black">
              {b2bContent.tabs[activeTab].content}
            </p>

            {/* List items if any */}
            {b2bContent.tabs[activeTab].list && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {b2bContent.tabs[activeTab].list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 bg-[var(--color-border)]/30 p-4 rounded-xl border-l-4 border-[var(--color-accent)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span className="font-bold text-[var(--color-primary)] text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Side: Image Section (Responsive with aspect ratio) */}
          <div className="order-1 lg:order-2 h-full flex items-center justify-center">
            <div className="relative w-full min-h-[280px] lg:min-h-[380px] aspect-[4/3] bg-slate-100/30 overflow-hidden border border-[var(--color-border)]">
              <Image
                src={b2bContent.tabs[activeTab].img}
                alt={b2bContent.tabs[activeTab].label}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
                quality={72}
              />
            </div>
          </div>
        </div>
      </div>
      <ServicesCTA />
    </section>
  );
}
