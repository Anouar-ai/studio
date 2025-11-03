
import { Pricing } from "@/components/sections/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | IPTV Service",
    description: "Find the best IPTV service plan for your needs. Compare our 1, 3, 6, and 12-month subscription packages and choose the right one for you.",
    alternates: {
        canonical: "/pricing",
    }
}

export default function PricingPage() {
  return (
    <main>
        <Pricing />
    </main>
  )
}
