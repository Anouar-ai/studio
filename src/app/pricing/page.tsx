

import type { Metadata } from "next";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "@/components/shared/Container";
import { Check, Shield, Tv, Zap, MessageCircle, Smartphone } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Service Plans - Buy 1, 3, 6 & 12 Month Subscriptions",
  description: "Choose the perfect IPTV service plan. Starting at just $7.50/month with 20,000+ channels, HD/4K quality, and 24/7 support. Instant activation. Buy now!",
  keywords: "IPTV service subscription, buy IPTV, IPTV plans, IPTV pricing, monthly IPTV, yearly IPTV, SEM, SEA",
  openGraph: {
    title: "Best IPTV Service Plans - Stream 20,000+ Channels Today",
    description: "Get the best IPTV service subscription with HD/4K quality. Flexible plans from 1-12 months available. Perfect for your SEM and SMM campaigns.",
    url: "/pricing",
    type: "website",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "IPTV Service Subscription Plans",
      },
    ],
  },
  alternates: {
    canonical: "/pricing",
  },
};

const pageFaqs = [
    {
        question: "What's included in every IPTV service subscription?",
        answer: "All our IPTV service plans include 20,000+ live channels, extensive VOD library, HD/4K quality streaming, 24/7 customer support, instant activation, and anti-freeze technology."
    },
    {
        question: "How quickly is my IPTV service activated?",
        answer: "Your IPTV service subscription is activated instantly after payment confirmation. You'll receive your login credentials via email within minutes, so you can start streaming right away."
    },
    {
        question: "Can I upgrade my IPTV service plan?",
        answer: "Yes! You can upgrade your IPTV service subscription at any time to a longer plan. Just contact our 24/7 support team, and they will assist you with the process."
    },
    {
        question: "Which IPTV service plan offers the best value for money?",
        answer: "Our 12-month IPTV service plan offers the absolute best value at just $7.50/month. This plan saves you over 50% compared to paying monthly, making it a great choice for long-term savings."
    }
]

export default function IPTVSubscription() {
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IPTV Service Subscription",
        "description": "Premium IPTV service with 20,000+ channels, HD/4K quality, and 24/7 support. Available in 1, 3, 6, and 12-month plans.",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Service"
        },
        "offers": plans.map(plan => ({
          "@type": "Offer",
          "name": `IPTV Service - ${plan.name}`,
          "price": plan.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `https://digitallizard-iptv.vercel.app${plan.url}`,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "IPTV Service"
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
                "item": "https://digitallizard-iptv.vercel.app/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Pricing",
                "item": "https://digitallizard-iptv.vercel.app/pricing"
            }
        ]
      };

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
                    <span itemProp="name">Pricing</span>
                    <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <div className="text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Service Subscription Plans</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Choose the perfect IPTV service plan for your streaming needs. All plans include 20,000+ channels in HD/4K quality.
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
                    <p className="text-muted-foreground">Access a massive selection of premium channels from around the world with our IPTV service subscription.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                    <p className="text-muted-foreground">Your IPTV service is activated immediately after payment. No waiting, just streaming.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary"/> HD/4K Quality</h3>
                    <p className="text-muted-foreground">Enjoy a superior viewing experience with crystal clear streaming in High Definition and 4K resolution.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Shield size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                    <p className="text-muted-foreground">Our IPTV service uses advanced anti-freeze tech for smooth, uninterrupted streaming.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                    <p className="text-muted-foreground">Get round-the-clock customer support for all our IPTV service plans. We're here to help anytime.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Smartphone size={20} className="text-primary"/> Multi-Device</h3>
                    <p className="text-muted-foreground">Watch our IPTV service on your Smart TV, Android, iOS, Fire Stick, PC, and more.</p>
                </div>
            </div>
          </Container>
        </section>

        <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
          <Container>
              <div className="mx-auto max-w-3xl text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">IPTV Service - Frequently Asked Questions</h2>
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
                  <h2 className="font-headline text-3xl font-bold">100% Satisfaction Guarantee on Your IPTV Service</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                      Try our IPTV service completely risk-free. If you're not satisfied within the first 7 days, we'll provide a full refund—no questions asked.
                  </p>
              </div>
          </Container>
        </section>
      </main>
    </>
  );
}
