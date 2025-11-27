import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.iptvprovider.me';
  
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/staging/'],
        },
        {
            userAgent: 'GPTBot',
            allow: '/',
        },
        {
            userAgent: 'ChatGPT-User',
            allow: '/',
        },
        {
            userAgent: 'anthropic-ai',
            allow: '/',
        },
        {
            userAgent: 'PerplexityBot',
            allow: '/',
        }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
