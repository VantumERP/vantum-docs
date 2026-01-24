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
    title: t("privacyPolicy"),
    description:
      "Privacy Policy for VantumERP - How we collect, use, and protect your personal data.",
  };
}

export default async function PrivacyPolicyPage({
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
      <h1>{t("privacyPolicy")}</h1>
      <p className="text-muted-foreground text-sm">
        {t("lastUpdated")}: {lastUpdated}
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to VantumERP. This Privacy Policy explains how Actaer
        (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a company based in
        Novi Pazar, Serbia, collects, uses, discloses, and protects your
        personal information when you visit our website at vantumerp.com (the
        &quot;Website&quot;) or use our services.
      </p>
      <p>
        We are committed to protecting your privacy and ensuring that your
        personal data is handled in accordance with applicable data protection
        laws, including the General Data Protection Regulation (GDPR) for users
        in the European Economic Area (EEA).
      </p>

      <h2>2. Data Controller</h2>
      <p>
        Actaer is the data controller responsible for your personal data. If you
        have any questions about this Privacy Policy or our data practices,
        please contact us at:
      </p>
      <ul>
        <li>
          <strong>Company:</strong> Actaer
        </li>
        <li>
          <strong>Location:</strong> Novi Pazar, Serbia
        </li>
        <li>
          <strong>Email:</strong> privacy@actaer.com
        </li>
        <li>
          <strong>Website:</strong> https://www.actaer.com
        </li>
      </ul>

      <h2>3. Information We Collect</h2>
      <h3>3.1 Information You Provide</h3>
      <p>We collect information you voluntarily provide when you:</p>
      <ul>
        <li>Request early access or join our waitlist</li>
        <li>Contact us through our website</li>
        <li>Subscribe to our newsletter</li>
        <li>Participate in surveys or promotions</li>
      </ul>
      <p>This information may include:</p>
      <ul>
        <li>Name</li>
        <li>Business email address</li>
        <li>Company name</li>
        <li>Company size</li>
        <li>Job title</li>
        <li>Phone number (if provided)</li>
      </ul>

      <h3>3.2 Information Collected Automatically</h3>
      <p>
        When you visit our Website, we may automatically collect certain
        information, including:
      </p>
      <ul>
        <li>IP address (anonymized where required by law)</li>
        <li>Browser type and version</li>
        <li>Device type and operating system</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website or source</li>
        <li>Language preferences</li>
      </ul>

      <h3>3.3 Cookies and Similar Technologies</h3>
      <p>
        We use cookies and similar tracking technologies to collect information
        about your browsing activities. For detailed information about the
        cookies we use and how to manage them, please see our Cookie Policy.
      </p>

      <h2>4. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>
          <strong>Service Delivery:</strong> To provide, maintain, and improve
          our services
        </li>
        <li>
          <strong>Communication:</strong> To respond to your inquiries and
          provide customer support
        </li>
        <li>
          <strong>Marketing:</strong> To send you information about our products
          and services (with your consent)
        </li>
        <li>
          <strong>Analytics:</strong> To analyze website usage and improve user
          experience
        </li>
        <li>
          <strong>Security:</strong> To protect against fraud and unauthorized
          access
        </li>
        <li>
          <strong>Legal Compliance:</strong> To comply with applicable laws and
          regulations
        </li>
      </ul>

      <h2>5. Legal Basis for Processing (GDPR)</h2>
      <p>
        For users in the EEA, we process your personal data based on the
        following legal grounds:
      </p>
      <ul>
        <li>
          <strong>Consent:</strong> Where you have given explicit consent for
          specific purposes
        </li>
        <li>
          <strong>Contract:</strong> Where processing is necessary to perform a
          contract with you
        </li>
        <li>
          <strong>Legitimate Interests:</strong> Where we have a legitimate
          business interest that does not override your rights
        </li>
        <li>
          <strong>Legal Obligation:</strong> Where we are required to process
          data by law
        </li>
      </ul>

      <h2>6. Data Sharing and Disclosure</h2>
      <p>We may share your personal information with:</p>
      <ul>
        <li>
          <strong>Service Providers:</strong> Third-party vendors who assist us
          in operating our website and services (e.g., hosting providers,
          analytics services)
        </li>
        <li>
          <strong>Business Partners:</strong> Trusted partners for joint
          marketing efforts (with your consent)
        </li>
        <li>
          <strong>Legal Requirements:</strong> When required by law or to
          protect our rights
        </li>
        <li>
          <strong>Business Transfers:</strong> In connection with a merger,
          acquisition, or sale of assets
        </li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>7. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries
        outside of your country of residence, including countries that may not
        provide the same level of data protection. When we transfer data
        internationally, we implement appropriate safeguards such as:
      </p>
      <ul>
        <li>
          Standard Contractual Clauses approved by the European Commission
        </li>
        <li>Data processing agreements with our service providers</li>
        <li>Other legally recognized transfer mechanisms</li>
      </ul>

      <h2>8. Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected, including to satisfy legal,
        accounting, or reporting requirements. The retention period depends on
        the nature of the data and the purposes for which it is processed.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        Under GDPR and other applicable laws, you have the following rights:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> Request access to your personal data
        </li>
        <li>
          <strong>Rectification:</strong> Request correction of inaccurate data
        </li>
        <li>
          <strong>Erasure:</strong> Request deletion of your personal data
          (&quot;right to be forgotten&quot;)
        </li>
        <li>
          <strong>Restriction:</strong> Request restriction of processing
        </li>
        <li>
          <strong>Portability:</strong> Request a copy of your data in a
          portable format
        </li>
        <li>
          <strong>Objection:</strong> Object to processing based on legitimate
          interests
        </li>
        <li>
          <strong>Withdraw Consent:</strong> Withdraw consent at any time where
          processing is based on consent
        </li>
      </ul>
      <p>
        To exercise these rights, please contact us at privacy@actaer.com. We
        will respond to your request within 30 days.
      </p>

      <h2>10. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data against unauthorized access, alteration,
        disclosure, or destruction. These measures include:
      </p>
      <ul>
        <li>Encryption of data in transit and at rest</li>
        <li>Regular security assessments</li>
        <li>Access controls and authentication</li>
        <li>Employee training on data protection</li>
      </ul>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Our Website is not intended for children under the age of 16. We do not
        knowingly collect personal information from children. If you believe we
        have collected information from a child, please contact us immediately.
      </p>

      <h2>12. Third-Party Links</h2>
      <p>
        Our Website may contain links to third-party websites. We are not
        responsible for the privacy practices of these external sites. We
        encourage you to review the privacy policies of any third-party sites
        you visit.
      </p>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any material changes by posting the new Privacy Policy on this page
        and updating the &quot;Last updated&quot; date. We encourage you to
        review this Privacy Policy periodically.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, or if you wish to exercise your rights, please contact us:
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

      <h2>15. Supervisory Authority</h2>
      <p>
        If you are located in the EEA and believe that we have not adequately
        addressed your data protection concerns, you have the right to lodge a
        complaint with your local data protection supervisory authority.
      </p>
    </>
  );
}
