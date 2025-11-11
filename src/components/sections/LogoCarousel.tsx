"use client";

import { motion } from "framer-motion";
import { NetflixLogo, DisneyPlusLogo, AppleTVLogo, HBOLogo, ParamountPlusLogo, StarzLogo, CheckmarkLogo } from "../shared/BrandLogos";

const logos = [
  { id: "netflix", component: NetflixLogo },
  { id: "disneyplus", component: DisneyPlusLogo },
  { id: "appletv", component: AppleTVLogo },
  { id: "hbo", component: HBOLogo },
  { id: "paramount", component: ParamountPlusLogo },
  { id: "starz", component: StarzLogo },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export function LogoCarousel() {
  return (
    <section className="py-12 sm:py-16">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Including Content From All Major Streaming Platforms
        </p>
      <div className="container mx-auto">
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-25%"],
              transition: {
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ flexBasis: `calc(100% / ${logos.length * 2})` }}
              >
                <div className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-border/30 bg-gradient-to-b from-card/80 to-card/40 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 md:h-24 md:w-24">
                    <div className="relative flex h-7 w-auto items-center justify-center text-muted-foreground transition-transform duration-300 group-hover:scale-110 md:h-12">
                        <logo.component />
                    </div>
                    <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <CheckmarkLogo />
                    </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
