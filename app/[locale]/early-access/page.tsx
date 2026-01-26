import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { EarlyAccessForm } from "@/components/early-access-form";
import {
  Users,
  Wrench,
  BadgePercent,
  Clock,
  Headphones,
  ArrowLeft,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "earlyAccessPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function EarlyAccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("earlyAccessPage");

  const benefits = [
    {
      icon: Users,
      title: t("benefits.priorityOnboarding.title"),
      description: t("benefits.priorityOnboarding.description"),
    },
    {
      icon: Wrench,
      title: t("benefits.directAccess.title"),
      description: t("benefits.directAccess.description"),
    },
    {
      icon: BadgePercent,
      title: t("benefits.preferredPricing.title"),
      description: t("benefits.preferredPricing.description"),
    },
  ];

  const trustBadges = [
    { icon: Clock, label: t("trust.uptime") },
    { icon: Headphones, label: t("trust.support") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/assets/logo.png"
              alt="VantumERP Logo"
              width={30}
              height={30}
              className="h-7 w-7"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Vantum<span className="text-primary">ERP</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t("backToHome")}</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column - Value Proposition */}
              <div className="lg:sticky lg:top-32">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {t("badge")}
                </div>

                {/* Headline */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
                  {t("title")}
                  <br />
                  <span className="text-muted-foreground font-normal">
                    {t("titleHighlight")}
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {t("description")}
                </p>

                {/* Benefits */}
                <div className="space-y-6 mb-10">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("benefits.title")}
                  </h2>
                  <div className="space-y-5">
                    {benefits.map((benefit) => (
                      <div key={benefit.title} className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <benefit.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-8 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-4">
                    {t("trust.title")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {trustBadges.map((badge) => (
                      <div
                        key={badge.label}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border"
                      >
                        <badge.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {badge.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:pt-4">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      {t("form.title")}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {t("form.description")}
                    </p>
                  </div>

                  <EarlyAccessForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
