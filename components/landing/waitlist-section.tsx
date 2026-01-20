"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-border/50">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-100 w-100 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-75 w-75 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
            <div className="mx-auto max-w-2xl text-center">
              {/* Header */}
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Be Among the First
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join our early access program and be the first to experience
                Vantum ERP. Enterprise pilot slots are limited.
              </p>

              {/* Success state */}
              {isSubmitted ? (
                <div className="mt-10 flex flex-col items-center gap-4 p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50">
                  <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ll be in touch soon with early access details.
                  </p>
                </div>
              ) : (
                /* Form */
                <form
                  action="https://formspree.io/f/xjggrlqy"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-10 mx-auto max-w-md"
                >
                  <div className="space-y-4">
                    <div className="text-left">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="mt-1.5 h-12 bg-background/80"
                      />
                    </div>
                    <div className="text-left">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Corporation"
                        className="mt-1.5 h-12 bg-background/80"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Join the Waitlist
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    By joining, you agree to receive updates about Vantum ERP.
                    We respect your privacy.
                  </p>
                </form>
              )}

              {/* Benefits */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <span className="font-semibold">Early Access</span>
                  <span className="text-muted-foreground">
                    First to try new features
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <span className="font-semibold">Priority Support</span>
                  <span className="text-muted-foreground">
                    Direct line to our team
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <span className="font-semibold">Founding Pricing</span>
                  <span className="text-muted-foreground">
                    Exclusive early adopter rates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
