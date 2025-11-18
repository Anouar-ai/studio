
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/lib/site-data/pricing";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { pageData } from "@/lib/site-data/subscription-page";

type Props = {
  params: { duration: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const planId = params.duration;
  const plan = plans.find(p => p.id === planId);
  const ogImage = PlaceHolderImages.find(img => img.id === 'subscription-og');

  if (!plan) {
    return {
      title: "Plan Not Found",
    };
  }

  const title = `Buy ${plan.name} IPTV Service Plan | $${plan.price}`;
  const description = `Purchase our premium ${plan.name} IPTV service for just $${plan.price}. Get 20,000+ channels, HD/4K quality, 24/7 support, and instant activation. Ideal for SEM and paid campaigns.`;

  return {
    title,
    description,
    keywords: [`buy IPTV service`, `${plan.name} IPTV`, `IPTV subscription deals`, 'IPTV paid ads', `get IPTV now`],
    alternates: {
      canonical: `/iptv-subscription/${plan.id}`,
    },
    openGraph: {
      title: `Best Deal: ${plan.name} IPTV Service for $${plan.price}`,
      description: `Get instant access to 20,000+ channels in HD/4K with our ${plan.name} IPTV service subscription. Click to buy now!`,
      url: `/iptv-subscription/${plan.id}`,
      images: ogImage ? [
        {
          url: ogImage.imageUrl,
          width: 1200,
          height: 630,
          alt: `Offer for ${plan.name} IPTV Service`,
        },
      ] : [],
      type: 'website',
    },
     twitter: {
      card: "summary_large_image",
    },
  };
}

export default function PlanPage({ params }: { params: { duration: string } }) {
  const planId = params.duration;
  const plan = plans.find(p => p.id === planId);
  const productImage = PlaceHolderImages.find(img => img.id === 'subscription-og');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com';


  if (!plan) {
    notFound();
  }

  const planSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${plan.name} IPTV Service`,
    "description": `Premium ${plan.name} IPTV service subscription with 20,000+ channels, HD/4K quality, and 24/7 support`,
    "image": productImage?.imageUrl,
    "sku": `IPTV-${plan.id.toUpperCase()}`,
    "brand": {
      "@type": "Brand",
      "name": "IPTV Service"
    },
    "offers": {
      "@type": "Offer",
      "price": plan.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "url": `https://yoursite.com/iptv-subscription/${plan.id}`,
      "seller": {
        "@type": "Organization",
        "name": "IPTV Service"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1843"
    }
  };

  const planFaqs = pageData.faqs.map(faq => ({
      ...faq,
      question: faq.question.replace('{plan_name}', plan.name).replace('{plan_price}', String(plan.price)).replace('{plan_duration}', plan.duration),
      answer: faq.answer.replace('{plan_name}', plan.name).replace('{plan_price}', String(plan.price)).replace('{plan_duration}', plan.duration),
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/`
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": `${baseUrl}/pricing`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": `${plan.name} IPTV Service`,
            "item": `${baseUrl}/iptv-subscription/${plan.id}`
        }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Container className="py-8">
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
                  <Link href="/pricing" itemProp="item" className="hover:text-primary">
                    <span itemProp="name">Pricing</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">{plan.name} IPTV Service</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <article itemScope itemType="https://schema.org/Product">
                <header className="rounded-xl bg-gradient-to-br from-primary to-green-400 p-8 text-center text-primary-foreground md:p-12">
                    {plan.isPopular && plan.savings && (
                        <Badge variant="secondary" className="mb-4 bg-yellow-300 text-yellow-900 hover:bg-yellow-300">Best Value - {plan.savings}</Badge>
                    )}
                    <h1 itemProp="name" className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{plan.name} IPTV Service Subscription</h1>

                    <div className="price-display my-8" itemScope itemProp="offers" itemType="https://schema.org/Offer">
                        <p className="main-price">
                            <span className="text-5xl font-extrabold">
                                <span className="align-super text-2xl">$</span>
                                <span itemProp="price">{plan.price}</span>
                                <meta itemProp="priceCurrency" content="USD" />
                            </span>
                            <span className="text-xl">/ {plan.duration}</span>
                        </p>
                        <p className="mt-2 text-lg text-primary-foreground/80">
                            Equivalent to ${plan.price_monthly.toFixed(2)}/month
                        </p>
                        <link itemProp="availability" href="https://schema.org/InStock" />
                        <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80" itemProp="description">
                        Get our premium IPTV service for {plan.duration.toLowerCase()} at the best price. Enjoy unlimited access to 20,000+ channels with HD/4K quality streaming.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                           <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Order Now - Instant Activation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Link href="/pricing">View All Plans</Link>
                        </Button>
                    </div>
                </header>

                <section className="py-16 sm:py-24">
                    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">What's Included in Your {plan.name} IPTV Service</h2>
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                        {pageData.features.map(feature => (
                             <li key={feature.title} className="rounded-lg border bg-card p-6 text-card-foreground">
                                <h3 className="font-semibold">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                
                {plan.id === '12-months' && (
                <section className="py-16 sm:py-24">
                    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose the 12-Month IPTV Service Plan?</h2>
                    <Table>
                        <caption className="mt-2 text-sm text-muted-foreground">Savings Comparison - Annual vs Monthly Billing for IPTV Service</caption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Plan</TableHead>
                                <TableHead>Total Cost</TableHead>
                                <TableHead>Cost per Month</TableHead>
                                <TableHead>Annual Savings</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Monthly Billing</TableCell>
                                <TableCell>$192/year</TableCell>
                                <TableCell>$16.00</TableCell>
                                <TableCell>—</TableCell>
                            </TableRow>
                            <TableRow className="border-2 border-primary">
                                <TableCell className="font-medium">12-Month IPTV Service</TableCell>
                                <TableCell>$90/year</TableCell>
                                <TableCell>$7.50</TableCell>
                                <TableCell className="font-bold text-primary">Save $102</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </section>
                )}

                <section id="order" className="py-16 sm:py-24">
                    <Card className="mx-auto max-w-lg overflow-hidden">
                        {productImage && (
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={productImage.imageUrl} 
                                    alt="IPTV Service Subscription Box"
                                    data-ai-hint={productImage.imageHint}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-2xl">Order Your {plan.name} IPTV Service</CardTitle>
                            <CardDescription>Complete your purchase and start streaming in minutes!</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <p className="text-center text-4xl font-bold">${plan.price} <span className="text-lg font-normal text-muted-foreground">/ {plan.duration}</span></p>
                             <ul className="my-6 space-y-3">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> {feature}</li>
                                ))}
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> 7-Day Money-Back Guarantee</li>
                             </ul>
                        </CardContent>
                        <CardFooter className="flex-col items-stretch gap-4">
                            <Button asChild size="lg">
                              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Proceed to Checkout →</Link>
                            </Button>
                            <p className="text-center text-xs text-muted-foreground">🔒 Secure checkout with SSL encryption</p>
                        </CardFooter>
                    </Card>
                </section>

                <section className="py-16 sm:py-24">
                    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say About Our IPTV Service</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {pageData.testimonials.map((testimonial, i) => (
                             <Card key={i}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                                    </div>
                                    <blockquote className="mt-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                                    <footer className="mt-4 font-semibold">— {testimonial.name}, <cite className="text-sm font-normal text-muted-foreground">{testimonial.title}</cite></footer>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
                  <Container>
                      <div className="mx-auto max-w-3xl text-center">
                          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions about IPTV Service</h2>
                      </div>
                      <div className="mx-auto mt-8 max-w-3xl" itemScope itemType="https://schema.org/FAQPage">
                        <Accordion type="single" collapsible>
                          {planFaqs.map((faq, i) => (
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

            </article>
        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
    return plans.map((plan) => ({
      duration: plan.id,
    }));
}
