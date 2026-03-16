/*
 * DESIGN: Institutional — Compliance & Standards Section
 * Deep navy background (section-navy). Clean card grid with green badge accents.
 * Purpose: Build trust with institutional decision-makers.
 * Shows WCAG, ADA, CMS, multilingual, mobile-first credentials.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const standards = [
  {
    badge: "WCAG 2.1 AA",
    label: "Accessibility Standard",
    desc: "Every site we build meets or exceeds WCAG 2.1 Level AA — the benchmark required by most government and institutional organizations.",
  },
  {
    badge: "ADA Title II",
    label: "Federal Compliance",
    desc: "Our builds satisfy ADA Title II requirements for public entities, including keyboard navigation, screen reader compatibility, and color contrast.",
  },
  {
    badge: "Mobile-First",
    label: "Responsive Design",
    desc: "All sites are designed mobile-first and tested across devices — meeting the responsive design requirements of modern institutional standards.",
  },
  {
    badge: "CMS Training",
    label: "Staff Empowerment",
    desc: "We deliver full CMS training and documentation so your team can manage content independently — no developer dependency after launch.",
  },
  {
    badge: "Bilingual / Multilingual",
    label: "Language Access",
    desc: "We build multilingual sites with proper language switching, RTL support, and localization-ready CMS structures.",
  },
  {
    badge: "Content Migration",
    label: "Seamless Transition",
    desc: "We handle full content migration from legacy systems, ensuring all existing pages, documents, and media are preserved.",
  },
  {
    badge: "Post-Launch Support",
    label: "Ongoing Partnership",
    desc: "We offer maintenance contracts and ongoing support — keeping your site secure, updated, and performing long after launch day.",
  },
  {
    badge: "On-Time Delivery",
    label: "Project Accountability",
    desc: "We work to defined project timelines with milestone-based delivery, transparent communication, and no surprise scope changes.",
  },
];

export default function Compliance() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.18_0.04_155)]">
      <div className="container">
        {/* Header */}
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Standards & Compliance
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight"
            >
              Built to meet{" "}
              <span className="text-primary">every requirement.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/50 text-sm leading-relaxed max-w-xs"
          >
            We speak the language of procurement. Every deliverable is documented, every standard is met, and every deadline is honored.
          </motion.p>
        </div>

        {/* Standards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {standards.map((item, i) => (
            <motion.div
              key={item.badge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="bg-[oklch(0.24_0.035_155)] rounded-lg p-6 border border-[oklch(0.30_0.03_155)] hover:border-primary/40 transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="inline-block bg-primary/15 text-primary text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 rounded mb-3">
                {item.badge}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.12em] mb-2">
                {item.label}
              </div>
              <p className="text-white/65 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: compliance statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary/10 border border-primary/20 rounded-lg p-6"
        >
          <p className="text-white/80 text-sm leading-relaxed max-w-xl">
            <span className="text-white font-semibold">Accessibility is not an add-on.</span>{" "}
            It's built into our design and development process from day one — not retrofitted at the end.
          </p>
          <a
            href="/#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all whitespace-nowrap"
          >
            Work With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
