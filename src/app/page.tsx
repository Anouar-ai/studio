
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Pricing } from "@/components/sections/Pricing";
import SemanticContent from "@/components/shared/SemanticContent";
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { WeeklyBuzz } from "@/components/sections/WeeklyBuzz";
import { SportEvents } from "@/components/sections/SportEvents";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";


export default async function Home() {
    const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Provider Subscription",
    "image": "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
    "description": "As one of the best IPTV providers, we offer a premium IPTV service provider subscription with over 20,000 channels, HD/4K quality, and instant activation.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1843"
    },
    "offers": {
        "@type": "Offer",
        "price": "16.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "/pricing",
        "priceValidUntil": "2025-12-31",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 0,
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "WW" 
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 0,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 0,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "WW",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 7,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
        }
    }
  };

  let semanticContent: SemanticContentType;
  try {
      semanticContent = await generateSemanticContent("Best IPTV Provider");
  } catch (error) {
      console.error("Failed to generate semantic content:", error);
      semanticContent = {
          primaryEntity: "Best IPTV Provider",
          relatedEntities: [],
          semanticClusters: [],
          contextualKeywords: []
      };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      <Hero />
      <WeeklyBuzz />
      <SportEvents />
      <Brands />
      <Devices />
      <Pricing />
      <CTA />
      <FAQ />
    </>
  );
}
