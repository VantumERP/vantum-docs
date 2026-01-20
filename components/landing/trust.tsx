"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Lock, Code2, Database } from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Role-based access control, audit logging, and encryption at rest and in transit.",
  },
  {
    icon: Cpu,
    title: "Modern Architecture",
    description:
      "Built on .NET 10 and React 19 with event-driven patterns and CQRS.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Sub-second response times even with millions of transactions.",
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description:
      "Deploy on your infrastructure or our managed cloud. Your data, your rules.",
  },
  {
    icon: Code2,
    title: "API Complete",
    description:
      "Every feature available via REST API. Build integrations on your terms.",
  },
  {
    icon: Database,
    title: "PostgreSQL Native",
    description:
      "Battle-tested database with proven reliability and scalability.",
  },
];

export function TrustSection() {
  return (
    <section id="security" className="py-24 md:py-32 bg-background">
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
              Enterprise Ready
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4"
            >
              Built on foundations you can trust.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Security, performance, and reliability aren't features—they're
              requirements. We've built them into every layer.
            </motion.p>
          </div>

          {/* Capability Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-lg hover:shadow-muted/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech stack badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Powered by
            </span>
            {[".NET 10", "React 19", "PostgreSQL", "Kafka", "Redis"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
