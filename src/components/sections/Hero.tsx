// src/components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, ChevronDown, User } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  // Set image with cache-busting on component mount
  useEffect(() => {
    setImageSrc(`/assets/images/profile.png?t=${Date.now()}`);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-accent font-mono text-sm md:text-base mb-4 tracking-wider">
              👋 HELLO, I'M
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-white whitespace-nowrap">Dharneesh R</span>
              <br />
              <span className="text-gradient">AI & Full Stack</span>
              <br />
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8">
              I build intelligent, scalable, and modern web applications using React, Node.js, and AI/ML technologies.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent text-black font-semibold rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-purple-600 blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/20 flex items-center justify-center bg-black/20">
                  {!imageError && imageSrc ? (
                    <img 
                      src={imageSrc}
                      alt="Dharneesh R"
                      className="w-full h-full object-cover object-center scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent/20 to-purple-600/20">
                      <User size={64} className="text-accent mb-2" />
                      <span className="text-2xl font-bold text-white">DR</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}