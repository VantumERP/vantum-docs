"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Cookie, Shield, BarChart3, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCookieConsent } from "@/components/cookie-consent-provider";
import { Link } from "@/i18n/navigation";

interface CookieCategory {
  id: "necessary" | "analytics" | "marketing";
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  disabled?: boolean;
  defaultChecked: boolean;
}

const categories: CookieCategory[] = [
  {
    id: "necessary",
    icon: <Shield className="h-4 w-4" />,
    titleKey: "categories.necessary.title",
    descriptionKey: "categories.necessary.description",
    disabled: true,
    defaultChecked: true,
  },
  {
    id: "analytics",
    icon: <BarChart3 className="h-4 w-4" />,
    titleKey: "categories.analytics.title",
    descriptionKey: "categories.analytics.description",
    defaultChecked: false,
  },
  {
    id: "marketing",
    icon: <Megaphone className="h-4 w-4" />,
    titleKey: "categories.marketing.title",
    descriptionKey: "categories.marketing.description",
    defaultChecked: false,
  },
];

export function CookieConsentDialog() {
  const t = useTranslations("cookieConsent");
  const {
    consent,
    showPreferences,
    setShowPreferences,
    acceptAll,
    savePreferences,
  } = useCookieConsent();

  const [preferences, setPreferences] = React.useState({
    analytics: consent?.analytics ?? false,
    marketing: consent?.marketing ?? false,
  });

  // Sync preferences when consent changes
  React.useEffect(() => {
    if (consent) {
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
    }
  }, [consent]);

  const handleSave = () => {
    savePreferences(preferences);
  };

  return (
    <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <Cookie className="h-4 w-4 text-primary" />
            </div>
            <DialogTitle>{t("preferencesTitle")}</DialogTitle>
          </div>
          <DialogDescription>
            {t("preferencesDescription")}{" "}
            <Link
              href="/legal/cookies"
              className="text-primary hover:underline"
            >
              {t("cookiePolicy")}
            </Link>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          {categories.map((category) => {
            const isChecked =
              category.id === "necessary"
                ? true
                : preferences[category.id as keyof typeof preferences];

            return (
              <div
                key={category.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/30"
              >
                <div className="shrink-0 p-1.5 bg-background rounded-md border border-border">
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-medium text-foreground">
                      {t(category.titleKey)}
                    </h3>
                    <Switch
                      checked={isChecked}
                      onCheckedChange={(checked) => {
                        if (category.id !== "necessary") {
                          setPreferences((prev) => ({
                            ...prev,
                            [category.id]: checked,
                          }));
                        }
                      }}
                      disabled={category.disabled}
                      aria-label={t(category.titleKey)}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                    {t(category.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button variant="outline" size="sm" onClick={handleSave}>
            {t("savePreferences")}
          </Button>
          <Button variant="default" size="sm" onClick={acceptAll}>
            {t("acceptAll")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
