import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/landing/footer";

export default async function LegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getTranslations("legal");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToHome")}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <article className="prose prose-sm md:prose-base dark:prose-invert max-w-3xl mx-auto">
          {children}
        </article>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
