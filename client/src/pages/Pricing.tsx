import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="pb-20">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Simple, Transparent <br />
          <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Technology replaces expensive manual labor. Pay a fraction of what agencies charge.
        </p>
        
        {/* Pricing Comparison Banner */}
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <div className="flex items-center gap-2 text-muted-foreground line-through decoration-red-500/50 decoration-2">
            <span className="text-sm font-medium">Agency Fees:</span>
            <span className="font-bold">$1000+/mo</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-primary">
            <span className="text-sm font-medium">CliqRise:</span>
            <span className="font-bold">From $75/mo</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="glass-card border-white/10 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Individual</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$75</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Best for individual creators just getting started.</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {[
                  "1 ad platform (Meta OR Pinterest)",
                  "1 Amazon storefront",
                  "Campaign mapping & ROI tracking",
                  "Daily data sync",
                  "Basic reporting"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/early-access" className="w-full">
                <Button className="w-full" variant="outline">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="glass-card border-primary/50 bg-primary/5 flex flex-col relative shadow-2xl shadow-primary/10">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$125</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Best for established creators scaling their ad spend.</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {[
                  "Both Meta AND Pinterest",
                  "All 4 Amazon storefronts",
                  "Tier goal tracking with run rates",
                  "AI Insights & recommendations",
                  "HookVault ad creative library",
                  "Priority support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/early-access" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Agency Plan */}
          <Card className="glass-card border-white/10 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Agency</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-muted-foreground">/mo + $50/creator</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Best for ad agencies managing multiple accounts.</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {[
                  "Multi-client dashboard",
                  "Manage unlimited creator accounts",
                  "Cross-client insights & benchmarking",
                  "White-label reporting (coming soon)",
                  "Dedicated account manager"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/early-access" className="w-full">
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "How does billing work?",
                a: "Monthly subscription, cancel anytime. No long-term contracts."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, 7-day free trial on all plans."
              },
              {
                q: "Can I upgrade or downgrade?",
                a: "Yes, change your plan anytime. Upgrades take effect immediately, downgrades at next billing cycle."
              },
              {
                q: "How is this different from hiring an agency?",
                a: "Agencies charge 10-15% of ad spend plus management fees. CliqRise gives you the same insights through technology at a flat monthly rate."
              }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
