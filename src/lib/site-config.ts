
export const siteConfig = {
  name: "IPTV Provider",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.iptvprovider.me",
  ogImage: "/og-image.jpg",
  description: "Buy IPTV from the #1 rated provider! Get 24,000+ live channels, HD/4K streaming.",
  links: {
    twitter: "https://twitter.com/iptvprovider",
    facebook: "https://facebook.com/iptvprovider",
    instagram: "https://instagram.com/iptvprovider",
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
          url: image || `/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image || `/api/og?title=${encodeURIComponent(title)}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
