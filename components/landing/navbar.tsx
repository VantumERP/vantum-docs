"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "next-intl";

export function SiteHeader() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navLinks = [
    { href: "#product", label: t("product") },
    { href: "#security", label: t("enterprise") },
    { href: "https://www.actaer.com", label: t("aboutActaer"), external: true },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-0 md:px-6 pt-0 md:pt-4">
      <div
        className={`flex items-center justify-between w-full md:max-w-4xl gap-3 md:gap-6 px-4 md:px-6 py-3 transition-all duration-300 md:rounded-full border-b md:border ${
          isScrolled
            ? "bg-background/90 md:bg-background/80 backdrop-blur-xl border-border/60 md:shadow-lg md:shadow-black/5"
            : "bg-background/70 md:bg-background/50 backdrop-blur-md border-transparent md:border-border/40"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 pl-1">
          <Image
            src="/assets/logo.png"
            alt="VantumERP Logo"
            width={30}
            height={30}
            className="h-7 w-7 sm:h-7.5 sm:w-7.5"
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Vantum<span className="text-primary">ERP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 px-2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />
          <Link href="/early-access">
            <Button
              size="sm"
              className="font-medium rounded-full px-4 shadow-sm"
            >
              {t("getEarlyAccess")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("toggleMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/assets/logo.png"
                      alt="VantumERP Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                      Vantum<span className="text-primary">ERP</span>
                    </span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 p-4 flex-1">
                  {navLinks.map((link) =>
                    link.external ? (
                      <SheetClose asChild key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ) : (
                      <SheetClose asChild key={link.label}>
                        <Link
                          href={link.href}
                          className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ),
                  )}
                </nav>

                {/* Footer */}
                <div className="p-6 pt-4 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Settings
                    </span>
                    <div className="flex items-center gap-2">
                      <LanguageSwitcher />
                      <ModeToggle />
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Link href="/early-access" className="block">
                      <Button className="w-full font-medium rounded-xl h-11">
                        {t("getEarlyAccess")}
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
