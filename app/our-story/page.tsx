'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Flower, ArrowRight } from 'lucide-react';

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
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
      setCount(Math.floor(easeOut * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return { count, ref };
}

const team = [
  { initials: 'EM', name: 'Elena Martinez', role: 'Head Florist', color: 'from-[#E91E8C] to-[#FF6B9D]', quote: 'Every stem I touch is a little love letter to someone.' },
  { initials: 'CA', name: 'Celeste Airi', role: 'Creative Director', color: 'from-[#FF6B9D] to-[#E91E8C]', quote: 'Flowers don\'t need words. They just speak.' },
  { initials: 'DL', name: 'Daniel Liu', role: 'Lead Botanist', color: 'from-[#D4145A] to-[#FBB03B]', quote: 'I arrange flowers the way I wish people arranged their feelings — carefully.' },
  { initials: 'RK', name: 'Ryan Kim', role: 'Operations Manager', color: 'from-[#FBB03B] to-[#D4145A]', quote: 'Behind every fresh delivery is a story I\'m proud to be part of.' },
];


export default function OurStoryPage() {
  const shouldReduceMotion = useReducedMotion();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <>
      {/* Our Story Hero */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/flowers-field.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.25em] uppercase text-white/80 mb-3"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
          >
            Grown with Love
          </motion.h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full bg-background py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-12 h-px bg-primary/30" />
            <Flower className="w-5 h-5 text-primary" />
            <span className="block w-12 h-px bg-primary/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our mission is simple — bring the beauty of nature into every home.
          </h2>
          <p className="text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            At FlowerHub, we believe every petal tells a story. What began as a small passion project
            among a handful of flower enthusiasts has blossomed into a boutique floral atelier known
            for uncompromising artistry and freshness. We work directly with family-owned farms across
            the globe — from the tulip fields of Holland to the rose gardens of Ecuador — ensuring
            every stem is ethically sourced and hand-selected at peak bloom.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-[#FFF0F5] dark:bg-[#1a0a10] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { value: 12, suffix: 'K+', label: 'Happy Customers' },
              { value: 500, suffix: '+', label: 'Flower Varieties' },
              { value: 8, suffix: 'K+', label: 'Orders Delivered' },
              { value: 98, suffix: '%', label: 'Satisfaction Rate' },
            ].map((stat, i) => {
              const { count, ref } = useCountUp(stat.value);
              return (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-black text-primary leading-none">
                    {count}<span className="text-accent">{stat.suffix}</span>
                  </span>
                  <span ref={ref} className="text-sm text-foreground/50 mt-2">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="w-full bg-[#FFF5F8] dark:bg-[#0D0D0D] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Journey</h2>
            <p className="text-foreground/60 mt-3">From a tiny kitchen to thousands of doorsteps.</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-primary/40 md:-translate-x-px" />

            <div className="space-y-12 md:space-y-16">
              {[
                { year: '2018', title: 'It started in a tiny kitchen', text: 'Three flower-obsessed friends began wrapping bouquets for neighbors. No website, no logo — just fresh flowers and word of mouth.' },
                { year: '2019', title: 'Our first real customer', text: 'A stranger found us on Instagram and ordered a birthday bouquet. We were so excited we delivered it personally.' },
                { year: '2020', title: 'Flowers healed something', text: 'During lockdown, people needed beauty more than ever. We delivered over 2,000 bouquets that year — many to strangers cheering each other up.' },
                { year: '2021', title: 'We got a real home', text: 'Moved into our first studio space. Hired our first florist. Cried a little.' },
                { year: '2022', title: 'Growing wild', text: 'Launched FlowerHub.com and shipped nationwide for the first time. Orders came from cities we\'d never even visited.' },
                { year: '2023', title: 'Community roots', text: 'Partnered with 12 local farms. Every stem now has a story and a farmer behind it.' },
                { year: '2024', title: 'Still blooming', text: '12,000+ happy customers and counting. Still hand-wrapping every bouquet with the same love as that first kitchen order.' },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="inline-block">
                      <span className="block text-4xl md:text-5xl leading-none" style={{ fontFamily: "'Great Vibes', cursive", color: '#E91E8C' }}>{milestone.year}</span>
                      <h3 className="text-lg font-bold text-foreground mt-1">{milestone.title}</h3>
                      <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{milestone.text}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-[#0D0D0D] shadow-sm md:-translate-x-1.5 top-1.5 z-10" />

                  <div className="md:hidden pl-10 w-full">
                    <span className="block text-3xl leading-none" style={{ fontFamily: "'Great Vibes', cursive", color: '#E91E8C' }}>{milestone.year}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{milestone.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full bg-[#FFF0F5] dark:bg-[#1a0a10] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-foreground/70 mt-3 max-w-lg mx-auto">The passionate people behind every beautiful arrangement.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, i) => {
              const avatarMap: Record<string, string> = {
                'Elena Martinez': '/elena-martinez.png',
                'Celeste Airi': '/celeste-airi.png',
                'Daniel Liu': '/daniel-liu.png',
                'Ryan Kim': '/ryan-kim.png',
              };
              return (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group perspective h-64 md:h-72"
                  style={{ perspective: '1000px' }}
                  onClick={() => setFlippedCard(flippedCard === i ? null : i)}
                  onMouseEnter={() => setFlippedCard(i)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: flippedCard === i ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-primary/10 dark:border-white/20 p-4"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img src={avatarMap[member.name]} alt={member.name} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top shadow-md" />
                      <div className="text-center">
                        <h4 className="font-bold text-foreground text-sm md:text-base">{member.name}</h4>
                        <p className="text-xs text-foreground/50">{member.role}</p>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700 p-5 shadow-md"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <h4 className="font-bold text-gray-800 dark:text-white text-center mb-3">{member.name}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-100 text-center leading-relaxed italic">"{member.quote}"</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
              Join Our Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
