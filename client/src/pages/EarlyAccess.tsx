import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function EarlyAccess() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, this would POST to a webhook
    console.log("Form submitted");
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("You've been added to the waitlist!");
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4">
        <Card className="max-w-md w-full glass-card border-primary/30 bg-primary/5">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-primary">You're on the list!</h2>
            <p className="text-muted-foreground">
              Thanks for your interest in CliqRise. We'll be in touch shortly with your exclusive invite code.
            </p>
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Back to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 container mx-auto px-4 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Left Side Content */}
        <div className="space-y-8 hidden lg:block">
          <h1 className="text-5xl font-heading font-bold leading-tight">
            Get Early Access to <br />
            <span className="text-primary">True ROI Tracking</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Join hundreds of creators and agencies who are ready to stop guessing and start scaling.
          </p>
          
          <div className="space-y-6 pt-8">
            {[
              "Lock in early bird pricing (50% off for life)",
              "Priority onboarding support",
              "Direct access to the founder",
              "Influence the product roadmap"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <Card className="glass-card border-white/10 w-full max-w-lg mx-auto lg:ml-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Request Access</CardTitle>
            <CardDescription>Fill out the form below to join the waitlist.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="Jane Doe" className="bg-white/5 border-white/10" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required placeholder="jane@example.com" className="bg-white/5 border-white/10" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spend">Monthly Ad Spend</Label>
                <Select required>
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select your range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1k">$0 - $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k+">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Primary Ad Platform</Label>
                <RadioGroup defaultValue="meta" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="meta" id="meta" />
                    <Label htmlFor="meta">Meta</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pinterest" id="pinterest" />
                    <Label htmlFor="pinterest">Pinterest</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Both</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="storefronts">Number of Amazon Storefronts</Label>
                <Select required>
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2-3">2 - 3</SelectItem>
                    <SelectItem value="4+">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="social">Instagram/TikTok Handle (Optional)</Label>
                <Input id="social" placeholder="@username" className="bg-white/5 border-white/10" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
