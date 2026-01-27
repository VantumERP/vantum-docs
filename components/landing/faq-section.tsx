import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a distribution-first ERP?",
    answer:
      "A distribution-first ERP is designed from the ground up to handle the unique challenges of distribution businesses—complex inventory management, multi-warehouse operations, order fulfillment, and supply chain visibility. Unlike generic ERPs that treat distribution as an afterthought, Vantum puts distribution workflows at the core of every feature.",
  },
  {
    question: "How do Industry Blueprints work?",
    answer:
      "Industry Blueprints are declarative, versioned configuration bundles that customize Vantum for specific industries. They include pre-configured fields, validations, workflows, roles, and integrations tailored to sectors like healthcare, manufacturing, or retail. You can apply a blueprint to instantly adapt the system without any code changes or forking.",
  },
  {
    question: "What deployment options are available?",
    answer:
      "Vantum offers flexible deployment options to meet your security and compliance requirements. You can deploy on your own infrastructure (self-hosted), use our managed cloud service, or opt for a hybrid approach. We support Docker, Kubernetes, and major cloud providers including AWS, Azure, and GCP.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Once we launch, we'll offer a 14-day free trial with full access to all features. Enterprise customers can also request an extended pilot program with dedicated onboarding support. Join our waitlist to be notified when trials become available.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Vantum offers flexible pricing models tailored to your business needs. Options include per-seat pricing or custom quotes with complex billing based on factors like transaction volume, number of orders, products managed, and other operational metrics. Enterprise customers receive customized pricing based on their specific requirements. Early adopters from our waitlist will receive exclusive founding member pricing.",
  },
  {
    question: "What support is included?",
    answer:
      "All plans include access to our documentation, community forums, and email support. Professional and Enterprise plans include priority support with guaranteed response times, dedicated account managers, and optional 24/7 support. We also offer professional services for implementation, customization, and training.",
  },
];

// Generate FAQ schema for SEO/GEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-muted/30">
      {/* FAQ Schema JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about Vantum ERP.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a
              href="mailto:hello@actaer.com"
              className="font-medium text-primary hover:underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
