
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { plans } from "@/lib/site";
import { getCityData, allCities } from "@/lib/cities";

type Props = {
  params: { city: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityData = getCityData(params.city);

  if (!cityData) {
    return {
      title: "Location Not Found",
    };
  }

  const { name, state, country } = cityData;
  const title = `Buy IPTV in ${name}, ${state}, ${country}: ${new Date().getFullYear()} Guide`;
  const description = `Looking to buy the best IPTV service in ${name}? This guide covers providers, pricing, legality, and installation for ${name}, ${state}.`;

  return {
    title,
    description,
    keywords: [`buy IPTV ${name}`, `IPTV service ${name}`, `IPTV subscription ${name}`, `${name} IPTV`, `IPTV ${state}`],
    alternates: {
      canonical: `/iptv-in/${cityData.id}`,
    },
    openGraph: {
      title: `Best IPTV Service in ${name}, ${state}`,
      description,
      url: `/iptv-in/${cityData.id}`,
    }
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityData = getCityData(params.city);

  if (!cityData) {
    notFound();
  }

  const { name, state, country, population, zipCodes, nearbyCities, faqs, id } = cityData;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPTV Service",
    "description": `Provider of premium IPTV service subscriptions in ${name}, ${state}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": name,
      "addressRegion": state,
      "addressCountry": country,
    },
    "areaServed": {
      "@type": "City",
      "name": name,
    },
    "url": `https://yoursite.com/iptv-in/${id}`,
    "telephone": "+1-800-555-0199",
    "priceRange": "$7.50 - $16.00"
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="py-16 sm:py-24">
        <Container>
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
                    <span itemProp="name">{`IPTV in ${name}`}</span>
                    <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <header className="mb-12">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Buy IPTV in {name}, {state}, {country}: {new Date().getFullYear()} Guide</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Welcome to your complete guide for buying IPTV service in {name}, {state}. With a population of around {population.toLocaleString()}, {name} residents are increasingly looking for flexible and high-quality entertainment. This guide covers the best providers, local pricing, legal considerations, and more. Nearby zip codes include: {zipCodes.join(', ')}.
              </p>
            </header>

            <Card className="not-prose my-8 border-primary bg-primary/10">
                <CardHeader>
                    <CardTitle>Special Price for {country}</CardTitle>
                    <CardDescription>
                        For a limited time, residents of {country} get an exclusive discount on our most popular plan!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-4">
                        <p className="text-4xl font-bold">$7.50<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                        <p className="text-muted-foreground">Billed annually. Regular price $16.00/month.</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Claim Your {country} Discount</Link>
                    </Button>
                </CardFooter>
            </Card>
            
            <section id="best-iptv" className="mb-12">
              <h2 className="font-headline">Best IPTV Services in {name}, {state}</h2>
              <p>When looking for an IPTV service in {name}, it's important to choose a provider with a reliable stream, excellent channel selection, and strong customer support. We confirm that our premium IPTV service is fully available in {name} and surrounding areas like {nearbyCities[0]} and {nearbyCities[1]}.</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider</TableHead>
                    <TableHead>Channels</TableHead>
                    <TableHead>Quality</TableHead>
                    <TableHead>Starting Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Our IPTV Service</TableCell>
                    <TableCell>20,000+</TableCell>
                    <TableCell>HD/4K</TableCell>
                    <TableCell>$7.50/mo</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Example Provider A</TableCell>
                    <TableCell>15,000+</TableCell>
                    <TableCell>HD</TableCell>
                    <TableCell>$19.99/mo</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Example Provider B</TableCell>
                    <TableCell>10,000+</TableCell>
                    <TableCell>HD/SD</TableCell>
                    <TableCell>$25.00/mo</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>

            <section id="where-to-buy" className="mb-12">
              <h2 className="font-headline">Where to Buy IPTV in {name}</h2>
              <p>The most convenient way to buy IPTV service in {name} is online. Our service offers instant activation, with your credentials delivered to your email within minutes of purchase. We provide fast and reliable service to all of {name}, {state}, ensuring you can start streaming right away.</p>
              <Card className="my-6 not-prose">
                <CardHeader>
                    <CardTitle>Get Instant Access in {name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Choose a plan below and start watching the best IPTV service in {name} today. All major payment methods are accepted.</p>
                </CardContent>
                <CardFooter>
                     <Button asChild size="lg">
                        <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">View Plans & Order Now</Link>
                    </Button>
                </CardFooter>
              </Card>
            </section>

            <section id="pricing" className="mb-12">
                <h2 className="font-headline">IPTV Pricing in {name}, {country}</h2>
                <p>IPTV pricing in {name} is competitive. Our service provides some of the best value, with plans designed to fit any budget. All prices are in USD.</p>
                <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {plans.map(plan => (
                      <Card key={plan.id} className={plan.isPopular ? "border-primary" : ""}>
                          <CardHeader>
                              <CardTitle>{plan.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-3xl font-bold">${plan.price}</p>
                              <p className="text-sm text-muted-foreground">({plan.duration})</p>
                          </CardContent>
                      </Card>
                  ))}
                </div>
            </section>

            <section id="legality" className="mb-12">
                <h2 className="font-headline">Is IPTV Legal in {name}, {state}/{country}?</h2>
                <p>Yes, IPTV is legal in {country}, including {name}, {state}, as long as you subscribe to a legitimate provider that holds the correct licenses for the content they distribute. Our IPTV service is a legitimate and legal option for residents in {name}. Avoid services that seem too good to be true, as they may be distributing content illegally.</p>
            </section>

            <section id="installation" className="mb-12">
                <h2 className="font-headline">IPTV Installation in {name}</h2>
                <p>Setting up your IPTV service is a simple DIY process that takes only a few minutes. Our service is compatible with all major devices. We recommend a stable internet connection from local providers for the best experience.</p>
                 <ul className="mt-4 not-prose space-y-3">
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Download a compatible IPTV app (like IPTV Smarters).</li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Enter the credentials sent to your email.</li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Start streaming thousands of channels.</li>
                </ul>
                <div className="mt-6">
                    <Button asChild variant="outline">
                        <Link href="/devices">See All Device Setup Guides</Link>
                    </Button>
                </div>
            </section>

            <section id="faq" className="mb-12">
                <h2 className="font-headline">FAQs About IPTV in {name}</h2>
                <Accordion type="single" collapsible className="not-prose">
                    {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                        <p>{faq.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </section>
            
            <section id="conclusion" className="border-t pt-8 mt-12">
              <h2 className="font-headline">Conclusion</h2>
              <p>For residents of {name}, {state}, our IPTV service offers an unbeatable combination of channel selection, streaming quality, and value. With instant activation and 24/7 support, it's the best choice for upgrading your home entertainment. Ready to get started?</p>
              <Button asChild size="lg" className="mt-4">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Choose Your Plan for {name}</Link>
              </Button>
            </section>

          </article>
        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return allCities.map((city) => ({
    city: city.id,
  }));
}
