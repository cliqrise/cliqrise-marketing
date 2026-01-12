import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function Creators() {
  return (
    <div className="pb-20">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Stop Burning Cash on <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Bad Ads</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          You're spending $2k/month on ads. Do you know which ones are actually profitable?
        </p>
        <Link href="/early-access">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Start Tracking Profit
          </Button>
        </Link>
      </section>

      <section className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl border-red-500/20 bg-red-500/5">
              <h3 className="text-2xl font-bold text-red-400 mb-6">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>Running ads blindly and hoping for commissions</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>Manually checking Amazon reports vs Ad Manager</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>Scaling campaigns that are actually losing money</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>Stress and uncertainty about your business</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl border-green-500/20 bg-green-500/5">
              <h3 className="text-2xl font-bold text-green-400 mb-6">The CliqRise Way</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>See exact profit per ad set and campaign</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>Automated daily reporting in one dashboard</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>Scale only the winners with 100% confidence</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>Sleep well knowing your numbers are accurate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-panel p-12 rounded-3xl border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">Focus on Creating, Not Spreadsheets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let CliqRise handle the data so you can get back to doing what you do best: creating content that converts.
          </p>
          <Link href="/early-access">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
