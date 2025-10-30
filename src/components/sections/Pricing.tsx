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
import { cn } from "@/lib/utils";
import { plans } from "@/lib/site";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Choose Your IPTV Service Package"
          subtitle="Select the perfect plan that fits your needs. All plans come with our full feature set."
        />
        <div className="grid max-w-md grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <Card className={cn(
                "relative flex h-full flex-col transition-all",
                plan.isPopular && "border-2 border-primary shadow-lg shadow-primary/20"
              )}>
                {plan.isPopular && (
                  <Badge className="absolute -top-3 right-4">Best Value</Badge>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground"> / {plan.name.toLowerCase()}</span>
                  </CardDescription>
                  {plan.name !== '1 Month' && (
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
                  <Button asChild className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                    <Link href={`/iptv-subscription/${plan.name.toLowerCase().replace(' ', '-')}`}>Order Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
