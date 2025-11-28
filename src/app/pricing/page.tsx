
import type { Metadata } from "next";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "@/components/shared/Container";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import SemanticContent from "@/components/shared/SemanticContent";
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { SubscriptionFeatures } from "@/components/sections/SubscriptionFeatures";
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";

const ogTitle = "Best IPTV Provider Plans - Stream 20,000+ Channels Today";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans",
  description: "Choose the perfect IPTV Provider plan. Starting at just $7.50/month with 20,000+ channels, HD/4K quality, and 24/7 support. Instant activation. Buy now!",
  keywords: "IPTV Provider subscription, buy IPTV, IPTV plans, IPTV pricing, monthly IPTV, yearly IPTV, SEM, SEA",
  openGraph: {
    title: ogTitle,
    description: "Get the best IPTV Provider subscription with HD/4K quality. Flexible plans from 1-12 months available. Perfect for your SEM and SMM campaigns.",
    url: "/pricing",
    type: "website",
    images: [{ url: `/api/og?title=${encodeURIComponent(ogTitle)}` }],
  },
  alternates: {
    canonical: "/pricing",
  },
};


export default async function IPTVSubscription() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IPTV Provider Subscription",
        "image": "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
        "description": "Premium IPTV Provider with 20,000+ channels, HD/4K quality, and 24/7 support. Available in 1, 3, 6, and 12-month plans.",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Provider"
        },
        "offers": plans.map(plan => ({
          "@type": "Offer",
          "name": `IPTV Provider - ${plan.name}`,
          "price": plan.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/pricing`,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "IPTV Provider"
          },
          "shippingDetails": {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: 0,
                currency: "USD"
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "WW" 
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY"
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY"
                }
              }
          },
          "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "WW",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 7,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/FreeReturn"
          }
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2547"
        }
      };

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.iptvprovider.me/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Pricing",
                "item": "https://www.iptvprovider.me/pricing"
            }
        ]
      };

       const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pricingPageFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
      
    let semanticContent: SemanticContentType;
    try {
        semanticContent = await generateSemanticContent("IPTV Subscription Plans");
    } catch (error) {
        console.error("Failed to generate semantic content:", error);
        semanticContent = {
            primaryEntity: "IPTV Provider Subscription Plans",
            relatedEntities: [],
            semanticClusters: [],
            contextualKeywords: []
        };
    }


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                    Pricing
                </li>
              </ol>
            </nav>

            <div className="text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Provider Subscription Plans</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Choose the perfect IPTV Provider plan for your streaming needs. All plans include 20,000+ channels in HD/4K quality.
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
