'use client';

import React, { useEffect } from 'react';
import { motion, useReducedMotion, useAnimationControls } from 'framer-motion';

const testimonials = [
  { initials: 'SJ', name: 'Sarah J.', title: 'Bride-to-Be', text: 'Absolutely stunning arrangements! They made my wedding day even more magical with the most beautiful floral decorations I could have ever imagined.' },
  { initials: 'MK', name: 'Michael K.', title: 'Frequent Buyer', text: 'I send flowers to my wife every month and FlowerHub never disappoints. The freshness lasts over two weeks — simply incredible quality and care.' },
  { initials: 'AL', name: 'Alicia L.', title: 'Interior Designer', text: 'As a designer, I am very particular about aesthetics. FlowerHub consistently delivers museum-worthy arrangements that elevate any space beautifully.' },
];

function MarqueeRow({ dir, reduceMotion }: { dir: number; reduceMotion: boolean | null }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (reduceMotion !== true) {
      controls.start({
        x: dir === -1 ? ['0%', '-50%'] : ['-50%', '0%'],
        transition: { repeat: Infinity, ease: 'linear', duration: 40 },
      });
    }
  }, [controls, dir, reduceMotion]);

  return (
    <motion.div
      className="flex gap-6 px-3"
      animate={controls}
      onHoverStart={() => controls.stop()}
      onHoverEnd={() => {
        controls.start({
          x: dir === -1 ? ['0%', '-50%'] : ['-50%', '0%'],
          transition: { repeat: Infinity, ease: 'linear', duration: 40 },
        });
      }}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <div
          key={i}
          className="shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl border border-primary/10 dark:border-white/20 bg-white dark:bg-[#1a0a10] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" className="text-primary/40 fill-current shrink-0">
            <path d="M0 0h24v24h-24z" fill="none" />
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
          <p className="text-sm italic font-serif leading-relaxed text-foreground/80">{t.text}</p>
          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shrink-0">
              {t.initials}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">{t.name}</span>
              <span className="text-xs text-foreground/50">{t.title}</span>
            </div>
            <div className="flex gap-0.5 ml-auto">
              {[...Array(5)].map((_, si) => (
                <svg key={si} viewBox="0 0 20 20" width="14" height="14" className="text-primary fill-current">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.5.91-5.33L2.27 6.62l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <pattern id="floral" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="50" r="20" fill="currentColor" />
              <circle cx="70" cy="80" r="20" fill="currentColor" />
              <circle cx="130" cy="80" r="20" fill="currentColor" />
              <circle cx="100" cy="110" r="20" fill="currentColor" />
              <circle cx="100" cy="80" r="10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center px-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">What Our Customers Say</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Loved by Thousands</h2>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" width="20" height="20" className="text-primary fill-current">
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.5.91-5.33L2.27 6.62l5.34-.78L10 1z" />
              </svg>
            ))}
          </div>
        </div>

        <MarqueeRow dir={-1} reduceMotion={shouldReduceMotion} />
        <MarqueeRow dir={1} reduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}
