import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, XCircle, Star, TrendingUp, DollarSign, Zap } from "lucide-react";
import { Link } from "wouter";

export default function ForCreators() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Stop Wasting Money on <br />
          <span className="text-primary">Ads That Don't Convert.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          You're spending $2K/month on ads but can't tell which ones actually drive Amazon sales. Sound familiar?
        </p>
      </section>

      {/* Pain Points Section (Before/After) */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before CliqRise */}
          <Card className="bg-white border-red-200 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-700">Before CliqRise</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Hours in spreadsheets trying to match data",
                  "Guessing which ads actually work",
                  "Wasting money on losing campaigns",
                  "Data always outdated by the time you check",
                  "No confidence in scaling decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* After CliqRise */}
          <Card className="bg-white border-green-200 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold text-green-700">With CliqRise</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Automated daily sync, zero manual work",
                  "Know exactly which campaigns are profitable",
                  "Scale winners, kill losers with confidence",
                  "Real-time accurate data",
                  "Data-driven confidence in every decision"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Case Stories */}
      <section className="container mx-auto px-4 mb-32">
        <h2 className="text-3xl font-heading font-bold text-center mb-16">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Story 1 */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-bold text-primary">The Home Decor Creator</h3>
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                "I was spending $3,000/month on Meta ads driving traffic to my Amazon storefront. I knew I was making money, but I had no idea which of my 15 campaigns were actually profitable. With CliqRise, I discovered 4 campaigns were losing money. I cut them immediately and reallocated to my winners. My profit margin jumped 40% the next month."
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-bold text-primary">The Kitchen Gadget Influencer</h3>
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                "Amazon's bonus tiers were always a mystery. Am I going to hit $800K this month? What's my daily run rate? CliqRise shows me exactly where I stand and what I need to ship per day. I hit my first $1.2M tier because I could finally see my progress."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Creators */}
      <section className="container mx-auto px-4 mb-32">
        <h2 className="text-3xl font-heading font-bold text-center mb-16">Why Creators Love CliqRise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "True ROI",
              desc: "See profit/loss for every campaign, not just clicks",
              icon: DollarSign,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              title: "Tier Tracking",
              desc: "Daily run rates to hit your next Amazon bonus",
              icon: TrendingUp,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              title: "Multi-Platform",
              desc: "Meta and Pinterest in one unified dashboard",
              icon: Zap,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              title: "No Technical Setup",
              desc: "Connect accounts in 2 minutes, we do the rest",
              icon: CheckCircle2,
              color: "text-primary",
              bg: "bg-primary/10"
            }
          ].map((feature, i) => (
            <Card key={i} className="glass-card border-white/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="glass-panel rounded-3xl p-12 border border-white/10 bg-primary/5">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Know Your Real ROI?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who stopped guessing and started knowing.
          </p>
          <Link href="/early-access">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
              Join the Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
