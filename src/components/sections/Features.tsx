import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { features } from "@/lib/site";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="The Best Features for Your IPTV Service"
          subtitle="We've built a platform with your entertainment in mind. Experience the difference with our premium features."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.name} delay={i * 0.1}>
              <Card className="group h-full transform-gpu transition-all duration-200 hover:-translate-y-2 hover:shadow-xl dark:bg-card/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary transition-colors duration-200 group-hover:text-primary-foreground group-hover:bg-primary group-hover:p-1 group-hover:rounded-sm" />
                  </div>
                  <CardTitle className="font-headline">{feature.name}</CardTitle>
                  <CardDescription className="pt-2">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
