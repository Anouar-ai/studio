"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { ShieldCheck, Tv, Zap } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://www.demotemplates.online//snowpulse//wp-content//uploads//2024//05//The-Best-IPTV-Subscription-Service-Provider.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl rounded-xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-lg"
        >
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            The World's Premier IPTV Service
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Unlock a world of entertainment with our top-rated IPTV service. Start your subscription now, from just $16/mo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40">
              <SiWhatsapp />
              WhatsApp
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/iptv-subscription">See Pricing</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/70">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-center justify-center rounded-full border border-white/20">
          <motion.div
            className="h-2 w-1 rounded-full bg-white"
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
