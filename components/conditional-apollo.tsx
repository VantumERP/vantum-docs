"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookie-consent-provider";

const APOLLO_APP_ID = "6835cf0a43583f01c9e82c93";

export function ConditionalApollo() {
  const { hasMarketingConsent, isLoading } = useCookieConsent();

  useEffect(() => {
    // Don't load Apollo until we know the consent status
    // and only load if the user has given marketing consent
    if (isLoading || !hasMarketingConsent) {
      return;
    }

    // Check if Apollo is already loaded
    if (
      typeof window !== "undefined" &&
      "trackingFunctions" in window
    ) {
      return;
    }

    // Apollo.io website visitor tracking initialization
    const cacheBuster = Math.random().toString(36).substring(7);
    const script = document.createElement("script");
    script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${cacheBuster}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).trackingFunctions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).trackingFunctions.onLoad({
          appId: APOLLO_APP_ID,
        });
      }
    };

    document.head.appendChild(script);
  }, [hasMarketingConsent, isLoading]);

  return null;
}
