
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import SemanticContent from "@/components/shared/SemanticContent";
import { getFaqPageData } from "@/lib/data/faq-page";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | IPTV Provider",
    description: "Have questions about our IPTV Provider? Find answers to common questions about free trials, device compatibility, buffering, activation, and our refund policy.",
    alternates: {
        canonical: "/faq",
    }
};

export default async function FaqPage() {
  const { 
    semanticContent, 
    faqSchema, 
    breadcrumbSchema 
  } = await getFaqPageData();

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      <main>
        <Container className="py-16 sm:py-24">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                <ol className="flex items-center gap-2">
                <li>
                    <Link href="/" className="hover:text-primary">
                    Home
                    </Link>
                </li>
                <li>/</li>
                <li>
                    FAQ
                </li>
                </ol>
            </nav>
            <FAQ />
        </Container>
      </main>
    </>
  );
}
