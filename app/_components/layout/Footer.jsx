"use client";

import React from "react";
import Link from "next/link";
import { 
  LogIn,
  UserPlus
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Background updated to #2c1161 as requested
    <footer className="mt-20 font-sans bg-[#2c1161] text-slate-300 border-t border-purple-900/50">
      
      {/* --- TOP SECTION --- */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand + Intro + Social (Exact UI Style) */}
          <div>
            <h2 className="text-3xl font-black text-white tracking-tighter mb-5">
              NexGen<span className="text-accent"> Int.</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 text-slate-200 font-medium">
              Empowering global enterprises with high-precision data frameworks and strategic market insights.
            </p>
            
            <p className="uppercase text-[11px] text-accent font-black tracking-[0.3em] mb-5">
              FOLLOW US
            </p>

            <div className="flex flex-wrap gap-5 items-center">
              {/* Facebook */}
              <a href="https://www.facebook.com/nexgenresearchint" target="_blank" className="transition-transform hover:scale-110">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook" className="h-7 w-7" />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/nexgen-market-research-services/" target="_blank" className="transition-transform hover:scale-110">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" className="h-7 w-7" />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/nexgen_official_360/" target="_blank" className="transition-transform hover:scale-110">
                <img src="https://cdn-icons-png.flaticon.com/512/15707/15707749.png" alt="Instagram" className="h-7 w-7" />
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@NexGenMarketResearch" target="_blank" className="transition-transform hover:scale-110">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info (Exact Reference Style) */}
          <div>
            <p className="text-white text-[12px] font-black uppercase tracking-[0.3em] mb-6">
              CONTACT US
            </p>

            <div className="text-[15px] space-y-5 mb-6">
              <div>
                <span className="font-bold text-accent block mb-1 uppercase text-[10px] tracking-widest">Delhi Office:</span>
                <p className="text-slate-100 font-medium leading-relaxed">A 26, Block B, Mohan Cooperative Industrial Estate, New Delhi, 110044</p>
              </div>
              <div>
                <span className="font-bold text-accent block mb-1 uppercase text-[10px] tracking-widest">Haldwani Office:</span>
                <p className="text-slate-100 font-medium leading-relaxed">Bareilly - Nainital Rd, near Mahaveer Flour Mill, Gorapadao, Haldwani, 263139</p>
              </div>
            </div>

            <ul className="space-y-4 text-[15px] font-bold">
              <li className="flex items-center gap-3">
                <span className="text-accent text-lg">☎</span>
                <a href="tel:+919873177449" className="hover:text-accent transition text-white">+91-98731 77449</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-lg">✉</span>
                <a href="mailto:mail@nexgenint.com" className="hover:text-accent transition break-all text-white">mail@nexgenint.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (› Style) */}
          <div>
            <p className="text-white text-[12px] font-black uppercase tracking-[0.3em] mb-6">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3.5 text-[15px] font-medium">
              {[
                { label: "B2B Market Research", href: "/services/b2b-marketing-research" },
                { label: "Quantitative Analysis", href: "/services/quantitative-research" },
                { label: "Qualitative Insights", href: "/services/qualitative-research" },
                { label: "Data Collection", href: "/services/data-collection" },
                { label: "Industries", href: "/industries" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-accent hover:translate-x-1 transition-all duration-200"
                >
                  › {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Start a Project + Auth */}
          <div>
            <p className="text-white text-[12px] font-black uppercase tracking-[0.3em] mb-6">
              START A PROJECT
            </p>
            <p className="text-[15px] leading-relaxed mb-8 text-slate-200 font-medium">
              Ready to take your business to the next level? Let&apos;s discuss your research goals today.
            </p>
            
            <div className="space-y-3">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-[12px] font-black uppercase tracking-widest text-primary hover:opacity-90 transition-all shadow-lg shadow-accent/10"
              >
                Get in Touch
              </Link>
              
              <div className="flex gap-2">
                <Link href="/login" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-bold text-white hover:bg-white/10 transition">
                  <LogIn size={14} className="text-accent" /> Login
                </Link>
                <Link href="/signup" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-bold text-white hover:bg-white/10 transition">
                  <UserPlus size={14} className="text-accent" /> Sign Up
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="bg-black/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto py-8 flex flex-col items-center justify-center text-center gap-4 px-6">
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/80">
            <Link href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
            <Link href="/confidentiality" className="hover:text-accent transition">Confidentiality</Link>
            <Link href="/terms-and-conditions" className="hover:text-accent transition">Terms & Conditions</Link>
          </div>
          <p className="text-[10px] font-bold text-white/60 tracking-widest uppercase">
            © {currentYear} NexGen Market Research Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;