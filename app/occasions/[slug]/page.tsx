'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getOccasionBySlug } from '@/lib/occasions';
import { products, getProductImage, getProductBackground } from '@/lib/products';

/* ── Per-occasion hero gradients ─────────────────────────────────────── */
const heroGradients: Record<string, string> = {
  birthday:       'from-pink-400 via-purple-300 to-blue-400',
  wedding:        'from-pink-300 via-pink-200 to-rose-100',
  anniversary:    'from-red-400 via-rose-300 to-amber-200',
  sympathy:       'from-slate-300 via-blue-200 to-indigo-200',
  'thank-you':    'from-yellow-300 via-orange-200 to-rose-200',
  'just-because': 'from-green-300 via-teal-200 to-cyan-200',
};

const heroTextColor: Record<string, string> = {
  birthday:       'text-white',
  wedding:        'text-white',
  anniversary:    'text-white',
  sympathy:       'text-slate-800',
  'thank-you':    'text-orange-900',
  'just-because': 'text-teal-900',
};

const heroSubColor: Record<string, string> = {
  birthday:       'text-purple-100',
  wedding:        'text-rose-700',
  anniversary:    'text-pink-100',
  sympathy:       'text-slate-600',
  'thank-you':    'text-orange-800',
  'just-because': 'text-teal-800',
};

export default function OccasionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const occasion = getOccasionBySlug(slug);

  if (!occasion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 pt-20">
        <h1 className="font-serif text-4xl text-foreground">Occasion Not Found</h1>
        <p className="text-foreground/60">The occasion you are looking for does not exist.</p>
        <Link href="/occasions" className="text-primary hover:underline font-medium">Browse all occasions</Link>
      </div>
    );
  }

  const gradient   = heroGradients[slug]  ?? 'from-pink-400 via-purple-300 to-blue-400';
  const titleColor = heroTextColor[slug]  ?? 'text-white';
  const subColor   = heroSubColor[slug]   ?? 'text-white/80';

  // Filter real products by occasion slug
  const occasionProducts = products.filter(p => p.occasion === slug);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className={`w-full pt-20 pb-14 bg-gradient-to-r ${gradient}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className={`text-6xl md:text-7xl font-bold ${titleColor}`} style={{ fontFamily: "'Great Vibes', cursive" }}>{occasion.name}</h1>
              <p className={`${subColor} mt-4 text-lg leading-relaxed`}>{occasion.desc}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Products */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Recommended Flowers</h2>

          {occasionProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-4xl mb-4">🌸</span>
              <h3 className="text-lg font-semibold text-foreground/80 mb-1">No flowers found for this occasion</h3>
              <p className="text-sm text-foreground/50">Check back soon — we're adding more arrangements!</p>
              <Link href="/shop" className="mt-4 text-primary hover:underline font-medium text-sm">Browse all flowers</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-4 items-start">
              {occasionProducts.map((product, i) => (
                <Link key={product.id} href={`/shop/${product.id}`} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="group flex flex-col border border-primary/10 hover:border-primary/30 dark:border-white/20 dark:hover:border-white/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-background/50 p-3"
                  >
                    {/* Product image */}
                    <div
                      className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center"
                      style={{ background: getProductBackground(product.id) }}
                    >
                      <img
                        src={getProductImage(product.id)}
                        alt={product.name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]"
                      />
                      {product.tag && (
                        <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Product info */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest">{product.category}</span>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2">{product.desc}</p>
                      <div className="flex items-center justify-between pt-3 mt-auto border-t border-primary/5 dark:border-t-white/20">
                        <span className="text-base font-black text-primary">{product.price}</span>
                        <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors cursor-pointer">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
