"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "next-intl";
import { EarlyAccessModal } from "./cta";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="VantumERP Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Vantum<span className="text-primary">ERP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ModeToggle />
            <EarlyAccessModal>
              <Button size="sm" className="font-medium shadow-sm">
                {t("getEarlyAccess")}
              </Button>
            </EarlyAccessModal>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t("toggleMenu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 sm:w-87.5">
                <div className="flex flex-col h-full">
                  <div className="mb-8 pt-4 flex items-center gap-2">
                    <Image
                      src="/assets/logo.png"
                      alt="VantumERP Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <span className="text-xl font-bold tracking-tight text-foreground">
                      Vantum<span className="text-primary">ERP</span>
                    </span>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) =>
                      link.external ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      ),
                    )}
                  </nav>
                  <div className="mt-auto pt-8 border-t border-border">
                    <EarlyAccessModal>
                      <Button className="w-full font-medium">
                        {t("getEarlyAccess")}
                      </Button>
                    </EarlyAccessModal>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
