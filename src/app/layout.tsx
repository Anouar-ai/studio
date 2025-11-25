
import type { Metadata } from "next";
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
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});


const defaultTitle = "Best IPTV Provider 2026 | Buy IPTV USA, UK & Worldwide - 24K+ Channels";
const defaultDescription = "Buy IPTV from the #1 rated provider! Get 24,000+ live channels, HD/4K streaming, VOD movies & sports. Affordable IPTV subscription for USA, UK & worldwide. 24/7 support. Try now!";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iptvprovider.me'),
  title: {
    default: defaultTitle,
    template: '%s | IPTV Provider'
  },
  description: defaultDescription,
  keywords: ['best IPTV provider', 'buy IPTV', 'IPTV subscription', 'IPTV USA', 'IPTV UK', 'IPTV service', 'premium IPTV', 'cheap IPTV', 'IPTV channels', 'live TV streaming'],
  authors: [{ name: 'IPTV Provider' }],
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.iptvprovider.me',
    siteName: 'IPTV Provider',
    title: "Best IPTV Provider 2026 | 24K+ Channels | USA, UK & Worldwide",
    description: "Stream 24,000+ live channels in HD/4K. Movies, sports, news & more. Affordable plans. Subscribe to the best IPTV service today!",
    images: [
      { 
        url: `/api/og?title=${encodeURIComponent(defaultTitle)}`,
        width: 1200,
        height: 630,
        alt: 'IPTV Provider - Best Streaming Service'
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
   twitter: {
    card: "summary_large_image",
    site: "@iptvprovider",
    creator: "@iptvprovider",
    title: "Best IPTV Provider 2026 | 24K+ Channels",
    description: "Stream 24,000+ live channels in HD/4K. Movies, sports & more. Subscribe now!",
    images: [`/api/og?title=${encodeURIComponent(defaultTitle)}`],
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV Provider",
    "url": "https://www.iptvprovider.me",
    "logo": "https://www.iptvprovider.me/logo.png",
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
      "name": "IPTV Provider",
      "alternateName": ["IPTV Provider", "best iptv"],
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.iptvprovider.me/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.iptvprovider.me/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
  }


  return (
    <html lang="en" suppressHydrationWarning>
       <head>
          <meta name="google-site-verification" content="WayUe3dolb9UPFpMPHfTYy8CS-T1RkpFYqGvAkW5XqI" />
          <meta name="msvalidate.01" content="CEC29E9356C1B062CC9637E64D68C778" />
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
      <body className={cn("font-body antialiased", inter.variable, outfit.variable)}>
        <ProgressBar />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ContactSheet />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
