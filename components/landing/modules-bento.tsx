"use client";

import { motion } from "framer-motion";
import {
  Package,
  ShoppingCart,
  Truck,
  RefreshCw,
  ArrowUpRight,
  BarChart3,
  Boxes,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ModulesBentoSection() {
  const t = useTranslations("modules");

  const inventoryTags = [
    t("inventory.tags.multiWarehouse"),
    t("inventory.tags.lotTracking"),
    t("inventory.tags.serialNumbers"),
    t("inventory.tags.binLocations"),
  ];

  return (
    <section id="product" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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
            className="text-lg text-muted-foreground"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto"
        >
          {/* INVENTORY - Large Card */}
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 lg:p-10 overflow-hidden border border-slate-800"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {t("inventory.title")}
              </h3>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                {t("inventory.description")}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {inventoryTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visual element */}
              <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Boxes className="h-48 w-48 text-white" />
              </div>
            </div>
          </motion.div>

          {/* SALES */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-6 lg:p-8 overflow-hidden border border-primary/20"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-primary/20">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("sales.title")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("sales.description")}
              </p>
            </div>

            {/* Mini chart visual */}
            <div className="mt-6 flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-primary/30 group-hover:bg-primary/50 transition-colors"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* PURCHASING */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 dark:from-blue-500/20 dark:to-blue-500/10 p-6 lg:p-8 overflow-hidden border border-blue-500/20"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/20">
                  <Truck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-blue-500/40 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {t("purchasing.title")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("purchasing.description")}
              </p>
            </div>

            {/* Visual element */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-blue-500/20">
                  <div className="h-2 w-3/4 rounded-full bg-blue-500/60" />
                </div>
                <span className="text-xs text-muted-foreground">75%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-blue-500/20">
                  <div className="h-2 w-[90%] rounded-full bg-blue-500/60" />
                </div>
                <span className="text-xs text-muted-foreground">90%</span>
              </div>
            </div>
          </motion.div>

          {/* REPLENISHMENT - Wide card */}
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-2 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 dark:from-emerald-500/20 dark:to-emerald-500/10 p-6 lg:p-8 overflow-hidden border border-emerald-500/20"
          >
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/20">
                    <RefreshCw className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("replenishment.title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("replenishment.description")}
                </p>
              </div>

              {/* Visual: Replenishment flow */}
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1">
                    {t("replenishment.analyze")}
                  </span>
                </div>
                <div className="w-8 h-[2px] bg-emerald-500/30" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <ClipboardList className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1">
                    {t("replenishment.suggest")}
                  </span>
                </div>
                <div className="w-8 h-[2px] bg-emerald-500/30" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center border-2 border-emerald-500/50">
                    <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1">
                    {t("replenishment.optimize")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
