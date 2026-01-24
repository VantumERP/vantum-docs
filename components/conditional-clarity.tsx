"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookie-consent-provider";

const CLARITY_ID = "v6gn444wjr";

export function ConditionalClarity() {
  const { hasAnalyticsConsent, isLoading } = useCookieConsent();

  useEffect(() => {
    // Don't load Clarity until we know the consent status
    // and only load if the user has given analytics consent
    if (isLoading || !hasAnalyticsConsent) {
      return;
    }

    // Check if Clarity is already loaded
    if (typeof window !== "undefined" && "clarity" in window) {
      return;
    }

    // Microsoft Clarity initialization
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;

    // Initialize clarity queue before script loads
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).clarity =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).clarity ||
      function (...args: unknown[]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).clarity.q = (window as any).clarity.q || []).push(
          args,
        );
      };

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }, [hasAnalyticsConsent, isLoading]);

  return null;
}
