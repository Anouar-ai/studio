"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/Logo';
import { navLinks } from '@/lib/site-data/nav';
import { ThemeToggle } from './ThemeToggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Logo />
        <nav className="mt-8 flex flex-1 flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-2 text-lg font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>))}
        </nav>
        <div className="mt-auto flex justify-center">
            <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
