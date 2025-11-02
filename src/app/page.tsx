import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { TopMovies } from "@/components/sections/TopMovies";
import { HowTo } from "@/components/sections/HowTo";

const Features = dynamic(() => import("@/components/sections/Features").then((m) => m.Features));
const Devices = dynamic(() => import("@/components/sections/Devices").then((m) => m.Devices));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then((m) => m.Pricing));
const CTA = dynamic(() => import("@/components/sections/CTA").then((m) => m.CTA));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LogoCarousel />
      <TopMovies />
      <Devices />
      <HowTo />
      <Pricing />
      <CTA />
      <Testimonials />
      <FAQ />
    </>
  );
}
