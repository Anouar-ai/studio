
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { allCountries, getCountryById } from "@/lib/countries";
import { Check, Shield, Tv, Zap, MessageCircle, Smartphone } from "lucide-react";
import SemanticContent from "@/components/shared/SemanticContent";
import { FlagIcon } from "@/components/shared/FlagIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCountryPageData } from "@/lib/data/country-page";


type Props = {
  params: { country: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getCountryById(params.country);

  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  const title = `Best IPTV Provider in ${country.name} | Reliable Streaming`;
  const description = `Get the best IPTV Provider in ${country.name}. Enjoy 20,000+ channels, HD/4K quality, and instant activation. Perfect for sports, movies, and TV shows in ${country.name}.`;

  return {
    title,
    description,
    keywords: [`IPTV ${country.name}`, `buy IPTV ${country.name}`, `${country.name} IPTV provider`, `best IPTV for ${country.name}`],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [`/api/og?title=${encodeURIComponent(title)}`],
    },
    alternates: {
      canonical: `/country/${params.country}`,
    },
  };
}

export default async function CountryPage({ params }: { params: { country: string }}) {
  const {
    country,
    pageFaqs,
    semanticContent,
    breadcrumbSchema,
    serviceSchema,
    faqSchema
  } = await getCountryPageData(params.country);

  const { name, code } = country;

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
      <main className="py-16 sm:py-24">
        <Container>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                <ol className="flex items-center gap-2">
                    <li>
                        <Link href="/" className="hover:text-primary">Home</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/locations" className="hover:text-primary">Locations</Link>
                    </li>
                    <li>/</li>
                    <li>
                        {name}
                    </li>
                </ol>
            </nav>

          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl flex items-center justify-center gap-4">
              <FlagIcon countryCode={code} countryName={name} className="h-10 w-10" />
              <span>The #1 IPTV Provider in {name}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experience the best IPTV streaming in {name} with over 20,000 channels, movies, and series in stunning HD & 4K quality. Instant activation and 24/7 support guaranteed.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/pricing">Get Your Plan for {name}</Link>
            </Button>
          </div>

          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us for {name}?</h2>
              <p className="mt-4 text-muted-foreground">We are the top-rated IPTV provider in {name} for a reason. Our service is optimized for viewers in your country, offering unparalleled stability and channel selection.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Tv size={20} className="text-primary"/> Local & International Channels</h3>
                    <p className="text-muted-foreground">Get access to all local {name} channels plus thousands of international sports, movies, and news channels.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                    <p className="text-muted-foreground">Your IPTV Provider is activated immediately after payment. Start watching in {name} within minutes.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary"/> HD/4K Quality</h3>
                    <p className="text-muted-foreground">Enjoy a superior viewing experience with crystal clear streaming, perfect for the modern TVs available in {name}.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Shield size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                    <p className="text-muted-foreground">Our powerful servers ensure a smooth, buffer-free experience, even during peak times in {name}.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                    <p className="text-muted-foreground">Our dedicated support team is available 24/7 to assist our customers in {name} with any questions.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Smartphone size={20} className="text-primary"/> Works on All Devices</h3>
                    <p className="text-muted-foreground">Watch on your Smart TV, Android, iOS, Fire Stick, or computer anywhere in {name}.</p>
                </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24 rounded-lg">
              <Container>
                  <div className="mx-auto max-w-3xl text-center">
                      <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">FAQs about IPTV in {name}</h2>
                  </div>
                  <div className="mx-auto mt-8 max-w-3xl">
                    <Accordion type="single" collapsible>
                      {pageFaqs.map((faq, i) => (
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

        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return allCountries.map((country) => ({
    country: country.id,
  }));
}
