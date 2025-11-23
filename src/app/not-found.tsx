
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { Home, Compass, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: Page Not Found | IPTV Provider',
};

export default function NotFound() {
  return (
    <>
        <head>
            <meta name="robots" content="noindex" />
        </head>
        <main className="flex min-h-[60vh] items-center py-16 sm:py-24">
            <Container>
                <div className="mx-auto max-w-lg text-center">
                    <p className="text-4xl font-bold text-primary sm:text-5xl">404</p>
                    <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Page Not Found
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Go Back to Homepage
                        </Link>
                    </Button>

                    <div className="mt-12">
                        <h2 className="text-lg font-semibold">Or try one of these pages:</h2>
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <Button asChild variant="outline">
                                <Link href="/pricing">
                                    <Compass className="mr-2 h-4 w-4" />
                                    View Pricing
                                </Link>
                            </Button>
                             <Button asChild variant="outline">
                                <Link href="/locations">
                                    <Compass className="mr-2 h-4 w-4" />
                                    Browse Locations
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="/faq">
                                    <HelpCircle className="mr-2 h-4 w-4" />
                                    Read FAQ
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    </>
  );
}
