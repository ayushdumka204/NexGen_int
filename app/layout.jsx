import "./globals.css";
import LayoutWrapper from "./_components/layout/LayoutWrapper";
// import CookieConsent from "./_components/ui/CookieConsent";

export const metadata = {
  title: "NexGen int | Research Consultancy & Support",
  description:
    "NexGen Academic Research offers expert academic research consultancy, research design, methodology, data analysis, and full research support services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          <main>{children}</main>
          {/* <CookieConsent/> */}
        </LayoutWrapper>
      </body>
    </html>
  );
}
