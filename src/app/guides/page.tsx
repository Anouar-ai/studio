
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { posts } from "@/lib/site-data/posts";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IPTV Installation Guides | IPTV Service",
    description: "Find easy-to-follow setup and installation guides for your IPTV service on any device. Get started with our step-by-step tutorials.",
    alternates: {
        canonical: "/guides",
    }
};

export default function GuidesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yoursite.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Guides",
            "item": "https://yoursite.com/guides"
        }
    ]
  };

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="py-16 sm:py-24">
        <Container>
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
                  <span itemProp="name">Guides</span>
                  <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
          <SectionHeader
            title="IPTV Installation Guides"
            subtitle="Follow our simple step-by-step guides to set up your IPTV service on any device. Get streaming in minutes!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((article) => (
                  <Link key={article.id} href={article.href} className="group">
                      <Card className="h-full transition-all group-hover:border-primary group-hover:shadow-lg">
                          <CardHeader>
                              <CardTitle className="group-hover:text-primary">{article.title}</CardTitle>
                              <CardDescription className="flex items-center justify-between">
                                  <span>{article.excerpt}</span>
                                  <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                              </CardDescription>
                          </CardHeader>
                      </Card>
                  </Link>
              ))}
          </div>
        </Container>
      </main>
    </>
  );
}
