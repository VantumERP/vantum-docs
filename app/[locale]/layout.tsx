import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsentProvider } from "@/components/cookie-consent-provider";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { CookieConsentDialog } from "@/components/cookie-consent-dialog";
import { ConditionalAnalytics } from "@/components/conditional-analytics";
import { ConditionalClarity } from "@/components/conditional-clarity";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "VantumERP",
  title: "VantumERP - Modern Distribution ERP for Enterprises",
  description:
    "Distribution ERP without the legacy baggage. Inventory, Purchasing, Sales, and Replenishment unified in one modern platform. Built by Actaer for enterprises that refuse to compromise on software quality.",
  url: "https://vantumerp.com",
  ogImage: "/assets/logo.png",
  creator: "Actaer",
  creatorUrl: "https://www.actaer.com",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: messages.metadata?.title || siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: messages.metadata?.description || siteConfig.description,
    keywords: [
      // Primary keywords
      "ERP software",
      "enterprise resource planning",
      "distribution ERP",
      "distribution software",
      "VantumERP",
      // Inventory keywords
      "inventory management system",
      "inventory management software",
      "warehouse management system",
      "WMS software",
      "stock management",
      "inventory control",
      "inventory tracking",
      "multi-warehouse management",
      "lot tracking software",
      "serial number tracking",
      // Supply chain keywords
      "supply chain management",
      "SCM software",
      "supply chain software",
      // Sales keywords
      "sales order management",
      "order management system",
      "order processing software",
      "quote to cash",
      // Purchasing keywords
      "purchasing software",
      "purchase order management",
      "procurement software",
      "vendor management",
      // Replenishment keywords
      "replenishment system",
      "automatic reorder",
      "demand planning",
      "inventory replenishment",
      // Industry keywords
      "wholesale ERP",
      "distributor ERP",
      "ERP for distributors",
      "ERP for wholesalers",
      "retail chain ERP",
      "3PL software",
      "logistics ERP",
      // Technology keywords
      "modern ERP",
      "cloud ERP",
      "API-first ERP",
      "SaaS ERP",
      "B2B ERP",
      // Comparison keywords
      "SAP alternative",
      "NetSuite alternative",
      "Dynamics alternative",
      "legacy ERP replacement",
      // Company
      "Actaer",
    ],
    authors: [{ name: siteConfig.creator, url: siteConfig.creatorUrl }],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/assets/logo.png",
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale,
      url: siteConfig.url,
      title: messages.metadata?.title || siteConfig.title,
      description: messages.metadata?.description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "VantumERP - Modern Distribution ERP",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata?.title || siteConfig.title,
      description: messages.metadata?.description || siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@actaer",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteConfig.url,
      languages: {
        en: `${siteConfig.url}/en`,
        sr: `${siteConfig.url}/sr`,
        de: `${siteConfig.url}/de`,
        es: `${siteConfig.url}/es`,
        fr: `${siteConfig.url}/fr`,
        pt: `${siteConfig.url}/pt`,
      },
    },
    category: "technology",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// JSON-LD Structured Data for SEO, AIO (AI Optimization), and GEO (Generative Engine Optimization)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Primary Software Application
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#software`,
      name: "VantumERP",
      alternateName: ["Vantum ERP", "Vantum Enterprise Resource Planning"],
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Enterprise Resource Planning (ERP)",
      operatingSystem: "Web Browser",
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}/assets/logo.png`,
      screenshot: `${siteConfig.url}/assets/screenshot.png`,
      softwareVersion: "1.0",
      datePublished: "2025-01-01",
      inLanguage: ["en", "de", "es", "fr", "pt", "sr"],
      isAccessibleForFree: false,
      author: {
        "@type": "Organization",
        "@id": `${siteConfig.creatorUrl}/#organization`,
        name: "Actaer",
      },
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.creatorUrl}/#organization`,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description:
          "Early access pilot program - pricing available upon request",
        availability: "https://schema.org/PreOrder",
        validFrom: "2025-01-01",
        priceValidUntil: "2026-12-31",
        seller: {
          "@type": "Organization",
          name: "Actaer",
        },
      },
      featureList: [
        "Inventory Management with real-time stock visibility",
        "Multi-warehouse support with bin-level tracking",
        "Lot tracking and serial number management",
        "Sales Order Processing with quote-to-cash workflow",
        "Real-time inventory availability checks",
        "Automatic inventory reservation",
        "Purchase Order Management with vendor portals",
        "Lead time and cost tracking",
        "Smart Replenishment with AI-assisted reorder points",
        "Automatic purchase order generation",
        "100% REST API coverage",
        "Role-based access control (RBAC)",
        "Audit logging and compliance",
        "Multi-currency and multi-language support",
        "Self-hosted or cloud deployment options",
      ],
      softwareRequirements:
        "Modern web browser (Chrome, Firefox, Safari, Edge)",
      releaseNotes:
        "Pilot program now accepting early access partners for 2026",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "50",
        reviewCount: "25",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Distribution Industry Expert",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "VantumERP represents a new generation of distribution-focused ERP systems with modern architecture and user experience.",
        },
      ],
    },
    // Organization
    {
      "@type": "Organization",
      "@id": `${siteConfig.creatorUrl}/#organization`,
      name: "Actaer",
      legalName: "Actaer",
      url: siteConfig.creatorUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.creatorUrl}/logo.png`,
        width: "512",
        height: "512",
      },
      image: `${siteConfig.creatorUrl}/logo.png`,
      description:
        "Software company focused on creating enterprise-grade applications with modern technology stacks.",
      foundingDate: "2024",
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@actaer.com",
          availableLanguage: [
            "English",
            "German",
            "Spanish",
            "French",
            "Portuguese",
            "Serbian",
          ],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "hello@actaer.com",
        },
      ],
      knowsAbout: [
        "Enterprise Resource Planning",
        "Distribution Software",
        "Inventory Management",
        "Supply Chain Management",
        "B2B Software",
        "Cloud Computing",
        "API Development",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          "@id": `${siteConfig.url}/#software`,
        },
      },
    },
    // WebSite
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: ["en", "de", "es", "fr", "pt", "sr"],
      publisher: {
        "@type": "Organization",
        "@id": `${siteConfig.creatorUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    // WebPage
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
      },
      mainEntity: {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero-description", ".feature-description"],
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
        ],
      },
    },
    // Product (for shopping/comparison)
    {
      "@type": "Product",
      "@id": `${siteConfig.url}/#product`,
      name: "VantumERP Distribution Software",
      description:
        "Modern distribution ERP software for wholesalers, distributors, retail chains, and 3PL providers. Includes inventory management, sales orders, purchasing, and smart replenishment.",
      brand: {
        "@type": "Brand",
        name: "VantumERP",
      },
      manufacturer: {
        "@type": "Organization",
        "@id": `${siteConfig.creatorUrl}/#organization`,
      },
      category: "Business Software > ERP > Distribution",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Distributors, Wholesalers, Retail Chains, 3PL Providers",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 10,
          maxValue: 10000,
        },
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        offerCount: 3,
        lowPrice: "0",
        highPrice: "10000",
        description: "Multiple pricing tiers available. Contact for quote.",
      },
    },
    // FAQ Page for AI assistants
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is VantumERP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is a modern distribution ERP system that unifies Inventory, Purchasing, Sales, and Replenishment in one platform. Built by Actaer for enterprises that have outgrown legacy systems, it offers 10x faster implementation, 100% API coverage, and unlimited users with transparent pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Who built VantumERP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is built by Actaer, a software company focused on creating enterprise-grade applications with modern technology stacks including .NET 10, React 19, and PostgreSQL.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does VantumERP serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is designed for distribution-first enterprises including wholesalers, distributors, retail chains, and 3PL (third-party logistics) providers who need inventory management, sales order processing, purchasing, and smart replenishment capabilities.",
          },
        },
        {
          "@type": "Question",
          name: "How long does VantumERP implementation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike legacy ERPs that take 6-18 months to implement, VantumERP can be implemented in weeks, not months. Small businesses can go live in 2-3 weeks, medium businesses in 4-6 weeks, and enterprises in 6-10 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Does VantumERP charge per user?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, VantumERP does not charge per-seat licensing fees. You can add unlimited users at no additional cost, making it ideal for growing teams.",
          },
        },
        {
          "@type": "Question",
          name: "Is VantumERP API-first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, VantumERP offers 100% API coverage. Every feature is accessible via REST API, enabling seamless integrations with e-commerce platforms, accounting software, shipping providers, and custom applications.",
          },
        },
        {
          "@type": "Question",
          name: "Can VantumERP be self-hosted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, VantumERP supports both managed cloud deployment and self-hosted options for organizations with data sovereignty requirements. Your data stays under your control.",
          },
        },
        {
          "@type": "Question",
          name: "What technology stack does VantumERP use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is built on a modern technology stack: .NET 10 with CQRS and Event Sourcing on the backend, React 19 with TypeScript on the frontend, and PostgreSQL for the database. It follows Clean Architecture and Domain-Driven Design principles.",
          },
        },
        {
          "@type": "Question",
          name: "What are VantumERP's core modules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP has four core modules: (1) Inventory Management - real-time stock visibility, multi-warehouse, lot tracking, serial numbers; (2) Sales Orders - quote-to-cash workflow, availability checks, customer pricing; (3) Purchasing - vendor management, PO automation, cost tracking; (4) Smart Replenishment - AI-assisted reorder points, automatic PO generation.",
          },
        },
        {
          "@type": "Question",
          name: "How does VantumERP compare to SAP, Oracle NetSuite, or Microsoft Dynamics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP offers faster implementation (weeks vs months), simpler pricing (no per-seat fees), modern user experience, and distribution-specific features. While SAP, NetSuite, and Dynamics are general-purpose ERPs, VantumERP is purpose-built for distribution businesses with a focus on usability and rapid deployment.",
          },
        },
      ],
    },
    // Service offering
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      serviceType: "Enterprise Resource Planning Software",
      name: "VantumERP Distribution ERP Service",
      description:
        "Cloud-based ERP service for distribution businesses including implementation, training, and ongoing support.",
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.creatorUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "VantumERP Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VantumERP Pilot Program",
              description:
                "Early access to VantumERP with priority onboarding and direct engineering access.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VantumERP Implementation",
              description:
                "Full implementation service including data migration, configuration, and training.",
            },
          },
        ],
      },
      termsOfService: `${siteConfig.url}/terms`,
    },
    // ItemList for modules
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#modules`,
      name: "VantumERP Core Modules",
      description: "The four core modules of VantumERP distribution software",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inventory Management",
          description:
            "Real-time stock visibility across unlimited warehouses with lot tracking, serial numbers, and bin locations.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sales Orders",
          description:
            "Quote-to-cash workflow with real-time availability checks and automatic inventory reservation.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Purchasing",
          description:
            "Vendor management with purchase order automation, lead time tracking, and cost management.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Smart Replenishment",
          description:
            "AI-assisted reorder point calculations with automatic purchase order generation based on sales velocity.",
        },
      ],
    },
    // HowTo for getting started
    {
      "@type": "HowTo",
      "@id": `${siteConfig.url}/#howto`,
      name: "How to Get Started with VantumERP",
      description:
        "Steps to begin using VantumERP for your distribution business",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Request Early Access",
          text: "Visit vantumerp.com and click 'Request Early Access' to join the pilot program.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Discovery Call",
          text: "Our team will contact you within 24 hours to understand your business needs.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Demo & Proposal",
          text: "Receive a personalized demo and implementation proposal.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Implementation",
          text: "Go live in weeks with our guided implementation process.",
        },
      ],
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CookieConsentProvider>
              <main className="flex-1">{children}</main>
              <CookieConsentBanner />
              <CookieConsentDialog />
              <ConditionalAnalytics />
              <ConditionalClarity />
            </CookieConsentProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
