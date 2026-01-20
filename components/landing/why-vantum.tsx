"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyVantumSection() {
  const t = useTranslations("whyVantum");

  const comparisonPoints = [
    {
      legacy: t("comparison.implementation.legacy"),
      vantum: t("comparison.implementation.vantum"),
    },
    {
      legacy: t("comparison.pricing.legacy"),
      vantum: t("comparison.pricing.vantum"),
    },
    {
      legacy: t("comparison.changes.legacy"),
      vantum: t("comparison.changes.vantum"),
    },
    {
      legacy: t("comparison.ux.legacy"),
      vantum: t("comparison.ux.vantum"),
    },
    {
      legacy: t("comparison.architecture.legacy"),
      vantum: t("comparison.architecture.vantum"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              {t("sectionLabel")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t("description")}
            </motion.p>
          </div>

          {/* Comparison Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6">
              <div className="hidden md:flex items-center justify-center p-4 rounded-2xl bg-muted/50 border border-border/50">
                <span className="text-sm font-medium text-muted-foreground">
                  {t("legacyERP")}
                </span>
              </div>
              <div className="hidden md:flex items-center justify-center p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">
                  {t("vantumERP")}
                </span>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-3">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8"
                >
                  {/* Legacy side */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground text-sm md:text-base">
                      {point.legacy}
                    </span>
                  </div>

                  {/* Vantum side */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base">
                      {point.vantum}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-xl md:text-2xl font-medium text-foreground">
              &quot;{t("quote")}
              <br className="hidden md:block" />
              <span className="text-muted-foreground">
                {" "}
                {t("quoteContinued")}&quot;
              </span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("quoteAuthor")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
