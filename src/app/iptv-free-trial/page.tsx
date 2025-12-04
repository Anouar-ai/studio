
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Check, Tv, Zap, Shield, MessageCircle, Smartphone, HelpCircle, UserCheck, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import SemanticContent from "@/components/shared/SemanticContent";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function generateMetadata(): Metadata {
    const title = "IPTV Free Trial 2026: Start Streaming in 5 Minutes (No Card Needed)";
    const description = "Start your IPTV free trial today. Access 500+ live channels, sports & movies. No credit card required. Instant activation. Try before you buy →";
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/iptv-free-trial",
      }),
      title, // Override the title to remove the template suffix
    };
}

const trialFeatures = [
    { icon: Tv, text: "20,000+ Live Channels & VOD" },
    { icon: Zap, text: "4K/HD Stream Quality" },
    { icon: Smartphone, text: "All Device Compatibility" },
    { icon: MessageCircle, text: "24/7 Support During Trial" },
];

const whyChooseFeatures = [
    { icon: UserCheck, title: "No Credit Card Required", description: "We don't ask for payment details upfront. Enjoy a genuinely free, no-strings-attached trial experience." },
    { icon: Check, title: "Full Access to All Features", description: "Your trial includes our entire channel lineup, VOD library, and all premium features. No restrictions." },
    { icon: Shield, title: "24/7 Premium Support", description: "Even as a trial user, you get complete access to our expert support team, ready to help you anytime." },
    { icon: Star, title: "Easy, No-Pressure Upgrade", description: "Love the service? Upgrading to a full plan is simple. If not, the trial simply expires. No hassle." },
];

const howItWorksSteps = [
    {
        number: 1,
        title: "Contact Us on WhatsApp",
        description: "Click the 'Start Free Trial' button to open a chat with our team on WhatsApp.",
    },
    {
        number: 2,
        "title": "Request Your Trial",
        "description": "Send us a message asking for your free trial. Our team will generate your unique access credentials."
    },
    {
        number: 3,
        "title": "Start Streaming Instantly",
        "description": "Use the credentials and our easy setup guides to log in on your favorite device and start watching immediately."
    }
];

export default async function IptvFreeTrialPage() {
    const { semanticContent, breadcrumbSchema, faqSchema, serviceSchema, trialFaqs } = await getIptvFreeTrialPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="faq" schema={faqSchema} />
            <Schema id="service" schema={serviceSchema} />

            <SemanticContent 
                primaryEntity={semanticContent.primaryEntity}
                relatedEntities={semanticContent.relatedEntities}
                semanticClusters={semanticContent.semanticClusters}
                contextualKeywords={semanticContent.contextualKeywords}
            />
            <main>
                {/* Hero Section */}
                <section className="py-20 sm:py-32 text-center bg-muted/20 dark:bg-card/30">
                    <Container>
                         <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                            <ol className="flex items-center justify-center gap-2">
                            <li>
                                <Link href="/" className="hover:text-primary">
                                Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                IPTV Free Trial
                            </li>
                            </ol>
                        </nav>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl">
                           Start Your IPTV Free Trial Now
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                           20,000+ Channels. Zero Commitment. Instant Access.
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <Link href="https://wa.me/212700664844" target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="mr-2" />
                                Start Free Trial on WhatsApp
                            </Link>
                        </Button>
                        <p className="mt-4 text-sm text-muted-foreground">
                            No credit card required • Cancel anytime • 24hr access
                        </p>
                    </Container>
                </section>

                {/* What You Get Section */}
                <section className="py-16 sm:py-24">
                    <Container>
                        <SectionHeader
                            title="What You Get in Your IPTV Free Trial"
                            subtitle="Experience the full power of our premium IPTV service with absolutely no limitations during your 24-hour trial."
                        />
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {trialFeatures.map((feature, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-semibold text-lg">{feature.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* How It Works Section */}
                <section className="py-16 sm:py-24 bg-muted/20 dark:bg-card/30">
                    <Container>
                        <SectionHeader
                            title="Get Your Free Trial in 3 Easy Steps"
                            subtitle="We've made the process incredibly simple. You'll be streaming in just a few minutes."
                        />
                        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
                            <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 md:block">
                                <div className="w-full border-t-2 border-dashed border-border" />
                            </div>
                            {howItWorksSteps.map((step) => (
                                <div key={step.number} className="relative flex flex-col items-center text-center">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary ring-4 ring-muted/20 dark:ring-card/30 shadow-md">
                                        <span className="font-headline text-2xl font-bold">{step.number}</span>
                                    </div>
                                    <h3 className="mb-2 font-headline text-xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Why Choose Our Trial Section */}
                <section className="py-16 sm:py-24">
                     <Container>
                        <SectionHeader
                            title="Why Our Free Trial is Better"
                            subtitle="We offer a truly risk-free way to test our service, focused on quality and customer trust."
                        />
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                             {whyChooseFeatures.map((feature) => (
                                <div key={feature.title} className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="mt-1 text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                             ))}
                        </div>
                    </Container>
                </section>
                
                {/* FAQ Section */}
                <section id="faq" className="py-16 sm:py-24 bg-muted/20 dark:bg-card/30">
                  <Container>
                      <SectionHeader
                          title="Free Trial - Frequently Asked Questions"
                          subtitle="Got questions about the trial? We have answers."
                      />
                      <div className="mx-auto mt-8 max-w-3xl">
                        <Accordion type="single" collapsible>
                          {trialFaqs.map((faq, i) => (
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

                {/* Final CTA Section */}
                <section className="py-16 sm:py-24">
                    <Container>
                        <div className="rounded-xl bg-primary p-8 text-center md:p-12">
                            <h2 className="font-headline text-3xl font-bold text-primary-foreground sm:text-4xl">
                                Ready to Start Streaming?
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                                Your 24-hour, all-access pass to the best entertainment is just one click away.
                            </p>
                            <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="mt-8 border-primary-foreground bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                            <Link href="https://wa.me/212700664844" target="_blank" rel="noopener noreferrer">
                                Get Your Free Trial Now
                            </Link>
                            </Button>
                        </div>
                    </Container>
                </section>

            </main>
        </>
    )
}

    

    