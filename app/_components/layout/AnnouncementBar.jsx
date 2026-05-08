"use client";

import { FiMail, FiPhone } from "react-icons/fi";

export default function AnnouncementBar() {
  return (
    // 'hidden' mobile par gayab kar dega
    // 'md:sticky md:flex' desktop par wapis layega aur sticky banayega
    <div className="hidden md:sticky top-0 z-100 md:flex h-10 w-full items-center bg-primary text-white border-b border-white/5">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 text-[12px] font-semibold tracking-[0.2em]">

        {/* LEFT - EMAIL */}
        <a
          href="mailto:mail@nexgenint.com"
          className="flex items-center gap-2 hover:text-accent transition-colors"
        >
          <FiMail className="text-accent" size={16} />
          <span>mail@nexgenint.com</span>
        </a>

        {/* RIGHT - PHONE */}
        <a
          href="tel:+918630831208"
          className="flex items-center gap-2 hover:text-accent transition-colors"
        >
          <FiPhone className="text-accent" size={16} />
          <span>+91 86308 31208</span>
        </a>

      </div>
    </div>
  );
}