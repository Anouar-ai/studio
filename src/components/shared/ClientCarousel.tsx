
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, Play } from "lucide-react";

type ItemWithPlaceholder = {
  title: string;
  src: string;
  href?: string;
  placeholder: string;
};

interface ClientCarouselProps {
  items: ItemWithPlaceholder[];
  showHoverContent?: boolean;
}

export function ClientCarousel({
  items,
  showHoverContent = false,
}: ClientCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-3">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/7 pl-3 max-w-[200px]"
          >
            <main className="group relative overflow-hidden rounded-xl">
              <Image
                alt={`Poster for ${item.title}, a popular movie available on IPTV Provider`}
                loading="lazy"
                width="200"
                height="300"
                decoding="async"
                className="rounded-xl object-cover transition-opacity duration-300 ease-in h-[300px] w-[200px]"
                src={item.src}
                placeholder="blur"
                blurDataURL={item.placeholder}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 17vw, 14vw"
              />
              {showHoverContent && (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent opacity-0 transition-[colors,opacity] ease-in-out group-hover:bg-black/40 group-hover:opacity-100">
                    <div className="m-auto grid h-10 w-10 scale-0 place-content-center rounded-full bg-card text-primary shadow-xl shadow-primary/50 transition-transform ease-in-out group-hover:scale-100">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 mx-auto flex flex-col items-center justify-center bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity ease-in-out group-hover:opacity-100">
                    <p className="line-clamp-2 translate-y-10 text-center text-sm font-semibold transition-transform ease-in-out group-hover:translate-y-0">
                      {item.title}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex flex-col items-end justify-end gap-2 p-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border-0 bg-card/50 backdrop-blur hover:bg-card/70"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border-0 bg-card/50 backdrop-blur hover:bg-card/70"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </main>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
