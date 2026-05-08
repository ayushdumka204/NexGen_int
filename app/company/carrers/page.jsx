"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { ArrowRight, Upload, Briefcase, Mail, Linkedin, Phone } from 'lucide-react';

export default function JoinPanelSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    cv: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cv: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Grid with items-start to align content to top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* ==========================================
              LEFT: CONTENT AREA (Removed Top Padding)
          ========================================== */}
          <div className="relative">
            
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] leading-tight mb-6">
              Want to <span className="text-[var(--color-accent)]">Join Us?</span>
            </h2>

            <p className="text-black text-lg leading-relaxed mb-6">
              Opportunities don't happen, you create them! <span className="font-bold text-[var(--color-primary)]">NEXGEN INT</span> is a team of passionate, committed, and talented professionals who believe in success and budding unique talent.
            </p>
            <p className="text-black text-lg leading-relaxed mb-10">
              If you think your profile and our culture is the right match, reach out to us! Come join our family.
            </p>

            {/* Image */}
            <div className="relative w-full aspect-[3/2] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/carrer.jpg"
                alt="NexGen Team"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* ==========================================
              RIGHT: SIMPLIFIED FORM
          ========================================== */}
          <div className="bg-white shadow-xl border border-slate-100 p-8 md:p-10 sticky top-24">
            
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">Apply Online</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Full Name</label>
                <input 
                  type="text" name="name" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Email ID</label>
                <div className="relative">
                  <input 
                    type="email" name="email" 
                    className="w-full px-4 py-3 pl-10 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                    onChange={handleInputChange}
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
                <div className="relative">
                  <input 
                    type="tel" name="phone" 
                    className="w-full px-4 py-3 pl-10 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                    onChange={handleInputChange}
                    required
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                </div>
              </div>

              {/* LinkedIn (Optional) */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">LinkedIn Profile Link <span className="text-black font-normal">(Optional)</span></label>
                <div className="relative">
                  <input 
                    type="url" name="linkedin" 
                    className="w-full px-4 py-3 pl-10 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
                    onChange={handleInputChange}
                  />
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                </div>
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Upload CV</label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-accent transition-colors cursor-pointer bg-slate-50/50">
                  <input 
                    type="file" name="cv" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)]">
                      <Upload className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-black">
                      {formData.cv ? formData.cv.name : "Drag & drop or click to upload"}
                    </span>
                    <span className="text-xs text-black">PDF, DOC up to 5MB</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-base hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-accent/20 mt-6 cursor-pointer"
              >
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}