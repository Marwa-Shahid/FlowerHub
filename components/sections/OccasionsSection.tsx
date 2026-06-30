'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Gift, Heart, Gem, Flower2, Sparkles, Smile, ArrowRight } from 'lucide-react';

export default function OccasionsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#FFF0F5] dark:bg-[#1a0a10] py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">Perfect For Every Moment</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Shop by Occasion</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="block w-16 h-px bg-primary/30" />
            <svg viewBox="0 0 20 20" width="16" height="16" className="text-primary shrink-0">
              <defs>
                <linearGradient id="flowerDiv" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E91E8C" />
                  <stop offset="100%" stopColor="#FF6B9D" />
                </linearGradient>
              </defs>
              <circle cx="10" cy="6" r="3.5" fill="url(#flowerDiv)" />
              <circle cx="6.5" cy="10" r="3.5" fill="url(#flowerDiv)" />
              <circle cx="13.5" cy="10" r="3.5" fill="url(#flowerDiv)" />
              <circle cx="10" cy="14" r="3.5" fill="url(#flowerDiv)" />
              <circle cx="10" cy="10" r="2" fill="#FF6B9D" />
            </svg>
            <span className="block w-16 h-px bg-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[
            { icon: Gift, name: 'Birthday', desc: 'Make their day unforgettable', bg: '#FFE4E9', to: '#FFD6E4' },
            { icon: Heart, name: 'Wedding', desc: 'Celebrate timeless love', bg: '#FFE0EC', to: '#FFCCE0' },
            { icon: Gem, name: 'Anniversary', desc: 'Cherish every moment', bg: '#FFDCE8', to: '#FFC8DC' },
            { icon: Flower2, name: 'Sympathy', desc: 'Express your heartfelt care', bg: '#FFE8F0', to: '#FFD4E8' },
            { icon: Sparkles, name: 'Thank You', desc: 'Show your gratitude', bg: '#FFE4F0', to: '#FFD0E4' },
            { icon: Smile, name: 'Just Because', desc: 'A sweet surprise for them', bg: '#FFECF4', to: '#FFD8EC' },
          ].map((occasion, i) => (
            <motion.div
              key={i}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group relative flex flex-col items-center text-center gap-4 p-8 pt-10 rounded-3xl cursor-pointer overflow-hidden border border-primary/5 hover:border-primary/20 dark:border-white/20 dark:hover:border-white/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              style={{ background: `linear-gradient(to bottom right, ${occasion.bg}, ${occasion.to})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-primary shadow-sm z-10">
                <occasion.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground z-10">{occasion.name}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed z-10">{occasion.desc}</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-10 mt-1">
                Shop Now <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
