
import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { allCountries } from '@/lib/countries';
import { FlagIcon } from '@/components/shared/FlagIcon';
import SemanticContent from '@/components/shared/SemanticContent';
import { getLocationsPageData } from '@/lib/data/locations-page';
import { Schema } from '@/components/shared/Schema';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';

export function generateMetadata(): Metadata {
    const title = "IPTV Provider Service Locations | Available Worldwide";
    const description = "Our IPTV Provider is available in over 100 countries worldwide. Find your country and get the best IPTV streaming service for your region.";
    
    return generatePageMetadata({
        title,
        description,
        canonical: "/locations",
    });
}

export default async function LocationsPage() {
    const { semanticContent, breadcrumbSchema } = await getLocationsPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <SemanticContent 
                primaryEntity={semanticContent.primaryEntity}
                relatedEntities={semanticContent.relatedEntities}
                semanticClusters={semanticContent.semanticClusters}
                contextualKeywords={semanticContent.contextualKeywords}
            />
            <main className="py-16 sm:py-24">
                <Container>
                     <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                      <ol className="flex items-center gap-2">
                        <li>
                          <Link href="/" className="hover:text-primary">
                            Home
                          </Link>
                        </li>
                        <li>/</li>
                        <li>
                            Service Locations
                        </li>
                      </ol>
                    </nav>
                    <div className="text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            IPTV Provider Service Locations
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            We offer our premium IPTV Provider in over 100 countries. Find your country below to get started with the best streaming service in your region.
                        </p>
                    </div>

                    <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {allCountries.map(country => (
                            <li key={country.id}>
                                <Link 
                                    href={`/country/${country.id}`}
                                    className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                                >
                                    <FlagIcon countryCode={country.code} countryName={country.name} className="h-5 w-5 flex-shrink-0" />
                                    <span className="font-medium">{country.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </main>
        </>
    );
}
