import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { faqs } from "@/lib/site-data/faq";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | IPTV Service",
    description: "Have questions about our IPTV service? Find answers to common questions about free trials, device compatibility, buffering, activation, and our refund policy.",
    alternates: {
        canonical: "/faq",
    }
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Container className="py-16 sm:py-24">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/" itemProp="item" className="hover:text-primary">
                    <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span itemProp="name">FAQ</span>
                    <meta itemProp="position" content="2" />
                </li>
                </ol>
            </nav>
            <FAQ />
        </Container>
      </main>
    </>
  );
}
