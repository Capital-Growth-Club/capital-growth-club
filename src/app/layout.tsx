import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-PGWFSTSZ";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalgrowthclub.com"),
  title: {
    default: "Capital Growth Club | Real Estate Lead Generation Engine",
    template: "%s | Capital Growth Club",
  },
  description:
    "We run, manage, and create paid ad campaigns that consistently put qualified buyers and sellers into your real estate team's pipeline every month.",
  keywords: [
    "real estate lead generation",
    "real estate ads",
    "buyer leads",
    "seller leads",
    "real estate marketing agency",
    "facebook ads for real estate",
    "google ads for real estate",
    "real estate team leads",
  ],
  applicationName: "Capital Growth Club",
  openGraph: {
    type: "website",
    siteName: "Capital Growth Club",
    title: "Capital Growth Club | Real Estate Lead Generation Engine",
    description:
      "We run, manage, and create paid ad campaigns that consistently put qualified buyers and sellers into your real estate team's pipeline every month.",
    url: "https://capitalgrowthclub.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Growth Club | Real Estate Lead Generation Engine",
    description:
      "Qualified buyer and seller leads delivered to your real estate team's pipeline every month — guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
