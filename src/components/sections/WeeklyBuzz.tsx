
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { Bookmark, Heart, Play } from "lucide-react";

export function WeeklyBuzz() {
  return (
    <section className="relative space-y-4 px-4 py-4 sm:px-16">
      <div className="-mb-2 text-xl font-bold uppercase tracking-[10px] sm:text-2xl">
        <div className="flex flex-col gap-2 pt-20 max-sm:items-center">
          <h3 className="styled-title absolute top-8 text-7xl opacity-10 sm:top-4 sm:text-[9rem]">
            weekly
          </h3>
          <div className="z-10 -mt-8 max-sm:text-center md:-mt-10 md:translate-x-3">
            <p className="text-2xl font-bold uppercase tracking-[10px]">
              Buzz
            </p>
          </div>
        </div>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {weeklyBuzzItems.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/7 pl-3 max-w-[200px]">
              <main className="group relative overflow-hidden rounded-xl">
                <Link href={item.href} aria-label={`Link to details of ${item.title}`}>
                  <Image
                    alt={`Poster of ${item.title}`}
                    loading="lazy"
                    width="200"
                    height="300"
                    decoding="async"
                    className="rounded-xl object-cover transition-opacity duration-300 ease-in h-[300px] w-[200px]"
                    src={item.src}
                  />
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
                </Link>
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
              </main>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
