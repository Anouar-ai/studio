import { Check } from "lucide-react";
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
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Metadata } from "next";

type Props = {
  params: { duration: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const planName = params.duration.replace("-", " ");
  const plan = plans.find(
    (p) => p.name.toLowerCase() === planName.toLowerCase()
  );

  if (!plan) {
    return {
      title: "Plan Not Found",
    };
  }

  return {
    title: `${plan.name} IPTV Subscription | IPTV Service`,
    description: `Get our ${plan.name} IPTV subscription for just $${plan.price}. Enjoy over 20,000 channels, HD/4K quality, and instant activation.`,
  };
}

export default function PlanPage({ params }: { params: { duration: string } }) {
  const planName = params.duration.replace("-", " ");
  const plan = plans.find(
    (p) => p.name.toLowerCase() === planName.toLowerCase()
  );

  if (!plan) {
    notFound();
  }

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title={`IPTV Service - ${plan.name} Plan`}
          subtitle={`The perfect package for your entertainment needs. Get started with our ${plan.name} subscription.`}
        />
        <div className="mx-auto max-w-md">
          <Card className="relative flex h-full flex-col">
            <CardHeader>
              <CardTitle className="font-headline">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-4xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground"> / {plan.name.toLowerCase()}</span>
              </CardDescription>
              {plan.name !== "1 Month" && (
                <p className="text-sm text-muted-foreground">
                  Equivalent to ${plan.price_monthly.toFixed(2)}/month
                </p>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                Order Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export async function generateStaticParams() {
    return plans.map((plan) => ({
      duration: plan.name.toLowerCase().replace(" ", "-"),
    }));
  }
