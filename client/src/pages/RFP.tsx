/*
 * DESIGN: Institutional — Our Approach Page
 * Explains how Civic Firm works with public organizations.
 * Navy header band. White content sections. Green accents.
 * Positions Civic Firm as a structured, capable institutional partner.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/hero-gov-1-6P3667TTpmnuzabATGBuBS.webp";

const howWeWork = [
  {
    num: "01",
    title: "We Understand Your Mission",
    desc: "Every engagement starts with listening. We learn your organization's goals, stakeholders, compliance requirements, and community context before proposing a single solution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Analyze the Requirements",
    desc: "Whether it's a formal procurement process or a direct engagement, we study every requirement — compliance standards, evaluation criteria, scope, timeline, and budget — to ensure we can deliver exceptional results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We Build a Tailored Plan",
    desc: "Our proposals are not templates. Each plan is written specifically for the issuing organization — addressing stated goals, compliance requirements, community context, and success criteria point by point.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "We Demonstrate Compliance",
    desc: "Government and institutional projects require documented proof of standards — WCAG 2.1 AA, ADA Title II, Section 508, mobile-first design, CMS training. We include this evidence in every engagement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "We Deliver — On Time, On Spec",
    desc: "We execute with rigor: milestone-based delivery, stakeholder review gates, documented deliverables, and proactive communication throughout. No surprises, no scope creep.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "We Stay After Launch",
    desc: "Our engagements include post-launch support, staff training, documentation, and ongoing maintenance options. We build long-term relationships, not one-off deliveries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const credentials = [
  { badge: "WCAG 2.1 AA", desc: "Full accessibility compliance on every build" },
  { badge: "ADA Title II", desc: "Federal compliance for public entities" },
  { badge: "Section 508", desc: "Federal technology accessibility standards" },
  { badge: "Mobile-First", desc: "Responsive design tested across all devices" },
  { badge: "CMS Training", desc: "Full staff training and documentation included" },
  { badge: "Content Migration", desc: "Seamless transition from legacy systems" },
  { badge: "Bilingual / Multilingual", desc: "Language access and localization-ready builds" },
  { badge: "Post-Launch Support", desc: "Ongoing maintenance contracts available" },
];

const sectors = [
  "Municipal / City Government",
  "County Government",
  "State / Provincial Agency",
  "K–12 School District",
  "Post-Secondary Institution",
  "Nonprofit Organization",
  "Indigenous / First Nations Organization",
  "Housing Authority",
  "Healthcare / Public Health",
  "Arts, Culture & Heritage",
  "Professional Association",
];

export default function RFP() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const howRef = useRef(null);
  const howInView = useInView(howRef, { once: true, margin: "-100px" });
  const credRef = useRef(null);
  const credInView = useInView(credRef, { once: true, margin: "-100px" });
  const sectorsRef = useRef(null);
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page header — navy with hero photo */}
      <div className="relative bg-[oklch(0.18_0.04_155)] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.04_155/0.95)] to-[oklch(0.15_0.04_155/0.7)]" />
        <div className="container relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link href="/">
              <a className="text-white/40 text-xs uppercase tracking-[0.15em] hover:text-white/70 transition-colors inline-flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              Our Approach
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-display)] font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Structured process.{" "}
            <span className="text-primary">Measurable results.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/65 text-base max-w-2xl leading-relaxed mb-8"
          >
            Civic Firm partners with government, education, nonprofit, and Indigenous organizations across Canada and the United States. Our approach is built around accountability, compliance, and the standards your stakeholders expect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {["WCAG 2.1 AA", "ADA Title II", "Section 508", "Mobile-First", "CMS Training", "Post-Launch Support"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-[10px] uppercase tracking-[0.12em] font-medium px-3 py-1.5 rounded-full">
                <svg className="w-2.5 h-2.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container" ref={howRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label">How We Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-4"
          >
            From discovery to{" "}
            <span className="text-primary">delivery.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mb-12"
          >
            Our approach to institutional projects is structured, thorough, and built around the accountability that public organizations require.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="bg-secondary dark:bg-[oklch(0.26_0.03_155)] rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                    <span className="text-primary group-hover:text-white font-[var(--font-display)] font-bold text-sm transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-[var(--font-display)] font-semibold text-base md:text-lg text-foreground mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-20 bg-[oklch(0.18_0.04_155)]" ref={credRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Standards & Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl tracking-tight text-white mb-10"
          >
            Built to meet{" "}
            <span className="text-primary">every requirement.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="bg-[oklch(0.24_0.035_155)] rounded-lg p-5 border border-[oklch(0.30_0.03_155)] hover:border-primary/40 transition-all duration-300"
              >
                <div className="inline-block bg-primary/15 text-primary text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 rounded mb-3">
                  {cred.badge}
                </div>
                <p className="text-white/60 text-xs leading-relaxed">{cred.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 md:py-20 bg-secondary dark:bg-[oklch(0.22_0.035_155)]" ref={sectorsRef}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-primary" />
                <span className="section-label">Sectors We Serve</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-2"
              >
                We know where the{" "}
                <span className="text-primary">opportunities are.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-sm leading-relaxed max-w-xl"
              >
                We work across these sectors in Canada and the United States, tailoring our approach to each sector's compliance requirements and community context.
              </motion.p>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              href="mailto:info@civicfirm.com"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all flex-shrink-0"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {sectors.map((sector) => (
              <div
                key={sector}
                className="flex items-center gap-3 bg-background dark:bg-[oklch(0.26_0.03_155)] rounded-md px-4 py-3 border border-border hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{sector}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label">Work With Us</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
              Interested in partnering with{" "}
              <span className="text-primary">Civic Firm?</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Whether you're an organization looking for a capable digital partner, a procurement officer evaluating vendors, or a potential collaborator — we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@civicfirm.com"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all shadow-md shadow-primary/20"
              >
                Email Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link href="/">
                <a className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-secondary transition-all">
                  View Our Work
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
