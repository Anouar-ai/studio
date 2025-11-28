

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles } from "@/lib/how-to";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import InternalLinks from "@/components/shared/InternalLinks";
import type { Post } from "@/lib/linking";


type Props = {
  params: { device: string; };
};

const BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjZWRlZGVkIi8+PC9zdmc+";


function StructuredData({ article }: { article: Post }) {
    const { id, title, description, steps, faqs, image, datePublished, dateModified } = article;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image?.imageUrl,
        datePublished: datePublished,
        dateModified: dateModified,
        author: {
            '@type': 'Organization',
            name: 'IPTV Provider',
        },
        publisher: {
            '@type': 'Organization',
            name: 'IPTV Provider',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/devices/${id}`,
        },
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: title,
        description: description,
        image: image ? {
            "@type": "ImageObject",
            "url": image.imageUrl,
            "width": image.width,
            "height": image.height
        } : undefined,
        step: steps.map((step, index) => ({
            "@type": "HowToStep",
            name: step.title,
            text: step.description,
            url: `${baseUrl}/devices/${id}#step-${index + 1}`,
            position: index + 1,
        })),
        totalTime: "PT5M",
    };

    const faqSchema = faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "IPTV Provider Subscription",
        image: "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
        description: `Our premium IPTV Provider is fully compatible with ${article.primaryKeyword}. Follow our guide to get set up.`,
        brand: {
            '@type': 'Brand',
            name: 'IPTV Provider'
        },
        offers: {
            "@type": "Offer",
            price: "14.99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${baseUrl}/pricing`,
            priceValidUntil: "2025-12-31",
            shippingDetails: {
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
            hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "WW",
                returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 7,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn"
            }
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
                "item": `${baseUrl}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": `${baseUrl}/devices/${id}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            {faqSchema && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    return {
      title: "Guide Not Found",
    };
  }

  const { title, description, keywords } = article;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      images: [`/api/og?title=${encodeURIComponent(title)}`],
    },
    alternates: {
      canonical: `/devices/${params.device}`,
    },
  };
}

export default async function HowToPage({ params }: { params: { device: string }}) {
  const article = howToArticles.find((p) => p.id === params.device);

  if (!article) {
    notFound();
  }
  
  const { title, description, steps, extraSections, faqs, image, primaryKeyword, id } = article;

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
            <header className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {description}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
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
                                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                              </div>
                          </div>
                      ))}
                      </div>

                      {extraSections?.map(section => (
                        <div key={section.id} className="my-12">
                            <h2 className="font-headline text-3xl">{section.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: section.content }} />
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
                   <Card>
                      <CardHeader>
                          <CardTitle>What You'll Need</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="space-y-3">
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A compatible {primaryKeyword}</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> A stable internet connection</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> An active IPTV subscription</li>
                              <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> Your M3U link or credentials</li>
                          </ul>
                      </CardContent>
                  </Card>

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
