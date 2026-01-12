import { Button } from "@/components/ui/button";
import { BarChart, Clock, Users } from "lucide-react";
import { Link } from "wouter";

export default function Agencies() {
  return (
    <div className="pb-20">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          10x More Clients, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Same Team Size</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Automate your Amazon affiliate reporting and prove your value to clients instantly.
        </p>
        <Link href="/early-access">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Scale Your Agency
          </Button>
        </Link>
      </section>

      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 rounded-2xl border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto text-blue-400">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Save 10+ Hours/Client</h3>
            <p className="text-muted-foreground">
              Stop manually compiling reports. CliqRise automates data collection and visualization, saving you hours every month.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto text-purple-400">
              <BarChart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Prove Your ROI</h3>
            <p className="text-muted-foreground">
              Show clients exactly how much commission you generated from their ad spend. No more vague "brand awareness" metrics.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto text-green-400">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Client Portal</h3>
            <p className="text-muted-foreground">
              Give clients their own login to view real-time dashboards. Build trust through total transparency.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center glass-panel p-12 rounded-3xl border border-white/10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Enterprise-Grade Reporting</h2>
            <p className="text-lg text-muted-foreground">
              Your clients expect professional, data-driven insights. CliqRise delivers white-labeled reports that look like you spent days building them.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Customizable date ranges
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Campaign & Ad Set level granularity
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Export to PDF or CSV
              </li>
            </ul>
            <Link href="/early-access">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                Get Agency Access
              </Button>
            </Link>
          </div>
          <div className="relative">
             {/* Placeholder for Agency Dashboard UI */}
             <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                <span className="text-muted-foreground font-mono">Agency Dashboard Preview</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
