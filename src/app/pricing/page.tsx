
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import SemanticContent from "@/components/shared/SemanticContent";
import { SubscriptionFeatures } from "@/components/sections/SubscriptionFeatures";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    const title = "Buy IPTV Subscription | Plans from $7.50/mo";
    const description = "Choose the perfect IPTV Provider plan. Starting at just $7.50/month with 24,000+ channels, HD/4K quality, and 24/7 support. Instant activation. Buy now!";
    
    return generatePageMetadata({
        title,
        description,
        canonical: "/pricing",
    });
}


export default async function IPTVSubscription() {
    const { 
      semanticContent, 
      productSchema,
      breadcrumbSchema, 
      faqSchema,
      pricingPageFaqs
    } = await getPricingPageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />
      
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
                    Pricing
                </li>
              </ol>
            </nav>

            <div className="text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Provider Subscription Plans</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Choose the perfect IPTV Provider plan for your streaming needs. All plans include 24,000+ channels in HD/4K quality.
              </p>
            </div>
        </Container>

        <Pricing />

        <SubscriptionFeatures />

        <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
          <Container>
              <div className="mx-auto max-w-3xl text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">IPTV Provider - Frequently Asked Questions</h2>
              </div>
              <div className="mx-auto mt-8 max-w-3xl">
                <Accordion type="single" collapsible>
                  {pricingPageFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
              <div className="rounded-xl bg-primary/10 p-8 text-center md:p-12">
                  <h2 className="font-headline text-3xl font-bold">100% Satisfaction Guarantee on Your IPTV Provider</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                      Try our IPTV Provider completely risk-free. If you're not satisfied within the first 7 days, we'll provide a full refund—no questions asked.
                  </p>
              </div>
          </Container>
        </section>
      </main>
    </>
  );
}
