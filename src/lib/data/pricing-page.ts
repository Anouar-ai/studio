
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { plans } from "@/lib/site-data/pricing";
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";

// This function fetches and processes all data required for the pricing page in a single, cached operation.
export const getPricingPageData = cache(
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Subscription Plans");

    // Static schemas can be resolved immediately
    const schemaOrgPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IPTV Provider Subscription",
        "image": "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",
        "description": "Premium IPTV Provider with 20,000+ channels, HD/4K quality, and 24/7 support. Available in 1, 3, 6, and 12-month plans.",
        "brand": {
          "@type": "Brand",
          "name": "IPTV Provider"
        },
        "offers": plans.map(plan => ({
          "@type": "Offer",
          "name": `IPTV Provider - ${plan.name}`,
          "price": plan.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/pricing`,
          "priceValidUntil": "2025-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "IPTV Provider"
          },
          "shippingDetails": {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: 0,
                currency: "USD"
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "WW" 
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY"
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY"
                }
              }
          },
          "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "WW",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 7,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/FreeReturn"
          }
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2547"
        }
    });

    const breadcrumbSchemaPromise = Promise.resolve({
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
                "name": "Pricing",
                "item": "https://www.iptvprovider.me/pricing"
            }
        ]
    });
    
    const faqSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pricingPageFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    });

    // Await all promises in parallel for maximum efficiency
    const [
      semanticContent,
      schemaOrg,
      breadcrumbSchema,
      faqSchema,
    ] = await Promise.all([
      semanticContentPromise,
      schemaOrgPromise,
      breadcrumbSchemaPromise,
      faqSchemaPromise,
    ]);

    return { 
      semanticContent, 
      schemaOrg,
      breadcrumbSchema,
      faqSchema,
      pricingPageFaqs, // Pass static data through as well
    };
  },
  ['pricing-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pricing-page'], // Tag for on-demand revalidation
  }
);
