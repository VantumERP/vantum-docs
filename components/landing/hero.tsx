"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EarlyAccessModal } from "@/components/landing/cta";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-linear-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now accepting pilot partners for 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            Distribution ERP
            <br />
            <span className="text-muted-foreground font-normal">
              without the legacy baggage.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Inventory, Purchasing, Sales, and Replenishment—unified in one
            modern platform. Built for enterprises that refuse to compromise on
            software quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <EarlyAccessModal>
              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Request Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </EarlyAccessModal>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-6">
              Designed for distribution-first enterprises
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground/40">
              <span className="text-lg font-semibold tracking-tight">
                Wholesalers
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/20" />
              <span className="text-lg font-semibold tracking-tight">
                Distributors
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/20" />
              <span className="text-lg font-semibold tracking-tight">
                Retail Chains
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/20" />
              <span className="text-lg font-semibold tracking-tight">
                3PL Providers
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
