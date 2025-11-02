import Link from "next/link";
import { BlogPostCard } from "../shared/BlogPostCard";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { howToArticles } from "@/lib/how-to";
import { Button } from "../ui/button";

export function HowTo() {
  return (
    <section id="how-to" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="How-To Guides"
          subtitle="Step-by-step instructions to get you started on any device."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {howToArticles.slice(0, 3).map((article) => (
            <BlogPostCard key={article.id} post={article} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/devices">View All Guides</Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
