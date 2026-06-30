'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ThemeToggle';
import { ShoppingCart, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/occasions', label: 'Occasions' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-primary/10 dark:border-b-white/20 bg-background/95 backdrop-blur-[2px] text-foreground"
          : "border-b border-white/10 bg-black/10 backdrop-blur-[2px] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-2xl font-bold tracking-tight ${
            isScrolled
              ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              : "text-white"
          }`}>
            FlowerHub
          </span>
          <div className="w-2 h-2 rounded-full bg-primary" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <ThemeToggle />
          <button className={`flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 ${
            isScrolled
              ? "bg-primary hover:bg-primary/90 text-white"
              : "bg-white hover:bg-white/90 text-zinc-900"
          }`}>
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart (0)</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-white">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-6 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-gray-800 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
