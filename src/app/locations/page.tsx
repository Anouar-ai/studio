
import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { allCountries } from '@/lib/countries';
import { FlagIcon } from '@/components/shared/FlagIcon';
import SemanticContent from '@/components/shared/SemanticContent';

export const metadata: Metadata = {
    title: "IPTV Provider Service Locations | Available Worldwide",
    description: "Our IPTV Provider is available in over 100 countries worldwide. Find your country and get the best IPTV streaming service for your region.",
    alternates: {
        canonical: "/locations",
    }
};

export default function LocationsPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.iptvprovider.me/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Locations",
                "item": "https://www.iptvprovider.me/locations"
            }
        ]
    };
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <SemanticContent 
                topic="IPTV Service Locations"
                primaryEntity="IPTV Service Locations"
                relatedEntities={["IPTV Provider", "Global Streaming", "Country-specific IPTV", "VPN for IPTV", "International Channels"]}
                semanticClusters={[
                    ["Regional IPTV", "IPTV USA", "IPTV UK", "IPTV Canada", "IPTV Europe"],
                    ["Streaming Quality", "HD Streaming", "4K IPTV", "Anti-Freeze Technology"],
                    ["Device Compatibility", "Fire TV Stick", "Android IPTV", "Smart TV", "iOS IPTV"],
                    ["Content Access", "Geo-restrictions", "VPN Service", "Live Sports", "International Movies"]
                ]}
                contextualKeywords={["best iptv provider", "iptv subscription", "worldwide channels", "live tv streaming", "iptv for sports"]}
            />
            <main className="py-16 sm:py-24">
                <Container>
                    <div className="text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            Available Worldwide
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            We offer our premium IPTV Provider in over 100 countries. Find your country below to get started with the best streaming service in your region.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {allCountries.map(country => (
                            <Link 
                                key={country.id}
                                href={`/country/${country.id}`}
                                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                            >
                                <FlagIcon countryCode={country.code} className="h-5 w-5 flex-shrink-0" />
                                <span className="font-medium">{country.name}</span>
                            </Link>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}
