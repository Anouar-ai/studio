
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles } from "@/lib/how-to";
import { Check, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import InternalLinks from "@/components/shared/InternalLinks";
import { Schema } from "@/components/shared/Schema";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { plans } from "@/lib/site-data/pricing";

const BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjZWRlZGVkIi8+PC9zdmc+";

type Props = {
  params: { device: string; };
};

function StructuredData({ article }: { article: ReturnType<typeof getArticleData> }) {
    if (!article) return null;
    const { id, title, description, steps, faqs, image, datePublished, dateModified, primaryKeyword, totalTime } = article;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    const articleSchema = generateArticleSchema({
        headline: title,
        description,
        image: image?.imageUrl,
        datePublished,
        dateModified,
        url: `${baseUrl}/devices/${id}`,
    });

    const howToSchema = generateHowToSchema({
        name: title,
        description: description,
        totalTime: totalTime,
        image: image ? {
            url: image.imageUrl,
            width: image.width,
            height: image.height
        } : undefined,
        steps: steps.map((step, index) => ({
            name: step.title,
            text: step.description,
            url: `${baseUrl}/devices/${id}#step-${index + 1}`,
        })),
    });

    const faqSchema = faqs ? generateFAQPageSchema(faqs) : null;
    
    const lowPrice = Math.min(...plans.map(p => p.price_monthly));
    const highPrice = Math.max(...plans.map(p => p.price_monthly));

    const productSchema = generateProductSchema({
        name: "IPTV Provider Subscription",
        description: `Our premium IPTV Provider is fully compatible with ${primaryKeyword}. Follow our guide to get set up.`,
        image: "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
        ratingValue: "4.8",
        reviewCount: "2547",
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: lowPrice.toFixed(2),
            highPrice: highPrice.toFixed(2),
            offerCount: plans.length.toString(),
        }
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: title, item: `${baseUrl}/devices/${id}` }
    ]);

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="how-to" schema={howToSchema} />
            {faqSchema && <Schema id="faq" schema={faqSchema} />}
            <Schema id="product" schema={productSchema} />
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
        </>
    );
}

function getArticleData(deviceId: string) {
    return howToArticles.find((p) => p.id === deviceId);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleData(params.device);

  if (!article) {
    notFound();
  }

  const { title, description, image } = article;

  return generatePageMetadata({
    title,
    description,
    canonical: `/devices/${params.device}`,
    image: image?.imageUrl,
  });
}

export default async function HowToPage({ params }: { params: { device: string }}) {
  const article = getArticleData(params.device);

  if (!article) {
    notFound();
  }
  
  const { title, description, steps, extraSections, faqs, image, primaryKeyword, id, totalTime, dateModified } = article;
  const totalTimeInMinutes = totalTime?.replace('PT', '').replace('M', '');

  return (
    <>
      <StructuredData article={article} />
      <main className="py-16 sm:py-24">
        <Container>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                 <li>/</li>
                <li>
                    {title}
                </li>
              </ol>
            </nav>
          <article>
            <header className="mb-8 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {totalTimeInMinutes && (
                  <div className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Estimated time: {totalTimeInMinutes} minutes</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <span>Updated:</span>
                  <time dateTime={dateModified}>{new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                       <Card className="not-prose my-8">
                          <CardHeader>
                              <CardTitle>What You'll Need</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <ul className="space-y-3 my-0">
                                  <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A compatible {primaryKeyword}</li>
                                  <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A stable internet connection</li>
                                  <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> An active IPTV subscription</li>
                                  <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Your M3U link or credentials</li>
                              </ul>
                          </CardContent>
                      </Card>

                      <h2 className="font-headline text-3xl">Step-by-Step Installation Guide for {primaryKeyword}</h2>
                      <p>Follow these simple steps to get our IPTV Provider running on your {primaryKeyword}. The entire process should only take a few minutes.</p>
                      <div className="space-y-8 mt-8">
                      {steps.map((step, index) => (
                          <div key={index} id={`step-${index + 1}`} className="flex gap-6">
                              <div className="flex flex-col items-center">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                                  {index < steps.length - 1 && <div className="w-px flex-grow bg-border" />}
                              </div>
                              <div>
                                  <h3 className="font-headline text-2xl font-semibold mt-1 mb-2">{step.title}</h3>
                                  <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                              </div>
                          </div>
                      ))}
                      </div>

                      {extraSections?.map(section => (
                        <div key={section.id} className="my-12">
                            <h2 className="font-headline text-3xl">{section.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                      ))}

                      <div className="my-12 rounded-lg bg-primary/10 p-6 text-center">
                        <h3 className="font-headline text-2xl font-bold">Ready to Start Watching on Your {primaryKeyword}?</h3>
                        <p className="mt-2 text-muted-foreground">Get your premium IPTV subscription today and unlock thousands of channels!</p>
                        <Button asChild className="mt-4">
                            <Link href="/pricing">Get Your Subscription Now</Link>
                        </Button>
                      </div>

                      {faqs && (
                        <>
                            <h2 className="font-headline text-3xl">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible>
                                {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>

                                    <AccordionContent>
                                    <p>{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                ))}
                            </Accordion>
                        </>
                      )}
                  </div>
              </div>
              <aside className="lg:col-span-1 space-y-8">
                  {image && (
                      <Card>
                      <CardContent className="p-0">
                          <div className="relative h-64 w-full">
                          <Image
                              src={image.imageUrl}
                              alt={`${primaryKeyword} - ${title}`}
                              data-ai-hint={image.imageHint}
                              fill
                              sizes="(max-width: 1024px) 100vw, 33vw"
                              priority
                              className="object-cover rounded-lg"
                              placeholder="blur"
                              blurDataURL={BLUR_DATA_URL}
                          />
                          </div>
                      </CardContent>
                  </Card>
                  )}
                  <InternalLinks currentId={id} />
              </aside>
            </div>

          </article>
        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return howToArticles.map((article) => ({
    device: article.id,
  }));
}
