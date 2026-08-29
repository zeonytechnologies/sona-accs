import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

export const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-main">
      <ScrollToTop />
      <Header />
      {/* pt-20 to account for fixed header */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-[84px]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
