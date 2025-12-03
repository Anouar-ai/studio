
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { faqs } from "@/lib/site-data/faq";
import { generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema';
import type { BreadcrumbList, FAQPage } from 'schema-dts';


// This function fetches and processes all data required for the FAQ page in a single, cached operation.
export const getFaqPageData = cache(
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Provider Frequently Asked Questions");

    const faqSchemaPromise: Promise<FAQPage> = Promise.resolve(generateFAQPageSchema(faqs));

    const breadcrumbSchemaPromise: Promise<BreadcrumbList> = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "FAQ", item: `${baseUrl}/faq` }
    ]));

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
    tags: ['pages', 'faq-page'], // Tag for on-demand revalidation
  }
);

