
import { Devices } from "@/components/sections/Devices";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
    title: "Supported Devices | IPTV Service",
    description: "Our IPTV service is compatible with a wide range of devices, including iPhone, Android, Smart TV, Firestick, and more. See all compatible devices.",
    alternates: {
        canonical: "/devices",
    }
};


export default function DevicesPage() {
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
            "name": "Devices",
            "item": "https://yoursite.com/devices"
        }
    ]
  };
  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Container className="py-16 sm:py-24">
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
                  <span itemProp="name">Devices</span>
                  <meta itemProp="position" content="2" />
              </li>
              </ol>
          </nav>
          <Devices />
        </Container>
      </main>
    </>
  );
}
