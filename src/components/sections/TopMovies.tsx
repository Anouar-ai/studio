
"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const moviesData = [
  { id: 1, title: "Afterburn", imageHint: "sci-fi action", imageId: "movie-1" },
  { id: 2, title: "War of the Worlds", imageHint: "alien invasion", imageId: "movie-2" },
  { id: 3, title: "Our Fault", imageHint: "teen romance", imageId: "movie-3" },
  { id: 4, title: "Hunting Grounds", imageHint: "forest thriller", imageId: "movie-4" },
  { id: 5, title: "Captain Hook", imageHint: "pirate adventure", imageId: "movie-5" },
  { id: 6, title: "Demon Slayer", imageHint: "anime fantasy", imageId: "movie-6" },
  { id: 7, title: "Stolen Girl", imageHint: "kidnapping drama", imageId: "movie-7" },
  { id: 8, title: "Martin", imageHint: "character portrait", imageId: "movie-8" },
  { id: 9, title: "The Ugly Stepsister", imageHint: "fairytale twist", imageId: "movie-9" },
  { id: 10, title: "The Elixir", imageHint: "fantasy potion", imageId: "movie-10" },
];

const MovieCard = ({ movie, index }: { movie: any; index: number }) => {
  const movieImage = PlaceHolderImages.find(img => img.id === movie.imageId);

  return (
    <div
      className="group relative flex-shrink-0 cursor-pointer transition-all duration-300"
      style={{ minWidth: "350px", width: "350px", height: "220px" }}
    >
      <div className="relative flex h-[220px] items-start overflow-hidden">
        <div
          className="relative z-10"
          style={{ width: index === 9 ? "280px" : "140px", height: "220px" }}
        >
          <div
            className="absolute select-none font-black leading-none text-black [-webkit-text-stroke:4px_rgb(85,85,85)] [text-shadow:0px_0px_30px_rgba(32,31,31,0.8)]"
            style={{
              fontSize: "280px",
              fontFamily: '"Bebas Neue", Arial, sans-serif',
              marginTop: "25px",
              marginLeft: "40px",
              filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.9))",
              lineHeight: 0.7,
              top: 0,
              left: index === 9 ? -60 : 0,
              transform: "translateY(-1px)",
              letterSpacing: index === 9 ? "6px" : "normal",
            }}
          >
            {movie.id}
          </div>
        </div>
        <div
          className="relative z-20 overflow-hidden rounded-md bg-muted"
          style={{
            width: "160px",
            height: "220px",
            marginLeft: index === 9 ? "-80px" : "-20px",
          }}
        >
          {movieImage && (
            <Image
              src={movieImage.imageUrl}
              alt={movie.title}
              width={160}
              height={220}
              data-ai-hint={movieImage.imageHint}
              className="h-full w-full object-cover transition-opacity duration-300 opacity-100"
            />
          )}
        </div>
      </div>
    </div>
  );
};


export function TopMovies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="group relative mb-8">
      <div className="mb-6 flex items-center px-4 md:px-8 lg:px-16">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          Top 10 Movies Today
        </h2>
      </div>
      <div className="relative">
        <div
          className="nav-button prev absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={44} />
        </div>
        <div
          className="nav-button next absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={44} />
        </div>
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden px-4 pb-4 md:px-8 lg:px-16"
          style={{ scrollbarWidth: 'none', height: '250px' }}
        >
          {moviesData.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
