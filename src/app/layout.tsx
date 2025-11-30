
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
import { Schema } from "@/components/shared/Schema";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

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
const DEFAULT_TITLE = "Best IPTV Provider | 24,000+ Channels & VOD | IPTV Service";
const DEFAULT_DESCRIPTION = "Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${siteConfig.name}`
  },
  
  description: DEFAULT_DESCRIPTION,
  
  keywords: [
    'best IPTV provider', 'iptv providers', 'best iptv providers', 'iptv service provider',
    'buy IPTV', 'IPTV subscription', 'IPTV USA', 'IPTV UK', 'IPTV service',
    'premium IPTV', 'cheap IPTV', 'IPTV channels', 'live TV streaming',
    '4K IPTV', 'sports IPTV', 'VOD streaming'
  ],
  
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Best Streaming Service`,
        type: 'image/jpeg',
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@iptvprovider",
    creator: "@iptvprovider",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{
      url: siteConfig.ogImage,
      alt: `${siteConfig.name} - Premium IPTV Service`,
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

  return (
    <html lang="en" suppressHydrationWarning>
       <head>
          <Schema id="organization" schema={generateOrganizationSchema()} />
          <Schema id="website" schema={generateWebSiteSchema()} />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
          <script src="https://cdn.visitors.now/v.js" data-token="0a9ca441-3262-415a-a3ac-e06859feeeba" async></script>
        </head>
      <body className={cn(
        "font-body antialiased",
        inter.variable,
        outfit.variable
      )}>
        <ProgressBar />
        <Analytics />
        <script
            src="https://analytics.ahrefs.com/analytics.js"
            id="ahrefs-analytics"
            async
        ></script>
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
