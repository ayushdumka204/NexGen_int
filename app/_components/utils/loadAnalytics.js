// export function loadGoogleAnalytics() {
//   if (typeof window === "undefined") return;

//   if (window.gtag) return;

//   const script = document.createElement("script");
//   script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
//   script.async = true;
//   document.head.appendChild(script);

//   window.dataLayer = window.dataLayer || [];
//   function gtag() {
//     window.dataLayer.push(arguments);
//   }

//   window.gtag = gtag;
//   gtag("js", new Date());
//   gtag("config", "G-XXXXXXXXXX");
// }
