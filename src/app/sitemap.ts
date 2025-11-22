
import { MetadataRoute } from 'next'
import { allCountries } from '@/lib/countries';
import { howToArticles } from '@/lib/how-to';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitallizard-iptv.vercel.app';
  const lastModified = new Date();
  
  const countryPages: MetadataRoute.Sitemap = allCountries.map((country) => ({
    url: `${baseUrl}/iptv-in/${country.id}`,
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
    ...countryPages,
    ...guidePages,
  ]
}
