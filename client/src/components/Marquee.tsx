/*
 * DESIGN: Kinetic Brutalism — Marquee Ticker
 * Horizontal scrolling text divider between sections.
 * Uppercase, spaced, muted color. Continuous loop.
 * Theme-aware: uses semantic border/bg.
 */
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
}

export default function Marquee({ items, speed = 30, separator = "—" }: MarqueeProps) {
  const text = items.join(` ${separator} `) + ` ${separator} `;
  const doubled = text + text;

  return (
    <div className="overflow-hidden border-y border-border py-5 bg-secondary">
      <motion.div
        animate={{ x: [0, `-50%`] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap"
      >
        <span className="text-sm md:text-base uppercase tracking-[0.25em] text-muted-foreground font-medium">
          {doubled}
        </span>
      </motion.div>
    </div>
  );
}
