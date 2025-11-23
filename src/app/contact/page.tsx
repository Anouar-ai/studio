
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/shared/Container';
import { ContactForm } from '@/components/shared/ContactForm';


export const metadata: Metadata = {
    title: "Contact Us | IPTV Provider",
    description: "Get in touch with our team. Whether you have a question about our IPTV Provider or need support, we're here to help.",
    alternates: {
        canonical: "/contact",
    }
};

export default function ContactPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.iptvprovider.me/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://www.iptvprovider.me/contact"
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
                            <span itemProp="name">Contact Us</span>
                             <meta itemProp="position" content="2" />
                        </li>
                      </ol>
                    </nav>
                    <div className="mx-auto max-w-lg">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                                <CardDescription>
                                    Have a question or need support? Fill out the form below and we'll get back to you shortly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </main>
        </>
    );
}
