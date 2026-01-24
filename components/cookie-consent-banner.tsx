"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Cookie, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/components/cookie-consent-provider";
import { Link } from "@/i18n/navigation";

export function CookieConsentBanner() {
  const t = useTranslations("cookieConsent");
  const { showBanner, acceptAll, acceptNecessary, setShowPreferences } =
    useCookieConsent();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-background border border-border rounded-xl shadow-lg p-4 md:p-6">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold text-foreground mb-1">
                      {t("title")}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t("description")}{" "}
                      <Link
                        href="/legal/cookies"
                        className="text-primary hover:underline"
                      >
                        {t("learnMore")}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPreferences(true)}
                    className="gap-1.5"
                  >
                    <Settings className="h-3.5 w-3.5" />
                    {t("customize")}
                  </Button>
                  <Button variant="outline" size="sm" onClick={acceptNecessary}>
                    {t("acceptNecessary")}
                  </Button>
                  <Button variant="default" size="sm" onClick={acceptAll}>
                    {t("acceptAll")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
