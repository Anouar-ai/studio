import { Pricing } from "@/components/sections/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans | IPTV Service",
  description: "Choose from our flexible IPTV subscription plans. Get instant access to thousands of channels with our 1-month, 3-months, 6-months, and 12-months packages.",
};

export default function PricingPage() {
  return <Pricing />;
}
