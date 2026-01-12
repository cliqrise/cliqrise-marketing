import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function EarlyAccess() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to create the form
    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        // Clear any existing form first
        formContainerRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: "na2",
          portalId: "244830201",
          formId: "15f23943-6824-42d7-9f6f-9a26a8cf1048",
          target: "#hubspot-form-container"
        });
      }
    };

    // If hbspt is already loaded, create the form
    if (window.hbspt) {
      createForm();
    } else {
      // Wait for the script to load
      const checkHbspt = setInterval(() => {
        if (window.hbspt) {
          clearInterval(checkHbspt);
          createForm();
        }
      }, 100);

      // Cleanup interval on unmount
      return () => clearInterval(checkHbspt);
    }
  }, []);

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
            <div 
              id="hubspot-form-container" 
              ref={formContainerRef}
              className="min-h-[300px]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
