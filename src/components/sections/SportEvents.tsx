
import { sportEvents } from "@/lib/site-data/sport-events";
import { ContentCarousel } from "../shared/ContentCarousel";
import { getPlaceholderImage } from "@/lib/image-blur";

export async function SportEvents() {
  const itemsWithPlaceholders = await Promise.all(
    sportEvents.map(async (item) => {
      const placeholder = await getPlaceholderImage(item.src);
      return { ...item, placeholder };
    })
  );

  return (
    <ContentCarousel
      items={itemsWithPlaceholders}
      title="Sport"
      titleClassName="styled-title absolute top-8 text-7xl opacity-10 sm:top-4 sm:text-[9rem]"
      subtitle="Events"
      subtitleClassName="text-2xl font-bold uppercase tracking-[10px]"
    />
  );
}
