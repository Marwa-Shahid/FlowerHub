'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import { products, parsePrice } from '@/lib/products';

const categories = ['All', 'Roses', 'Tulips', 'Orchids', 'Lilies', 'Peonies', 'Seasonal'];

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState('default');

  function parsePrice(price: string) {
    return parseInt(price.replace(/PKR\s*|,/g, ''), 10);
  }

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeTab !== 'All') {
      result = result.filter(p => p.tab === activeTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }

    if (sortOrder === 'price-asc') {
      result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'price-desc') {
      result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return result;
  }, [activeTab, searchQuery, sortOrder]);

  return (
    <>
      {/* Shop Hero */}
      <section className="relative w-full h-auto md:h-[40vh] min-h-[400px] md:min-h-[320px] flex flex-col md:flex-row items-stretch overflow-hidden bg-[#E8A0B0]">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-start md:justify-center px-8 md:px-12 pt-20 md:pt-0">
          <div className="text-center md:text-left max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-2xl md:text-2xl lg:text-3xl font-light text-white tracking-wide"
            >
              Explore Our Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-2 leading-none text-white"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Premium Flowers
            </motion.p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-60 md:h-full flex items-end justify-center overflow-hidden px-4 md:pr-8">
          <img
            src="/shop-hero-flowers-mobile.png"
            alt="Premium Flowers"
            className="md:hidden w-full h-full object-contain object-bottom max-h-56"
          />
          <img
            src="/shop-hero-flowers.png"
            alt="Premium Flowers"
            className="hidden md:block w-full h-full object-contain object-center scale-100 lg:scale-110"
          />
        </div>
      </section>

      {/* Shop Content */}
      <section className="w-full bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 cursor-pointer ${
                    activeTab === cat
                      ? 'bg-primary text-white border-primary'
                      : 'border-primary/20 text-foreground/70 hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-primary/20 text-foreground/60">
                <Search className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm outline-none w-28 placeholder:text-foreground/30"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-primary/20 text-foreground/70 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filter
                </button>
                {showFilter && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-primary/10 rounded-xl shadow-xl z-50 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-foreground/70">Sort by</span>
                      <button onClick={() => setShowFilter(false)} className="cursor-pointer"><X className="w-3 h-3 text-foreground/50 hover:text-foreground" /></button>
                    </div>
                    <div className="flex flex-col gap-1">
                      {[
                        { value: 'default', label: 'Default' },
                        { value: 'price-asc', label: 'Price: Low to High' },
                        { value: 'price-desc', label: 'Price: High to Low' },
                      ].map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => { setSortOrder(opt.value); setShowFilter(false); }}
                          className={`text-xs px-3 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                            sortOrder === opt.value
                              ? 'bg-primary/10 text-primary font-semibold'
                              : 'text-foreground/70 hover:bg-primary/5'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-4 items-start">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <span className="text-4xl mb-4">🌸</span>
                <h3 className="text-lg font-semibold text-foreground/80 mb-1">No flowers found</h3>
                <p className="text-sm text-foreground/50">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              filteredProducts.map((product) => {
              const isFirst = product.id === 0;
              return (
              <Link key={product.id} href={`/shop/${product.id}`} className="block">{isFirst ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: product.id * 0.05 }}
                  className="group flex flex-col border border-primary/10 hover:border-primary/30 dark:border-white/20 dark:hover:border-white/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-background/50 p-3"
                >
                  <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFE4EE 0%, #FFC8DD 100%)' }}>
                    <img
                      src="/bouquet.png"
                      alt={product.name}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.15] transition-transform duration-[400ms]"
                      style={{
                        filter: 'drop-shadow(0 10px 20px rgba(233,30,140,0.3))',
                      }}
                    />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest">{product.category}</span>
                    </div>
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
              ) : (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: product.id * 0.05 }}
                  className="group flex flex-col border border-primary/10 hover:border-primary/30 dark:border-white/20 dark:hover:border-white/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-background/50 p-3"
                >
                  {product.id === 1 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)' }}>
                      <img src="/bouquet2.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 2 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8F4F8 0%, #D4EAF7 100%)' }}>
                      <img src="/bouquet3.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 3 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFF0F0 0%, #FFE4E4 100%)' }}>
                      <img src="/bouquet4.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 4 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #D4EDDA 100%)' }}>
                      <img src="/bouquet5.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 5 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFE4E8 0%, #FECDD3 100%)' }}>
                      <img src="/bouquet6.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 6 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFF8E7 0%, #FFF0C8 100%)' }}>
                      <img src="/bouquet7.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 7 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F0FFF4 0%, #DCFCE7 100%)' }}>
                      <img src="/bouquet8.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 8 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE8EF 100%)' }}>
                      <img src="/bouquet9.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 9 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF9C3 100%)' }}>
                      <img src="/bouquet10.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 10 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F0FFF4 0%, #DCFCE7 100%)' }}>
                      <img src="/bouquet11.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 11 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)' }}>
                      <img src="/bouquet12.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 12 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)' }}>
                      <img src="/bouquet13.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 13 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)' }}>
                      <img src="/bouquet14.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : product.id === 14 ? (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FDF4FF 0%, #FAE8FF 100%)' }}>
                      <img src="/bouquet15.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  ) : (
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' }}>
                      <img src="/bouquet16.png" alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-[400ms]" />
                    {product.tag && <span className="absolute top-3 right-3 z-10 text-[9px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#E91E8C]">{product.tag}</span>}
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest">{product.category}</span>
                    </div>
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
              )}
            </Link>
              );
            })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
