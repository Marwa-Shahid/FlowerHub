'use client';

import React from 'react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
