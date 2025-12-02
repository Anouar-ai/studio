import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/site-data/footer";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your premier IPTV Provider for unlocking a world of entertainment. The most reliable choice for all your streaming needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Supported Apps</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.supportedLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p>{footerLinks.contact.address}</p>
              <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-primary">
                {footerLinks.contact.email}
              </a>
            </address>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IPTV Provider. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <Link href="#" aria-label="Follow us on Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Follow us on Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
