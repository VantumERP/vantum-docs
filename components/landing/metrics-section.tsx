"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function MetricsSection() {
  const t = useTranslations("metrics");

  const metrics = [
    {
      value: t("implementation.value"),
      label: t("implementation.label"),
      description: t("implementation.description"),
    },
    {
      value: t("api.value"),
      label: t("api.label"),
      description: t("api.description"),
    },
    {
      value: t("fees.value"),
      label: t("fees.label"),
      description: t("fees.description"),
    },
    {
      value: t("users.value"),
      label: t("users.label"),
      description: t("users.description"),
    },
  ];

  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
