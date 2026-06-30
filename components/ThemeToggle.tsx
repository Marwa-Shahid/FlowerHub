'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '../app/providers';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-solid border-primary/20 bg-background/50 backdrop-blur-md" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-solid border-primary/20 bg-background/50 hover:bg-primary/10 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 overflow-hidden"
      aria-label={`Switch to ${theme === 'LIGHT' ? 'dark' : 'light'} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, rotate: 45, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -20, rotate: -45, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute text-primary flex items-center justify-center"
        >
          {theme === 'LIGHT' ? (
            <Sun className="w-5 h-5 fill-current stroke-current" />
          ) : (
            <Moon className="w-5 h-5 fill-current stroke-current" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
