import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, CheckCircle2, DollarSign, Layers, LineChart, Lock, Star, Zap, X, Map, Trophy, Globe, Target, Brain } from "lucide-react";
import { Link } from "wouter";
import BlackHoleAnimation from "@/components/BlackHoleAnimation";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Background Glows */}
        {/* Clean background, no blurs */}
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-bottom-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Now accepting early access</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-primary">
              Stop Guessing. <br />
              <span className="text-primary">Start Knowing.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              The missing link between ad spend and affiliate earnings. Connect Meta & Pinterest ads to Amazon commissions and see your true ROI instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link href="/early-access">
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer">
                  Join the Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
              <Link href="/#how-it-works">
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50 h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary cursor-pointer">
                  See How It Works
                </div>
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Daily Auto-Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="relative z-10 glass-card rounded-2xl p-1 border border-border/50 bg-white shadow-2xl shadow-primary/5">
              <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0F172A]">
                <img 
                  src="/images/cliqrise-dashboard-light.png" 
                  alt="CliqRise Dashboard Overview" 
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section - The Black Hole */}
      <section className="container mx-auto px-4 py-12 dark bg-[#0F172A] rounded-3xl my-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary-foreground">The $30,000 Question</h2>
          <h3 className="text-2xl md:text-3xl text-primary-foreground/80 mb-6">Which ads actually drove those sales?</h3>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            You're pouring money into a black hole. Wasted spend: killing winners, feeding losers. Hours lost: manual spreadsheets, always outdated.
          </p>
        </div>

        <div className="rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden" style={{ backgroundColor: '#1a1c2e' }}>
          
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            {/* Left Column: Money Out */}
            <div className="text-center space-y-4">
              <div className="flex justify-center gap-3 mb-4">
                {/* Meta & Pinterest Placeholders */}
                <div className="w-28 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-900/20">Meta</div>
                <div className="w-28 h-10 rounded-full bg-[#E60023] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-900/20">Pinterest</div>
              </div>
              <div className="text-sm font-bold text-red-400 tracking-widest uppercase">Money Out</div>
              <div className="text-4xl md:text-5xl font-bold text-red-500">$4,200</div>
              <div className="text-sm text-muted-foreground">Meta + Pinterest Ad Spend</div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                12 campaigns, 47 ad sets
              </div>
              
              {/* Broken Arrows Out */}
              <div className="hidden md:flex justify-center mt-8 opacity-50">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                </div>
              </div>
            </div>

            {/* Center Column: The Black Hole */}
            <div className="relative flex flex-col items-center justify-center py-8 md:py-0">
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                <BlackHoleAnimation />
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">THE BLACK HOLE</h4>
                <p className="text-sm text-muted-foreground">No connection. No tracking.</p>
              </div>
            </div>

            {/* Right Column: Money In */}
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                {/* Amazon Placeholder */}
                <div className="w-28 h-10 rounded-full bg-[#FF9900] flex items-center justify-center text-black font-bold text-sm shadow-lg shadow-orange-900/20">Amazon</div>
              </div>
              <div className="text-sm font-bold text-green-400 tracking-widest uppercase">Money In</div>
              <div className="text-4xl md:text-5xl font-bold text-green-500">$8,947</div>
              <div className="text-sm text-muted-foreground">Amazon Affiliate Earnings</div>
              <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-300">
                4 storefronts, 342 orders
              </div>

               {/* Broken Arrows In */}
               <div className="hidden md:flex justify-center mt-8 opacity-50">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500/20" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Go From Guesswork to Profit</h2>
          <p className="text-muted-foreground">Three simple steps to true ROI clarity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10" />

          {[
            {
              step: "01",
              title: "Connect Sources",
              desc: "Link your Meta Ads, Pinterest Ads, and Amazon Associates accounts in 2 minutes.",
              icon: Layers
            },
            {
              step: "02",
              title: "Auto-Match",
              desc: "Our engine automatically maps your ad spend to specific Amazon tracking IDs.",
              icon: Zap
            },
            {
              step: "03",
              title: "See True ROI",
              desc: "View a unified dashboard showing exactly which campaigns are making you money.",
              icon: LineChart
            }
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-white/10 flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Campaign Mapping",
              desc: "Auto-links ads to Amazon tracking IDs without manual tagging.",
              icon: Map
            },
            {
              title: "Real ROI",
              desc: "See the true return on every dollar spent, down to the ad set level.",
              icon: DollarSign
            },
            {
              title: "Winner Detection",
              desc: "Instantly spot profitable campaigns and scale them with confidence.",
              icon: Trophy
            },
            {
              title: "Multi-Storefront",
              desc: "Track US, UK, Canada, and Australia earnings in one unified view.",
              icon: Globe
            },
            {
              title: "Tier Goals",
              desc: "Track your daily run rate to hit your next Amazon bonus tier.",
              icon: Target
            },
            {
              title: "AI Insights",
              desc: "Smart recommendations to optimize spend and improve margins.",
              icon: Brain
            }
          ].map((feature, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience Segments */}
      <section className="container mx-auto px-4 py-12">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Built for Growth</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">For Content Creators</h3>
              <p className="text-muted-foreground">
                "I spend $2K/month on ads but can't tell which ones work."
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Stop wasting money on losing ads
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Focus on creating content that converts
                </li>
              </ul>
              <Link href="/creators">
                <Button variant="link" className="text-primary p-0 h-auto">Learn more &rarr;</Button>
              </Link>
            </div>

            <div className="space-y-6 md:border-l border-white/10 md:pl-12">
              <h3 className="text-2xl font-bold text-white">For Ad Agencies</h3>
              <p className="text-muted-foreground">
                "Reporting takes 10+ hours per client per month."
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Automate client reporting completely
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Manage 10x more clients with the same team
                </li>
              </ul>
              <Link href="/agencies">
                <Button variant="link" className="text-primary p-0 h-auto">Learn more &rarr;</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mb-8">Replace $500+/month agency fees with powerful software.</p>
        
        <div className="inline-flex flex-col md:flex-row gap-6 items-stretch justify-center">
          <div className="glass-card p-6 rounded-2xl w-full md:w-72 text-left border-t-4 border-t-blue-500 flex flex-col">
            <h3 className="font-bold text-lg mb-1">Individual</h3>
            <div className="text-3xl font-bold mb-4">$75<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
              <li>• Up to $5k ad spend</li>
              <li>• Daily sync</li>
              <li>• 1 User</li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-2xl w-full md:w-72 text-left border-t-4 border-t-green-500 shadow-2xl shadow-green-900/20 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="font-bold text-lg mb-1">Pro</h3>
            <div className="text-3xl font-bold mb-4">$125<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
              <li>• Up to $25k ad spend</li>
              <li>• Hourly sync</li>
              <li>• Advanced Analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <Link href="/pricing">
            <Button variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">View Full Pricing</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary-foreground">Ready to stop flying blind?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join the waitlist today and lock in early access pricing.
            </p>
            <Link href="/early-access">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 rounded-full px-10 h-14 text-lg font-bold shadow-xl">
                Request Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
