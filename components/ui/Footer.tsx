'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const linkColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Arrangements', href: '/shop' },
      { label: 'Roses', href: '/shop' },
      { label: 'Seasonal', href: '/shop' },
      { label: 'Same-Day Delivery', href: '/shop' },
      { label: 'Gift Cards', href: '/shop' },
    ],
  },
  {
    title: 'Occasions',
    links: [
      { label: 'Birthday', href: '/occasions' },
      { label: 'Wedding', href: '/occasions' },
      { label: 'Anniversary', href: '/occasions' },
      { label: 'Sympathy', href: '/occasions' },
      { label: 'Just Because', href: '/occasions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Delivery Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Track Order', href: '#' },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="mt-auto border-t border-primary/10 dark:border-t-white/20 bg-background/90 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FlowerHub
              </span>
              <div className="w-2 h-2 rounded-full bg-primary" />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Premium floral arrangements crafted with love and delivered fresh to your door.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 transition-all duration-200" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 transition-all duration-200" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 transition-all duration-200" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">{col.title}</span>
                <div className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <Link key={link.label} href={link.href} className="text-sm text-foreground/60 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:max-w-xs w-full">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Newsletter</span>
            <p className="text-sm text-foreground/60">Get 10% off your first order and exclusive floral inspiration.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 text-sm rounded-full border border-primary/20 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-primary/10 dark:border-t-white/20 text-xs text-foreground/40">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} FlowerHub. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-primary fill-primary" />
            <span>by FlowerHub</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
