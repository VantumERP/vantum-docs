<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">

    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>XML Sitemap - VantumERP</title>
                <style>
                    :root {
                    --bg-primary: #0a0a0a;
                    --bg-secondary: #111111;
                    --bg-tertiary: #1a1a1a;
                    --text-primary: #fafafa;
                    --text-secondary: #a1a1aa;
                    --text-muted: #71717a;
                    --border-color: #27272a;
                    --accent: #3b82f6;
                    --accent-hover: #2563eb;
                    --success: #22c55e;
                    --warning: #f59e0b;
                    }

                    * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }

                    body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica
                    Neue', Arial, sans-serif;
                    background: #0a0a0a;
                    background-color: #0a0a0a;
                    color: #fafafa;
                    line-height: 1.6;
                    min-height: 100vh;
                    }

                    html {
                    background: #0a0a0a;
                    background-color: #0a0a0a;
                    }

                    .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    }

                    header {
                    text-align: center;
                    margin-bottom: 3rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid var(--border-color);
                    }

                    .logo {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.025em;
                    }

                    .logo span {
                    color: var(--accent);
                    }

                    h1 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    }

                    .subtitle {
                    color: var(--text-secondary);
                    font-size: 1.125rem;
                    }

                    .stats {
                    display: flex;
                    gap: 2rem;
                    justify-content: center;
                    margin-top: 1.5rem;
                    flex-wrap: wrap;
                    }

                    .stat {
                    background: var(--bg-secondary);
                    padding: 1rem 1.5rem;
                    border-radius: 0.75rem;
                    border: 1px solid var(--border-color);
                    }

                    .stat-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--accent);
                    }

                    .stat-label {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    }

                    .info-banner {
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246,
                    0.05));
                    border: 1px solid rgba(59, 130, 246, 0.2);
                    border-radius: 0.75rem;
                    padding: 1rem 1.5rem;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    }

                    .info-banner svg {
                    flex-shrink: 0;
                    color: var(--accent);
                    }

                    .info-banner p {
                    color: var(--text-secondary);
                    font-size: 0.9375rem;
                    }

                    .info-banner code {
                    background: var(--bg-tertiary);
                    padding: 0.125rem 0.375rem;
                    border-radius: 0.25rem;
                    font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
                    font-size: 0.875rem;
                    color: var(--accent);
                    }

                    table {
                    width: 100%;
                    border-collapse: collapse;
                    background: var(--bg-secondary);
                    border-radius: 1rem;
                    overflow: hidden;
                    border: 1px solid var(--border-color);
                    }

                    thead {
                    background: var(--bg-tertiary);
                    }

                    th {
                    text-align: left;
                    padding: 1rem 1.25rem;
                    font-weight: 600;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    border-bottom: 1px solid var(--border-color);
                    }

                    td {
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid var(--border-color);
                    font-size: 0.9375rem;
                    }

                    tr:last-child td {
                    border-bottom: none;
                    }

                    tr:hover td {
                    background: var(--bg-tertiary);
                    }

                    .url-cell {
                    max-width: 500px;
                    }

                    .url-cell a {
                    color: var(--accent);
                    text-decoration: none;
                    word-break: break-all;
                    transition: color 0.2s;
                    }

                    .url-cell a:hover {
                    color: var(--accent-hover);
                    text-decoration: underline;
                    }

                    .priority-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.25rem 0.625rem;
                    border-radius: 9999px;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    }

                    .priority-high {
                    background: #14532d;
                    color: var(--success);
                    }

                    .priority-medium {
                    background: #1e3a5f;
                    color: var(--accent);
                    }

                    .priority-low {
                    background: #451a03;
                    color: var(--warning);
                    }

                    .frequency-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.25rem 0.625rem;
                    border-radius: 0.375rem;
                    font-size: 0.8125rem;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-color);
                    }

                    .date-cell {
                    color: var(--text-muted);
                    font-size: 0.875rem;
                    white-space: nowrap;
                    }

                    footer {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid var(--border-color);
                    color: var(--text-muted);
                    font-size: 0.875rem;
                    }

                    footer a {
                    color: var(--accent);
                    text-decoration: none;
                    }

                    footer a:hover {
                    text-decoration: underline;
                    }

                    @media (max-width: 768px) {
                    .container {
                    padding: 1rem;
                    }

                    h1 {
                    font-size: 1.75rem;
                    }

                    .stats {
                    gap: 1rem;
                    }

                    .stat {
                    padding: 0.75rem 1rem;
                    }

                    table {
                    display: block;
                    overflow-x: auto;
                    }

                    th, td {
                    padding: 0.75rem;
                    }

                    .url-cell {
                    max-width: 200px;
                    }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <header>
                        <div class="logo">Vantum<span>ERP</span></div>
                        <h1>XML Sitemap</h1>
                        <p class="subtitle">A complete index of all pages on vantumerp.com</p>
                        <div class="stats">
                            <div class="stat">
                                <div class="stat-value">
                                    <xsl:value-of select="count(sitemap:urlset/sitemap:url)" />
                                </div>
                                <div class="stat-label">Total URLs</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">
                                    <xsl:value-of
                                        select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.9])" />
                                </div>
                                <div class="stat-label">High Priority</div>
                            </div>
                        </div>
                    </header>

                    <div class="info-banner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                        </svg>
                        <p>This is a styled XML sitemap for human readability. Search engine
                            crawlers receive the standard XML format. Generated by <code>
                            next-sitemap</code>.</p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>URL</th>
                                <th>Priority</th>
                                <th>Change Frequency</th>
                                <th>Last Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <xsl:sort select="sitemap:priority" order="descending"
                                    data-type="number" />
                                <tr>
                                    <td class="url-cell">
                                        <a href="{sitemap:loc}">
                                            <xsl:value-of select="sitemap:loc" />
                                        </a>
                                    </td>
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="sitemap:priority >= 0.9">
                                                <span class="priority-badge priority-high">
                                                    <xsl:value-of select="sitemap:priority" />
                                                </span>
                                            </xsl:when>
                                            <xsl:when test="sitemap:priority >= 0.7">
                                                <span class="priority-badge priority-medium">
                                                    <xsl:value-of select="sitemap:priority" />
                                                </span>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <span class="priority-badge priority-low">
                                                    <xsl:value-of select="sitemap:priority" />
                                                </span>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </td>
                                    <td>
                                        <span class="frequency-badge">
                                            <xsl:value-of select="sitemap:changefreq" />
                                        </span>
                                    </td>
                                    <td class="date-cell">
                                        <xsl:value-of select="substring(sitemap:lastmod, 1, 10)" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>

                    <footer>
                        <p>© 2026 VantumERP. Built by <a href="https://actaer.com" target="_blank"
                                rel="noopener">Actaer</a>.</p>
                        <p style="margin-top: 0.5rem;">
                            <a href="https://vantumerp.com">← Back to VantumERP</a>
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>