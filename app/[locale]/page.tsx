import { setRequestLocale } from "next-intl/server";
import {
  SiteHeader,
  HeroSection,
  ModulesBentoSection,
  MetricsSection,
  WhyVantumSection,
  TrustSection,
  CTASection,
  SiteFooter,
} from "@/components/landing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1" role="main">
        <article itemScope itemType="https://schema.org/SoftwareApplication">
          <meta itemProp="name" content="VantumERP" />
          <meta itemProp="applicationCategory" content="BusinessApplication" />
          <meta itemProp="operatingSystem" content="Web" />
          <HeroSection />
          <ModulesBentoSection />
          <MetricsSection />
          <WhyVantumSection />
          <TrustSection />
          <CTASection />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
