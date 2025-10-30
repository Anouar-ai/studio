
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
import { plans } from "@/lib/site";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

type Props = {
  params: { duration: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const planId = params.duration;
  const plan = plans.find(p => p.id === planId);

  if (!plan) {
    return {
      title: "Plan Not Found",
    };
  }

  const title = `${plan.name} IPTV Subscription - $${plan.price}/${plan.duration.split('-')[0]} Months`;
  const description = `Get our best value ${plan.name} IPTV subscription for just $${plan.price}. Save ${plan.savings} with 20,000+ channels, HD/4K quality, 24/7 support, and instant activation.`;

  return {
    title,
    description,
    keywords: `${plan.name} IPTV, ${plan.duration} IPTV subscription, annual IPTV plan, IPTV subscription deal`,
    alternates: {
      canonical: `https://yoursite.com/iptv-subscription/${plan.id}`,
    },
    openGraph: {
      title: `${plan.name} IPTV Subscription - Best Value at $${plan.price_monthly.toFixed(2)}/month`,
      description: `Save ${plan.savings} with our ${plan.duration} IPTV subscription. 20,000+ channels in HD/4K.`,
      url: `https://yoursite.com/iptv-subscription/${plan.id}`,
    },
  };
}

export default function PlanPage({ params }: { params: { duration: string } }) {
  const planId = params.duration;
  const plan = plans.find(p => p.id === planId);

  if (!plan) {
    notFound();
  }

  const planSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${plan.name} IPTV Subscription`,
    "description": `Annual IPTV subscription with 20,000+ channels, HD/4K quality, and 24/7 support`,
    "offers": {
      "@type": "Offer",
      "price": plan.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "url": `https://yoursite.com/iptv-subscription/${plan.id}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1843"
    }
  };

  const pageFaqs = [
      {
        question: `How does the ${plan.name} IPTV subscription work?`,
        answer: `After purchase, you'll receive instant access to our IPTV service for ${plan.duration}. You pay once ($${plan.price}) and enjoy unlimited streaming for the entire period.`
      },
      {
        question: "Can I cancel my subscription?",
        answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, contact our support team for a full refund."
      },
      {
        question: "What devices are compatible?",
        answer: "Our IPTV subscription works on Smart TVs, Android devices, iOS (iPhone/iPad), Fire Stick, MAG boxes, and more. We provide setup guides for all platforms."
      }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planSchema) }}
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
                  <Link href="/iptv-subscription" itemProp="item" className="hover:text-primary">
                    <span itemProp="name">IPTV Subscription</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li>/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">{plan.name}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <article itemScope itemType="https://schema.org/Product">
                <header className="rounded-xl bg-gradient-to-br from-primary to-green-400 p-8 text-center text-primary-foreground md:p-12">
                    {plan.isPopular && plan.savings && (
                        <Badge variant="secondary" className="mb-4 bg-yellow-300 text-yellow-900 hover:bg-yellow-300">Best Value - {plan.savings}</Badge>
                    )}
                    <h1 itemProp="name" className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{plan.name} IPTV Subscription</h1>

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
                        <meta itemProp="availability" content="https://schema.org/InStock" />
                        <meta itemProp="priceValidUntil" content="2025-12-31" />
                    </div>

                    <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80" itemProp="description">
                        Get our premium IPTV subscription for {plan.duration.toLowerCase()} at the best price. Enjoy unlimited access to 20,000+ channels with HD/4K quality streaming.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                           <Link href="/checkout">Order Now - Instant Activation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Link href="/iptv-subscription">View All Plans</Link>
                        </Button>
                    </div>
                </header>

                <section className="py-16 sm:py-24">
                    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">What's Included in Your {plan.name} Subscription</h2>
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                        <li className="rounded-lg border bg-card p-6 text-card-foreground">
                            <h3 className="font-semibold">HD/4K Quality</h3>
                            <p className="text-muted-foreground">Stream in crystal-clear High Definition and 4K resolution</p>
                        </li>
                        <li className="rounded-lg border bg-card p-6 text-card-foreground">
                            <h3 className="font-semibold">24/7 Support</h3>
                            <p className="text-muted-foreground">Round-the-clock customer service whenever you need help</p>
                        </li>
                        <li className="rounded-lg border bg-card p-6 text-card-foreground">
                            <h3 className="font-semibold">20,000+ Channels</h3>
                            <p className="text-muted-foreground">Access to premium channels from around the world</p>
                        </li>
                        <li className="rounded-lg border bg-card p-6 text-card-foreground">
                            <h3 className="font-semibold">Instant Activation</h3>
                            <p className="text-muted-foreground">Start watching immediately after purchase</p>
                        </li>
                        <li className="rounded-lg border bg-card p-6 text-card-foreground">
                            <h3 className="font-semibold">Anti-Freeze Tech</h3>
                            <p className="text-muted-foreground">Advanced technology ensures smooth, buffer-free streaming</p>
                        </li>
                        <li className="rounded-lg border bg-card p-6 text-card-foreground">
                            <h3 className="font-semibold">Multi-Device Support</h3>
                            <p className="text-muted-foreground">Watch on Smart TV, Android, iOS, Fire Stick, and more</p>
                        </li>
                    </ul>
                </section>
                
                {plan.id === '12-months' && (
                <section className="py-16 sm:py-24">
                    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose the 12-Month Plan?</h2>
                    <Table>
                        <caption className="mt-2 text-sm text-muted-foreground">Savings Comparison - Annual vs Monthly Billing</caption>
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
                                <TableCell className="font-medium">12-Month Plan</TableCell>
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
                        <div className="relative h-48 w-full">
                            <Image 
                                src="https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg" 
                                alt="IPTV Subscription" 
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-2xl">Order Your {plan.name} IPTV Subscription</CardTitle>
                            <CardDescription>Complete your purchase and start streaming in minutes!</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <p className="text-center text-4xl font-bold">${plan.price} <span className="text-lg font-normal text-muted-foreground">/ {plan.duration}</span></p>
                             <ul className="my-6 space-y-3">
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> 20,000+ Live Channels</li>
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> HD/4K Streaming Quality</li>
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> 24/7 Customer Support</li>
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Instant Activation</li>
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Anti-Freeze Technology</li>
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> 7-Day Money-Back Guarantee</li>
                             </ul>
                        </CardContent>
                        <CardFooter className="flex-col items-stretch gap-4">
                            <Button asChild size="lg">
                              <Link href="/checkout">Proceed to Checkout →</Link>
                            </Button>
                            <p className="text-center text-xs text-muted-foreground">🔒 Secure checkout with SSL encryption</p>
                        </CardFooter>
                    </Card>
                </section>

                <section className="py-16 sm:py-24">
                    <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <blockquote className="mt-4 italic text-muted-foreground">"Best decision! The 12-month plan saved me so much money and the service is incredible."</blockquote>
                                <footer className="mt-4 font-semibold">— Sarah M., <cite className="text-sm font-normal text-muted-foreground">Verified Customer</cite></footer>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardContent className="p-6">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <blockquote className="mt-4 italic text-muted-foreground">"Crystal clear quality and no buffering. Worth every penny of the annual subscription!"</blockquote>
                                <footer className="mt-4 font-semibold">— James T., <cite className="text-sm font-normal text-muted-foreground">Verified Customer</cite></footer>
                            </CardContent>
                        </Card>
                         <Card>
                             <CardContent className="p-6">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <blockquote className="mt-4 italic text-muted-foreground">"Amazing value for money. 20,000+ channels for less than the price of cable!"</blockquote>
                                <footer className="mt-4 font-semibold">— Maria L., <cite className="text-sm font-normal text-muted-foreground">Verified Customer</cite></footer>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
                  <Container>
                      <div className="mx-auto max-w-3xl text-center">
                          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
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
