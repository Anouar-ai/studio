
import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
import { allCountries } from '@/lib/countries';
 
// Function to ping the IndexNow API route
async function notifyIndexNow() {
  const endpoint = `${baseUrl}/api/indexnow`;
  try {
    // We don't need to wait for the response, just fire and forget.
    fetch(endpoint);
    console.log('Successfully pinged IndexNow endpoint.');
  } catch (error) {
    console.error('Failed to ping IndexNow endpoint:', error);
  }
}

const baseUrl = 'https://www.iptvprovider.me';
const staticPageLastModified = '2024-08-01T12:00:00.000Z';


export default function sitemap(): MetadataRoute.Sitemap {
  
  const devicePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/devices/${article.id}`,
    lastModified: article.dateModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const countryPages: MetadataRoute.Sitemap = allCountries.map((country) => ({
    url: `${baseUrl}/country/${country.id}`,
    lastModified: staticPageLastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: staticPageLastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: staticPageLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
        url: `${baseUrl}/iptv-subscription`,
        lastModified: staticPageLastModified,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: staticPageLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: staticPageLastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticPageLastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
        url: `${baseUrl}/iptv-free-trial`,
        lastModified: staticPageLastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
  ];

  // Notify IndexNow after preparing the sitemap data
  // This is a side effect but is common in sitemap generation scripts
  if (process.env.NODE_ENV === 'production') {
    notifyIndexNow();
  }

  return [
    ...staticPages,
    ...devicePages,
    ...countryPages,
  ]
}
