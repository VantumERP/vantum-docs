"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CTASection() {
  const t = useTranslations("cta");

  const benefits = [
    t("benefits.onboarding"),
    t("benefits.engineering"),
    t("benefits.pricing"),
  ];

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
                {t("pilotBadge")}
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {t("title")}
                <br />
                {t("titleLine2")}
              </h2>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                {t("description")}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-slate-300">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <Link href="/early-access">
                <Button
                  size="lg"
                  className="h-14 px-10 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
                >
                  {t("requestAccess")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <p className="mt-6 text-xs text-slate-400">{t("noCommitment")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
