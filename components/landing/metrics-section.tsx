"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "10x",
    label: "Faster implementation",
    description: "vs traditional ERP",
  },
  {
    value: "100%",
    label: "API coverage",
    description: "Every feature accessible",
  },
  {
    value: "0",
    label: "Hidden fees",
    description: "Transparent pricing",
  },
  {
    value: "∞",
    label: "Users",
    description: "No per-seat licensing",
  },
];

export function MetricsSection() {
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
