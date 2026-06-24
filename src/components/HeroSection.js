'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: '/images/hiking-hero.webp', objectPosition: 'center 20%' },
    { src: '/images/hero/IMG_2649.jpeg', objectPosition: 'center' },
    { src: '/images/hero/IMG-062.jpg', objectPosition: 'center 10%' },
    { src: '/images/hero/IMG_5412.jpeg', objectPosition: 'center' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              transform: `translateY(${offset * 0.5}px)`,
            }}
          >
            <Image
              src={slides[currentSlide].src}
              alt="Community moments"
              fill
              className="object-cover"
              style={{ objectPosition: slides[currentSlide].objectPosition }}
              priority
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 max-w-3xl leading-tight">
          Building thoughtful things.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Creating intentional spaces.
        </h2>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white"
        style={{
          animation: 'smoothBounce 2s ease-out infinite'
        }}
      >
        <style>{`
          @keyframes smoothBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-12px); }
          }
        `}</style>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
