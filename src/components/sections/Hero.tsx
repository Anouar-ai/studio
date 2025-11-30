
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { ShieldCheck, Tv, Zap } from "lucide-react";
import { AnimatedText } from "../ui/animated-underline-text-one";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import MouseIcon from "@/assets/icons/mouse.svg";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://www.demotemplates.online/snowpulse/wp-content/uploads/2024/05/The-Best-IPTV-Subscription-Service-Provider.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_100%_at_50%_0%,hsl(var(--primary)/0.1),transparent)]" />
      <Container className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center py-20 text-center md:min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-4xl"
        >
          <AnimatedText 
            text="The World's Premier IPTV Provider"
            textClassName="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            underlineClassName="text-primary"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
            Unlock a world of entertainment with one of the world's best IPTV providers. Start your subscription now, from just $7.50/mo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20 transition-all hover:bg-accent hover:shadow-xl hover:shadow-primary/30">
              <Link href="/#pricing">View Pricing</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2" />
                Contact on WhatsApp
              </Link>
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
          >
             <Image src={MouseIcon} alt="Scroll down" className="h-full w-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
