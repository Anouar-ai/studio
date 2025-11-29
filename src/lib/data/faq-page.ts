
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { faqs } from "@/lib/site-data/faq";

// This function fetches and processes all data required for the FAQ page in a single, cached operation.
export const getFaqPageData = cache(
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Provider Frequently Asked Questions");

    const faqSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    });

    const breadcrumbSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
            { "@type": "ListItem", "position": 2, "name": "FAQ", "item": `${baseUrl}/faq` }
        ]
    });

    // Await all promises in parallel
    const [
      semanticContent,
      faqSchema,
      breadcrumbSchema
    ] = await Promise.all([
      semanticContentPromise,
      faqSchemaPromise,
      breadcrumbSchemaPromise
    ]);

    return { 
      semanticContent,
      faqSchema,
      breadcrumbSchema
    };
  },
  ['faq-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['faq-page'], // Tag for on-demand revalidation
  }
);
