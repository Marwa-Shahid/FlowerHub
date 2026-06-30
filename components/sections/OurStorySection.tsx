'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { ArrowRight, Flower } from 'lucide-react';

function useCountUp(target: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (target - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration, start]);

  return { count, ref };
}

export default function OurStorySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -60 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 flex flex-col gap-6"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Grown with Love,<br />Delivered with Care
            </h2>
            <div className="flex flex-col gap-4 text-foreground/70 leading-relaxed">
              <p>
                At FlowerHub, we believe every petal tells a story. What began as a small passion project
                among a handful of flower enthusiasts has blossomed into a boutique floral atelier known
                for uncompromising artistry and freshness.
              </p>
              <p>
                We work directly with family-owned farms across the globe — from the tulip fields of
                Holland to the rose gardens of Ecuador — ensuring every stem is ethically sourced and
                hand-selected at peak bloom.
              </p>
              <p>
                Our master florists pour their hearts into every arrangement, blending color, texture,
                and fragrance to create living art that speaks louder than words.
              </p>
            </div>

            <div className="flex gap-8 md:gap-12 mt-2">
              {[
                { value: 10, suffix: 'K+', label: 'Happy Customers' },
                { value: 500, suffix: '+', label: 'Flower Varieties' },
                { value: 5, suffix: '\u2605', label: 'Average Rating' },
              ].map((stat, i) => {
                const { count, ref } = useCountUp(stat.value);
                return (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-primary leading-none">
                      {count}
                      <span className="text-accent">{stat.suffix}</span>
                    </span>
                    <span ref={ref} className="text-xs text-foreground/50 mt-1.5 whitespace-nowrap">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-2">
              <button className="flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-sm hover:shadow-md">
                Meet Our Florists
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 60 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 w-full"
          >
            <div className="relative w-full h-[500px] rounded-2xl bg-gradient-to-br from-[#FFE4EC] via-[#FFD6E4] to-[#FFC8DC] flex items-center justify-center overflow-hidden">
              <Flower className="w-40 h-40 text-white/40" strokeWidth={1} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
