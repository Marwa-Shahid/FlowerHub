'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/flower-fields-hero.jpeg"
          alt="Flower fields"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.25em] uppercase text-white/80 mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
          >
            We'd Love to Hear from You
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-foreground/60 text-sm mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="px-4 py-3 text-sm rounded-xl border border-primary/20 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="px-4 py-3 text-sm rounded-xl border border-primary/20 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="px-4 py-3 text-sm rounded-xl border border-primary/20 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your floral needs..."
                    className="px-4 py-3 text-sm rounded-xl border border-primary/20 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer active:scale-95 shadow-sm hover:shadow-md self-start"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Right: Business Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Visit Our Studio</h2>
                <p className="text-foreground/60 text-sm mb-8">Come say hello at our flagship studio in the heart of the city.</p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { icon: MapPin, label: 'Address', value: '123 Bloom Street, Floral District, New York, NY 10001' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: Mail, label: 'Email', value: 'hello@flowerhub.com' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9AM – 7PM, Sun: 10AM – 5PM' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">{item.label}</span>
                      <p className="text-sm text-foreground/80 mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-56 rounded-2xl overflow-hidden relative">
                <Image
                  src="/flowerhub-studio.png"
                  alt="FlowerHub Studio — New York"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs text-white/80">FlowerHub Studio — New York</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
