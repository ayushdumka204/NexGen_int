"use client";
import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen h-screen bg-white grid-pattern flex items-center justify-center overflow-hidden relative">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[25%] h-[25%] bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[25%] h-[25%] bg-accent/10 rounded-full blur-[80px]" />
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-[900px] h-auto lg:h-[550px] rounded-[32px] shadow-[0_20px_50px_-12px_rgba(44,17,97,0.12)] flex flex-col lg:flex-row overflow-hidden animate-fade-in relative z-10 border border-slate-100">
        
        {/* --- LEFT SIDE: PURPLE PANEL --- */}
        <div className="lg:w-5/12 bg-primary text-white flex flex-col items-center justify-center p-8 relative order-2 lg:order-1">
          {/* SVG Curve */}
          <div className="absolute top-0 right-0 h-full w-16 hidden lg:block">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full fill-white">
              <path d="M100,0 C30,0 30,100 100,100 L100,0 Z" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl font-bold mb-2">Hello, <br/>Welcome!</h1>
            <p className="mb-6 opacity-70 font-normal text-sm">Don't have an account yet?</p>
            <Link href="/signup" 
              className="border-2 border-accent text-accent px-8 py-2 rounded-full font-semibold hover:bg-accent hover:text-primary transition-all duration-300 inline-block text-sm active:scale-95">
              Register
            </Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM PANEL (Centered Content) --- */}
        {/* FIX: justify-center keeps form in the middle of the white box */}
        <div className="lg:w-7/12 p-6 md:p-10 flex flex-col justify-center items-center order-1 lg:order-2 bg-white">
          <div className="w-full max-w-sm">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-primary mb-1">Login</h2>
              <div className="h-1 w-8 bg-accent rounded-full" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div className="relative group">
                <input type="text" required placeholder="Full Name" 
                  className="w-full pl-5 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 text-sm" />
                <User className="absolute right-4 top-3 text-slate-300 w-5 h-5 transition-colors group-focus-within:text-accent" />
              </div>

              {/* Field 2: Email or Number */}
              <div className="relative group">
                <input type="text" required placeholder="Email or Mobile Number" 
                  className="w-full pl-5 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 text-sm" />
                <Mail className="absolute right-4 top-3 text-slate-300 w-5 h-5 transition-colors group-focus-within:text-accent" />
              </div>

              {/* Field 3: Password */}
              <div className="relative group">
                <input type="password" required placeholder="Password" 
                  className="w-full pl-5 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 text-sm" />
                <Lock className="absolute right-4 top-3 text-slate-300 w-5 h-5 transition-colors group-focus-within:text-accent" />
              </div>

              <div className="w-full text-right -mt-2">
                <a href="#" className="text-[11px] font-bold text-slate-400 hover:text-accent transition-colors">Forgot Password?</a>
              </div>

              {/* Sign In Button */}
              <button type="submit" disabled={isLoading}
                className="w-full bg-accent text-primary py-3 rounded-xl font-bold text-base shadow-md shadow-accent/15 hover:bg-accent-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}