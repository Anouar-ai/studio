
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { sportEvents } from "@/lib/site-data/sport-events";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";
import { generateProductSchema } from '@/lib/schema';
import type { Product } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';
import { plans } from '@/lib/site-data/pricing';

// This function fetches and processes all data required for the homepage in a single, cached operation.
export const getHomePageData = cache(
  async () => {
    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("Best IPTV Provider");

    const weeklyBuzzPromise = Promise.all(
      weeklyBuzzItems.map(async (item) => {
        const placeholder = await getPlaceholderImage(item.src);
        return { ...item, placeholder };
      })
    );

    const sportEventsPromise = Promise.all(
      sportEvents.map(async (item) => {
        const placeholder = await getPlaceholderImage(item.src);
        return { ...item, placeholder };
      })
    );

    const productSchemaPromise: Promise<Product> = Promise.resolve(generateProductSchema({
      name: "Premium IPTV Subscription Service",
      description: "Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!",
      image: `${siteConfig.url}/og-image.jpg`,
      sku: "iptv-premium-service",
      mpn: "iptv-premium-service",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      ratingValue: "4.9",
      reviewCount: "1843",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...plans.map(p => p.price_monthly)).toFixed(2),
        highPrice: Math.max(...plans.map(p => p.price_monthly)).toFixed(2),
        offerCount: plans.length.toString(),
        offers: plans.map(plan => ({
          "@type": "Offer",
          name: `IPTV Provider - ${plan.name}`,
          price: plan.price.toFixed(2),
          priceCurrency: "USD",
          url: `${siteConfig.url}/pricing`
        }))
      }
    }));
    
    // Await all promises in parallel
    const [
      semanticContent,
      weeklyBuzzItemsWithPlaceholders,
      sportEventsWithPlaceholders,
      productSchema
    ] = await Promise.all([
      semanticContentPromise,
      weeklyBuzzPromise,
      sportEventsPromise,
      productSchemaPromise
    ]);

    return { 
      semanticContent, 
      weeklyBuzzItemsWithPlaceholders, 
      sportEventsWithPlaceholders,
      productSchema
    };
  },
  ['home-page-data'], // Cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'home-page'], // Tag for on-demand revalidation
  }
);

