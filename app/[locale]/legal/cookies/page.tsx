import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: t("cookiePolicy"),
    description:
      "Cookie Policy for VantumERP - Information about the cookies we use and how to manage them.",
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  const lastUpdated = "January 24, 2026";

  return (
    <>
      <h1>{t("cookiePolicy")}</h1>
      <p className="text-muted-foreground text-sm">
        {t("lastUpdated")}: {lastUpdated}
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Cookie Policy explains how Actaer (&quot;we,&quot; &quot;our,&quot;
        or &quot;us&quot;), a company based in Novi Pazar, Serbia, uses cookies
        and similar technologies on our website at vantumerp.com (the
        &quot;Website&quot;). This policy provides information about what
        cookies are, the types of cookies we use, and how you can manage your
        cookie preferences.
      </p>

      <h2>2. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device (computer,
        tablet, or mobile phone) when you visit a website. They are widely used
        to make websites work more efficiently, provide a better user
        experience, and give website owners useful information about how their
        site is being used.
      </p>
      <p>
        Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
        Persistent cookies remain on your device for a set period or until you
        delete them, while session cookies are deleted when you close your
        browser.
      </p>

      <h2>3. Types of Cookies We Use</h2>
      <p>
        We categorize cookies into the following types based on their purpose:
      </p>

      <h3>3.1 Necessary Cookies</h3>
      <p>
        These cookies are essential for the Website to function properly. They
        enable basic features like page navigation, secure access, and
        remembering your cookie consent preferences. The Website cannot function
        properly without these cookies.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>vantum-cookie-consent</td>
            <td>Stores your cookie consent preferences</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our Website
        by collecting and reporting information anonymously. This information
        helps us improve the Website and your browsing experience.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_vercel_insights_*</td>
            <td>Vercel Analytics</td>
            <td>
              Collects anonymous usage data to help us understand how visitors
              use the Website
            </td>
            <td>Session / 1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Marketing Cookies</h3>
      <p>
        These cookies are used to track visitors across websites and display ads
        that are relevant and engaging for individual users. Currently, we do
        not use marketing cookies, but we have included this category for future
        use.
      </p>

      <h2>4. How We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul>
        <li>Remember your cookie consent preferences</li>
        <li>Ensure the Website functions correctly</li>
        <li>Analyze how our Website is used so we can improve it</li>
        <li>Personalize your experience based on your preferences</li>
        <li>Support marketing activities (with your consent)</li>
      </ul>

      <h2>5. Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third-party services that appear on our
        pages. We use the following third-party services:
      </p>
      <ul>
        <li>
          <strong>Vercel Analytics:</strong> We use Vercel Analytics to
          understand how visitors interact with our Website. Vercel Analytics is
          privacy-focused and collects minimal data. Learn more at{" "}
          <a
            href="https://vercel.com/analytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/analytics
          </a>
        </li>
      </ul>

      <h2>6. Managing Your Cookie Preferences</h2>
      <p>
        When you first visit our Website, you will see a cookie consent banner
        that allows you to accept or decline different categories of cookies.
        You can change your preferences at any time by clicking the &quot;Manage
        Cookies&quot; link in the footer of our Website.
      </p>
      <p>
        Please note that blocking certain cookies may impact your experience on
        the Website, as some features may not function properly.
      </p>

      <h3>6.1 Browser Settings</h3>
      <p>
        You can also manage cookies through your browser settings. Most browsers
        allow you to:
      </p>
      <ul>
        <li>View and delete cookies stored on your device</li>
        <li>Block cookies from specific or all websites</li>
        <li>Set preferences for certain types of cookies</li>
        <li>Receive notifications when a website sets a cookie</li>
      </ul>
      <p>
        Here are links to cookie management instructions for common browsers:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>7. Your Rights Under GDPR</h2>
      <p>
        If you are located in the European Economic Area (EEA), you have the
        right to:
      </p>
      <ul>
        <li>Access information about the cookies we use</li>
        <li>Withdraw your consent to non-essential cookies at any time</li>
        <li>Request deletion of any personal data collected through cookies</li>
      </ul>
      <p>
        For more information about your rights, please see our Privacy Policy or
        contact us at privacy@actaer.com.
      </p>

      <h2>8. Consent Expiry and Renewal</h2>
      <p>
        Your cookie consent preferences are stored for 12 months. After this
        period, you will be prompted to review and renew your consent
        preferences. You can also change your preferences at any time using the
        &quot;Manage Cookies&quot; option in the footer.
      </p>

      <h2>9. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        our practices or for legal, operational, or regulatory reasons. We will
        post any changes on this page and update the &quot;Last updated&quot;
        date at the top of this policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie
        Policy, please contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> privacy@actaer.com
        </li>
        <li>
          <strong>Company:</strong> Actaer
        </li>
        <li>
          <strong>Location:</strong> Novi Pazar, Serbia
        </li>
      </ul>
    </>
  );
}
