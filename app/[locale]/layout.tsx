import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      "ERP software",
      "enterprise resource planning",
      "distribution ERP",
      "inventory management system",
      "warehouse management",
      "supply chain management",
      "purchasing software",
      "sales order management",
      "replenishment system",
      "modern ERP",
      "cloud ERP",
      "ERP for distributors",
      "ERP for wholesalers",
      "B2B ERP",
      "Actaer",
      "VantumERP",
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

// JSON-LD Structured Data for SEO and AI
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "VantumERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteConfig.description,
      url: siteConfig.url,
      author: {
        "@type": "Organization",
        name: "Actaer",
        url: "https://www.actaer.com",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Early access pilot program",
      },
      featureList: [
        "Inventory Management",
        "Sales Order Processing",
        "Purchase Order Management",
        "Smart Replenishment",
        "Multi-warehouse Support",
        "Real-time Analytics",
        "API-first Architecture",
      ],
    },
    {
      "@type": "Organization",
      name: "Actaer",
      url: "https://www.actaer.com",
      logo: "https://www.actaer.com/logo.png",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@actaer.com",
      },
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: "Actaer",
        url: "https://www.actaer.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is VantumERP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is a modern distribution ERP system that unifies Inventory, Purchasing, Sales, and Replenishment in one platform. Built for enterprises that have outgrown legacy systems.",
          },
        },
        {
          "@type": "Question",
          name: "Who built VantumERP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is built by Actaer, a software company focused on creating enterprise-grade applications with modern technology stacks.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does VantumERP serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VantumERP is designed for distribution-first enterprises including wholesalers, distributors, retail chains, and 3PL providers.",
          },
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
            <main className="flex-1">{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
