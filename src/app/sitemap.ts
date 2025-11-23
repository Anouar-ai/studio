
import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.iptvprovider.me';
  const lastModified = new Date();
  
  const devicePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/devices/${article.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));


  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...devicePages,
  ]
}
