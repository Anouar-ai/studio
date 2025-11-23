
import articles from '@/lib/site-data/how-to.json';
import { PlaceHolderImages } from './placeholder-images';
import { generateEmbedding } from './vector-seo';

// Augment the article type to include an embedding
export type ArticleWithEmbedding = (typeof articles)[0] & {
    embedding: number[];
};

// Function to generate embeddings for all articles
async function getArticlesWithEmbeddings(): Promise<ArticleWithEmbedding[]> {
    if (!articles.length) {
        return [];
    }
    const articlesWithEmbeddings = await Promise.all(
        articles.map(async (article) => {
            // Create a single text block for embedding
            const contentToEmbed = [
                article.title,
                article.description,
                ...article.steps.map(step => `${step.title}: ${step.description}`),
                ...(article.faqs ? article.faqs.map(faq => `${faq.question} ${faq.answer}`) : [])
            ].join('\n\n');

            const embedding = await generateEmbedding(contentToEmbed);
            return {
                ...article,
                embedding,
            };
        })
    );
    return articlesWithEmbeddings;
}


// We will fetch the articles with embeddings once
export const articlesWithEmbeddings = await getArticlesWithEmbeddings();


export const howToArticles = articlesWithEmbeddings.map(article => {
    const image = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
    return {
        ...article,
        image,
    };
});
