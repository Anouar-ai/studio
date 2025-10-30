import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/sections/Features").then((m) => m.Features));
const Devices = dynamic(() => import("@/components/sections/Devices").then((m) => m.Devices));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then((m) => m.Pricing));
const CTA = dynamic(() => import("@/components/sections/CTA").then((m) => m.CTA));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));
const BlogGrid = dynamic(() => import("@/components/sections/BlogGrid").then((m) => m.BlogGrid));

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Devices />
      <Pricing />
      <CTA />
      <Testimonials />
      <FAQ />
      <BlogGrid />
    </>
  );
}
