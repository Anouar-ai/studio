import { features } from "@/lib/site-data/features";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { GlowingEffect } from "../ui/glowing-effect";
import { cn } from "@/lib/utils";

interface GridItemProps {
  area: string;
  feature: (typeof features)[0];
}

const GridItem = ({ area, feature }: GridItemProps) => {
    const {name, description, icon: Icon} = feature;
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-headline leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {name}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};


export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="The Best Features for Your IPTV Service"
          subtitle="Our IPTV service is built with your entertainment in mind. Experience the difference with our premium features."
        />
        <Reveal>
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-2 lg:grid-cols-3 xl:max-h-[34rem] xl:grid-rows-2">
                {features.map((feature, i) => {
                    // This is a bit of a hack to get a nice grid layout.
                    // We define the grid areas for a 3-column layout and a 2-column layout.
                    const gridAreas = [
                        // 3-col layout (lg and up)
                        "lg:[grid-area:1/1/2/2]",
                        "lg:[grid-area:1/2/2/3]",
                        "lg:[grid-area:1/3/2/4]",
                        "lg:[grid-area:2/1/3/2]",
                        "lg:[grid-area:2/2/3/3]",
                        "lg:[grid-area:2/3/3/4]",
                        // 2-col layout (md)
                        "md:[grid-area:1/1/2/2]",
                        "md:[grid-area:1/2/2/3]",
                        "md:[grid-area:2/1/3/2]",
                        "md:[grid-area:2/2/3/3]",
                        "md:[grid-area:3/1/4/2]",
                        "md:[grid-area:3/2/4/3]",
                    ]
                    return <GridItem key={feature.name} area={gridAreas[i]} feature={feature} />
                })}
            </ul>
        </Reveal>
      </Container>
    </section>
  );
}
