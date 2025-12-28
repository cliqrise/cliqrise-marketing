'use client';

import { motion } from 'framer-motion';

/**
 * BlackHoleSection Component
 * 
 * "You're Pouring Money Into a Black Hole" section for CliqRise marketing site.
 * 
 * USAGE:
 * 1. Export your Figma animation as:
 *    - Lottie JSON (recommended) → use with lottie-react
 *    - WebM/MP4 video → use <video> tag
 *    - GIF → use <img> tag
 * 
 * 2. Replace the placeholder in the center with your export
 * 
 * THEME: Starry Night (dark navy + gold accents)
 */

// Generic icons to avoid trademark issues
const AdPlatformIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6M9 12h6M9 15h4" />
  </svg>
);

const ShoppingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
    <path d="M6 6L5 3H2" />
  </svg>
);

const MoneyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

export default function BlackHoleSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[hsl(230,20%,12%)]">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-[hsl(222,35%,93%)]"
        >
          You're Pouring Money Into a{' '}
          <span className="text-[hsl(336,37%,46%)]">Black Hole</span>
        </motion.h2>
      </div>

      {/* Main Content - 3 Column Layout */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">
          
          {/* LEFT: Money Out */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <span className="text-xs uppercase tracking-widest text-[hsl(218,17%,55%)] mb-4">
              Money Out
            </span>
            
            {/* Ad Platform Card */}
            <div className="bg-[hsl(237,25%,18%)] border border-[hsl(230,20%,25%)] rounded-xl p-6 w-full max-w-xs">
              {/* Platform Icons */}
              <div className="flex justify-center lg:justify-end gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(214,89%,52%)] flex items-center justify-center text-white">
                  <AdPlatformIcon />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[hsl(351,75%,47%)] flex items-center justify-center text-white">
                  <AdPlatformIcon />
                </div>
              </div>
              
              {/* Amount */}
              <div className="text-4xl font-bold text-[hsl(336,50%,55%)] mb-2">
                $4,200
              </div>
              <div className="text-sm text-[hsl(218,17%,55%)]">
                Social Ad Spend
              </div>
              
              {/* Details */}
              <div className="mt-4 pt-4 border-t border-[hsl(230,20%,25%)] text-sm text-[hsl(218,17%,55%)]">
                <div>12 campaigns</div>
                <div>47 ad sets</div>
              </div>
            </div>

            {/* Arrow indicator - Mobile */}
            <div className="lg:hidden mt-6 text-[hsl(336,50%,55%)]">
              <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>

          {/* CENTER: Black Hole Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center"
          >
            {/* 
              ============================================
              REPLACE THIS PLACEHOLDER WITH YOUR FIGMA EXPORT
              ============================================
              
              Options:
              
              1. LOTTIE (recommended):
                 import Lottie from 'lottie-react';
                 import blackHoleAnimation from './black-hole.json';
                 <Lottie animationData={blackHoleAnimation} className="w-80 h-80 lg:w-96 lg:h-96" />
              
              2. VIDEO (WebM/MP4):
                 <video autoPlay loop muted playsInline className="w-80 h-80 lg:w-96 lg:h-96">
                   <source src="/black-hole.webm" type="video/webm" />
                   <source src="/black-hole.mp4" type="video/mp4" />
                 </video>
              
              3. GIF:
                 <img src="/black-hole.gif" alt="" className="w-80 h-80 lg:w-96 lg:h-96" />
            */}
            
            {/* Placeholder - Replace with your Figma export */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(336,37%,30%)] to-[hsl(270,30%,25%)] blur-xl opacity-50" />
              
              {/* Main circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[hsl(270,40%,20%)] via-[hsl(336,37%,25%)] to-[hsl(230,20%,12%)]">
                {/* Inner void */}
                <div className="absolute inset-12 rounded-full bg-black flex items-center justify-center">
                  {/* Question mark */}
                  <span className="text-6xl text-[hsl(336,50%,55%)] opacity-60 animate-pulse">?</span>
                </div>
              </div>
              
              {/* Animated particles - simplified CSS version */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-8 left-1/2 w-2 h-2 rounded-full bg-[hsl(336,50%,55%)]" />
                <div className="absolute top-1/4 right-8 w-3 h-3 rounded-full bg-[hsl(48,100%,70%)]" />
                <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-[hsl(336,50%,55%)]" />
                <div className="absolute bottom-1/4 right-16 w-2 h-2 rounded-full bg-[hsl(48,100%,70%)]" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-16 right-12 w-2 h-2 rounded-full bg-[hsl(214,89%,52%)]" />
                <div className="absolute bottom-8 right-1/3 w-3 h-3 rounded-full bg-[hsl(351,75%,47%)]" />
                <div className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-[hsl(214,89%,52%)]" />
              </div>
            </div>

            {/* Label */}
            <div className="mt-6 text-center">
              <span className="text-xs uppercase tracking-widest text-[hsl(336,50%,55%)] font-medium">
                The Black Hole
              </span>
              <p className="text-sm text-[hsl(218,17%,55%)] mt-1">
                No connection. No tracking.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Money In */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-xs uppercase tracking-widest text-[hsl(218,17%,55%)] mb-4">
              Money In
            </span>
            
            {/* Earnings Card */}
            <div className="bg-[hsl(237,25%,18%)] border border-[hsl(230,20%,25%)] rounded-xl p-6 w-full max-w-xs">
              {/* Platform Icon */}
              <div className="flex justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(36,100%,50%)] flex items-center justify-center text-white">
                  <ShoppingIcon />
                </div>
              </div>
              
              {/* Amount */}
              <div className="text-4xl font-bold text-[hsl(48,100%,70%)] mb-2">
                $8,947
              </div>
              <div className="text-sm text-[hsl(218,17%,55%)]">
                Affiliate Earnings
              </div>
              
              {/* Details */}
              <div className="mt-4 pt-4 border-t border-[hsl(230,20%,25%)] text-sm text-[hsl(218,17%,55%)]">
                <div>4 storefronts</div>
                <div>342 orders</div>
              </div>
            </div>

            {/* Arrow indicator - Mobile */}
            <div className="lg:hidden mt-6 text-[hsl(48,100%,70%)] rotate-180">
              <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Pain Points */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container mx-auto px-6 mt-16"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
          <div className="flex items-center gap-2 text-[hsl(336,50%,55%)]">
            <span className="text-lg">✗</span>
            <span>Wasted Spend: Killing winners. Feeding losers.</span>
          </div>
          <div className="flex items-center gap-2 text-[hsl(336,50%,55%)]">
            <span className="text-lg">✗</span>
            <span>Hours Lost: Manual spreadsheets. Always outdated.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
