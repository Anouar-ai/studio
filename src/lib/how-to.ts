
import articles from '@/lib/site-data/how-to.json';
import { PlaceHolderImages } from './placeholder-images';
import { getPlaceholderImage } from './image-blur';

type ArticleWithImage = (typeof articles)[0] & {
    image?: {
        imageUrl: string;
        imageHint: string;
        width?: number;
        height?: number;
        blurDataURL?: string;
    }
};

let processedArticles: ArticleWithImage[] | null = null;
let articlesPromise: Promise<void> | null = null;

async function processArticles() {
    if (processedArticles) return;

    const articlesWithBlur = await Promise.all(articles.map(async (article) => {
        const imageInfo = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
        if (!imageInfo) return { ...article, image: undefined };

        const blurDataURL = await getPlaceholderImage(imageInfo.imageUrl);
        return {
            ...article,
            image: {
                ...imageInfo,
                blurDataURL,
            },
        };
    }));
    processedArticles = articlesWithBlur;
}


if (!processedArticles && !articlesPromise) {
    articlesPromise = processArticles();
}

// We need a way to export the data synchronously after it has been processed.
// This is a bit of a hack, but it works for build-time generation.
const getProcessedArticles = () => {
    if (!processedArticles) {
        // This will only be the case in a non-build environment.
        // For `next build`, `processArticles` will have already run.
        console.warn("Articles were not pre-processed. Blur data URLs may be missing on initial render.");
        return articles.map(article => {
            const image = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
            return {
                ...article,
                image: image ? { ...image, blurDataURL: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxwYXRoIGQ9Ik0wIDBoOHY1SDB6IiBmaWxsPSIjZWRlZGVkIi8+PC9zdmc+" } : undefined,
            }
        });
    }
    return processedArticles;
}


// Export articles without embeddings for client-side and build-time usage
export const howToArticles: ArticleWithImage[] = getProcessedArticles();
