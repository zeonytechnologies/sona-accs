import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/lib/mockData';
import { ProductCard } from '@/components/ui/ProductCard';
import { buttonVariants } from '@/components/ui/Button';
import { HeroCarousel } from '@/components/ui/HeroCarousel';
import { motion } from 'framer-motion';

export const Home = () => {
  const newArrivals = MOCK_PRODUCTS.filter(p => p.is_new_arrival).slice(0, 4);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      
      <HeroCarousel />

      {/* Featured Categories */}
      <motion.section 
        {...fadeInUp}
        className="py-20 md:py-28 container mx-auto px-4 md:px-6"
      >
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Discover</span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mt-3">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {MOCK_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Link to={`/category/${category.slug}`} className="group block relative overflow-hidden bg-gray-100 aspect-[4/5]">
                <img 
                  src={category.image_url} 
                  alt={category.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-3xl font-serif tracking-wide">{category.name}</h3>
                  <div className="w-0 h-[1px] bg-secondary mt-4 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Brand Story / Banner */}
      <motion.section 
        {...fadeInUp}
        className="bg-primary text-secondary py-24 px-4 md:px-6 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-64 h-64 border border-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-secondary/10 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="font-sans text-accent tracking-[0.3em] uppercase text-xs">Our Heritage</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-6 mb-8 leading-tight">Elegance crafted for the modern Indian woman.</h2>
          <p className="text-secondary/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            From the heart of Dharmapuri to your wardrobe. We curate premium jewellery, timeless ethnic wear, and contemporary accessories that celebrate your unique style.
          </p>
          <Link to="/about" className={buttonVariants({ variant: "outline", className: "border-secondary text-secondary hover:bg-secondary hover:text-primary tracking-widest uppercase" })}>
            Our Story
          </Link>
        </div>
      </motion.section>

      {/* New Arrivals */}
      <motion.section 
        {...fadeInUp}
        className="py-24 container mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Just In</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mt-3">New Arrivals</h2>
          </div>
          <Link to="/new-arrivals" className="hidden md:inline-flex text-primary hover:text-accent tracking-widest text-sm uppercase transition-colors font-medium border-b border-primary hover:border-accent pb-1 mt-4 md:mt-0">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {newArrivals.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/new-arrivals" className={buttonVariants({ variant: "outline", className: "w-full tracking-widest uppercase" })}>
            View All Arrivals
          </Link>
        </div>
      </motion.section>

      {/* WhatsApp CTA */}
      <motion.section 
        {...fadeInUp}
        className="bg-accent-light/30 py-20 px-4 md:px-6 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4">Prefer personal assistance?</h2>
          <p className="text-text-light mb-8 font-light">
            Our styling team is available on WhatsApp to help you find the perfect piece or place an order directly.
          </p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={buttonVariants({ className: "bg-[#25D366] text-white hover:bg-[#128C7E] border-none tracking-widest uppercase px-8 h-14" })}>
            Chat on WhatsApp
          </a>
        </div>
      </motion.section>

    </div>
  );
};
