
'use server';

import { z } from 'zod';
import { getRelatedPosts } from '@/lib/linking';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

type State = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log('Contact form submitted successfully:', validatedFields.data);

  return { message: 'Your message has been sent successfully!', errors: null };
}

export async function getRelatedPostsAction(currentId: string) {
    try {
        const posts = await getRelatedPosts(currentId);
        return posts;
    } catch (error) {
        console.error("Error fetching related posts:", error);
        return [];
    }
}
