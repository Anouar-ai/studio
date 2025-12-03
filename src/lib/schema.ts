
import type {
  Product,
  WebSite,
  Organization,
  FAQPage,
  BreadcrumbList,
  Article,
  HowTo,
  Service,
  Brand,
  Offer,
  AggregateOffer
} from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

// Reusable parts of schemas
const defaultPublisher = {
  '@type': 'Organization' as const,
  'name': siteConfig.name,
  'logo': {
    '@type': 'ImageObject' as const,
    'url': `${siteConfig.url}/api/og`,
  },
};

export function generateWebSiteSchema(): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteConfig.url,
    'name': siteConfig.name,
    'alternateName': ["IPTV Providers", "best iptv provider"],
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${siteConfig.url}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteConfig.name,
    'url': siteConfig.url,
    'logo': `${siteConfig.url}/api/og`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': siteConfig.links.email,
      'contactType': 'Customer Service',
    },
    'sameAs': [
      siteConfig.links.twitter,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  ratingValue: string;
  reviewCount: string;
  price?: string; // Make price optional
  priceCurrency?: string;
  offers?: Offer | AggregateOffer;
  sku?: string;
  mpn?: string;
  brand?: Brand;
}

export function generateProductSchema(props: ProductSchemaProps): Product {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: props.name,
        description: props.description,
        image: props.image,
        sku: props.sku,
        mpn: props.mpn,
        brand: props.brand,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: props.ratingValue,
            reviewCount: props.reviewCount,
        },
        offers: props.offers || {
            '@type': 'Offer',
            price: props.price,
            priceCurrency: props.priceCurrency || 'USD',
            availability: 'https://schema.org/InStock',
            url: `${siteConfig.url}/pricing`,
            priceValidUntil: "2025-12-31",
            shippingDetails: {
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
            hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "WW",
                returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 7,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn"
            }
        },
    };
}


export function generateFAQPageSchema(mainEntity: { question: string; answer: string }[]): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(itemListElement: { name: string; item: string }[]): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

interface ArticleSchemaProps {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    authorName?: string;
    publisherName?: string;
    url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps): Article {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.headline,
        description: props.description,
        image: props.image,
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        author: {
            '@type': 'Organization',
            name: props.authorName || siteConfig.name,
        },
        publisher: defaultPublisher,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': props.url,
        },
    };
}

interface HowToSchemaProps {
    name: string;
    description: string;
    image?: { url: string; width: number; height: number; };
    steps: { name: string; text: string; url: string; }[];
    totalTime?: string;
}

export function generateHowToSchema(props: HowToSchemaProps): HowTo {
    const { name, description, image, steps, totalTime } = props;
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        image: image ? {
            '@type': 'ImageObject',
            url: image.url,
            width: image.width,
            height: image.height,
        } : undefined,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text,
            url: step.url,
            position: index + 1,
        })),
        totalTime: totalTime,
    };
}


interface ServiceSchemaProps {
    serviceType: string;
    providerName: string;
    areaServed: { type: string, name: string};
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
}

export function generateServiceSchema(props: ServiceSchemaProps): Service {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: props.serviceType,
        provider: {
            '@type': 'Organization',
            name: props.providerName
        },
        areaServed: {
            '@type': props.areaServed.type,
            name: props.areaServed.name,
        },
        name: props.name,
        description: props.description,
        offers: {
            '@type': 'Offer',
            price: props.price,
            priceCurrency: props.priceCurrency,
        }
    }
}
