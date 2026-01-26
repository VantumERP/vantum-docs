import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
  alternates?: { locale: string; url: string }[];
};

function getLocalizedUrl(baseUrl: string, locale: string, path: string = "") {
  const localePath = locale === "en" ? "" : `/${locale}`;
  return `${baseUrl}${localePath}${path}`;
}

function generateAlternates(baseUrl: string, path: string = "") {
  return locales.map((locale) => ({
    locale,
    url: getLocalizedUrl(baseUrl, locale, path),
  }));
}

export async function GET() {
  const baseUrl = "https://vantumerp.com";
  const currentDate = new Date().toISOString();

  // Main locale entries with highest priority (with hreflang alternates)
  const localeEntries: SitemapEntry[] = locales.map((locale) => ({
    url: getLocalizedUrl(baseUrl, locale),
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1.0 : 0.9,
    alternates: generateAlternates(baseUrl),
  }));

  // Legal pages for all locales (with hreflang alternates)
  const legalPages = ["privacy", "terms", "cookies"];
  const legalEntries: SitemapEntry[] = locales.flatMap((locale) =>
    legalPages.map((page) => ({
      url: getLocalizedUrl(baseUrl, locale, `/legal/${page}`),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: generateAlternates(baseUrl, `/legal/${page}`),
    })),
  );

  // Early access page for all locales (with hreflang alternates)
  const earlyAccessEntries: SitemapEntry[] = locales.map((locale) => ({
    url: getLocalizedUrl(baseUrl, locale, "/early-access"),
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: generateAlternates(baseUrl, "/early-access"),
  }));

  // Thank you page for all locales (with hreflang alternates)
  const thankYouEntries: SitemapEntry[] = locales.map((locale) => ({
    url: getLocalizedUrl(baseUrl, locale, "/early-access/thank-you"),
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.3,
    alternates: generateAlternates(baseUrl, "/early-access/thank-you"),
  }));

  // Static content pages (high priority for AI discovery)
  const staticPages: SitemapEntry[] = [
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const allEntries: SitemapEntry[] = [
    ...localeEntries,
    ...legalEntries,
    ...earlyAccessEntries,
    ...thankYouEntries,
    ...staticPages,
  ];

  // Generate hreflang links for each alternate language
  const generateHreflangLinks = (
    alternates?: { locale: string; url: string }[],
  ) => {
    if (!alternates) return "";
    return alternates
      .map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt.locale}" href="${alt.url}" />`,
      )
      .join("\n");
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
${generateHreflangLinks(entry.alternates)}  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
