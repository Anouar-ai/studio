
import { MetadataRoute } from 'next'
import { allCities } from '@/lib/cities';
import { howToArticles } from '@/lib/how-to';
import { plans } from '@/lib/site-data/pricing';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitallizard-iptv.vercel.app';
  const lastModified = new Date();
  
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${baseUrl}/iptv-in/${city.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/guides/${article.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const subscriptionPages: MetadataRoute.Sitemap = plans.map((plan) => ({
    url: `${baseUrl}${plan.url}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
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
    ...subscriptionPages,
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
    ...cityPages,
    ...guidePages,
  ]
}
