import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Capital Growth Club website (capitalgrowthclub.com).",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 26, 2026";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <header className="relative pt-10 px-6">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Capital Growth Club"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      <section className="relative px-6 pt-12 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Legal
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-white/50 text-sm">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="space-y-10 text-white/75 leading-relaxed">

            {/* Intro */}
            <section>
              <p className="text-white/70 mb-4">
                Welcome to capitalgrowthclub.com (the &ldquo;Site&rdquo;). The
                Site is owned and operated by{" "}
                <strong className="text-white">Agent Growth Club LLC</strong>,
                a Florida limited liability company doing business as{" "}
                <strong className="text-white">Capital Growth Club</strong>{" "}
                (collectively, &ldquo;Capital Growth Club,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Our
                principal business address is 201 Clearwater Dr, West Palm
                Beach, FL 33401.
              </p>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access
                to and use of the Site. By accessing or using the Site, you
                agree to be bound by these Terms. If you do not agree, do not
                use the Site.
              </p>
            </section>

            {/* 1 */}
            <Sec n="1" title="Eligibility">
              <p>
                By using the Site, you represent that you are at least 18 years
                old and, if accessing the Site on behalf of a business or other
                entity, that you have the authority to bind that entity to
                these Terms. The Site is intended for users located in the
                United States. If you access the Site from outside the United
                States, you do so at your own risk and are responsible for
                compliance with applicable local laws.
              </p>
            </Sec>

            {/* 2 */}
            <Sec n="2" title="Use of the Site">
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the Site for any unlawful purpose or in violation of any
                  applicable law or regulation.
                </li>
                <li>
                  Scrape, harvest, or otherwise collect content or data from
                  the Site through automated means without our prior written
                  consent.
                </li>
                <li>
                  Reverse engineer, decompile, or attempt to derive the source
                  code of any portion of the Site.
                </li>
                <li>
                  Interfere with, disrupt, or attempt to gain unauthorized
                  access to the Site, its servers, or any related networks.
                </li>
                <li>
                  Impersonate any person or entity, or misrepresent your
                  affiliation with any person or entity.
                </li>
                <li>
                  Use the Site to transmit malicious code, viruses, or any
                  material designed to interrupt, damage, or limit the
                  functionality of the Site or another party&apos;s computer
                  systems.
                </li>
              </ul>
            </Sec>

            {/* 3 */}
            <Sec n="3" title="Application and Intake Forms">
              <p className="mb-3">
                The Site may invite you to submit information through
                application forms, intake surveys, contact forms, and similar
                tools (including phone-number verification by one-time code).
                By submitting that information you represent that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All information you provide is true, accurate, current, and
                  complete.
                </li>
                <li>
                  You consent to be contacted by Capital Growth Club at the
                  email address, phone number, and other contact information
                  you provide, including by phone call, text/SMS message, and
                  email, in connection with your inquiry, application, and any
                  resulting engagement.
                </li>
                <li>
                  You understand that strategy calls may be recorded for
                  quality, training, and internal review purposes.
                </li>
              </ul>
            </Sec>

            {/* 4 */}
            <Sec n="4" title="Booking and Strategy Calls">
              <p>
                Calls booked through the Site are scheduled in good faith and
                offered subject to availability. No-shows may not be eligible
                for rescheduling, and we reserve the right to release scheduled
                slots to other applicants if you do not appear at your
                scheduled time. Rescheduling, when permitted, must be done at
                least twenty-four (24) hours in advance through the link
                provided in your confirmation.
              </p>
            </Sec>

            {/* 5 */}
            <Sec n="5" title="Marketing Claims, Examples, and Results">
              <p className="mb-3">
                All testimonials, case studies, screenshots, statistics, and
                example results shown anywhere on the Site are illustrative
                only. They reflect outcomes for specific clients in specific
                circumstances and do{" "}
                <strong className="text-white">not</strong> represent typical
                results, guarantees of future performance, or any promise that
                you will achieve similar outcomes.
              </p>
              <p>
                Your results will depend on a wide range of factors outside our
                control, including your market, offer, sales process,
                follow-up, pricing, brand, and individual effort. Past
                performance of any client, campaign, or service is not
                indicative of future results.
              </p>
            </Sec>

            {/* 6 */}
            <Sec n="6" title="The 90-Day Lead Generation Guarantee (Real Estate Agents Only)">
              <p className="mb-3">
                Capital Growth Club&apos;s 90-day lead generation guarantee is
                offered{" "}
                <strong className="text-white">
                  only to real estate agents, teams, and brokerages
                </strong>{" "}
                who engage Capital Growth Club for general lead generation
                services under a separately signed Services Agreement. We do
                not offer any guarantees to clients in any other niche or
                industry.
              </p>
              <p className="mb-3">
                The specific terms, qualifying conditions, lead volume targets,
                budget minimums, and any goal-alignment requirements of the
                guarantee will be reviewed and agreed to in writing during the
                pre-engagement strategy call and in the Services Agreement. If,
                during that pre-engagement review, we and the prospective
                client determine that the client&apos;s stated goals or
                circumstances are not aligned with the 90-day objective, the
                guarantee will not apply to that engagement.
              </p>
              <p className="mb-3">
                The guarantee applies only to the delivery of qualified leads
                as defined in the Services Agreement. It does{" "}
                <strong className="text-white">
                  not extend to whether those leads ultimately close, sign,
                  contract, or transact with the client.
                </strong>{" "}
                Capital Growth Club is not a party to any transaction between
                the client and a lead, has no control over how the client
                interacts with, qualifies, follows up with, or closes a lead,
                and assumes no responsibility for the conduct or decisions of
                either party. The final decision to engage, transact, or close
                rests solely with the lead and the client. Failure of leads to
                close, sign, or convert into clients, transactions, or revenue
                will not constitute a breach of the guarantee, will not entitle
                the client to a refund, credit, or extended free service, and
                will not be grounds for any penalty against Capital Growth
                Club.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  Google Ads campaigns are expressly excluded from the 90-day
                  guarantee.
                </strong>{" "}
                Google Ads performance is driven by real-time local search
                volume, keyword competition, and consumer search behavior
                within the client&apos;s market &mdash; factors that Capital
                Growth Club does not control and cannot forecast with the
                certainty required to underwrite a lead-volume guarantee. Lead
                counts, cost per lead, and qualified-lead delivery under a
                Google Ads campaign will therefore not be counted toward, or
                measured against, any 90-day guarantee threshold, and Google
                Ads engagements are not eligible for the &ldquo;work for
                free&rdquo; remedy. The guarantee, where offered, applies only
                to Meta (Facebook / Instagram) advertising campaigns as
                specified in the Services Agreement.
              </p>
              <p>
                Nothing on the Site itself creates an enforceable guarantee.
                Any rights or remedies under the guarantee arise only from a
                fully executed Services Agreement between Capital Growth Club
                and the applicable client.
              </p>
            </Sec>

            {/* 7 */}
            <Sec n="7" title="Tracking, Analytics, and Cookies">
              <p className="mb-3">
                The Site uses cookies, pixels, tags, and other tracking
                technologies provided by us and by third parties to operate,
                secure, measure, and improve the Site, and to deliver
                advertising. These technologies may collect information such as
                device and browser information, IP address, pages visited,
                referring URLs, interactions on the Site, and similar usage
                data.
              </p>
              <p className="mb-3">
                Third-party services we use include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Meta (Facebook) Pixel and the Meta advertising platform</li>
                <li>Google Analytics</li>
                <li>Google Tag Manager</li>
                <li>Google Ads conversion tracking</li>
                <li>Other advertising, remarketing, and attribution tools</li>
              </ul>
              <p>
                These third parties have their own privacy and data-use
                policies. By using the Site you acknowledge and consent to the
                use of these technologies. You can manage cookies through your
                browser settings, though disabling them may affect site
                functionality.
              </p>
            </Sec>

            {/* 8 */}
            <Sec n="8" title="Third-Party Links and Services">
              <p>
                The Site may contain links or embeds pointing to third-party
                websites, products, or services that we do not own or control
                (including, for example, scheduling widgets, payment
                processors, community platforms such as Skool, and CRM
                services). We are not responsible for the content, accuracy,
                practices, or availability of any third-party site or service.
                Your use of any third-party service is governed by that
                provider&apos;s own terms and privacy policy.
              </p>
            </Sec>

            {/* 9 */}
            <Sec n="9" title="Intellectual Property">
              <p>
                The Site and all of its content &mdash; including text,
                graphics, logos, images, videos, copywriting, ad creatives,
                design elements, page layouts, and the &ldquo;Capital Growth
                Club&rdquo; brand &mdash; are owned by or licensed to Agent
                Growth Club LLC and are protected by United States and
                international intellectual property laws. We grant you a
                limited, non-exclusive, non-transferable, revocable license to
                access and use the Site for your personal or internal business
                use. You may not copy, modify, distribute, sell, lease, or
                create derivative works from any content on the Site without
                our prior written consent.
              </p>
            </Sec>

            {/* 10 */}
            <Sec n="10" title="Disclaimers">
              <p className="mb-3">
                THE SITE AND ALL CONTENT, MATERIALS, AND SERVICES MADE
                AVAILABLE THROUGH THE SITE ARE PROVIDED &ldquo;AS IS&rdquo; AND
                &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND,
                EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW,
                CAPITAL GROWTH CLUB DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT
                LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Site will be uninterrupted,
                error-free, secure, or free of viruses or other harmful
                components. We make no representations or warranties about the
                accuracy, completeness, or reliability of any content on the
                Site, and any reliance you place on such content is at your own
                risk. No advice or information obtained through the Site
                creates any warranty not expressly stated in these Terms or in
                a signed Services Agreement.
              </p>
            </Sec>

            {/* 11 */}
            <Sec n="11" title="Limitation of Liability">
              <p className="mb-3">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL
                CAPITAL GROWTH CLUB, AGENT GROWTH CLUB LLC, OR ANY OF THEIR
                AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
                REVENUE, DATA, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR
                RELATING TO YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED
                OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                Our total aggregate liability to you for all claims arising out
                of or relating to the Site or these Terms will not exceed the
                greater of (a) the amount you paid to Capital Growth Club in
                the twelve (12) months preceding the event giving rise to the
                claim, or (b) one hundred U.S. dollars ($100).
              </p>
            </Sec>

            {/* 12 */}
            <Sec n="12" title="Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Capital
                Growth Club, Agent Growth Club LLC, and their affiliates,
                officers, employees, agents, and licensors from and against any
                claims, liabilities, damages, losses, costs, and expenses
                (including reasonable attorneys&apos; fees) arising out of or
                relating to (a) your use of or access to the Site, (b) your
                violation of these Terms, or (c) your violation of any
                third-party right or applicable law.
              </p>
            </Sec>

            {/* 13 */}
            <Sec n="13" title="Governing Law">
              <p>
                These Terms and any dispute arising out of or relating to them
                or the Site are governed by the laws of the State of Florida,
                without regard to its conflict-of-laws principles. Subject to
                Section 14 (Arbitration), the state and federal courts located
                in Palm Beach County, Florida, will have exclusive jurisdiction
                over any matter not subject to arbitration.
              </p>
            </Sec>

            {/* 14 */}
            <Sec n="14" title="Dispute Resolution and Arbitration">
              <p className="mb-3">
                Any dispute, claim, or controversy arising out of or relating
                to these Terms or your use of the Site will be resolved by{" "}
                <strong className="text-white">
                  final and binding arbitration administered by the American
                  Arbitration Association (&ldquo;AAA&rdquo;)
                </strong>{" "}
                under its Commercial Arbitration Rules then in effect.
                Arbitration will take place in Palm Beach County, Florida,
                unless the parties agree otherwise, and judgment on the
                arbitrator&apos;s award may be entered in any court of
                competent jurisdiction.
              </p>
              <p className="mb-3">
                <strong className="text-white">Class action waiver.</strong>{" "}
                You and Capital Growth Club agree that any arbitration or other
                proceeding will be conducted only on an individual basis and
                not as a class, consolidated, or representative action. The
                arbitrator may not consolidate more than one party&apos;s
                claims or preside over any form of representative or class
                proceeding.
              </p>
              <p>
                Notwithstanding the foregoing, either party may bring an
                individual action in small-claims court, and either party may
                seek injunctive or other equitable relief in a court of
                competent jurisdiction to protect its intellectual property
                rights.
              </p>
            </Sec>

            {/* 15 */}
            <Sec n="15" title="Changes to These Terms">
              <p>
                We may update these Terms from time to time. When we make
                material changes, we will notify users of record by email at
                the address most recently provided to us, and will update the
                &ldquo;Last updated&rdquo; date above. Continued use of the
                Site after notice of the updated Terms constitutes acceptance
                of those changes. If you do not agree to the updated Terms, you
                must stop using the Site.
              </p>
            </Sec>

            {/* 16 */}
            <Sec n="16" title="Severability and Entire Agreement">
              <p>
                If any provision of these Terms is held to be invalid or
                unenforceable, that provision will be enforced to the maximum
                extent permitted and the remaining provisions will remain in
                full force and effect. These Terms, together with any other
                legal notices or agreements expressly referenced here,
                constitute the entire agreement between you and Capital Growth
                Club regarding the Site. No failure or delay by us in
                exercising any right under these Terms will operate as a waiver
                of that right.
              </p>
            </Sec>

            {/* 17 */}
            <Sec n="17" title="Contact">
              <p className="mb-3">
                Questions about these Terms? Contact us:
              </p>
              <div className="bg-brand-card border border-white/10 rounded-xl p-5 text-sm leading-relaxed">
                <p className="text-white font-semibold mb-2">
                  Agent Growth Club LLC (d/b/a Capital Growth Club)
                </p>
                <p className="text-white/70">
                  201 Clearwater Dr<br />
                  West Palm Beach, FL 33401
                </p>
                <p className="text-white/70 mt-3">
                  Email:{" "}
                  <a
                    href="mailto:support@capitalgrowthclub.com"
                    className="text-brand-gold hover:underline"
                  >
                    support@capitalgrowthclub.com
                  </a>
                </p>
              </div>
            </Sec>

          </div>

          {/* Back link */}
          <div className="text-center mt-14">
            <Link
              href="/"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              ← Return to homepage
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-6">
        <p className="text-center text-white/30 text-sm">
          &copy; 2026 Capital Growth Club. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

function Sec({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-baseline gap-3">
        <span className="text-brand-gold text-base font-semibold tracking-wider">
          {n}.
        </span>
        <span>{title}</span>
      </h2>
      <div className="text-white/70 leading-relaxed text-[15px] md:text-base">
        {children}
      </div>
    </section>
  );
}
