/*
 * DESIGN: Warm — Full-width Photo CTA Break
 * Photo background with warm dark overlay.
 * Bold serif headline with golden amber accent word.
 * Single CTA button. Inspired by Mentee's mid-page break.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/hero-community-2_ceaeeeb0.jpg";

export default function MissionCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Warm dark overlay — slightly golden tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.04_155/0.92)] via-[oklch(0.14_0.03_120/0.88)] to-[oklch(0.12_0.04_155/0.92)]" />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-display)] font-bold text-white leading-[1.15] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
          >
            Technology should serve the{" "}
            <span className="text-[oklch(0.78_0.14_75)] italic">community</span>,
            <br />not the other way around.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We understand the procurement cycles, compliance requirements, and community expectations that come with institutional work. Our process is designed to be transparent, accountable, and built for stakeholder review at every stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/rfp"
              className="inline-flex items-center gap-2 bg-[oklch(0.78_0.14_75)] text-[oklch(0.15_0.04_75)] font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-[oklch(0.82_0.12_75)] transition-all shadow-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
