"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Auto scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Pages where Header/Footer should be hidden
  const hideHeaderFooter = pathname === "/login" || pathname === "/signup" || pathname === "/company/join-paid-surveys";

  return (
    <>
      {/* Show AnnouncementBar only if not hidden */}
      {!hideHeaderFooter && <AnnouncementBar />}

      {/* Show Navbar/Footer only if not hidden */}
      {!hideHeaderFooter && <Navbar />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  );
}
