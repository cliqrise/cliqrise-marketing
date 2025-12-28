# CliqRise - Cline Context File

## What is CliqRise?

CliqRise is a SaaS platform that solves the "black hole" problem for Amazon affiliate marketers running paid ads on Meta and Pinterest. The platform connects ad spend to Amazon affiliate earnings, providing true ROI visibility at the campaign level - something that has been impossible to track accurately before.

## The Problem We Solve

Amazon affiliate marketers spend thousands on Meta/Pinterest ads but have NO WAY to know which specific campaigns drive their Amazon commissions. They see:
- Money going OUT (ad spend on Meta/Pinterest)
- Money coming IN (Amazon affiliate earnings)
- But ZERO connection between them

This is "The $30,000 Question" - which ads actually drove those sales?

## Target Markets

1. **Content Creators** - Running Meta/Pinterest ads to drive Amazon commissions
2. **Ad Agencies** - Managing multiple creator accounts (10+ hours per client on reporting)
3. **Brand Partners** (Coming Soon) - Discovering verified ROI-positive creators via invite-only marketplace

## Business Model

- **Technology-first**: Use automation to replace manual labor at 10x lower cost
- **Pricing**: $49/mo starting plan vs $500+/mo typical agency fees
- **Positioning**: "Redfin for ad agencies"

## Technical Stack

- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Backend**: PostgreSQL with Row Level Security
- **Auth**: Auth0
- **Infrastructure**: AWS (4 accounts: Management, Dev, QA, Prod)
- **Integrations**: Meta Marketing API, Pinterest Ads API, Amazon Product Advertising API, Claude API

## Key Features

1. **Campaign Mapping** - Auto-links ads to Amazon tracking IDs
2. **Real ROI** - True return on every dollar spent
3. **Winner Detection** - Instantly spot profitable campaigns
4. **Multi-Storefront** - US, UK, CA, AU in one view
5. **Tier Goals** - Daily run rate to hit next Amazon bonus tier
6. **AI Insights** - Smart recommendations to optimize spend

## Domains

- **Marketing Site**: www.cliqrise.ai (S3 + CloudFront)
- **Application**: app.cliqrise.ai (ECS + ALB)

## Brand Identity

### Theme: Starry Night (TweakCN)
Premium dark theme with gold accents - elegant, data-driven, sophisticated.

### Colors (Dark Mode - Primary)
- Background: `hsl(230 20% 11.76%)` - Deep navy
- Card: `hsl(237.39 24.73% 18.24%)` - Lighter navy
- Gold (CTAs/Accents): `hsl(47.84 100% 70%)` - THE signature color
- Text: `hsl(221.54 35.14% 92.75%)` - Light gray
- Muted Text: `hsl(218.46 17.18% 55.49%)` - Medium gray
- Border: `hsl(236.47 15.89% 20.98%)` - Dark border
- Blue: `hsl(220.59 46.79% 42.75%)` - Primary blue
- Destructive: `hsl(336.28 36.75% 45.88%)` - Pink/red

### Platform Colors
- Meta Blue: `hsl(217 91% 60%)`
- Pinterest Red: `hsl(346 77% 49%)`
- Amazon Orange: `hsl(38 92% 50%)`

### Typography
- Headings: Libre Baskerville (serif) - Premium editorial feel
- Body: Inter (sans-serif) - Clean and readable

### Voice & Tone
- Confident but not arrogant
- Data-driven, professional
- Empathetic to the pain of flying blind
- Direct and clear messaging

## Key Messaging

### Taglines
- "The missing link between ad spend and affiliate earnings"
- "Stop Guessing. Start Knowing."
- "True ROI for Every Campaign. Simple. Automatic. Powerful."

### Pain Points We Address
- "I spend $2K/month on ads but can't tell which ones work"
- "Reporting takes 10+ hours per client per month"
- "I need proof before I sponsor a creator"

### Value Propositions
- From guesswork to data-driven decisions
- Scale winners, kill losers
- Automated daily sync (no manual spreadsheets)
- 10x more clients with same team size (for agencies)

## File Structure Notes

```
/cliqrise
├── /src
│   ├── /app              # Next.js App Router pages
│   ├── /components       # React components
│   │   ├── /ui           # Base UI components
│   │   └── /sections     # Page sections (Hero, Features, etc.)
│   ├── /lib              # Utilities, API clients
│   └── /styles           # Global styles, theme
├── /public               # Static assets
├── design-system.json    # Visual design reference
├── CLINE.md              # This file
└── package.json
```

## Design System Reference

When building UI, reference the `design-system.json` file for:
- Exact color values
- Typography scales
- Spacing system
- Component styles (buttons, cards, badges)
- Animation guidelines

## Important Guidelines

1. **Always follow design-system.json** - Don't improvise colors or spacing
2. **Mobile-first responsive** - Test at 375px, 768px, 1024px, 1440px
3. **Subtle animations only** - No bouncing, spinning, or distracting effects
4. **Semantic HTML** - Proper heading hierarchy, accessible markup
5. **Performance** - Optimize images, lazy load below-fold content

## Current Sprint Focus

Building the marketing website (www.cliqrise.ai) with these sections:
1. Hero - "Which of your ads are actually working?"
2. Problem - The $30,000 Question / Black Hole visualization
3. Solution - CliqRise Connects Everything
4. How It Works - 3-step process (Connect, Sync, Profit)
5. Features - 6 feature cards
6. Transformation - Before/After comparison
7. Personas - Content Creators, Agencies, Brands
8. Pricing - $49/mo vs $500+ agency fees
9. CTA - Request Early Access
10. Footer

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npm run typecheck
```

## Environment Variables

```
# See .env.example for required variables
# Never commit .env files
```

## Contact

- Website: www.cliqrise.ai
- Email: malik@cliqrise.ai
