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
    title: t("termsOfService"),
    description:
      "Terms of Service for VantumERP - The terms and conditions governing your use of our services.",
  };
}

export default async function TermsOfServicePage({
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
      <h1>{t("termsOfService")}</h1>
      <p className="text-muted-foreground text-sm">
        {t("lastUpdated")}: {lastUpdated}
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to VantumERP. These Terms of Service (&quot;Terms&quot;) govern
        your access to and use of the VantumERP website at vantumerp.com (the
        &quot;Website&quot;) and any related services provided by Actaer
        (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a company based in
        Novi Pazar, Serbia.
      </p>
      <p>
        By accessing or using the Website, you agree to be bound by these Terms.
        If you do not agree to these Terms, please do not use the Website.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>&quot;Services&quot;</strong> refers to the VantumERP software
          platform and related services
        </li>
        <li>
          <strong>
            &quot;User,&quot; &quot;you,&quot; or &quot;your&quot;
          </strong>{" "}
          refers to any individual or entity accessing the Website
        </li>
        <li>
          <strong>&quot;Content&quot;</strong> refers to all text, images,
          graphics, and other materials on the Website
        </li>
      </ul>

      <h2>3. Use of the Website</h2>
      <h3>3.1 Eligibility</h3>
      <p>
        You must be at least 18 years old or have the legal capacity to enter
        into a binding agreement in your jurisdiction to use our Website and
        Services.
      </p>

      <h3>3.2 Permitted Use</h3>
      <p>
        You agree to use the Website only for lawful purposes and in accordance
        with these Terms. You may not:
      </p>
      <ul>
        <li>
          Use the Website in any way that violates applicable laws or
          regulations
        </li>
        <li>
          Attempt to gain unauthorized access to any part of the Website or its
          systems
        </li>
        <li>
          Interfere with or disrupt the integrity or performance of the Website
        </li>
        <li>
          Use automated systems (bots, scrapers) to access the Website without
          permission
        </li>
        <li>Copy, modify, or distribute our Content without authorization</li>
        <li>Use the Website to transmit harmful code, malware, or viruses</li>
      </ul>

      <h2>4. Account Registration</h2>
      <p>
        Some features of our Services may require you to create an account. When
        registering, you agree to:
      </p>
      <ul>
        <li>Provide accurate, current, and complete information</li>
        <li>Maintain and update your information to keep it accurate</li>
        <li>Keep your login credentials secure and confidential</li>
        <li>Notify us immediately of any unauthorized use of your account</li>
        <li>Accept responsibility for all activities under your account</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <h3>5.1 Our Intellectual Property</h3>
      <p>
        The Website and its Content, including but not limited to text,
        graphics, logos, icons, images, software, and the VantumERP brand, are
        the property of Actaer or its licensors and are protected by copyright,
        trademark, and other intellectual property laws.
      </p>

      <h3>5.2 Limited License</h3>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to
        access and use the Website for personal, non-commercial purposes in
        accordance with these Terms. This license does not include the right to:
      </p>
      <ul>
        <li>Modify or copy the Website or its Content</li>
        <li>Use the Website for commercial purposes without authorization</li>
        <li>Reverse engineer or decompile any software on the Website</li>
        <li>Remove any copyright or proprietary notices</li>
      </ul>

      <h3>5.3 Trademarks</h3>
      <p>
        VantumERP, Actaer, and related logos are trademarks of Actaer. You may
        not use these trademarks without our prior written consent.
      </p>

      <h2>6. Early Access and Pilot Program</h2>
      <p>
        If you apply for or participate in our early access or pilot program,
        you acknowledge that:
      </p>
      <ul>
        <li>The Services may be in a beta or pre-release state</li>
        <li>Features may be incomplete, unstable, or subject to change</li>
        <li>We may collect feedback and usage data to improve the Services</li>
        <li>Your participation may be subject to additional terms</li>
        <li>
          We reserve the right to modify or discontinue the pilot program at any
          time
        </li>
      </ul>

      <h2>7. Third-Party Links and Services</h2>
      <p>
        The Website may contain links to third-party websites or services that
        are not owned or controlled by us. We have no control over, and assume
        no responsibility for, the content, privacy policies, or practices of
        any third-party websites or services.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        THE WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
        AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO:
      </p>
      <ul>
        <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
        <li>FITNESS FOR A PARTICULAR PURPOSE</li>
        <li>NON-INFRINGEMENT</li>
        <li>AVAILABILITY, ACCURACY, OR RELIABILITY</li>
      </ul>
      <p>
        We do not warrant that the Website will be uninterrupted, error-free, or
        free of harmful components.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ACTAER AND ITS OFFICERS,
        DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
      </p>
      <ul>
        <li>
          Any indirect, incidental, special, consequential, or punitive damages
        </li>
        <li>Loss of profits, data, or business opportunities</li>
        <li>
          Any damages arising from your use or inability to use the Website
        </li>
        <li>Any unauthorized access to or alteration of your data</li>
      </ul>
      <p>
        In no event shall our total liability exceed the amount you paid to us
        in the twelve (12) months preceding the claim, or one hundred euros
        (€100), whichever is greater.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Actaer and its
        officers, directors, employees, and agents from and against any claims,
        damages, losses, liabilities, costs, and expenses (including reasonable
        legal fees) arising from:
      </p>
      <ul>
        <li>Your use of the Website or Services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any rights of a third party</li>
        <li>Any content you submit or transmit through the Website</li>
      </ul>

      <h2>11. Modifications to the Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify
        you of material changes by posting the updated Terms on the Website and
        updating the &quot;Last updated&quot; date. Your continued use of the
        Website after such changes constitutes acceptance of the new Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may terminate or suspend your access to the Website at any time,
        without prior notice or liability, for any reason, including if you
        breach these Terms. Upon termination, your right to use the Website will
        immediately cease.
      </p>

      <h2>13. Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the Republic of Serbia, without regard to its conflict of law
        provisions. Any disputes arising from these Terms or your use of the
        Website shall be subject to the exclusive jurisdiction of the courts
        located in Serbia.
      </p>
      <p>
        For users in the European Union, nothing in these Terms affects your
        rights as a consumer under applicable EU consumer protection laws.
      </p>

      <h2>14. Dispute Resolution</h2>
      <p>
        Before initiating any legal proceedings, you agree to attempt to resolve
        any dispute informally by contacting us at legal@actaer.com. We will
        attempt to resolve the dispute through good-faith negotiations within 30
        days.
      </p>

      <h2>15. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable,
        the remaining provisions will remain in full force and effect, and the
        invalid provision will be modified to the minimum extent necessary to
        make it valid and enforceable.
      </p>

      <h2>16. Entire Agreement</h2>
      <p>
        These Terms, together with our Privacy Policy and Cookie Policy,
        constitute the entire agreement between you and Actaer regarding your
        use of the Website and supersede any prior agreements.
      </p>

      <h2>17. Waiver</h2>
      <p>
        Our failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. Any waiver must be in writing and
        signed by an authorized representative of Actaer.
      </p>

      <h2>18. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>
          <strong>Email:</strong> legal@actaer.com
        </li>
        <li>
          <strong>Company:</strong> Actaer
        </li>
        <li>
          <strong>Location:</strong> Novi Pazar, Serbia
        </li>
        <li>
          <strong>Website:</strong> https://www.actaer.com
        </li>
      </ul>
    </>
  );
}
