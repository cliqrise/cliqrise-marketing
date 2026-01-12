import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, BarChart3, ShieldCheck, LayoutDashboard, FileText, Lock } from "lucide-react";
import { Link } from "wouter";

export default function ForAgencies() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Scale Your Agency with <br />
          <span className="text-primary">Data-Driven Confidence.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Stop relying on screenshots and manual spreadsheets. Give your clients the transparency they deserve and the results they pay for.
        </p>
        <Link href="/early-access">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
            Partner with CliqRise <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>

      {/* Agency Pain Points */}
      <section className="container mx-auto px-4 mb-32">
        <h2 className="text-3xl font-heading font-bold text-center mb-16">The Old Way vs. The CliqRise Way</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Client Churn",
              pain: "Clients leave because they can't see the ROI of your work.",
              solution: "Show them exact profit/loss per campaign in real-time.",
              icon: Users
            },
            {
              title: "Manual Reporting",
              pain: "Hours spent every week building reports in Excel/Looker.",
              solution: "Automated, white-labeled dashboards your clients can access 24/7.",
              icon: FileText
            },
            {
              title: "Blind Scaling",
              pain: "Guessing which creatives to scale based on vanity metrics (CTR/CPC).",
              solution: "Scale based on actual Amazon revenue and profit.",
              icon: BarChart3
            }
          ].map((item, i) => (
            <Card key={i} className="glass-card border-white/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-700"><span className="font-bold">Problem:</span> {item.pain}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-sm text-green-700"><span className="font-bold">Solution:</span> {item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Agency Features */}
      <section className="container mx-auto px-4 mb-32">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-white">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">Built for Agency Scale</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Multi-Client Dashboard",
                  desc: "View all your client accounts in one single view. Toggle between them instantly without logging in/out.",
                  icon: LayoutDashboard
                },
                {
                  title: "White-Label Reports",
                  desc: "Send automated PDF reports with your agency's logo and branding. Impress clients without the manual work.",
                  icon: FileText
                },
                {
                  title: "Team Permissions",
                  desc: "Grant specific access levels to your media buyers, account managers, and clients.",
                  icon: Lock
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-secondary/50">
              {/* Placeholder for Agency Dashboard UI */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Agency Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="glass-panel rounded-3xl p-12 border border-white/10 bg-primary/5">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Scale Your Agency?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the top agencies using CliqRise to retain clients and prove their value.
          </p>
          <Link href="/early-access">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
              Apply for Agency Partner Program <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
