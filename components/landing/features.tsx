"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Link as LinkIcon } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Real-time Visibility",
    description: "Track every SKU across multiple warehouses instantly.",
  },
  {
    icon: TrendingUp,
    title: "Smart Replenishment",
    description: "Automated purchasing suggestions based on sales velocity. Never run out of stock.",
    highlight: true,
  },
  {
    icon: LinkIcon,
    title: "Unified Data",
    description: "Sales orders instantly reserve inventory. No more sync errors.",
  },
];

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Everything you need to scale operations
            </h2>
            <p className="text-lg text-muted-foreground">
                Built for complexity, designed for clarity.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                feature.highlight
                  ? "bg-accent/50 border-ring/20 ring-1 ring-ring/10"
                  : "bg-card border-border hover:border-ring/30"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  feature.highlight
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
