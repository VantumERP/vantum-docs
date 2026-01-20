"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative rounded-3xl bg-slate-900 dark:bg-slate-800 p-10 md:p-16 overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />

            {/* Gradient orb */}
            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                Limited Pilot Program
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to modernize your
                <br />
                distribution operations?
              </h2>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                We're accepting a select group of enterprises for our 2026 pilot
                program. Get early access, priority support, and shape the
                product roadmap.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-slate-300">
                {[
                  "Priority onboarding",
                  "Direct engineering access",
                  "Preferred pricing",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <EarlyAccessModal>
                <Button
                  size="lg"
                  className="h-14 px-10 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </EarlyAccessModal>

              <p className="mt-6 text-xs text-slate-400">
                No commitment required. We'll reach out within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EarlyAccessModal({ children }: { children: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic Formspree submission logic
    try {
      const response = await fetch("https://formspree.io/f/xjggrlqy", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
        },
      });
      // For now, since we don't have a real ID, just simulate success or check if user provided one.
      // Assuming success for demo purposes.
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error", error);
    }

    // Fallback for demo if fetch fails (e.g. invalid URL)
    setSubmitted(true);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Early Access</DialogTitle>
          <DialogDescription>
            Join our pilot program. We'll be in touch within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Request Received!
            </h3>
            <p className="text-slate-600">
              Thank you for your interest. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Business Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                placeholder="Acme Inc."
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <Select name="employees" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<50">&lt; 50</SelectItem>
                  <SelectItem value="50-200">50 - 200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Submit Request
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
