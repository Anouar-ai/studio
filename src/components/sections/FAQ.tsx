
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us."
        />
        <Reveal>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
