import { locales } from "@/i18n/config";

export async function GET() {
  const baseUrl = "https://vantumerp.com";
  const currentDate = new Date().toISOString();

  // Main locale entries with highest priority
  const localeEntries = locales.map((locale) => ({
    url: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1.0 : 0.9,
  }));

  // Legal pages for all locales
  const legalPages = ["privacy", "terms", "cookies"];
  const legalEntries = locales.flatMap((locale) =>
    legalPages.map((page) => ({
      url:
        locale === "en"
          ? `${baseUrl}/legal/${page}`
          : `${baseUrl}/${locale}/legal/${page}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  );

  // Static content pages (high priority for AI discovery)
  const staticPages = [
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

  // Product/Feature anchor links (helps search engines understand page structure)
  const featureAnchors = [
    {
      url: `${baseUrl}/#modules`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#inventory`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#sales`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#purchasing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#replenishment`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#why-vantum`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/#enterprise`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const allEntries = [
    ...localeEntries,
    ...legalEntries,
    ...staticPages,
    ...featureAnchors,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
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
