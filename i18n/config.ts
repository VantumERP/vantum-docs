export const locales = ["en", "sr", "de", "es", "fr", "pt", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  sr: "Српски",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  pt: "Português",
  pl: "Polski",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  sr: "🇷🇸",
  de: "🇩🇪",
  es: "🇪🇸",
  fr: "🇫🇷",
  pt: "🇧🇷",
  pl: "🇵🇱",
};
