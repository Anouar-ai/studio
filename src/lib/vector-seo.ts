'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define the schema for the semantic content structure
const SemanticContentSchema = z.object({
  primaryEntity: z.string().describe('The main subject or topic.'),
  relatedEntities: z
    .array(z.string())
    .describe('A list of people, places, or concepts related to the primary entity.'),
  semanticClusters: z
    .array(z.array(z.string()))
    .describe('Groups of related concepts. Each inner array is a cluster, with the first element being the cluster\'s main topic.'),
  contextualKeywords: z
    .array(z.string())
    .describe('Keywords that often appear in the same semantic space as the topic.'),
});

export type SemanticContent = z.infer<typeof SemanticContentSchema>;

// Define the Genkit prompt for generating semantic content
const semanticContentPrompt = ai.definePrompt({
    name: 'semanticContentPrompt',
    input: { schema: z.string() },
    output: { schema: SemanticContentSchema },
    prompt: `You are an SEO expert specializing in semantic content optimization. For the topic "{{input}}", identify the following and return it in a valid JSON format:
    1.  **Primary Entity**: The single most important subject.
    2.  **Related Entities**: A list of closely related people, places, organizations, or concepts.
    3.  **Semantic Clusters**: Group related concepts into clusters. Each cluster should be an array of strings, where the first string is the cluster's main theme.
    4.  **Contextual Keywords**: A list of keywords that frequently appear in the same semantic context as the main topic.`,
});

/**
 * Generates a semantic content structure for a given topic using an AI model.
 * @param topic The topic to analyze.
 * @returns A promise that resolves to the semantic content structure.
 */
export async function generateSemanticContent(topic: string): Promise<SemanticContent> {
  const { output } = await semanticContentPrompt(topic);
  if (!output) {
    throw new Error('Failed to generate semantic content. The AI model did not return a valid output.');
  }
  return output;
}

/**
 * Generates a vector embedding for a given text string.
 * @param text The text to generate an embedding for.
 * @returns A promise that resolves to an array of numbers representing the embedding.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const { embedding } = await ai.embed({
    embedder: 'openai/text-embedding-3-small',
    content: text,
  });
  return embedding;
}

/**
 * Calculates the cosine similarity between two vectors.
 * @param vecA The first vector.
 * @param vecB The second vector.
 * @returns A number between -1 and 1, where 1 means identical.
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * (vecB[i] || 0), 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  
  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0; // Avoid division by zero
  }
  
  return dotProduct / (magnitudeA * magnitudeB);
}
