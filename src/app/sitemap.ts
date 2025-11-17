import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
import { allCities } from '@/lib/cities';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yoursite.com'
  
  const howToPages = howToArticles.map((article) => ({
    url: `${baseUrl}/how-to-work/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const cityPages = allCities.map((city) => ({
    url: `${baseUrl}/iptv-in/${city.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.8,
  }));


  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/iptv-subscription`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iptv-subscription/12-months`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/iptv-subscription/6-months`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/iptv-subscription/3-months`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/iptv-subscription/1-month`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...howToPages,
    ...cityPages,
  ]
}

    