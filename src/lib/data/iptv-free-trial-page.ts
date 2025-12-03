
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { BreadcrumbList } from 'schema-dts';

// This function fetches and processes all data required for the IPTV free trial page in a single, cached operation.
export const getIptvFreeTrialPageData = cache(
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Free Trial");

    const breadcrumbSchemaPromise: Promise<BreadcrumbList> = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "IPTV Free Trial", item: `${baseUrl}/iptv-free-trial` }
    ]));

    // Await all promises in parallel for maximum efficiency
    const [
      semanticContent,
      breadcrumbSchema,
    ] = await Promise.all([
      semanticContentPromise,
      breadcrumbSchemaPromise,
    ]);

    return { 
      semanticContent, 
      breadcrumbSchema,
    };
  },
  ['iptv-free-trial-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'iptv-free-trial-page'], // Tag for on-demand revalidation
  }
);

