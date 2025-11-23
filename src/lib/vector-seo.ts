
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/googleai';

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
    model: googleAI.model('gemini-pro'),
    config: {
        safetySettings: [
            {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_NONE',
            },
            {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_NONE',
            },
        ],
    }
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
  try {
    const { embedding } = await ai.embed({
      embedder: 'googleai/text-embedding-004',
      content: text,
    });
    return embedding;
  } catch (error) {
    console.error('Failed to generate embedding:', error);
    // Return a zero-vector of the correct dimensionality as a fallback.
    // text-embedding-004 has a dimensionality of 768.
    return new Array(768).fill(0);
  }
}
