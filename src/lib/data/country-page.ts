
import { unstable_cache as cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { getCountryById } from "@/lib/countries";

const getPageFaqs = (name: string) => [
    {
        question: `Is your IPTV service available in ${name}?`,
        answer: `Yes, our IPTV service is fully available and optimized for viewers in ${name}. You get access to local channels as well as our full international lineup.`
    },
    {
        question: `What payment methods do you accept in ${name}?`,
        answer: `We accept a variety of payment methods, including major credit cards and cryptocurrencies. All payments are securely processed. For specific options available in ${name}, please proceed to checkout or contact our support team.`
    },
    {
        question: `How fast is the activation process in ${name}?`,
        answer: `Activation is instant worldwide, including in ${name}. As soon as your payment is confirmed, you will receive your login credentials via email and can start streaming immediately.`
    },
    {
        question: `Do I need a VPN to use IPTV in ${name}?`,
        answer: `While not mandatory, we highly recommend using a VPN in ${name} to ensure your privacy and bypass any potential ISP throttling or blocking, guaranteeing the best possible streaming experience.`
    }
];

// This function fetches and processes all data required for a specific country page in a single, cached operation.
export const getCountryPageData = cache(
  async (countryId: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me';
    
    const country = getCountryById(countryId);
    if (!country) {
        notFound();
    }
    const { name } = country;

    const pageFaqs = getPageFaqs(name);

    // Define all data fetching and processing promises
    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent(`IPTV Provider in ${name}`);

    const breadcrumbSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
            { "@type": "ListItem", "position": 2, "name": "Locations", "item": `${baseUrl}/locations` },
            { "@type": "ListItem", "position": 3, "name": name, "item": `${baseUrl}/country/${countryId}` }
        ]
    });

    const serviceSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IPTV Provider",
        "provider": { "@type": "Organization", "name": "IPTV Provider" },
        "areaServed": { "@type": "Country", "name": name },
        "name": `IPTV Provider for ${name}`,
        "description": `Premium IPTV service available in ${name} with over 20,000 channels, HD/4K quality, and instant setup.`,
        "offers": { "@type": "Offer", "price": "14.99", "priceCurrency": "USD" }
    });

    const faqSchemaPromise = Promise.resolve({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pageFaqs.map(faq => ({
            "@type": "Question", "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    });

    // Await all promises in parallel
    const [
      semanticContent,
      breadcrumbSchema,
      serviceSchema,
      faqSchema
    ] = await Promise.all([
      semanticContentPromise,
      breadcrumbSchemaPromise,
      serviceSchemaPromise,
      faqSchemaPromise
    ]);

    return { 
      country,
      pageFaqs,
      semanticContent, 
      breadcrumbSchema,
      serviceSchema,
      faqSchema
    };
  },
  ['country-page-data'], // Base cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['country-page'], // Tag for on-demand revalidation
  }
);
