
import { ClientCarousel } from "./ClientCarousel";

type CarouselItem = {
  title: string;
  src: string;
  href?: string;
  placeholder: string;
};

interface ContentCarouselProps {
  items: CarouselItem[];
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  showHoverContent?: boolean;
}

export function ContentCarousel({
  items,
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  showHoverContent = false,
}: ContentCarouselProps) {
  
  return (
    <section className="relative space-y-4 px-4 py-4 sm:px-16">
      <div className="-mb-2 text-xl font-bold uppercase tracking-[10px] sm:text-2xl">
        <div className="flex flex-col gap-2 pt-20 max-sm:items-center">
          <h3 className={titleClassName}>
            {title}
          </h3>
          <div className="z-10 -mt-8 max-sm:text-center md:-mt-10 md:translate-x-3">
            <p className={subtitleClassName}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      
      <ClientCarousel items={items} showHoverContent={showHoverContent} />
    </section>
  );
}
