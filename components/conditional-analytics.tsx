"use client";

import { Analytics } from "@vercel/analytics/next";
import { useCookieConsent } from "@/components/cookie-consent-provider";

export function ConditionalAnalytics() {
  const { hasAnalyticsConsent, isLoading } = useCookieConsent();

  // Don't render Analytics until we know the consent status
  // and only render if the user has given analytics consent
  if (isLoading || !hasAnalyticsConsent) {
    return null;
  }

  return <Analytics />;
}
