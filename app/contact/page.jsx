"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";
import ThankYou from "./thankyou";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <ThankYou />;
  }

  const officeAddress =
    "A 26, Block B, Mohan Cooperative Industrial Estate, New Delhi, Delhi 110044";

  return (
    <div className="bg-slate-50">
      {/* Hero Header Section - Full Screen Height */}
      <div className="bg-[var(--color-background)] min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-20 border-b border-[var(--color-border)]">
        {/* Minimal Badge */}
        <span className="px-5 py-2 rounded-sm border border-[var(--color-border)] text-[var(--color-primary)] text-[10px] font-black uppercase tracking-[0.3em] mb-10 bg-[var(--color-muted)]">
          Connect With Us
        </span>

        {/* Typography Focus Hero */}
        <h1 className="text-5xl md:text-8xl font-bold mb-8">
          <span className="text-[var(--color-primary)]">LET&apos;S DRIVE YOUR</span>
          <br />
          <span className="text-[var(--color-accent)]">RESEARCH</span>{" "}
          <span className="text-[var(--color-primary)] uppercase">FORWARD</span>
        </h1>

        {/* Simple Paragraph with Primary Color */}
        <p className="text-black max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Partner with NexGen to unlock data-driven insights and market-leading
          strategies that redefine your industry footprint.
        </p>

        {/* Optional: Minimal CTA (Since it's a Hero section) */}
        <div className="mt-12">
          <div className="px-10 py-4 bg-[var(--color-primary)] text-white font-black uppercase tracking-widest text-xs">
            Start A Project
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* --- LEFT: Contact Form --- */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-1 tracking-tight">
              Tell Us About Your Requirements
            </h2>
            <p className="text-black mb-6 text-sm">
              Let’s Connect With NexGen Fill Out The Form Below And Our Team
              Will Get Back To You Shortly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              {/* Row 1: Company Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                />
              </div>

              {/* Row 2: Business/Survey Requirement */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                  Business / Survey Requirement / Enquiry
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                />
              </div>

              {/* Row 3: Name & Email (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Row 4: Phone & City (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Row 5: State */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                  State
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all text-sm text-black placeholder-slate-400"
                />
              </div>

              {/* Row 6: Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-black uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-slate-400 rounded-xl outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/20 transition-all resize-none text-sm text-black placeholder-slate-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--color-accent)]/90 transition-all shadow-md cursor-pointer mt-2 text-sm">
                REQUEST ESTIMATE <Send size={16} />
              </button>
            </form>
          </div>

          {/* --- RIGHT: Info & Map --- */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Contact Information Card */}
            <div className="bg-[var(--color-primary)] rounded-[2rem] p-8 text-white relative overflow-hidden shrink-0">
              <h3 className="text-xl font-bold mb-6 relative z-10 uppercase tracking-tighter">
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs mb-1 uppercase tracking-widest text-[var(--color-accent)]">
                      Office Location
                    </p>
                    <p className="text-white/70 leading-relaxed text-xs">
                      NexGen Market Research Services Pvt Ltd
                      <br />
                      {officeAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs mb-1 uppercase tracking-widest text-[var(--color-accent)]">
                      Email
                    </p>
                    <p className="text-white/70 text-sm">mail@nexgenint.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs mb-1 uppercase tracking-widest text-[var(--color-accent)]">
                      Call Us
                    </p>
                    <p className="text-white/70 text-sm">+91 98731 77449</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--color-accent)]/10 blur-[50px] rounded-full" />
            </div>

            {/* Google Map */}
            <div
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir//NexGen+Market+Research+Services+Pvt.+Ltd.,+Second+Floor,+Kundan+Mansion,+2-A%2F3,+Asaf+Ali+Rd,+Turkman+Gate,+Chandni+Chowk,+Delhi,+110002",
                  "_blank",
                )
              }
              className="flex-1 min-h-[300px] w-full bg-white overflow-hidden shadow-sm border border-slate-100 relative group cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9568205463133!2d77.23075247630737!3d28.631024384164187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd39e8490261%3A0x4f757f29eb7860d8!2sNexGen%20Market%20Research%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1709620000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/5 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 bg-white text-black px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl flex items-center gap-2">
                  Get Directions{" "}
                  <Send
                    size={16}
                    className="rotate-45 text-[var(--color-accent)]"
                  />
                </div>
              </div>

              {/* Floating Badge - Solid background to hide map elements behind it */}
              <div className="absolute top-1 left-1 bg-white px-5 py-3 rounded-2xl border border-border flex items-center gap-3 z-20">
                <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] animate-ping" />
                <div>
                  <p className="text-[10px] font-black text-black uppercase tracking-widest leading-none">
                    Main HQ
                  </p>
                  <p className="text-[11px] text-black font-bold mt-1">
                    Asaf Ali Road, New Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
