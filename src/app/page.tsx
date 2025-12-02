
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Pricing } from "@/components/sections/Pricing";
import SemanticContent from "@/components/shared/SemanticContent";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateProductSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import dynamic from 'next/dynamic';
import { ContentCarouselSkeleton } from "@/components/shared/ContentCarousel";

const WeeklyBuzz = dynamic(() => import('@/components/sections/WeeklyBuzz').then(mod => mod.WeeklyBuzz), {
  loading: () => <ContentCarouselSkeleton />,
});

const SportEvents = dynamic(() => import('@/components/sections/SportEvents').then(mod => mod.SportEvents), {
  loading: () => <ContentCarouselSkeleton />,
});


export default async function Home() {
    const { 
      semanticContent, 
      weeklyBuzzItemsWithPlaceholders, 
      sportEventsWithPlaceholders 
    } = await getHomePageData();

    const productSchema = generateProductSchema({
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
      price: "16.00",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "7.50",
        highPrice: "16.00",
        offerCount: "4",
        offers: [
            {
                "@type": "Offer",
                url: `${siteConfig.url}/pricing`
            }
        ]
      }
    });

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      <Hero />
      <Brands />
      <Devices />
      <Pricing />
      <HowItWorks />
      <WeeklyBuzz items={weeklyBuzzItemsWithPlaceholders} />
      <SportEvents items={sportEventsWithPlaceholders} />
      <CTA />
      <FAQ />
    </>
  );
}
