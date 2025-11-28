
import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ContactSheet } from "@/components/shared/ContactSheet";
import { ProgressBar } from '@/components/shared/ProgressBar';
import { Analytics } from "@/components/shared/Analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
  variable: "--font-outfit",
});

// SEO Constants
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.iptvprovider.me";
const SITE_NAME = "IPTV Provider";
const DEFAULT_TITLE = "Best IPTV Providers of 2026 | Top IPTV Service Provider";
const DEFAULT_DESCRIPTION = "Looking for the best IPTV provider? We are a top-rated IPTV service provider offering 24,000+ channels, HD/4K streaming, and VOD. Compare the best IPTV providers and choose us for a premium experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  
  description: DEFAULT_DESCRIPTION,
  
  keywords: [
    'best IPTV provider',
    'iptv providers',
    'best iptv providers',
    'iptv service provider',
    'buy IPTV',
    'IPTV subscription',
    'IPTV USA',
    'IPTV UK',
    'IPTV service',
    'premium IPTV',
    'cheap IPTV',
    'IPTV channels',
    'live TV streaming',
    'IPTV 2026',
    '4K IPTV',
    'sports IPTV',
    'VOD streaming'
  ],
  
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'x-default': '/',
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Best IPTV Providers 2026 | Top IPTV Service Provider",
    description: "Stream 24,000+ live channels in HD/4K from the best IPTV provider. Movies, sports, news & more. Subscribe to a top IPTV service today!",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(DEFAULT_TITLE)}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Best Streaming Service`,
        type: 'image/png',
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@iptvprovider",
    creator: "@iptvprovider",
    title: "Best IPTV Providers 2026 | 24K+ Channels",
    description: "Stream 24,000+ live channels in HD/4K from one of the best IPTV providers. Movies, sports & more. Subscribe now!",
    images: [{
      url: `/api/og?title=${encodeURIComponent(DEFAULT_TITLE)}`,
      alt: `${SITE_NAME} - Premium IPTV Service`,
    }],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  verification: {
    google: 'WayUe3dolb9UPFpMPHfTYy8CS-T1RkpFYqGvAkW5XqI',
    other: {
      'msvalidate.01': 'CEC29E9356C1B062CC9637E64D68C778',
    },
  },
  
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://twitter.com/yourcompany",
      "https://www.facebook.com/yourcompany",
      "https://www.instagram.com/yourcompany"
    ]
  };

  const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_NAME,
      "alternateName": ["IPTV Providers", "best iptv provider"],
      "url": SITE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
  }

  return (
    <html lang="en" suppressHydrationWarning>
       <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
           <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <link rel="icon" href="/favicon.ico" sizes="48x48"/>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
          <script src="https://analytics.ahrefs.com/analytics.js" data-key="Jl98JtH7ssQUsMyNzloJAw" async></script>
        </head>
      <body className={cn(
        "font-body antialiased",
        inter.variable,
        outfit.variable
      )}>
        <ProgressBar />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ContactSheet />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

    