import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const slides = [
  {
    image: '/images/hero_image_1787982163994.png',
    title: 'New Collection 2026',
    heading: 'Elegance Redefined.',
    subtitle: 'Discover our latest curation of premium jewellery and luxury accessories.',
    link: '/shop',
    cta: 'Explore Collection'
  },
  {
    image: '/images/hero_image_2_1787982772269.png',
    title: 'Ethnic Grace',
    heading: 'Timeless Silks.',
    subtitle: 'Wrap yourself in the rich traditions and deep hues of our premium sarees.',
    link: '/category/clothing',
    cta: 'Shop Ethnic Wear'
  },
  {
    image: '/images/hero_image_3_1787982789051.png',
    title: 'Luxury Accessories',
    heading: 'Modern Classics.',
    subtitle: 'Elevate your everyday aesthetic with our handcrafted vegan leather bags.',
    link: '/category/accessories',
    cta: 'Discover Accessories'
  }
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[90vh] bg-gray-900 flex items-center justify-center overflow-hidden">
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <img 
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title} 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-secondary tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-4">
              {slides[currentIndex].title}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              {slides[currentIndex].heading}
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mb-10 max-w-xl mx-auto font-light leading-relaxed">
              {slides[currentIndex].subtitle}
            </p>
            <Link to={slides[currentIndex].link}>
              <Button className="h-14 px-10 tracking-[0.2em] uppercase text-sm border-secondary text-primary bg-secondary hover:bg-transparent hover:text-secondary transition-all">
                {slides[currentIndex].cta}
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex ? 'bg-secondary w-8 h-2' : 'bg-secondary/40 w-2 h-2 hover:bg-secondary/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
