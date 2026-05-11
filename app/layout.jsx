import "./globals.css";
import LayoutWrapper from "./_components/layout/LayoutWrapper";
// import CookieConsent from "./_components/ui/CookieConsent";

export const metadata = {
  title: "Market Research Company in Delhi, India | Customer Research",
  description:
    "NexGen is a leading market research company delivering consumer insights and data-driven strategies for B2B/B2C growth, feasibility studies, and surveys.",
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
