
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { plans } from "@/lib/site-data/pricing";
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";
import { generateProductSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import type { Product, BreadcrumbList, FAQPage } from 'schema-dts';
import { siteConfig } from '../site-config';

// This function fetches and processes all data required for the pricing page in a single, cached operation.
export const getPricingPageData = cache(
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Subscription Plans");
    
    const productSchemaPromise: Promise<Product> = Promise.resolve(generateProductSchema({
      name: "IPTV Provider Subscription",
      description: "Premium IPTV Provider with 20,000+ channels, HD/4K quality, and 24/7 support. Available in 1, 3, 6, and 12-month plans.",
      image: "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
      ratingValue: "4.8",
      reviewCount: "2547",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...plans.map(p => p.price_monthly)).toFixed(2),
        highPrice: Math.max(...plans.map(p => p.price_monthly)).toFixed(2),
        offerCount: plans.length.toString(),
        offers: plans.map(plan => ({
            "@type": "Offer",
            "name": `IPTV Provider - ${plan.name}`,
            "price": plan.price.toFixed(2),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/pricing`,
            "priceValidUntil": "2025-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "IPTV Provider"
            }
        }))
      }
    }));

    const breadcrumbSchemaPromise: Promise<BreadcrumbList> = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Pricing", item: `${baseUrl}/pricing` }
    ]));
    
    const faqSchemaPromise: Promise<FAQPage> = Promise.resolve(generateFAQPageSchema(pricingPageFaqs));

    // Await all promises in parallel for maximum efficiency
    const [
      semanticContent,
      productSchema,
      breadcrumbSchema,
      faqSchema,
    ] = await Promise.all([
      semanticContentPromise,
      productSchemaPromise,
      breadcrumbSchemaPromise,
      faqSchemaPromise,
    ]);

    return { 
      semanticContent, 
      productSchema,
      breadcrumbSchema,
      faqSchema,
      pricingPageFaqs, // Pass static data through as well
    };
  },
  ['pricing-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'pricing-page'], // Tag for on-demand revalidation
  }
);

