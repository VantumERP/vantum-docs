"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as Locale });
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className="w-auto gap-2 border-0 bg-transparent hover:bg-muted/50 focus:ring-0 focus:ring-offset-0"
        aria-label={`${t("selectLanguage")}: ${localeNames[locale as Locale]}`}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <SelectValue>
          {localeFlags[locale as Locale]} {localeNames[locale as Locale]}
        </SelectValue>
      </SelectTrigger>
      <SelectContent position="popper" align="end" sideOffset={8}>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            <span className="flex items-center gap-2">
              <span>{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
