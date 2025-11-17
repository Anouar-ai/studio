import { MetadataRoute } from 'next'
import { allCities } from '@/lib/cities';
import { howToArticles } from '@/lib/site-data/how-to';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yoursite.com';
  const lastModified = new Date();
  
  const cityPages = allCities.map((city) => ({
    url: `${baseUrl}/iptv-in/${city.id}`,
    lastModified,
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.8,
  }));

  const guidePages = howToArticles.map((article) => ({
    url: `${baseUrl}/guides/${article.id}`,
    lastModified,
    changeFrequency: 'monthly' as 'monthly',
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
      url: `${baseUrl}/iptv-subscription`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iptv-subscription/1-month`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-subscription/3-months`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/iptv-subscription/6-months`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/iptv-subscription/12-months`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/devices`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
     {
      url: `${baseUrl}/guides`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...cityPages,
    ...guidePages,
  ]
}
