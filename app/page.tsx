import {
  SiteHeader,
  HeroSection,
  FeaturesSection,
  TrustSection,
  CTASection,
  SiteFooter,
  ModulesBentoSection,
  WhyVantumSection,
  MetricsSection,
} from "@/components/landing";

export default function HomePage() {
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
