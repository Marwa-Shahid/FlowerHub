'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, X, Minus, Plus, ChevronRight, Shield, Truck, RotateCcw } from 'lucide-react';
import { products, getProductById, getRelatedProducts, getProductImage, getProductBackground } from '@/lib/products';

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const handleModalMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setPanStart(prev => ({ ...prev }));
  }, []);

  const handleModalMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setPan({ x: panStart.x + dx, y: panStart.y + dy });
  }, [isDragging, dragStart, panStart]);

  const handleModalMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isModalOpen]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <span className="text-5xl mb-4">🌷</span>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Product Not Found</h1>
        <p className="text-foreground/60 mb-6">The bouquet you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/shop" className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-xs text-foreground/50">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground/80">{product.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-square rounded-2xl overflow-hidden relative p-8"
              style={{ background: getProductBackground(product.id) }}
            >
              <img
                src={getProductImage(product.id)}
                alt={product.name}
                className="w-full h-full object-contain"
                style={{
                  filter: product.id === 0 ? 'drop-shadow(0 20px 40px rgba(233,30,140,0.3))' : undefined,
                }}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white dark:bg-white/20 dark:hover:bg-white/30 transition-colors z-10 cursor-pointer"
              >
                <Search className="w-4 h-4 text-foreground/60" />
              </button>
            </motion.div>
            {isModalOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/80 flex flex-col"
                onClick={() => setIsModalOpen(false)}
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-white/50 text-sm truncate pr-4">{product.name}</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-white/80 text-sm font-semibold">{modalZoom}x</span>
                    <button onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div
                  className="flex-1 flex items-center justify-center overflow-hidden"
                  onMouseDown={handleModalMouseDown}
                  onMouseMove={handleModalMouseMove}
                  onMouseUp={handleModalMouseUp}
                  onMouseLeave={handleModalMouseUp}
                >
                  <img
                    src={getProductImage(product.id)}
                    alt={product.name}
                    draggable={false}
                    className="max-w-[90vw] max-h-[75vh] object-contain"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${modalZoom})`,
                      transition: isDragging ? 'none' : 'transform 0.2s ease',
                      cursor: isDragging ? 'grabbing' : 'grab',
                    }}
                  />
                </div>
                <div className="flex items-center justify-center gap-6 px-6 py-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalZoom(Math.max(1, modalZoom - 0.5)); }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-white font-semibold text-sm min-w-[40px] text-center">{modalZoom}x</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalZoom(Math.min(4, modalZoom + 0.5)); }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            {product.tag && (
              <span className="self-start text-[10px] font-bold text-white px-3 py-1 rounded-full bg-[#E91E8C]">
                {product.tag}
              </span>
            )}

            {/* Category */}
            <span className="text-[11px] font-semibold text-primary/70 uppercase tracking-[0.2em]">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-3xl md:text-4xl font-black text-primary">
              {product.price}
            </div>

            {/* Description */}
            <p className="text-sm text-foreground/70 leading-relaxed">
              {product.desc}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-primary/10" />

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-foreground/70">Quantity</span>
              <div className="flex items-center gap-0 border border-primary/20 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-sm font-semibold text-foreground min-w-[40px] text-center border-x border-primary/10">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full py-4 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all duration-300 active:scale-[0.98] cursor-pointer">
              Add to Cart — {(() => {
                const numPrice = parseInt(product.price.replace(/PKR\s*|,/g, ''), 10);
                return `PKR ${(numPrice * quantity).toLocaleString()}`;
              })()}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                  { icon: Truck, label: 'Free Delivery', sub: 'On orders PKR 200+' },
                { icon: Shield, label: 'Fresh Guarantee', sub: '7-day freshness' },
                { icon: RotateCcw, label: 'Easy Returns', sub: 'Within 24 hours' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center p-3 rounded-xl bg-primary/5">
                  <Icon className="w-5 h-5 text-primary mb-1.5" />
                  <span className="text-[11px] font-semibold text-foreground">{label}</span>
                  <span className="text-[9px] text-foreground/50">{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-6 rounded-2xl border border-primary/10 dark:border-white/20 bg-background/50">
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Care Instructions</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✿</span>
                <span>Trim stems at a 45-degree angle every 2 days for optimal water absorption.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✿</span>
                <span>Change water daily and remove any leaves below the waterline to prevent bacterial growth.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✿</span>
                <span>Keep away from direct sunlight, heat sources, and ripening fruit to extend vase life.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✿</span>
                <span>Mist petals gently with water each morning for lasting freshness.</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-primary/10 dark:border-white/20 bg-background/50">
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Delivery Information</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✦</span>
                <span>Free delivery on all orders over PKR 2,500 within the city.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✦</span>
                <span>Same-day delivery available for orders placed before 2 PM.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✦</span>
                <span>Hand-delivered in our signature gift wrap with a personalized message card.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">✦</span>
                <span>Track your order in real-time via our delivery partner network.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Related Products */}
        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((rel) => (
                <Link key={rel.id} href={`/shop/${rel.id}`} className="group block">
                  <div
                    className="w-full aspect-square rounded-xl overflow-hidden mb-3 flex items-center justify-center"
                    style={{ background: getProductBackground(rel.id) }}
                  >
                    <img
                      src={getProductImage(rel.id)}
                      alt={rel.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-primary/70 uppercase tracking-widest">{rel.category}</span>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-0.5">{rel.name}</h3>
                  <span className="text-sm font-bold text-primary mt-1 block">{rel.price}</span>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </section>
    </div>
  );
}
