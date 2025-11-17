"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brands, brands_two } from "@/lib/site-data/brands";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BrandCarousel = ({ images, direction = 1 }: { images: typeof brands, direction?: number }) => {
    const duplicatedLogos = [...images, ...images];
    
    return (
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
              x: [`${direction === 1 ? '0%' : '-50%'}`, `${direction === 1 ? '-50%' : '0%'}`],
              transition: {
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((brand, index) => {
                 const brandImage = PlaceHolderImages.find(img => img.id === brand.id);
                 if (!brandImage) return null;
                 return (
                     <div
                        key={`${brand.id}-${index}`}
                        className="flex-shrink-0 px-8"
                        style={{ flexBasis: `calc(100% / ${images.length})` }}
                    >
                        <Image
                            src={brandImage.imageUrl}
                            alt={brand.alt}
                            width={brandImage.width || 150}
                            height={brandImage.height || 46}
                            className="object-contain h-12 w-auto"
                            data-ai-hint={brandImage.imageHint}
                        />
                    </div>
                 )
            })}
          </motion.div>
        </div>
    )
}

export function Brands() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto space-y-4">
        <BrandCarousel images={brands} direction={-1} />
        <BrandCarousel images={brands_two} direction={1} />
      </div>
    </section>
  );
}
