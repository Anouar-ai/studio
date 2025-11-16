import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { MobileNav } from '@/components/shared/MobileNav';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { navLinks } from '@/lib/site';
import { SiWhatsapp } from 'react-icons/si';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center">
          <Logo />
          <nav className="ml-10 hidden items-center space-x-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden lg:flex">
                <ThemeToggle />
            </div>
            <Button asChild>
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp />
                WhatsApp
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
