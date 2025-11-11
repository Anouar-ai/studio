
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { ShieldCheck, Tv, Zap } from "lucide-react";
import { AnimatedText } from "../ui/animated-underline-text-one";
import { LogoCarousel } from "./LogoCarousel";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(40%_100%_at_50%_0%,hsl(var(--primary)/0.1),transparent)]" />
      <Container className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center py-20 text-center md:min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <AnimatedText 
            text="The World's Premier IPTV Service"
            textClassName="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            underlineClassName="text-primary"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
            Unlock a world of entertainment with our top-rated IPTV service. Start your subscription now, from just $7.50/mo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20 transition-all hover:bg-accent hover:shadow-xl hover:shadow-primary/30">
              <Link href="/iptv-subscription">Get Started Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#pricing">View Plans</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Instant activation
            </div>
            <div className="flex items-center gap-2">
              <Tv className="h-4 w-4 text-primary" />
              All devices
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              HD/4K Quality
            </div>
          </div>
        </motion.div>
      </Container>
      <LogoCarousel />
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-center justify-center rounded-full border border-border">
          <motion.div
            className="h-2 w-1 rounded-full bg-foreground/50"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
