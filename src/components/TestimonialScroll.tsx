"use client";

import { useRef, useEffect, useCallback, useState } from "react";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const defaultTestimonials: Testimonial[] = [
  { quote: "We were getting tons of calls from our Google Ads but half of them were for jobs we don't even do. Nobody had set up negative keywords. CGC cleaned up our campaigns and our cost per booked job dropped by 55% in the first month.", author: "Jake R.", role: "Home Services — HVAC" },
  { quote: "Our biggest issue was new patient no-shows. People would book online and never walk through the door. CGC built an automated reminder and confirmation sequence — texts, emails, the works. Our no-show rate went from 35% down to 8%.", author: "Dr. Sarah M.", role: "Medical Practice" },
  { quote: "We were spending $15K/mo on ads and getting case leads, but our intake team wasn't calling them fast enough. CGC set up a system where every new lead gets a call within 90 seconds. Our signed retainer rate doubled.", author: "Marcus T.", role: "Legal — Personal Injury" },
  { quote: "In financial services, trust is everything. CGC restructured our entire funnel so prospects saw three pieces of educational content before we ever asked for a consultation. Our consultation-to-client conversion went from 12% to 34%.", author: "Angela P.", role: "Financial Advisory" },
  { quote: "Storm season is make or break for us. We were bidding on 'roof repair' and competing with every roofer in the metro. CGC rebuilt our campaigns around emergency and insurance-specific keywords and built separate landing pages for each. Our cost per inspection dropped from $280 to $95.", author: "David & Lisa K.", role: "Roofing Company" },
  { quote: "I had a $15K coaching program and was running the same 4 ads for five months straight. CGC came in with a creative rotation strategy — 30+ new hooks per month — and my application flow tripled while my cost per application went down.", author: "Chris W.", role: "Coaching — Business Strategy" },
  { quote: "Our problem was never leads — we had plenty of buyer and seller inquiries. The problem was our follow-up. Leads would come in and sit untouched for days. CGC built a nurture system that follows up automatically for 6 months. We closed 3 listings last quarter from leads that were 90+ days old.", author: "Priya S.", role: "Real Estate Team" },
  { quote: "Our Google LSA was barely getting us calls because our profile was half-filled and we had 12 reviews. CGC helped us build a review generation system and optimized the profile. Within 8 weeks we went from 3 calls a week to 15.", author: "Tom H.", role: "Home Services — Plumbing" },
  { quote: "We were running Facebook ads to our homepage. That was the whole strategy. CGC built us a dedicated new patient landing page with an intro offer and our conversion rate went from 1.9% to 11%. Same ad spend, completely different result.", author: "Rachel & Ben F.", role: "Dental Practice" },
  { quote: "We had no idea what our cost to acquire a policy was. We just knew we were spending money on ads and getting some quotes. CGC built tracking from ad click all the way to bound policy. Turns out our best channel was one we were about to cut.", author: "Michael D.", role: "Insurance Agency" },
  { quote: "I was running the same Botox and filler specials everyone else was running. CGC repositioned our offer around a signature consultation experience and built a funnel around it. Our average treatment value went up 40% because we stopped competing on price.", author: "Stephanie L.", role: "Med Spa" },
  { quote: "In solar, the sale happens in the home — but getting the appointment set is where most companies bleed out. CGC built a pre-qualification funnel that filters out renters and low-credit leads before they ever hit our calendar. Our in-home close rate jumped from 22% to 41%.", author: "Jordan & Kyle M.", role: "Solar Installation" },
];

export default function TestimonialScroll({ testimonials = defaultTestimonials }: { testimonials?: Testimonial[] } = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const velocityRef = useRef(-0.5); // auto-scroll speed (px per frame)
  const isDragging = useRef(false);
  const dragStart = useRef(0);
  const dragPos = useRef(0);
  const lastDragX = useRef(0);
  const lastTime = useRef(0);
  const userVelocity = useRef(0);
  const [, setTick] = useState(0); // force re-render for initial paint

  const getHalfWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 2;
  }, []);

  const animate = useCallback(() => {
    if (!trackRef.current) return;

    const halfWidth = getHalfWidth();
    if (halfWidth === 0) {
      animRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!isDragging.current) {
      // Decay user velocity toward auto-scroll speed
      if (Math.abs(userVelocity.current) > 0.6) {
        userVelocity.current *= 0.97;
        posRef.current += userVelocity.current;
      } else {
        userVelocity.current = 0;
        posRef.current += velocityRef.current;
      }
    }

    // Wrap position for infinite loop
    if (posRef.current <= -halfWidth) {
      posRef.current += halfWidth;
    } else if (posRef.current > 0) {
      posRef.current -= halfWidth;
    }

    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    animRef.current = requestAnimationFrame(animate);
  }, [getHalfWidth]);

  useEffect(() => {
    // Trigger re-render after mount so getHalfWidth works
    setTick(1);
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  function handlePointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    dragStart.current = e.clientX;
    dragPos.current = posRef.current;
    lastDragX.current = e.clientX;
    lastTime.current = Date.now();
    userVelocity.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current;
    posRef.current = dragPos.current + dx;

    // Track velocity
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      userVelocity.current = (e.clientX - lastDragX.current) / Math.max(dt, 1) * 16;
    }
    lastDragX.current = e.clientX;
    lastTime.current = now;
  }

  function handlePointerUp() {
    isDragging.current = false;
  }

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{ width: "max-content", touchAction: "pan-y" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[340px] md:w-[380px] bg-brand-card rounded-xl p-7 border border-white/5 flex flex-col gap-4"
          >
            <div className="text-brand-gold text-sm tracking-widest">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-white/70 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
            <div>
              <span className="text-white font-semibold text-sm">{t.author}</span>
              <span className="text-white/30 text-xs ml-2">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
