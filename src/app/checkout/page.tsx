
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import SemanticContent from "@/components/shared/SemanticContent";
import { Schema } from "@/components/shared/Schema";
import { getCheckoutPageData } from "@/lib/data/checkout-page";

export const metadata: Metadata = {
    title: "Secure Checkout | IPTV Provider",
    description: "Complete your IPTV Provider subscription securely. Enter your payment details to get instant access to thousands of channels.",
    alternates: {
      canonical: "/checkout",
    },
};


export default async function CheckoutPage() {
    const { breadcrumbSchema, semanticContent } = await getCheckoutPageData();

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
                            Checkout
                        </li>
                      </ol>
                    </nav>
                    <SectionHeader 
                        title="Contact Us to Purchase"
                        subtitle="To complete your purchase, please contact us via WhatsApp. Our team is ready to assist you."
                    />
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payment Information</CardTitle>
                                    <CardDescription>All transactions are secure and encrypted.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="you@example.com" disabled />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="card-number">Card Details</Label>
                                            <div className="relative">
                                                <Input id="card-number" placeholder="Card Number" disabled />
                                                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="expiry">Expiry Date</Label>
                                                <Input id="expiry" placeholder="MM / YY" disabled />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="cvc">CVC</Label>
                                                <Input id="cvc" placeholder="CVC" disabled />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Cardholder Name</Label>
                                            <Input id="name" placeholder="Full Name" disabled />
                                        </div>
                                        <Button asChild size="lg" className="w-full">
                                            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                                <SiWhatsapp className="mr-2 h-4 w-4" />
                                                Contact on WhatsApp
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="order-1 md:order-2">
                             <Card className="bg-muted/30 dark:bg-card/50">
                                <CardHeader>
                                    <CardTitle>Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between">
                                        <p className="text-muted-foreground">12-Month Plan</p>
                                        <p className="font-semibold">$90.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-muted-foreground">Discount</p>
                                        <p className="font-semibold text-primary">-$102.00</p>
                                    </div>
                                    <hr className="border-border"/>
                                    <div className="flex justify-between font-bold text-lg">
                                        <p>Total</p>
                                        <p>$90.00</p>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        <p>Your subscription will renew automatically. You can cancel anytime.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    )
}
