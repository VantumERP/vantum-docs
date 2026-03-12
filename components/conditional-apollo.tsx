"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookie-consent-provider";

const APOLLO_APP_ID = "6835cf0a43583f01c9e82c93";
const APOLLO_SCRIPT_ID = "apollo-tracker-script";

export function ConditionalApollo() {
  const { hasMarketingConsent, isLoading } = useCookieConsent();

  useEffect(() => {
    // Ensure we are in a browser environment
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    // Don't load or modify Apollo until we know the consent status
    if (isLoading) {
      return;
    }

    if (hasMarketingConsent) {
      // If Apollo is already loaded or the script is present, do nothing
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ("trackingFunctions" in (window as any)) {
        return;
      }

      const existingScript = document.getElementById(APOLLO_SCRIPT_ID);
      if (existingScript) {
        return;
      }

      // Apollo.io website visitor tracking initialization
      const script = document.createElement("script");
      script.id = APOLLO_SCRIPT_ID;
      script.src =
        "https://assets.apollo.io/micro/website-tracker/tracker.iife.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        if (
          w.trackingFunctions &&
          typeof w.trackingFunctions.onLoad === "function"
        ) {
          w.trackingFunctions.onLoad({
            appId: APOLLO_APP_ID,
          });
        }
      };

      document.head.appendChild(script);
      return;
    }

    // If we reach here, marketing consent has been denied or revoked.
    // Remove the Apollo script if it exists.
    const existingScript = document.getElementById(APOLLO_SCRIPT_ID);
    if (existingScript && existingScript.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }

    // Attempt to disable/shutdown Apollo tracking if an API is exposed.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.trackingFunctions) {
      if (typeof w.trackingFunctions.disable === "function") {
        w.trackingFunctions.disable();
      } else if (typeof w.trackingFunctions.shutdown === "function") {
        w.trackingFunctions.shutdown();
      }
    }
  }, [hasMarketingConsent, isLoading]);

  return null;
}
