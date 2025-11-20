
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { Brands } from "@/components/sections/Brands";
import { Pricing } from "@/components/sections/Pricing";

const Devices = dynamic(() => import("@/components/sections/Devices").then((m) => m.Devices));
const CTA = dynamic(() => import("@/components/sections/CTA").then((m) => m.CTA));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));

export default function Home() {
    const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Service Subscription",
    "description": "Premium IPTV service with over 20,000 channels, HD/4K quality, and instant activation.",
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
        "url": "/pricing"
    }
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Hero />
      <Brands />
      <Devices />
      <Pricing />
      <CTA />
      <Testimonials />
      <FAQ />
    </>
  );
}
