

import { howToArticles } from '@/lib/how-to';
import { findSemanticallySimilarContent } from './vector-related-content';

export type Post = (typeof howToArticles)[0];

// In a real app, this would fetch from a database or CMS.
export async function getAllPosts(): Promise<Post[]> {
  return howToArticles;
}

/**
 * Gets a list of related posts for a given slug, based on semantic similarity.
 * @param currentId The slug/ID of the current post.
 * @param minLinks The maximum number of related links to return.
 * @returns An array of semantically related posts.
 */
export async function getRelatedPosts(currentId: string, minLinks = 3) {
  const allPosts = await getAllPosts();
  if (!allPosts || allPosts.length === 0) {
    return [];
  }
  
  const currentPost = allPosts.find(p => p.id === currentId);

  if (!currentPost) {
    return [];
  }
  
  // Create a single text block for the current post to generate its embedding for comparison
  const currentContentText = [
    currentPost.title,
    currentPost.description,
    ...currentPost.steps.map(step => `${step.title}: ${step.description}`),
    ...(currentPost.faqs ? currentPost.faqs.map(faq => `${faq.question} ${faq.answer}`) : [])
  ].join('\n\n');

  // Find semantically similar content
  const related = await findSemanticallySimilarContent(
    currentContentText,
    allPosts,
    currentId,
    minLinks
  );
  
  return related.map(post => ({
      ...post,
      href: `/guides/${post.id}`
  }));
}
