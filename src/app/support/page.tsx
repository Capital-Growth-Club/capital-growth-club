import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book A Support Call With Our Team",
  description:
    "Schedule time with the Capital Growth Club team for training, strategy, or support on your campaigns, CRM, and follow-up systems.",
  openGraph: {
    title: "Book A Support Call | Capital Growth Club",
    description:
      "Schedule time with our team for training, strategy, or support on your campaigns and systems.",
    url: "https://capitalgrowthclub.com/support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book A Support Call | Capital Growth Club",
    description:
      "Schedule time with our team for training, strategy, or support on your campaigns and systems.",
  },
  robots: { index: false, follow: false },
};

const CALENDAR_URL =
  "https://api.leadconnectorhq.com/widget/booking/RClPCEPUdTmeo5GPylPa";

export default function SupportBookingPage() {
  return (
    <>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-24">
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.png"
              alt="Capital Growth Club"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>

          <div className="text-center mb-10">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              For Active Clients
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Book Your Training or{" "}
              <span className="gradient-text">Support Call.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Pick a time that works for you. We&apos;ll review your campaigns,
              walk through whatever you&apos;re stuck on, and make sure your system
              keeps producing.
            </p>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src={CALENDAR_URL}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="support-booking"
              className="min-h-[800px]"
            />
          </div>

          <p className="text-center text-white/30 text-sm mt-8">
            Need urgent help? Reach out in your client Slack channel.
          </p>
        </div>
      </main>
    </>
  );
}
