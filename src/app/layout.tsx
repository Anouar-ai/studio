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
  metadataBase: new URL('https://yoursite.com'),
  title: "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
  description: "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
    description: "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
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
    "name": "IPTV Service",
    "url": "https://yoursite.com",
    "logo": "https://yoursite.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "Customer Service"
    }
  };

  const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://yoursite.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yoursite.com/search?q={search_term_string}",
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
