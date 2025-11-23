
import type { Metadata } from "next";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "@/components/shared/Container";
import { Check, Shield, Tv, Zap, MessageCircle, Smartphone } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import SemanticContent from "@/components/shared/SemanticContent";
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";

const ogTitle = "Best IPTV Provider Plans - Stream 20,000+ Channels Today";

export const metadata: Metadata = {
  title: "IPTV Provider Plans - Buy 1, 3, 6 & 12 Month Subscriptions",
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

const pageFaqs = [
    {
        question: "What's included in every IPTV Provider subscription?",
        answer: "All our IPTV Provider plans include 20,000+ live channels, extensive VOD library, HD/4K quality streaming, 24/7 customer support, instant activation, and anti-freeze technology."
    },
    {
        question: "How quickly is my IPTV Provider activated?",
        answer: "Your IPTV Provider subscription is activated instantly after payment confirmation. You'll receive your login credentials via email within minutes, so you can start streaming right away."
    },
    {
        question: "Can I upgrade my IPTV Provider plan?",
        answer: "Yes! You can upgrade your IPTV Provider subscription at any time to a longer plan. Just contact our 24/7 support team, and they will assist you with the process."
    },
    {
        question: "Which IPTV Provider plan offers the best value for money?",
        answer: "Our 12-month IPTV Provider plan offers the absolute best value at just $7.50/month. This plan saves you over 50% compared to paying monthly, making it a great choice for long-term savings."
    }
]

export default async function IPTVSubscription() {
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IPTV Provider Subscription",
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
          "url": `https://www.iptvprovider.me/pricing`,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "IPTV Provider"
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
      
    let semanticContent: SemanticContentType;
    try {
        semanticContent = await generateSemanticContent("IPTV Provider Subscription Plans");
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

        <section className="py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Features Included in All Plans</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Tv size={20} className="text-primary"/> 20,000+ Channels</h3>
                    <p className="text-muted-foreground">Access a massive selection of premium channels from around the world with our IPTV Provider subscription.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                    <p className="text-muted-foreground">Your IPTV Provider is activated immediately after payment. No waiting, just streaming.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary"/> HD/4K Quality</h3>
                    <p className="text-muted-foreground">Enjoy a superior viewing experience with crystal clear streaming in High Definition and 4K resolution.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Shield size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                    <p className="text-muted-foreground">Our IPTV Provider uses advanced anti-freeze tech for smooth, uninterrupted streaming.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                    <p className="text-muted-foreground">Get round-the-clock customer support for all our IPTV Provider plans. We're here to help anytime.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Smartphone size={20} className="text-primary"/> Multi-Device</h3>
                    <p className="text-muted-foreground">Watch our IPTV Provider on your Smart TV, Android, iOS, Fire Stick, PC, and more.</p>
                </div>
            </div>
          </Container>
        </section>

        <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
          <Container>
              <div className="mx-auto max-w-3xl text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">IPTV Provider - Frequently Asked Questions</h2>
              </div>
              <div className="mx-auto mt-8 max-w-3xl" itemScope itemType="https://schema.org/FAQPage">
                <Accordion type="single" collapsible>
                  {pageFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <AccordionTrigger itemProp="name">{faq.question}</AccordionTrigger>
                      <AccordionContent itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p itemProp="text">{faq.answer}</p>
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
