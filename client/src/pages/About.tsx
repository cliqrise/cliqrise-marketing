import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pb-20">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Built by Creators, <br />
          <span className="text-primary">For Creators.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're not another faceless SaaS company. We run ads to Amazon affiliates ourselves and built the tool we wished existed.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-4xl space-y-20">
        {/* Our Story */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 space-y-6">
          <h2 className="text-3xl font-heading font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CliqRise was born from frustration. We run a home decor content brand with over 1 million Instagram followers, driving significant Amazon affiliate revenue through paid ads. Every month, we faced the same question: which of our campaigns actually made money?
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We spent hours in spreadsheets, manually matching Meta ad spend to Amazon earnings reports. The data was always outdated. We were flying blind, making gut decisions on where to spend thousands of dollars.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            So we built CliqRise. The tool we wished existed. Now we're sharing it with creators and agencies who face the same challenge.
          </p>
        </div>

        {/* Our Mission */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground">
            To give every Amazon affiliate marketer the data-driven confidence to scale profitably. No more guessing. No more wasted spend. Just clear ROI on every dollar.
          </p>
        </div>

        {/* Why We're Different */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Why We're Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "We're practitioners",
                desc: "We use CliqRise ourselves, every day."
              },
              {
                title: "Amazon-focused",
                desc: "Built specifically for affiliate marketers, not general e-commerce."
              },
              {
                title: "Technology over labor",
                desc: "We automate what agencies do manually."
              },
              {
                title: "Privacy-first",
                desc: "Your data is yours. We never share or sell it."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Your Data is Safe With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Enterprise-grade encryption (AES-256)",
              "SOC 2 Type 2 compliant infrastructure",
              "We never store your Amazon credentials",
              "OAuth-based connections to Meta and Pinterest",
              "Your data is never shared with third parties"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center pt-12 pb-12">
          <h2 className="text-3xl font-bold mb-6">Questions? Feedback?</h2>
          <p className="text-muted-foreground mb-8">We'd love to hear from you.</p>
          <a href="mailto:info@cliqrise.ai" className="text-xl font-bold text-primary hover:underline">
            info@cliqrise.ai
          </a>
        </div>
      </section>
    </div>
  );
}
