
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Check, Star, Tv, ShieldCheck, MessageCircle, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiWhatsapp } from "react-icons/si";

export const metadata: Metadata = {
    title: "IPTV Free Trial - Test Our Premium IPTV Service For Free",
    description: "Get a free IPTV trial and test our premium service. Instant activation, 20,000+ channels, HD/4K quality, and 24/7 support. No credit card required. Claim your free trial now!",
    keywords: ["IPTV free trial", "free IPTV", "test IPTV service", "IPTV trial no credit card", "get free IPTV"],
    alternates: {
        canonical: "/free-trial",
    },
};

const trialFaqs = [
    {
        question: "Is the IPTV free trial really free?",
        answer: "Yes, our IPTV trial is completely free. We don't require any payment information. It's a risk-free way to experience the quality of our service before committing to a plan."
    },
    {
        question: "What's included in the free IPTV trial?",
        answer: "The free trial includes access to our full package: 20,000+ live channels, our complete VOD library of movies and series, HD/4K quality, and anti-freeze technology. You get the full premium experience."
    },
    {
        question: "How do I get my free IPTV trial?",
        answer: "Simply click the 'Claim Your Free Trial' button on this page to contact us on WhatsApp. Our team will provide you with your trial credentials instantly."
    },
    {
        question: "How long does the IPTV trial last?",
        answer: "Our free IPTV trial period is designed to give you enough time to explore our channels and features. The exact duration will be confirmed by our support team when you request the trial."
    }
];

export default function FreeTrialPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": trialFaqs.map(faq => ({
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                                <span itemProp="name">Free Trial</span>
                                <meta itemProp="position" content="2" />
                            </li>
                        </ol>
                    </nav>

                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            Test Our Premium IPTV Service with a Free Trial
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Experience buffer-free, high-quality streaming with instant access to over 20,000 channels. No credit card, no risk.
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="mr-2" /> Claim Your Free Trial Now
                            </Link>
                        </Button>
                    </div>

                    <section className="py-16 sm:py-24">
                        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">What You Get with Your IPTV Trial</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                                <p className="text-muted-foreground">Get your IPTV trial credentials within minutes of requesting them.</p>
                            </div>
                            <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Tv size={20} className="text-primary"/> 20,000+ Channels</h3>
                                <p className="text-muted-foreground">Explore a massive library of international channels, movies, and VOD content.</p>
                            </div>
                             <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Star size={20} className="text-primary"/> HD/4K Streaming Quality</h3>
                                <p className="text-muted-foreground">Experience crystal-clear picture quality for an immersive viewing experience.</p>
                            </div>
                            <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><ShieldCheck size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                                <p className="text-muted-foreground">Enjoy smooth, buffer-free streaming thanks to our powerful servers.</p>
                            </div>
                            <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                                <p className="text-muted-foreground">Even during your trial, our expert support team is here to help you.</p>
                            </div>
                             <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                                <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary"/> No Risk, No Hassle</h3>
                                <p className="text-muted-foreground">No credit card required. Test our IPTV service with zero commitment.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
                        <Container>
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Free Trial - Frequently Asked Questions</h2>
                            </div>
                            <div className="mx-auto mt-8 max-w-3xl">
                                <Accordion type="single" collapsible>
                                    {trialFaqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${i}`}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
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

    