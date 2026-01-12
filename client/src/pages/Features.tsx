import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Globe, Layers, LineChart, Target, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Features() {
  const features = [
    {
      id: "mapping",
      title: "Campaign Mapping",
      desc: "Automatically links your Meta and Pinterest ads to Amazon tracking IDs. No more manual tagging or spreadsheet nightmares.",
      icon: Layers,
      color: "text-primary",
      bg: "bg-primary/10",
      image: "/images/feature-mapping-v2.jpg"
    },
    {
      id: "roi",
      title: "Real ROI Tracking",
      desc: "See the true return on every dollar spent. We match ad spend to actual commissions to show you exactly what's profitable.",
      icon: LineChart,
      color: "text-primary",
      bg: "bg-primary/10",
      image: "/images/feature-roi.jpg"
    },
    {
      id: "winner",
      title: "Winner Detection",
      desc: "Instantly spot your winning campaigns. Our algorithms highlight high-performing ads so you can scale them immediately.",
      icon: Zap,
      color: "text-primary",
      bg: "bg-primary/10",
      image: "/images/feature-winner.jpg"
    },
    {
      id: "multi-store",
      title: "Multi-Storefront Support",
      desc: "Track earnings across US, UK, Canada, and Australia in a single unified view. Perfect for international creators.",
      icon: Globe,
      color: "text-primary",
      bg: "bg-primary/10",
      image: "/images/feature-multistore.jpg"
    },
    {
      id: "goals",
      title: "Tier Goals",
      desc: "Track your daily run rate to hit your next Amazon bonus tier. Visual progress bars keep you motivated and on track.",
      icon: Target,
      color: "text-primary",
      bg: "bg-primary/10",
      image: "/images/feature-goals.jpg"
    },
    {
      id: "insights",
      title: "AI Insights",
      desc: "Get smart recommendations on where to cut spend and where to double down to maximize your margins.",
      icon: BarChart3,
      color: "text-primary",
      bg: "bg-primary/10",
      image: "/images/feature-ai.jpg"
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Everything You Need to <br />
          <span className="text-primary">Scale Profitably.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful tools that connect your ad spend to your affiliate earnings. Finally see your true ROI.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="glass-card border-white/10 hover:border-primary/30 transition-colors overflow-hidden group">
              <CardContent className="p-8 space-y-6">
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Three simple steps to true ROI clarity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10" />

          {[
            {
              step: "01",
              title: "Connect",
              desc: "Link your Meta, Pinterest, and Amazon accounts (2 minutes)",
              icon: Layers
            },
            {
              step: "02",
              title: "Sync",
              desc: "We automatically map campaigns to earnings (Daily refresh)",
              icon: Zap
            },
            {
              step: "03",
              title: "Profit",
              desc: "See true ROI, scale winners, kill losers (Instant clarity)",
              icon: LineChart
            }
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 border border-white/10 bg-white">
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

      {/* Integrations */}
      <section className="container mx-auto px-4 py-20 text-center border-t border-white/5">
        <p className="text-lg text-muted-foreground mb-8">Connects seamlessly with the platforms you already use.</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center transition-all duration-500">
          {/* Meta */}
          <div className="px-6 py-3 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/20">
            Meta
          </div>
          {/* Pinterest */}
          <div className="px-6 py-3 rounded-full bg-[#E60023] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-900/20">
            Pinterest
          </div>
          {/* Amazon */}
          <div className="px-6 py-3 rounded-full bg-[#FF9900] flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-orange-900/20">
            Amazon
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center pb-20">
        <div className="glass-panel rounded-3xl p-12 border border-white/10 bg-primary/5">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to stop guessing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access and start tracking your true ROI.
          </p>
          <Link href="/early-access">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
              Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
