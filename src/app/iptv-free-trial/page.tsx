
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Check, Tv, Zap, Shield, MessageCircle, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import SemanticContent from "@/components/shared/SemanticContent";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    return generatePageMetadata({
        title: "IPTV Free Trial | Test Our Premium IPTV Service",
        description: "Discover our IPTV service. We offer a low-cost 1-month plan as a trial to ensure the highest quality for all users. Get instant access to 20,000+ channels.",
        canonical: "/iptv-free-trial",
    });
}

const features = [
    { icon: Tv, text: "20,000+ Live Channels" },
    { icon: Zap, text: "Instant Activation" },
    { icon: Check, text: "HD/4K Streaming Quality" },
    { icon: Shield, text: "Anti-Freeze Technology" },
    { icon: MessageCircle, text: "24/7 Customer Support" },
    { icon: Smartphone, text: "Works on All Your Devices" },
];

export default async function IptvFreeTrialPage() {
    const { semanticContent, breadcrumbSchema } = await getIptvFreeTrialPageData();

    return (
        <>
        <Schema id="breadcrumb" schema={breadcrumbSchema} />

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

                <div className="text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        The Best Way to Trial Our IPTV Service
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        To maintain the highest stream quality for our subscribers, we don't offer traditional free trials. Instead, we provide a low-cost, full-featured 1-Month Plan as the perfect way to test our service.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-8">
                        <h2 className="font-headline text-3xl font-bold">Why a Paid Trial is Better</h2>
                        <p className="text-muted-foreground">
                            Free trials can attract temporary users who overload servers, reducing stream quality for everyone. By offering a paid 1-month trial, we ensure our infrastructure remains premium, stable, and buffer-free for serious customers.
                        </p>
                         <p className="text-muted-foreground">
                            You get unrestricted access to all features, channels, and our VOD library, plus our 7-day money-back guarantee. It's the most reliable way to experience the best IPTV service available.
                        </p>
                        <Button asChild size="lg">
                            <Link href="https://wa.me/212700664844" target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="mr-2" />
                                Start Your 1-Month Trial
                            </Link>
                        </Button>
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>What You Get in Your Trial</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <feature.icon className="h-5 w-5 flex-shrink-0 text-primary" />
                                            <span className="text-muted-foreground">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </Container>
        </main>
        </>
    )
}
