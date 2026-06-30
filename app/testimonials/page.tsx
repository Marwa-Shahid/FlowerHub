'use client';

import React from 'react';
import { motion } from 'framer-motion';

const allTestimonials = [
  { avatar: 'https://i.pravatar.cc/150?img=1', name: 'Sarah J.', title: 'Bride-to-Be', rating: 5, text: 'Absolutely stunning arrangements! They made my wedding day even more magical with the most beautiful floral decorations I could have ever imagined. Every guest complimented the flowers.' },
  { avatar: 'https://i.pravatar.cc/150?img=3', name: 'Michael K.', title: 'Frequent Buyer', rating: 5, text: 'I send flowers to my wife every month and FlowerHub never disappoints. The freshness lasts over two weeks — simply incredible quality and care. Their subscription service is a game-changer.' },
  { avatar: 'https://i.pravatar.cc/150?img=5', name: 'Alicia L.', title: 'Interior Designer', rating: 5, text: 'As a designer, I am very particular about aesthetics. FlowerHub consistently delivers museum-worthy arrangements that elevate any space beautifully. My clients love them.' },
  { avatar: 'https://i.pravatar.cc/150?img=7', name: 'Rachel J.', title: 'Event Planner', rating: 5, text: 'Working with FlowerHub for corporate events has been a dream. They understand scale, color palettes, and deadlines. Professional, creative, and incredibly reliable.' },
  { avatar: 'https://i.pravatar.cc/150?img=8', name: 'David T.', title: 'Husband & Dad', rating: 5, text: 'Saved me multiple times with last-minute anniversary and birthday orders. The same-day delivery is a lifesaver, and the quality is always top-notch. Highly recommend.' },
  { avatar: 'https://i.pravatar.cc/150?img=9', name: 'Priya W.', title: 'Garden Enthusiast', rating: 5, text: 'I have been ordering plants and flowers for years. FlowerHub has the healthiest plants and the most unique varieties. Their plant care tips are an added bonus.' },
  { avatar: 'https://i.pravatar.cc/150?img=11', name: 'Carlos M.', title: 'Restaurant Owner', rating: 5, text: 'We have FlowerHub weekly arrangements in our restaurant. They add the perfect touch of elegance to the dining experience. Our customers often ask where we get them.' },
  { avatar: 'https://i.pravatar.cc/150?img=12', name: 'Lisa K.', title: 'Mother of the Bride', rating: 5, text: 'From the consultation to the delivery, everything was flawless. The floral arrangements for my daughter wedding were breathtaking. Thank you for making it so special.' },
  { avatar: 'https://i.pravatar.cc/150?img=13', name: 'Olivia N.', title: 'Loyal Customer', rating: 5, text: 'I have been a FlowerHub subscriber for over a year now. Every delivery feels like a gift. The flowers are always fresh, beautifully arranged, and last for weeks.' },
  { avatar: 'https://i.pravatar.cc/150?img=14', name: 'Emily R.', title: 'Corporate Client', rating: 5, text: 'Our office lobby has never looked better. FlowerHub weekly arrangements impress every client who walks in. The team is professional and the flowers are always stunning.' },
  { avatar: 'https://i.pravatar.cc/150?img=15', name: 'James W.', title: 'Groom', rating: 5, text: 'The boutonnieres and centerpieces for our wedding were absolutely perfect. FlowerHub captured our vision exactly and delivered beyond expectations. Could not have asked for more.' },
  { avatar: 'https://i.pravatar.cc/150?img=16', name: 'Sofia P.', title: 'Boutique Owner', rating: 5, text: 'I feature FlowerHub arrangements in my storefront and they draw customers in constantly. The unique combinations and fresh blooms make my shop look inviting and elegant.' },
  { avatar: 'https://i.pravatar.cc/150?img=17', name: 'Liam C.', title: 'Regular Customer', rating: 5, text: 'Ordered birthday flowers for my mother and she cried happy tears. The arrangement was even more beautiful than the photos online. FlowerHub has earned a customer for life.' },
  { avatar: 'https://i.pravatar.cc/150?img=18', name: 'Emma B.', title: 'Party Planner', rating: 5, text: 'FlowerHub handled the floral decor for our annual gala and it was breathtaking. Hundreds of guests were amazed. Their team is creative, punctual, and a joy to work with.' },
  { avatar: 'https://i.pravatar.cc/150?img=19', name: 'Noah S.', title: 'Devoted Son', rating: 5, text: 'Sent my mom a Mother Day bouquet and she said it was the most beautiful she had ever received. The arrangement lasted nearly three weeks. Thank you, FlowerHub.' },
  { avatar: 'https://i.pravatar.cc/150?img=20', name: 'Mia T.', title: 'New Mom', rating: 5, text: 'The baby shower flowers were absolutely dreamy. FlowerHub created the perfect pastel arrangements that matched our theme exactly. Everyone kept asking who did the flowers.' },
  { avatar: 'https://i.pravatar.cc/150?img=21', name: 'Ethan G.', title: 'Small Business Owner', rating: 5, text: 'Having FlowerHub plants in my café has transformed the ambiance. Customers love the greenery and often ask to buy them. Great quality and wonderful service.' },
  { avatar: 'https://i.pravatar.cc/150?img=22', name: 'Isabella R.', title: 'Bride', rating: 5, text: 'My engagement party flowers were a fairytale come true. FlowerHub listened to every detail and created arrangements that took my breath away. Absolutely magical experience.' },
  { avatar: 'https://i.pravatar.cc/150?img=23', name: 'Lucas D.', title: 'Chef', rating: 5, text: 'The floral centerpieces in our dining room elevate the entire dining experience. FlowerHub understands the restaurant aesthetic and delivers consistently elegant designs.' },
  { avatar: 'https://i.pravatar.cc/150?img=24', name: 'Ava M.', title: 'Teacher', rating: 5, text: 'My students pooled together to send me flowers and I was blown away by the quality. The arrangement was vibrant, fresh, and lasted through two weeks of classroom joy.' },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Testimonials Hero */}
      <section className="relative w-full min-h-[320px] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pb-12 md:pb-0 pt-20 md:pt-0" style={{ backgroundColor: '#C8A2C8' }}>
        <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
        <div className="relative z-10 px-6 md:w-1/2 flex md:block flex-col items-center justify-center text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.25em] uppercase text-white mb-3"
          >
            What Our Customers Say
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-4xl md:text-7xl font-bold text-white"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Loved by Thousands
          </motion.h1>
        </div>
        <div className="relative z-10 self-center md:self-end">
          <img src="/bicycle-mobile.png" alt="FlowerHub delivery bike" className="md:hidden w-48 object-contain drop-shadow-none" />
          <img src="/flower-bike.png" alt="FlowerHub delivery bike" className="hidden md:block w-80 object-contain drop-shadow-none" />
        </div>
      </section>

      {/* Testimonials Marquee */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes rowWave1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes rowWave2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .marquee-row-left {
          animation: marquee-left 90s linear infinite;
        }
        .marquee-row-right {
          animation: marquee-right 110s linear infinite;
        }
        .marquee-container {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>
      <section className="w-full bg-background py-20 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-row-left w-max mb-8">
            <div style={{ animation: 'rowWave1 4s ease-in-out infinite' }}>
              <div className="flex gap-6">
                {[...allTestimonials, ...allTestimonials].map((t, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-primary/10 dark:border-white/20 bg-white dark:bg-[#1a0a10] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 w-[340px] shrink-0 hover:scale-105"
                    style={{ animation: `cardFloat 6s ease-in-out infinite`, animationDelay: `${(i % 20) * 0.3}s` }}
                  >
                    <svg viewBox="0 0 24 24" width="28" height="28" className="text-primary/40 fill-current shrink-0">
                      <path d="M0 0h24v24h-24z" fill="none" />
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                    <p className="text-sm italic font-serif leading-relaxed text-foreground/80">{t.text}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">{t.name}</span>
                        <span className="text-xs text-foreground/50">{t.title}</span>
                      </div>
                      <div className="flex gap-0.5 ml-auto">
                        {[...Array(t.rating)].map((_, si) => (
                          <svg key={si} viewBox="0 0 20 20" width="14" height="14" className="text-primary fill-current">
                            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.5.91-5.33L2.27 6.62l5.34-.78L10 1z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="marquee-row-right w-max">
            <div style={{ animation: 'rowWave2 4s ease-in-out infinite 2s' }}>
              <div className="flex gap-6">
                {[...allTestimonials, ...allTestimonials].map((t, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-primary/10 dark:border-white/20 bg-white dark:bg-[#1a0a10] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 w-[340px] shrink-0 hover:scale-105"
                    style={{ animation: `cardFloat 6s ease-in-out infinite`, animationDelay: `${(i % 20) * 0.3}s` }}
                  >
                    <svg viewBox="0 0 24 24" width="28" height="28" className="text-primary/40 fill-current shrink-0">
                      <path d="M0 0h24v24h-24z" fill="none" />
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                    <p className="text-sm italic font-serif leading-relaxed text-foreground/80">{t.text}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">{t.name}</span>
                        <span className="text-xs text-foreground/50">{t.title}</span>
                      </div>
                      <div className="flex gap-0.5 ml-auto">
                        {[...Array(t.rating)].map((_, si) => (
                          <svg key={si} viewBox="0 0 20 20" width="14" height="14" className="text-primary fill-current">
                            <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.5.91-5.33L2.27 6.62l5.34-.78L10 1z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
