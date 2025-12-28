# CliqRise Marketing Website - Cline Prompts
## Theme: Starry Night (TweakCN)

## Overview
This document contains the prompts to give Cline to build the CliqRise marketing website.
Using the 3-method approach:
1. Design System JSON (follow exactly, don't say "make it pretty")
2. Custom CSS theme file (Starry Night from TweakCN)
3. Premium React components for special elements

**KEY THEME NOTES:**
- Dark theme throughout (navy backgrounds)
- Gold accents for CTAs, highlights, and important elements
- Libre Baskerville (serif) for headings - premium editorial feel
- Inter for body text
- Gold glow effects on hover states

---

## STEP 1: Initial Setup

### Prompt 1.1 - Project Setup
```
Create a Next.js 14 app with the following:
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Dark mode enabled by default

Project name: cliqrise-marketing

After setup, configure it to use dark mode as the default theme.
```

### Prompt 1.2 - Add Theme File
```
Replace the contents of src/app/globals.css with this CSS file.
This is the Starry Night theme from TweakCN customized for CliqRise.
Follow ALL the styling conventions in this file.
The site should be in dark mode by default.

[PASTE THE starry-night-theme.css FILE HERE]
```

### Prompt 1.3 - Add Design System Reference
```
Create a file called design-system.json in the project root. 
Use this as the reference for ALL visual decisions - colors, spacing, typography, component styles.
You MUST follow this design system exactly. 
The gold color (--secondary) is our primary CTA color.

[PASTE THE cliqrise-design-system.json FILE HERE]
```

### Prompt 1.4 - Add Context File
```
Create a CLINE.md file in the project root with this content.
Reference this for understanding the product and brand.

[PASTE THE CLINE.md FILE HERE]
```

---

## STEP 2: Build the Page Structure

### Prompt 2.1 - Create Landing Page Sections
```
Create a landing page at src/app/page.tsx with these sections in order.
The ENTIRE page should use dark mode (dark navy backgrounds).
Use the design-system.json for all styling.

Sections:
1. Navigation (fixed, dark with blur)
2. Hero section (dark background)
3. Problem section (The $30,000 Question / Black Hole)
4. Solution section (CliqRise Connects Everything)
5. How It Works (3-step process)
6. Features grid (6 features)
7. Before/After transformation comparison
8. Who It's For (3 personas)
9. Pricing comparison
10. Final CTA section
11. Footer

Create separate components for each section in src/components/sections/
```

---

## STEP 3: Build Each Section

### Prompt 3.1 - Navigation
```
Create the Navigation component at src/components/Navigation.tsx

Requirements:
- Fixed position at top
- Dark background with blur: hsl(230 20% 11.76% / 0.95) with backdrop-filter: blur(10px)
- Height: 80px
- Logo "CliqRise" on left in GOLD color hsl(47.84 100% 70%), using Libre Baskerville font, font-weight 700
- CTA button "Request Early Access" on right, GOLD background, dark text
- Subtle border-bottom: 1px solid hsl(236.47 15.89% 20.98%)
- Follow design-system.json for all values
```

### Prompt 3.2 - Hero Section
```
Create the Hero component at src/components/sections/Hero.tsx

Requirements:
- Dark background: hsl(230 20% 11.76%)
- Centered content
- Badge at top: "THE MISSING LINK FOR AFFILIATE ROI" - gold text on gold/20% background
- Main headline: "Which of your ads are actually working?" 
  - Light text hsl(221.54 35.14% 92.75%)
  - Libre Baskerville font, font-weight 700
- Subheadline: "You're spending thousands. You're flying blind." 
  - Muted text hsl(218.46 17.18% 55.49%)
  - Inter font
- Primary CTA button: "Request Early Access" - GOLD background, dark text, gold glow shadow
- Below: Leave space for the Black Hole infographic (we'll add later)
- Generous padding: 8rem top (accounting for nav), 6rem bottom
```

### Prompt 3.3 - Problem Section (The $30,000 Question)
```
Create the Problem component at src/components/sections/Problem.tsx

Requirements:
- Dark background: hsl(230 20% 11.76%)
- Section title: "The $30,000 Question" - centered, light text, Libre Baskerville
- Subtitle: "Which ads actually drove those sales?" - muted text
- Three-column layout:
  - LEFT: "Money Out" card
    - Card background: hsl(237.39 24.73% 18.24%)
    - Amount: "$4,200" in PINK/RED color hsl(336.28 36.75% 45.88%)
    - Platform boxes below: Meta (blue), Pinterest (red)
    - Subtext: "12 campaigns, 47 ad sets"
  - CENTER: "Black Hole" visual
    - Dark circle with dashed border
    - Question mark in center
    - Text below: "THE BLACK HOLE" in pink/red
    - "No connection. No tracking."
  - RIGHT: "Money In" card
    - Card background: hsl(237.39 24.73% 18.24%)
    - Amount: "$8,947" in GOLD color hsl(47.84 100% 70%)
    - Amazon icon (orange)
    - Subtext: "4 storefronts, 342 orders"
- Add arrow icons between columns
- Bottom text: "Ad spend goes in. Affiliate earnings come out. The connection? A black hole."
```

### Prompt 3.4 - Solution Section
```
Create the Solution component at src/components/sections/Solution.tsx

Requirements:
- Slightly lighter dark background: hsl(237.39 24.73% 18.24%) - the card color
- Section title: "CliqRise Connects Everything. Automatically." - Libre Baskerville
- Visual showing:
  - Left side: Meta (blue box) and Pinterest (red box) stacked
  - Center: Bridge graphic with "CLIQRISE" in GOLD
  - Right side: Amazon (orange box)
  - Arrow flowing from left through bridge to right
- Tagline: "The missing link between your ad spend and your affiliate earnings."
- Sub-tagline: "True ROI for Every Campaign. Simple. Automatic. Powerful." - "True ROI" in GOLD
```

### Prompt 3.5 - How It Works Section
```
Create the HowItWorks component at src/components/sections/HowItWorks.tsx

Requirements:
- Dark background: hsl(230 20% 11.76%)
- Section title: "Go From Guesswork To Profit in Minutes." - Libre Baskerville
- Three cards in a row with arrows between:
  1. CONNECT 
     - Icon: 🔗 or Link icon in GOLD
     - "Link your Meta, Pinterest & Amazon accounts."
     - "2 minutes." in italics/muted
  2. SYNC
     - Icon: 📊 or RefreshCw icon in GOLD
     - "We automatically map campaigns to earnings."
     - "Daily refresh." in italics/muted
  3. PROFIT
     - Icon: 🎯 or Target icon in GOLD
     - "See true ROI. Scale winners. Kill losers."
     - "Instant clarity." in italics/muted
- Each card: card background hsl(237.39 24.73% 18.24%), border, gold icon
- Cards should have hover effect (slight lift + increased shadow)
```

### Prompt 3.6 - Features Grid
```
Create the Features component at src/components/sections/Features.tsx

Requirements:
- Dark background: hsl(230 20% 11.76%)
- Section title: "Everything You Need To Scale Profitably." - "Profitably" in GOLD
- 2x3 grid of feature cards:
  1. Campaign Mapping - link icon (gold) - "Auto-links ads to Amazon tracking IDs."
  2. Real ROI - chart icon (gold) - "True return on every dollar spent." - "ROI" in GOLD
  3. Winner Detection - target icon (gold) - "Instantly spot profitable campaigns." - "profitable" in GOLD
  4. Multi-Storefront - globe icon (gold) - "US, UK, CA, AU in one view."
  5. Tier Goals - calendar icon (gold) - "Daily run rate to hit your next tier." - "tier" in GOLD
  6. AI Insights - robot icon (gold) - "Smart recommendations to optimize spend." - "optimize" in GOLD
- Each card: card background, gold icon in gold/15% background circle, title, description
- Subtle hover effect (lift + shadow)
- Grid: 3 columns desktop, 2 tablet, 1 mobile
```

### Prompt 3.7 - Before/After Section
```
Create the Transformation component at src/components/sections/Transformation.tsx

Requirements:
- Dark background: hsl(230 20% 11.76%)
- Section title: "Stop Drowning in Spreadsheets. Start Scaling." - Libre Baskerville
- Two-column comparison layout:
  - LEFT (BEFORE): 
    - Muted/darker background: hsl(236.67 23.68% 14.9%)
    - Red X marks (destructive color)
    - Items: "Hours in spreadsheets", "Guessing which ads work", "Wasting money on losers", "No confidence in decisions"
  - RIGHT (AFTER CLIQRISE):
    - Card background with GOLD border (2px solid gold)
    - Gold glow shadow
    - GOLD checkmarks
    - Items: "Automated daily sync", "Know exactly what works", "Scale winners, kill losers", "Data-driven confidence"
- Clear visual contrast between dark/negative left and glowing/positive right
```

### Prompt 3.8 - Who It's For Section
```
Create the Personas component at src/components/sections/Personas.tsx

Requirements:
- Slightly lighter dark background: hsl(237.39 24.73% 18.24%)
- Section title: "Built For The Modern Affiliate Marketer." - Libre Baskerville
- Three persona cards in a row:
  1. Content Creators
     - Person icon in gold
     - "Running Meta/Pinterest ads to drive Amazon commissions"
     - Pain quote: "I spend $2K/month on ads but can't tell which ones work." - italics
  2. Ad Agencies
     - Building icon in gold
     - "Managing multiple creator accounts and campaigns"
     - Pain quote: "Reporting takes 10+ hours per client per month." - italics
  3. Brand Partners
     - Target icon in gold
     - GOLD "INVITE-ONLY" badge at top
     - "Discover verified ROI-positive creators to sponsor"
     - Pain quote: "I need proof before I sponsor a creator." - italics
- Each card: dark card background, border, hover effect
```

### Prompt 3.9 - Pricing Section
```
Create the Pricing component at src/components/sections/Pricing.tsx

Requirements:
- Dark background: hsl(230 20% 11.76%)
- Section title: "Use Technology, Not Expensive Manual Labor" - Libre Baskerville
- Visual comparison with scale/balance imagery:
  - Left side (heavy): "$500+/mo" with strikethrough, muted color
    - Label: "Typical Agency Fees"
    - Shows documents and people icons (manual labor)
  - Right side (winning): "$49/mo" in GOLD, large, with gold glow
    - Label: "CliqRise Starting Plan"
    - Shows CliqRise logo
- Tagline: "Technology replaces manual labor at a significantly lower cost."
```

### Prompt 3.10 - CTA Section
```
Create the CTA component at src/components/sections/CTA.tsx

Requirements:
- Dark background with subtle gold radial gradient glow in center
- Section title: "Stop Guessing. Start Knowing." - Libre Baskerville, large
- Subtitle: "Request early access to the future of affiliate ad tracking. The Creator Discovery Marketplace is coming soon."
- Form container:
  - Email input field: dark card background, border, focus state with gold border and glow
  - Primary CTA button: "Request Early Access" - GOLD background, dark text, gold glow
  - Input and button side by side on desktop, stacked on mobile
- Below: "www.cliqrise.ai • malik@cliqrise.ai" - muted text
- Centered layout, generous padding
```

### Prompt 3.11 - Footer
```
Create the Footer component at src/components/sections/Footer.tsx

Requirements:
- Darkest background: hsl(236.67 23.68% 14.9%) - the muted color
- CliqRise logo in GOLD
- Copyright: "© 2024 CliqRise. All rights reserved." - muted text
- Optional: Link to Privacy Policy, Terms
- Simple, minimal design
- Border-top: 1px solid border color
```

---

## STEP 4: Add Premium Components (Method 3)

### Prompt 4.1 - Add Framer Motion
```
Install framer-motion as a dependency. We'll use it for smooth animations on scroll 
and hover effects, especially the gold glow animations.
```

### Prompt 4.2 - Add Tilt Cards to Features Section
```
Update the Features section to use subtle 3D tilt cards. 
On hover, cards should tilt slightly following cursor position.

Use framer-motion for the tilt effect:
- On hover: slight 3D perspective tilt
- Smooth transition: 0.3s ease
- Max tilt angle: 8 degrees
- Add gold shadow increase on hover

Apply this effect to all 6 feature cards.
```

### Prompt 4.3 - Add Fade-in Animations
```
Add scroll-triggered fade-in animations to all sections using framer-motion.

Requirements:
- Each section should fade in and slide up slightly when scrolled into view
- Stagger children elements (cards, list items) with 0.1s delay between each
- Use intersection observer to trigger when element is 20% in viewport
- Keep animations subtle - 0.6s duration, ease-out timing
- Only animate once (not on scroll back up)
```

### Prompt 4.4 - Add Gold Pulse Animation to CTA Button
```
Add a subtle gold pulse/glow animation to the main CTA buttons (hero and final CTA section).

The animation should:
- Pulse the gold box-shadow from 20px spread to 40px spread
- Duration: 2s
- Timing: ease-in-out infinite
- Only on the primary CTA buttons
```

---

## STEP 5: Polish and Responsive

### Prompt 5.1 - Responsive Breakpoints
```
Review all sections and ensure proper responsive behavior:
- Desktop: 1200px+ (current design)
- Tablet: 768px-1024px (2 column grids, adjusted spacing)
- Mobile: <768px (single column, reduced padding, stacked layouts)

Specific changes for mobile:
- Navigation: Add hamburger menu with slide-out drawer
- Hero: Smaller headline (clamp), stacked layout
- Problem section: Stack money cards vertically
- Features: Single column
- Before/After: Stack vertically
- Personas: Stack vertically
- CTA form: Stack input and button vertically
```

### Prompt 5.2 - Final Polish
```
Add these final touches:
1. Smooth scroll behavior for anchor links
2. Active states for all interactive elements
3. Loading state for CTA form submission (spinner, disabled state)
4. Meta tags for SEO:
   - Title: "CliqRise - True ROI for Amazon Affiliate Ads"
   - Description: "The missing link between your ad spend and affiliate earnings. Track real ROI for every Meta and Pinterest campaign."
   - og:image (placeholder for now)
5. Favicon using gold color on dark background
6. Ensure all text meets accessibility contrast ratios
7. Add aria-labels to interactive elements
```

---

## GRAPHICS NEEDED (Create Separately)

These graphics need to be created in Figma, sourced, or commissioned:

1. **Black Hole Visualization** - The central infographic
   - Dark cosmic vortex on navy background
   - Question mark in center (can be gold or pink)
   - Red/pink dashed arrows going in (ad spend)
   - Gold dashed arrows coming out (earnings)

2. **Bridge Graphic** - CliqRise as the connection
   - Simple bridge illustration
   - "CLIQRISE" text in gold
   - Arrow flowing through

3. **Dashboard Screenshot** - Product preview (optional for v1)
   - Use actual CliqRise dashboard
   - Apply Starry Night theme to it

4. **Icons** - Feature icons
   - Use Lucide icons (gold colored)
   - Or use emoji: 🔗📊🎯🌍📅🤖

---

## COMPONENT LIBRARIES TO USE

### Required:
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Recommended (from shadcn/ui):
- Button
- Card
- Input
- Badge

### Optional Premium:
- **React Bits** - 3D tilt cards
- **Aceternity UI** - Spotlight effects, glowing borders

---

## COLOR QUICK REFERENCE

```css
/* Dark backgrounds */
--background: hsl(230 20% 11.76%);      /* Main dark navy */
--card: hsl(237.39 24.73% 18.24%);      /* Card/elevated navy */
--muted: hsl(236.67 23.68% 14.9%);      /* Darkest/footer */

/* Gold (THE signature color) */
--secondary: hsl(47.84 100% 70%);       /* Gold for CTAs, accents */
--ring: hsl(47.84 100% 70%);            /* Gold for focus rings */

/* Text */
--foreground: hsl(221.54 35.14% 92.75%); /* Light text */
--muted-foreground: hsl(218.46 17.18% 55.49%); /* Muted text */

/* Borders */
--border: hsl(236.47 15.89% 20.98%);

/* Destructive/Negative */
--destructive: hsl(336.28 36.75% 45.88%); /* Pink/red */

/* Platform Colors */
--meta: hsl(217 91% 60%);               /* Blue */
--pinterest: hsl(346 77% 49%);          /* Red */
--amazon: hsl(38 92% 50%);              /* Orange */
```

---

## NOTES FOR CLINE

1. **DARK MODE ONLY** - The entire site uses dark theme, no light mode toggle needed
2. **GOLD IS KEY** - Use hsl(47.84 100% 70%) for all CTAs, highlights, success states
3. **Libre Baskerville** for headings - gives premium editorial feel
4. **Inter** for body text - clean and readable
5. Always reference design-system.json for styling decisions
6. Test responsive at 1440px, 1024px, 768px, 375px
7. Add gold glow effects (box-shadow) on hover for interactive elements
8. Keep animations subtle and elegant
