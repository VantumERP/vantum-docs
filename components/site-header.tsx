"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <VantumLogo className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">Vantum</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#features" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#modules" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Modules
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Docs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function VantumLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 0L150 0L300 400L200 540L0 0Z" className="fill-primary" />
      <path d="M350 0L500 0L600 540L400 200L350 0Z" className="fill-primary" />
    </svg>
  );
}
