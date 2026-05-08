"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileDropdown = useCallback((menu) => {
    setActiveMobileMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setActiveMobileMenu(null);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [mobileMenuOpen]);

  return (
    // Navbar.jsx ka header tag
    <header className="sticky top-0 md:top-10 z-[90] w-full border-b border-border/50 bg-white shadow-sm transition-transform duration-300 ease-in-out [transform:translateZ(0)] [backface-visibility:hidden]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="relative z-10 flex items-center shrink-0"
            aria-label="NexGen Home"
          >
            <div className="relative h-8 w-28 md:h-10 md:w-32">
              <Image
                src="/logo.png"
                alt="NexGen Market Research Logo"
                fill
                priority
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Changed to xl:flex (Visible > 1280px) */}
          <nav
            className="hidden xl:flex items-center gap-8 text-[15px] font-semibold text-black"
            aria-label="Main Navigation"
          >
            <NavLink href="/">Home</NavLink>

            {/* Services */}
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 py-2 hover:text-accent transition-colors duration-200"
              >
                Services
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180 group-hover:text-accent"
                />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl border border-border bg-white p-6 shadow-2xl min-w-150">
                  <div className="flex gap-10">
                    <MenuColumn title="Research Method">
                      <MenuLink href="/services/qualitative-research">
                        Qualitative Research
                      </MenuLink>
                      <MenuLink href="/services/quantitative-research">
                        Quantitative Research
                      </MenuLink>
                      <MenuLink href="/services/online-research-services">
                        Online Research Services
                      </MenuLink>
                      <MenuLink href="/services/secondary-research">
                        Secondary Research
                      </MenuLink>
                      <MenuLink href="/services/data-collection">
                        Data Collection
                      </MenuLink>
                    </MenuColumn>

                    <MenuColumn title="Reports & Strategy">
                      <MenuLink href="/services/market-share-reports">
                        Market Share Reports
                      </MenuLink>
                      <MenuLink href="/services/feasibility-and-market-entry">
                        Feasibility and Market Entry
                      </MenuLink>
                      <MenuLink href="/services/competitor-analysis">
                        Competitor Analysis
                      </MenuLink>
                      <MenuLink href="/services/consulting-services">
                        Consulting Services
                      </MenuLink>
                      <MenuLink href="/services/survey-programming-and-tabulation">
                        Survey Programming and Tabulation
                      </MenuLink>
                      <MenuLink href="/services/translation-and-transcription">
                        Translation and Transcription
                      </MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Specialized Service">
                      <MenuLink href="/services/start-up-research-solutions">
                        Start-up Research Solutions
                      </MenuLink>
                      <MenuLink href="/services/academic-research-support">
                        Academic Research Support
                      </MenuLink>
                      <MenuLink href="/services/mystery-shopping">
                        Mystery Shopping
                      </MenuLink>
                      <MenuLink href="/services/social-research">
                        Social-Research
                      </MenuLink>
                      <MenuLink href="/services/agriculture-research">
                        Agriculture Research
                      </MenuLink>
                      <MenuLink href="/services/e-market-research">
                        E-Market Research
                      </MenuLink>
                      <MenuLink href="/services/b2b-marketing-research">
                        B2B Marketing Research
                      </MenuLink>
                      <MenuLink href="/services/b2c-marketing-research">
                        B2C Marketing Research
                      </MenuLink>
                    </MenuColumn>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="relative group">
              <Link
                href="/industries"
                className="flex items-center gap-1 py-2 hover:text-accent transition-colors duration-200"
              >
                Industries
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl border border-border bg-white p-6 shadow-2xl min-w-100">
                  <div className="flex gap-10">
                    <MenuColumn title="Primary Sectors">
                      <MenuLink href="/industries/healthcare-pharma">
                        Healthcare & Pharma
                      </MenuLink>
                      <MenuLink href="/industries/technology">
                        Technology and IT
                      </MenuLink>
                      <MenuLink href="/industries/manufacturing">
                        Manufacturing
                      </MenuLink>
                      <MenuLink href="/industries/automobile">
                        Automobile
                      </MenuLink>
                      <MenuLink href="/industries/education">
                        Education
                      </MenuLink>
                    </MenuColumn>
                    <MenuColumn title="More Industries">
                      <MenuLink href="/industries/fmcg-and-retail">
                        FMCG and Retail
                      </MenuLink>
                      <MenuLink href="/industries/financial-services">
                        Financial Services
                      </MenuLink>
                      <MenuLink href="/industries/real-estate">
                        Real Estate
                      </MenuLink>
                      <MenuLink href="/industries/direct-to-consumer">
                        D2C
                      </MenuLink>
                    </MenuColumn>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="relative group">
              <Link
                href="/solutions"
                className="flex items-center gap-1 py-2 hover:text-accent transition-colors duration-200"
              >
                Solutions
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl border border-border bg-white p-6 shadow-2xl min-w-62.5">
                  <MenuColumn title="By Business Need">
                    <MenuLink href="/solutions/brand-health-tracking">
                      Brand Health Tracking
                    </MenuLink>
                    <MenuLink href="/solutions/consumer-segmentation">
                      Customer Experience (CX)
                    </MenuLink>
                    <MenuLink href="/solutions/usage-and-attitude">
                      Usage and Attitude (U&A)
                    </MenuLink>
                    <MenuLink href="/solutions/pricing-research">
                      Pricing Research
                    </MenuLink>
                    <MenuLink href="/solutions/product-testing-and-concept">
                      Product Testing and Concept
                    </MenuLink>
                    <MenuLink href="/solutions/advertising-research">
                      Advertising Research
                    </MenuLink>
                    <MenuLink href="/solutions/consumer-segmentation">
                      Consumer Segmentation
                    </MenuLink>
                  </MenuColumn>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="relative group">
              <Link
                href="/company/about-us"
                className="flex items-center gap-1 py-2 hover:text-accent transition-colors duration-200"
              >
                About
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl border border-border bg-white p-6 shadow-2xl min-w-62.5">
                  <div className="flex gap-8">
                    {/* <MenuColumn title="Who we are">
                      <MenuLink href="/company/about-us">About NexGen</MenuLink>
                    </MenuColumn> */}
                    {/* <MenuColumn title="Presence">
                      <MenuLink href="/company/all-india-coverage-and-offices">
                        All India Coverage and Offices
                      </MenuLink>
                      <MenuLink href="/company/join-panel">
                        Freelance Research Network
                      </MenuLink>
                    </MenuColumn> */}
                    <MenuColumn title="	Work With Us">
                      <MenuLink href="/company/carrers">Careers</MenuLink>
                      <MenuLink href="/company/join-paid-surveys">
                        Join Paid Surveys
                      </MenuLink>
                    </MenuColumn>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="relative group">
              <Link
                href="/insights"
                className="flex items-center gap-1 py-2 hover:text-accent transition-colors duration-200"
              >
                Insights
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-xl border border-border bg-white p-6 shadow-2xl min-w-50 flex gap-8">
                  <MenuColumn title="Content">
                    <MenuLink href="/insights/blogs-and-articles">
                      Blogs and Articles
                    </MenuLink>
                    <MenuLink href="/insights/case-studies">
                      Case Studies
                    </MenuLink>
                    {/* <MenuLink href="/insights/industry-reports">
                      Industry Reports
                    </MenuLink> */}
                  </MenuColumn>
                  <MenuColumn title="Updates">
                    <MenuLink href="/insights/project-updates-and-news">
                      Project Updates and News
                    </MenuLink>
                    {/* <MenuLink href="/insights/media">Media</MenuLink>
                    <MenuLink href="/insights/events">Events</MenuLink> */}
                  </MenuColumn>
                </div>
              </div>
            </div>

            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Buttons visible > 640px (sm) - Will show on 1024px (lg) */}
            <Link
              href="/company/join-paid-surveys"
              className="hidden sm:inline-flex items-center rounded-full bg-accent px-4 py-2.5 text-[13px] font-bold text-white hover:bg-accent-hover transition-all duration-200 active:scale-95"
            >
              Join Paid Surveys
            </Link>

            <Link
              href="/login"
              className="hidden sm:inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-[13px] font-bold text-white hover:bg-primary-hover transition-all duration-200 active:scale-95"
            >
              Sign in
            </Link>

            {/* Hamburger Icon: Visible < 1280px (xl) - Will show on 1024px (lg) */}
            <button
              className="xl:hidden z-60 flex items-center justify-center p-2 text-primary hover:bg-muted rounded-md transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={2.5} />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible < 1280px (xl) */}
      <AnimatePresence>
        {mobileMenuOpen && (
<motion.div
  // ... animations
  className="xl:hidden fixed top-14 left-0 w-full bg-white z-80 shadow-xl overflow-hidden"
  style={{ height: 'calc(100vh - 3.5rem)' }} // 3.5rem = 56px (Navbar height)
>
            <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-7rem)]">
              <MobileLink href="/" onClick={closeMobileMenu}>
                Home
              </MobileLink>

              <MobileDropdown
                title="Services"
                href="/services"
                isOpen={activeMobileMenu === "services"}
                toggle={() => handleMobileDropdown("services")}
                closeMenu={closeMobileMenu}
              >
                <MenuColumn title="Research Method">
                  <MobileMenuLink href="/services/qualitative-research">
                    Qualitative Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/quantitative-research">
                    Quantitative Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/online-research-services">
                    Online Services
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/secondary-research">
                    Secondary Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/data-collection">
                    Data Collection
                  </MobileMenuLink>
                </MenuColumn>

                <MenuColumn title="Reports & Strategy">
                  <MobileMenuLink href="/services/market-share-reports">
                    Market Share Reports
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/feasibility-study">
                    Feasibility Study
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/competitor-analysis">
                    Competitor Analysis
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/consulting-services">
                    Consulting Services
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/survey-programming-and-tabulation">
                    Survey Programming and Tabulation
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/translation-and-transcription">
                    Translation and Transcription
                  </MobileMenuLink>
                </MenuColumn>

                <MenuColumn title="Specialized">
                  <MobileMenuLink href="/services/start-up-solutions">
                    Start-up Solutions
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/academic-support">
                    Academic Support
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/mystery-shopping">
                    Mystery Shopping
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/social-research">
                    Social-Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/agriculture-research">
                    Agriculture Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/e-market-research">
                    E-Market Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/b2b-marketing-research">
                    B2B Marketing Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/services/b2c-marketing-research">
                    B2C Marketing Research
                  </MobileMenuLink>
                </MenuColumn>
              </MobileDropdown>

              <MobileDropdown
                title="Industries"
                href="/industries"
                isOpen={activeMobileMenu === "industries"}
                toggle={() => handleMobileDropdown("industries")}
                closeMenu={closeMobileMenu}
              >
                <MenuColumn title="Primary Sectors">
                  <MobileMenuLink href="/industries/healthcare-pharma">
                    Healthcare & Pharma
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/technology">
                    Technology and IT
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/manufacturing">
                    Manufacturing
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/automobile">
                    Automobile
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/education">
                    Education
                  </MobileMenuLink>
                </MenuColumn>
                <MenuColumn title="More Industries">
                  <MobileMenuLink href="/industries/education">
                    FMCG and Retail
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/financial-services">
                    Financial Services
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/real-estate">
                    Real Estate
                  </MobileMenuLink>
                  <MobileMenuLink href="/industries/d2c">D2C</MobileMenuLink>
                </MenuColumn>
              </MobileDropdown>

              <MobileDropdown
                title="Solutions"
                href="/solutions"
                isOpen={activeMobileMenu === "solutions"}
                toggle={() => handleMobileDropdown("solutions")}
                closeMenu={closeMobileMenu}
              >
                <MenuColumn title="By Business Need">
                  <MobileMenuLink href="/solutions/brand">
                    Brand Tracking
                  </MobileMenuLink>
                  <MobileMenuLink href="/solutions/cx">
                    Customer Experience
                  </MobileMenuLink>
                  <MobileMenuLink href="/solutions/usage-and-attitude">
                    Usage and Attitude (U&A)
                  </MobileMenuLink>
                  <MobileMenuLink href="/solutions/pricing-research">
                    Pricing Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/solutions/product-testing-and-concept">
                    Product Testing and Concept
                  </MobileMenuLink>
                  <MobileMenuLink href="/solutions/advertising-research">
                    Advertising Research
                  </MobileMenuLink>
                  <MobileMenuLink href="/solutions/consumer-segmentation">
                    Consumer Segmentation
                  </MobileMenuLink>
                </MenuColumn>
              </MobileDropdown>

              <MobileDropdown
                title="Company"
                href="/company"
                isOpen={activeMobileMenu === "company"}
                toggle={() => handleMobileDropdown("company")}
                closeMenu={closeMobileMenu}
              >
                <MenuColumn title="Who we are">
                  <MobileMenuLink href="/company/about-nexGen">
                    About NexGen
                  </MobileMenuLink>
                </MenuColumn>
                {/* <MenuColumn title="Presence">
                  <MobileMenuLink href="/company/all-india-coverage-and-offices">
                    All India Coverage and Offices
                  </MobileMenuLink>
                </MenuColumn> */}
                <MenuColumn title="Work With Us">
                  <MobileMenuLink href="/company/careers">
                    Careers
                  </MobileMenuLink>
                  <MobileMenuLink href="/company/join-our-panel">
                    Join Our Panel
                  </MobileMenuLink>
                </MenuColumn>
              </MobileDropdown>

              <MobileDropdown
                title="Insights"
                href="/insights"
                isOpen={activeMobileMenu === "insights"}
                toggle={() => handleMobileDropdown("insights")}
                closeMenu={closeMobileMenu}
              >
                <MenuColumn title="Content">
                  <MobileMenuLink href="/insights/blogs-and-articles">
                    Blogs and Articles
                  </MobileMenuLink>
                  <MobileMenuLink href="/insights/case-studies">
                    Case Studies
                  </MobileMenuLink>
                  {/* <MobileMenuLink href="/insights/industry-reports">
                    Industry Reports
                  </MobileMenuLink> */}
                </MenuColumn>
                <MenuColumn title="Updates">
                  <MobileMenuLink href="/insights/project-updates-and-news">
                    Project Updates and News
                  </MobileMenuLink>
                  {/* <MobileMenuLink href="/insights/media">Media</MobileMenuLink>
                  <MobileMenuLink href="/insights/events">
                    Events
                  </MobileMenuLink> */}
                </MenuColumn>
              </MobileDropdown>

              <MobileLink href="/contact" onClick={closeMobileMenu}>
                Contact
              </MobileLink>

              {/* Buttons inside Mobile Menu: Visible only < 640px (sm) */}
              <div className="pt-4 mt-3 border-t border-border grid grid-cols-2 gap-3 sm:hidden">
                <Link
                  href="/company/join-paid-surveys"
                  onClick={closeMobileMenu}
                  className="flex justify-center items-center rounded-full bg-accent py-2.5 text-sm font-bold text-white shadow-sm"
                >
                  Join Paid Surveys
                </Link>
                <Link
                  href="/signin"
                  onClick={closeMobileMenu}
                  className="flex justify-center items-center rounded-full bg-primary py-2.5 text-sm font-bold text-white"
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- Sub-Components ---------- */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-1 py-2 hover:text-accent transition-colors duration-200 group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MenuColumn({ title, children }) {
  return (
    <div className="flex flex-col">
      {title && (
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-accent">
          {title}
        </p>
      )}
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function MenuLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block py-1.5 text-[14px] text-black hover:text-primary hover:bg-muted/50 px-2 rounded-md font-medium whitespace-nowrap transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      className="block text-base font-semibold text-black py-2.5 px-1 border-b border-border/50"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function MobileMenuLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block py-2 pl-2 text-sm text-black hover:text-accent border-l-2 border-transparent hover:border-accent transition-all"
    >
      {children}
    </Link>
  );
}

function MobileDropdown({ title, href, isOpen, toggle, closeMenu, children }) {
  return (
    <div className="border-b border-border/50">
      <div className="flex items-center justify-between">
        {/* Main Link - Clickable */}
        <Link
          href={href}
          onClick={closeMenu}
          className="flex-1 text-base font-semibold text-black py-2.5 px-1"
        >
          {title}
        </Link>

        {/* Dropdown Toggle Button */}
        <button onClick={toggle} className="p-2 text-black z-10">
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={18} className="text-gray-400" />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-3 flex flex-col gap-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
