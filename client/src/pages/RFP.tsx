/*
 * DESIGN: Institutional — Our Approach Page
 * Matches the homepage visual language:
 *   - Hero: directional gradient with photo (same as homepage hero)
 *   - How We Work: alternating timeline (matches homepage Process)
 *   - Credentials: two-column checklist (matches homepage Compliance)
 *   - Sectors: clean text list, no boxes
 *   - CTA: photo background with directional gradient (matches homepage Contact)
 * No box fatigue. Every section has a distinct visual treatment.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/hero-gov-1-6P3667TTpmnuzabATGBuBS.webp";
const CTA_BG = "/images/mission-community.jpg";

const howWeWork = [
  {
    num: "01",
    title: "We Understand Your Mission",
    desc: "Every engagement starts with listening. We learn your organization's goals, stakeholders, compliance requirements, and community context before proposing a single solution.",
  },
  {
    num: "02",
    title: "We Analyze the Requirements",
    desc: "Whether it's a formal procurement process or a direct engagement, we study every requirement — compliance standards, evaluation criteria, scope, timeline, and budget — to ensure we can deliver exceptional results.",
  },
  {
    num: "03",
    title: "We Build a Tailored Plan",
    desc: "Our proposals are not templates. Each plan is written specifically for the issuing organization — addressing stated goals, compliance requirements, community context, and success criteria point by point.",
  },
  {
    num: "04",
    title: "We Demonstrate Compliance",
    desc: "Government and institutional projects require documented proof of standards — WCAG 2.1 AA, ADA Title II, Section 508, mobile-first design, CMS training. We include this evidence in every engagement.",
  },
  {
    num: "05",
    title: "We Deliver — On Time, On Spec",
    desc: "We execute with rigor: milestone-based delivery, stakeholder review gates, documented deliverables, and proactive communication throughout. No surprises, no scope creep.",
  },
  {
    num: "06",
    title: "We Stay After Launch",
    desc: "Our engagements include post-launch support, staff training, documentation, and ongoing maintenance options. We build long-term relationships, not one-off deliveries.",
  },
];

const credentials = [
  { title: "WCAG 2.1 AA", desc: "Full accessibility compliance on every build" },
  { title: "ADA Title II", desc: "Federal compliance for public entities" },
  { title: "Section 508", desc: "Federal technology accessibility standards" },
  { title: "Mobile-First", desc: "Responsive design tested across all devices" },
  { title: "CMS Training", desc: "Full staff training and documentation included" },
  { title: "Content Migration", desc: "Seamless transition from legacy systems" },
  { title: "Bilingual / Multilingual", desc: "Language access and localization-ready builds" },
  { title: "Post-Launch Support", desc: "Ongoing maintenance contracts available" },
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
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ─── HERO — directional gradient, same as homepage ─── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to right,
              oklch(0.12 0.04 155 / 0.95) 0%,
              oklch(0.12 0.04 155 / 0.88) 30%,
              oklch(0.12 0.04 155 / 0.55) 60%,
              oklch(0.12 0.04 155 / 0.25) 80%,
              oklch(0.12 0.04 155 / 0.15) 100%
            )`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.12_0.04_155/0.6)] to-transparent" />

        <div className="container relative z-10 pt-28 pb-20 md:pt-36 md:pb-28" ref={heroRef}>
          <div className="max-w-2xl">
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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
              <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.25em]">
                Our Approach
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-display)] font-extrabold text-white leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Structured process.{" "}
              <span className="text-primary">Measurable results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/85 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-light"
            >
              Civic Firm partners with government, education, nonprofit, and Indigenous organizations across Canada and the United States. Our approach is built around accountability, compliance, and the standards your stakeholders expect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {["WCAG 2.1 AA", "ADA Title II", "Section 508", "Mobile-First", "CMS Training", "Post-Launch Support"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-medium px-4 py-2 rounded-full"
                >
                  <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK — alternating timeline (matches homepage Process) ─── */}
      <section className="py-20 md:py-28 bg-secondary dark:bg-[oklch(0.22_0.035_155)]">
        <div className="container">
          <div ref={howRef} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={howInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">How We Work</span>
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={howInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground"
            >
              From discovery to{" "}
              <span className="text-primary">delivery.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={howInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4"
            >
              Our approach to institutional projects is structured, thorough, and built around the accountability that public organizations require.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {howWeWork.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start gap-6 mb-12 last:mb-0"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-5 w-full">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-background dark:bg-[oklch(0.22_0.035_155)] border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{step.num}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-semibold text-base text-foreground tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop layout: alternating sides */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start w-full">
                    <div className={`${isLeft ? "text-right" : ""}`}>
                      {isLeft && (
                        <>
                          <h3 className="font-semibold text-lg text-foreground tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                            {step.desc}
                          </p>
                        </>
                      )}
                    </div>

                    <div className="relative z-10 w-12 h-12 rounded-full bg-background dark:bg-[oklch(0.22_0.035_155)] border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{step.num}</span>
                    </div>

                    <div>
                      {!isLeft && (
                        <>
                          <h3 className="font-semibold text-lg text-foreground tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                            {step.desc}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS — two-column checklist (matches homepage Compliance) ─── */}
      <section className="py-20 md:py-28 bg-[oklch(0.18_0.04_155)]">
        <div className="container" ref={credRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — bold statement */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={credInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
                <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.2em]">
                  Standards & Credentials
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={credInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight"
              >
                Built to meet{" "}
                <span className="text-[oklch(0.60_0.16_150)]">every</span>{" "}
                requirement.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={credInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 text-sm md:text-base leading-relaxed mt-5 max-w-md"
              >
                We speak the language of procurement. Every deliverable is documented, every standard is met, and every deadline is honored.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={credInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="mailto:info@civicfirm.com"
                  className="inline-flex items-center gap-2 bg-[oklch(0.45_0.14_150)] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all"
                >
                  Work With Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right — checklist */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {credentials.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 py-5 border-b border-white/10"
                  >
                    <div className="w-5 h-5 rounded-full bg-[oklch(0.45_0.14_150)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {item.title}
                      </div>
                      <div className="text-white/50 text-xs mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTORS — clean numbered list, no boxes (matches homepage Services style) ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container" ref={sectorsRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column — heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
                <span className="section-label">Sectors We Serve</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight"
              >
                We know where the{" "}
                <span className="text-primary">opportunities are.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed mt-5 max-w-sm"
              >
                We work across these sectors in Canada and the United States, tailoring our approach to each sector's compliance requirements and community context.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="mailto:info@civicfirm.com"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all"
                >
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right column — clean list with dividers */}
            <div className="lg:col-span-8">
              {sectors.map((sector, i) => (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex items-center gap-5 py-5 ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <span className="text-primary/30 font-bold text-2xl md:text-3xl leading-none select-none group-hover:text-primary/60 transition-colors duration-300 flex-shrink-0 w-10 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300 flex-shrink-0" />
                  <span className="text-foreground text-base md:text-lg font-medium group-hover:text-primary transition-colors duration-300">
                    {sector}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA — photo background with directional gradient (matches homepage Contact) ─── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CTA_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to right,
              oklch(0.10 0.04 155 / 0.92) 0%,
              oklch(0.10 0.04 155 / 0.85) 35%,
              oklch(0.10 0.04 155 / 0.50) 65%,
              oklch(0.10 0.04 155 / 0.20) 100%
            )`,
          }}
        />

        <div className="container relative z-10" ref={ctaRef}>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Work With Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-display)] font-bold text-white leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Interested in partnering with{" "}
              <span className="text-primary">Civic Firm?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
            >
              Whether you're an organization looking for a capable digital partner, a procurement officer evaluating vendors, or a potential collaborator — we'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start flex-wrap"
            >
              <a
                href="mailto:info@civicfirm.com"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-7 py-4 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all shadow-lg shadow-primary/30"
              >
                Email Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <Link href="/">
                <a className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold text-sm px-7 py-4 rounded-md hover:bg-white/10 hover:border-white/60 transition-all">
                  View Our Work
                </a>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-[0.15em] mb-1">Email</div>
                <a href="mailto:info@civicfirm.com" className="text-white/80 text-sm hover:text-white transition-colors">
                  info@civicfirm.com
                </a>
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-[0.15em] mb-1">Response Time</div>
                <span className="text-white/80 text-sm">Within 2 business days</span>
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-[0.15em] mb-1">Location</div>
                <span className="text-white/80 text-sm">Remote-First, North America</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
