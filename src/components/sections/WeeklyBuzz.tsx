
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { ContentCarousel } from "../shared/ContentCarousel";
import { getPlaceholderImage } from "@/lib/image-blur";

export async function WeeklyBuzz() {
  const itemsWithPlaceholders = await Promise.all(
    weeklyBuzzItems.map(async (item) => {
      const placeholder = await getPlaceholderImage(item.src);
      return { ...item, placeholder };
    })
  );
  
  return (
    <ContentCarousel
      items={itemsWithPlaceholders}
      title="Top 10"
      titleClassName="styled-title absolute top-8 text-7xl opacity-10 sm:top-4 sm:text-[9rem]"
      subtitle="Movies"
      subtitleClassName="text-2xl font-bold uppercase tracking-[10px]"
    />
  );
}
