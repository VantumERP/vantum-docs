import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, Clock, Phone, Rocket } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "thankYouPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("thankYouPage");

  const steps = [
    {
      icon: Clock,
      title: t("nextSteps.step1.title"),
      description: t("nextSteps.step1.description"),
    },
    {
      icon: Phone,
      title: t("nextSteps.step2.title"),
      description: t("nextSteps.step2.description"),
    },
    {
      icon: Rocket,
      title: t("nextSteps.step3.title"),
      description: t("nextSteps.step3.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/assets/new_logo.png"
              alt="VantumERP Logo"
              width={30}
              height={30}
              className="h-7 w-7"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Vantum<span className="text-primary">ERP</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {t("title")}
            </h1>

            <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
              {t("description")}
            </p>

            {/* Next Steps */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-10">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                {t("nextSteps.title")}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative">
                    {/* Connector line for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-border" />
                    )}

                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative z-10">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Home */}
            <Link href="/">
              <Button variant="outline" size="lg" className="h-12 px-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
