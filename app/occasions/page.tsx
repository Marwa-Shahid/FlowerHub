'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { occasions } from '@/lib/occasions';

const occasionsList = occasions;

export default function OccasionsPage() {
  return (
    <>
      {/* Occasions Hero */}
      <section className="relative w-full h-auto md:h-[40vh] min-h-[400px] md:min-h-[320px] flex flex-col md:flex-row items-stretch overflow-hidden bg-[#EFA089]">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center px-6 md:px-12 pt-20 md:pt-0">
          <div className="text-center md:text-left max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm tracking-[0.25em] uppercase text-white mb-3"
            >
              Perfect For Every Moment
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              Flowers for Every Occasion
            </motion.h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-52 md:h-full flex items-end justify-center overflow-hidden">
          <img
            src="/occasions-hero-mobile.png"
            alt="Flowers for Every Occasion"
            className="md:hidden w-full h-full object-contain object-bottom"
          />
          <img
            src="/occasions-hero.png"
            alt="Flowers for Every Occasion"
            className="hidden md:block w-full h-full object-contain object-bottom scale-125 translate-y-10"
          />
        </div>
      </section>

      {/* Occasions Grid */}
      <section className="w-full bg-white dark:bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-14">
          <div className="text-center max-w-2xl">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              No matter the occasion, we have the perfect arrangement. Each bouquet is handcrafted
              by our master florists using the freshest seasonal blooms sourced from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {occasionsList.map((occasion, i) => (
              <Link key={i} href={`/occasions/${occasion.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 top-0 h-[40%] p-6 flex flex-col justify-center" style={{ background: occasion.bgColor }}>
                  <h3 className="text-2xl font-bold text-gray-800 tracking-wide">{occasion.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{occasion.desc}</p>
                </div>
                <div className="absolute bottom-0 h-[60%] w-full">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-wrap gap-2 z-10">
                  {occasion.flowers.map((f, fi) => (
                    <span key={fi} className="text-xs px-3 py-1 rounded-full bg-white/30 text-white backdrop-blur-sm border border-white/30">{f}</span>
                  ))}
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-pink-50 to-rose-100 dark:bg-gray-900 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Raleway', sans-serif", color: '#BE185D' }}>Not Sure What to Choose?</h2>
          <p className="leading-relaxed max-w-lg dark:text-gray-200" style={{ color: '#000000' }}>
            Our floral experts are here to help you find the perfect arrangement for any occasion.
            Reach out and we will guide you every step of the way.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-base font-semibold text-white bg-primary hover:bg-primary/90 px-10 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-300">
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
