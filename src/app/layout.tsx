
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


export const metadata: Metadata = {
  metadataBase: new URL('https://www.iptvprovider.me'),
  title: {
    default: 'Best IPTV Provider | Buy IPTV In USA, UK & Worldwide',
    template: '%s | IPTV Provider'
  },
  description: 'Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!',
  keywords: ['IPTV', 'IPTV Provider', 'buy IPTV', 'IPTV subscription', 'IPTV provider'],
  authors: [{ name: 'DigitalLizard' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.iptvprovider.me',
    siteName: 'IPTV Provider',
    title: "Best IPTV Provider | Buy IPTV In USA, UK & Worldwide",
    description: "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!",
    images: [{ url: "/og-image.jpg" }],
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
    title: "Best IPTV Provider | Buy IPTV In USA, UK & Worldwide",
    description: "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!",
    images: ["/twitter-image.jpg"],
  },
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
      "url": "https://www.iptvprovider.me/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.iptvprovider.me/search?q={search_term_string}",
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
          <link rel="manifest" href="/manifest.json" />
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
