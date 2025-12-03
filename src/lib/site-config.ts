
export const siteConfig = {
  name: "#1 IPTV Provider",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.iptvprovider.me",
  ogImage: "/og-image.jpg",
  description: "Subscribe to the #1 IPTV provider with 24,000+ live channels & VOD. HD/4K quality, instant activation & 24/7 support. Try the best IPTV service now!",
  links: {
    twitter: "https://twitter.com/iptvprovider",
    facebook: "https://facebook.com/iptvprovider",
    instagram: "https://instagram.com/iptvprovider",
    email: "support@iptvprovider.me",
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper for generating page-specific metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}) {
  const ogImageUrl = image || `/api/og?title=${encodeURIComponent(title)}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
