'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const indicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden z-0 bg-black">
      <motion.div
        style={{ scale: shouldReduceMotion ? 1 : videoScale }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      >
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 pointer-events-none">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-sm tracking-[0.25em] uppercase text-white/90 mb-3"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          Delicate flowers. Timeless beauty.
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="font-serif text-white leading-[1.1] font-semibold"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          Bloom with Grace
        </motion.h1>

        <motion.button
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          onClick={() => router.push('/shop')}
          className="pointer-events-auto mt-8 px-10 py-[14px] rounded-[50px] text-white border-2 border-solid border-white/80 bg-transparent hover:bg-[#E91E8C] hover:border-[#E91E8C] transition-all duration-300 cursor-pointer active:scale-95 text-base font-medium"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
        >
          Shop Now
        </motion.button>
      </div>

      <motion.div
        style={{ opacity: shouldReduceMotion ? 1 : indicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-20 text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-white/70">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : {
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-8 h-8 stroke-[1.5]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
