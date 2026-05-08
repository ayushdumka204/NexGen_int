"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/nexgenresearchint",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://x.com/ResearchNexgen",
      label: "Twitter (X)",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nexgen_official_360/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/nexgen-market-research-services/",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@NexGenMarketResearch",
      label: "YouTube",
    },
  ];

  const insightLinks = [
    { label: "Project Updates and News", href: "/insights/project-updates-and-news" },
    { label: "Blogs and Articles", href: "/insights/blogs-and-articles" },
    { label: "Case Studies", href: "/insights/case-studies" },
  ];

  return (
    <footer className="bg-(--color-primary) text-white pt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
          
          {/* CONTACT */}
          <div className="lg:col-span-2">
            <FooterHeading title="Contact Us" />

            <div className="space-y-5 text-base text-white/80 max-w-md leading-relaxed">
              <div className="flex gap-3 items-start">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                <p>
                  A 26, Block B, Mohan Cooperative Industrial Estate, New Delhi, Delhi 110044
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-accent" size={20} />
                <a
                  href="mailto:mail@nexgenint.com"
                  className="hover:text-accent transition"
                >
                  mail@nexgenint.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-accent" size={20} />
                <a
                  href="tel:+919873177449"
                  className="hover:text-accent transition"
                >
                  +91-98731 77449
                </a>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-16">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-accent hover:text-(--color-primary) transition-all duration-300"
                  >
                    <Icon size={18} />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* INSIGHTS */}
          <MenuColumn title="Insights" links={insightLinks} />

          {/* SERVICES */}
          <MenuColumn
            title="Services"
            links={[
              { label: "Online Research Services", href: "/services/online-research-services" },
              { label: "B2B Marketing Research", href: "/services/b2b-marketing-research" },
              { label: "B2C Marketing Research", href: "/services/b2c-marketing-research" },
              { label: "Qualitative Research", href: "/services/qualitative-research" },
              { label: "Quantitative Research", href: "/services/quantitative-research" },
              { label: "Secondary Research", href: "/services/secondary-research" },
              { label: "Data Collection", href: "/services/data-collection" },
              { label: "Market Share Reports", href: "/services/market-share-reports" },
              { label: "Feasibility and Market Entry", href: "/services/feasibility-and-market-entry" },
            ]}
          />

          {/* INDUSTRIES */}
          <MenuColumn
            title="Industries"
            links={[
              { label: "Manufacturing", href: "/industries/manufacturing" },
              { label: "Healthcare", href: "/industries/healthcare-pharma" },
              { label: "Technology", href: "/industries/technology" },
              { label: "Automobile", href: "/industries/automobile" },
              { label: "Education", href: "/industries/education" },
            ]}
          />
        </div>
      </div>

      {/* 🔥 STRONG BOTTOM */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          
          {/* LEFT */}
          <p>
            © {currentYear} NexGen Market Research Services Pvt. Ltd. All rights reserved.
          </p>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-accent transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-accent transition">
              Terms & Conditions
            </Link>
            <Link href="/confidentiality" className="hover:text-accent transition">
              Confidentiality
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* 🔥 COMPONENTS */

function FooterHeading({ title }) {
  return (
    <h3 className="text-xl font-bold mb-6">
      {title}
      <span className="block w-10 h-0.5 bg-accent mt-2" />
    </h3>
  );
}

function MenuColumn({ title, links }) {
  return (
    <div>
      <FooterHeading title={title} />

      <ul className="space-y-4 text-base text-white/80">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="hover:text-accent transition flex items-center gap-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}