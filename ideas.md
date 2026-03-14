# UnitySnap — Design Brainstorm

## Context
UnitySnap is a professional digital marketing / web design studio. The user wants a site that rivals top agencies like Clay, Instrument, Fantasy, BASIC/DEPT. The current site has a purple/owl theme that needs to be replaced with something far more sophisticated and premium.

---

<response>
<text>

## Idea 1: "Kinetic Brutalism"

**Design Movement**: Neo-Brutalist meets Swiss Kinetic Typography — raw structural honesty fused with dynamic motion.

**Core Principles**:
1. Oversized typography as architecture — text IS the visual, not decoration
2. High-contrast black/off-white with a single electric accent (chartreuse #CCFF00)
3. Exposed grid structure — visible columns, deliberate asymmetry
4. Motion as meaning — every animation communicates hierarchy or state

**Color Philosophy**: Near-black (#0A0A0A) as the canvas, warm off-white (#F5F0EB) for content blocks, and electric chartreuse (#CCFF00) as the sole accent — creating tension between restraint and energy. The limited palette forces every color choice to be intentional.

**Layout Paradigm**: Broken grid with overlapping elements. Hero text bleeds off-screen. Sections alternate between full-bleed dark and contained light blocks. Asymmetric two-column layouts where one column dominates 70/30.

**Signature Elements**:
1. Giant rotating/morphing text in the hero that spells "UNITYSNAP" letter by letter
2. Horizontal scroll sections for portfolio pieces
3. Cursor-following magnetic buttons

**Interaction Philosophy**: Interactions feel physical — elements have weight, buttons resist then snap, scroll triggers kinetic text reveals.

**Animation**: GSAP-driven scroll-triggered text splitting. Letters animate individually with staggered delays. Sections slide in from edges. Portfolio items scale up from 0.8 to 1.0 on scroll-into-view.

**Typography System**: Display: "Clash Display" (bold, geometric, uppercase for headings). Body: "Satoshi" (clean geometric sans for readable body text). Monospace accents for labels/tags.

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Idea 2: "Liquid Minimalism"

**Design Movement**: Organic Minimalism — the softness of water and glass meets disciplined Swiss design.

**Core Principles**:
1. Fluid shapes and soft gradients replace hard edges
2. Glassmorphism cards with frosted-glass depth
3. Generous negative space that breathes
4. Monochromatic base with iridescent accent moments

**Color Philosophy**: Deep navy-black (#0C0F1A) base with soft blue-gray (#8B95A5) midtones. Iridescent gradient accents (blue→violet→pink) appear sparingly on hover states and key CTAs. The palette evokes depth, like looking into deep water.

**Layout Paradigm**: Centered single-column flow with occasional full-width breakout moments. Content floats in glass-like cards over a subtle gradient background. Generous padding creates a sense of luxury.

**Signature Elements**:
1. Animated gradient mesh background that subtly shifts colors
2. Frosted-glass navigation bar with backdrop blur
3. Soft glow effects on interactive elements

**Interaction Philosophy**: Everything feels weightless and smooth — hover states fade in gently, transitions are eased with spring physics, elements float rather than snap.

**Animation**: Framer Motion spring animations. Parallax depth on scroll. Cards lift with soft shadows on hover. Text fades up with slight Y-translation on scroll-into-view.

**Typography System**: Display: "Cabinet Grotesk" (refined geometric with personality). Body: "General Sans" (warm, readable, modern). The pairing balances authority with approachability.

</text>
<probability>0.04</probability>
</response>

---

<response>
<text>

## Idea 3: "Monochrome Theater"

**Design Movement**: Editorial Maximalism — inspired by high-fashion editorial spreads and cinematic title sequences.

**Core Principles**:
1. Dramatic scale contrasts — whisper-small labels next to billboard-sized headlines
2. Pure black and white with one warm metallic accent (copper/bronze)
3. Theatrical reveals — content appears like a curtain opening
4. Photography and typography as equals in the visual hierarchy

**Color Philosophy**: True black (#000000) and pure white (#FFFFFF) create maximum drama. A warm copper/bronze (#C87941) appears only on interactive elements and key moments — like gold leaf on a black canvas. This creates a gallery/museum quality.

**Layout Paradigm**: Full-viewport sections that feel like individual "scenes." Each section has its own composition — some are centered, some are edge-aligned, some use diagonal splits. The page reads like flipping through a magazine.

**Signature Elements**:
1. Split-screen hero with giant serif text on one side, striking imagery on the other
2. Marquee/ticker text dividers between sections
3. Circular "view project" hover reveals over portfolio images

**Interaction Philosophy**: Theatrical and deliberate — hover reveals feel like pulling back a curtain. Page transitions are cinematic. Every interaction has a beginning, middle, and end.

**Animation**: Clip-path reveals for images. Text slides in from bottom with mask animation. Smooth locomotive scroll for buttery page movement. Portfolio items reveal with circular mask expansion on hover.

**Typography System**: Display: "Playfair Display" or "Cormorant Garamond" (elegant serif for dramatic headlines). Body: "Inter" or "DM Sans" (clean sans-serif for contrast and readability). The serif/sans pairing creates the editorial tension.

</text>
<probability>0.08</probability>
</response>

---

## Selected Approach: Idea 1 — "Kinetic Brutalism"

This approach best matches the energy of top studios like Clay, Instrument, and Fantasy. The oversized typography, dark theme, electric accent, and motion-driven interactions create the kind of bold, confident presence that separates elite agencies from the rest. It avoids the generic purple gradient / centered layout trap and instead creates something with real personality and edge.
