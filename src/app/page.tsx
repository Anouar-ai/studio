
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { Brands } from "@/components/sections/Brands";
import { Pricing } from "@/components/sections/Pricing";

const WeeklyBuzz = dynamic(() => import("@/components/sections/WeeklyBuzz").then((m) => m.WeeklyBuzz));
const SportEvents = dynamic(() => import("@/components/sections/SportEvents").then((m) => m.SportEvents));
const Devices = dynamic(() => import("@/components/sections/Devices").then((m) => m.Devices));
const CTA = dynamic(() => import("@/components/sections/CTA").then((m) => m.CTA));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));

export default async function Home() {
    const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Provider Subscription",
    "description": "Premium IPTV Provider with over 20,000 channels, HD/4K quality, and instant activation.",
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
