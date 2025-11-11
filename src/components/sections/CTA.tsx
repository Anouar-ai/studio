import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="rounded-xl bg-primary p-8 text-center md:p-12">
            <h2 className="font-headline text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready for the Best IPTV Service?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Unlock a world of entertainment — Get your IPTV service subscription now and start streaming instantly.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 border-primary-foreground bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/iptv-subscription">Get Your IPTV Service</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
