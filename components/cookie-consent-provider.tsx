"use client";

import * as React from "react";

// Consent expiry: 12 months in milliseconds
const CONSENT_EXPIRY_MS = 365 * 24 * 60 * 60 * 1000;
const CONSENT_STORAGE_KEY = "vantum-cookie-consent";

export interface CookieConsentState {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

interface CookieConsentContextValue {
  consent: CookieConsentState | null;
  hasConsent: boolean;
  hasAnalyticsConsent: boolean;
  hasMarketingConsent: boolean;
  isLoading: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  setShowPreferences: (show: boolean) => void;
  acceptAll: () => void;
  acceptNecessary: () => void;
  savePreferences: (
    preferences: Omit<CookieConsentState, "necessary" | "timestamp">,
  ) => void;
  resetConsent: () => void;
}

const CookieConsentContext = React.createContext<
  CookieConsentContextValue | undefined
>(undefined);

function isConsentExpired(timestamp: number): boolean {
  return Date.now() - timestamp > CONSENT_EXPIRY_MS;
}

function getStoredConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const consent = JSON.parse(stored) as CookieConsentState;

    // Check if consent has expired
    if (isConsentExpired(consent.timestamp)) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return consent;
  } catch {
    return null;
  }
}

function saveConsent(consent: CookieConsentState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = React.useState<CookieConsentState | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showPreferences, setShowPreferences] = React.useState(false);

  // Load consent from localStorage on mount (client-side only)
  React.useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
    setIsLoading(false);
  }, []);

  const hasConsent = consent !== null;
  const hasAnalyticsConsent = consent?.analytics ?? false;
  const hasMarketingConsent = consent?.marketing ?? false;
  const showBanner = !isLoading && !hasConsent;

  const acceptAll = React.useCallback(() => {
    const newConsent: CookieConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowPreferences(false);
  }, []);

  const acceptNecessary = React.useCallback(() => {
    const newConsent: CookieConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowPreferences(false);
  }, []);

  const savePreferences = React.useCallback(
    (preferences: Omit<CookieConsentState, "necessary" | "timestamp">) => {
      const newConsent: CookieConsentState = {
        necessary: true,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        timestamp: Date.now(),
      };
      setConsent(newConsent);
      saveConsent(newConsent);
      setShowPreferences(false);
    },
    [],
  );

  const resetConsent = React.useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    }
    setConsent(null);
  }, []);

  const value = React.useMemo(
    () => ({
      consent,
      hasConsent,
      hasAnalyticsConsent,
      hasMarketingConsent,
      isLoading,
      showBanner,
      showPreferences,
      setShowPreferences,
      acceptAll,
      acceptNecessary,
      savePreferences,
      resetConsent,
    }),
    [
      consent,
      hasConsent,
      hasAnalyticsConsent,
      hasMarketingConsent,
      isLoading,
      showBanner,
      showPreferences,
      acceptAll,
      acceptNecessary,
      savePreferences,
      resetConsent,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = React.useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider",
    );
  }
  return context;
}
