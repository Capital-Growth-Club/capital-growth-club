import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const META_PIXEL_ID = "888354366497921";
const GA4_ID = "G-EVRTM2BRH7";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalgrowthclub.com"),
  title: {
    default: "Capital Growth Club — Done-For-You Cold Client Acquisition",
    template: "%s | Capital Growth Club",
  },
  description:
    "We build service businesses the entire cold client acquisition machine — paid ads, sales funnels, CRM, automated follow-up, and tracking. All built and managed by one team.",
  applicationName: "Capital Growth Club",
  openGraph: {
    type: "website",
    siteName: "Capital Growth Club",
    title: "Capital Growth Club — Done-For-You Cold Client Acquisition",
    description:
      "We build service businesses the entire cold client acquisition machine — paid ads, sales funnels, CRM, automated follow-up, and tracking.",
    url: "https://capitalgrowthclub.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Growth Club — Done-For-You Cold Client Acquisition",
    description:
      "The entire cold client acquisition machine — ads, funnels, CRM, follow-up — built and managed for you.",
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
        </Script>
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
