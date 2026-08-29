import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/useCartStore';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemCount = useCartStore((state) => state.getTotals().itemCount);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-background py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -ml-2 text-text-main">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center justify-center flex-1 md:flex-none">
            <span className="font-serif text-2xl md:text-3xl tracking-widest text-primary leading-none uppercase">Sona</span>
            <span className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] text-accent-dark mt-1 uppercase">Accessories</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm uppercase tracking-wide hover:text-primary transition-colors">Shop</Link>
            <Link to="/category/jewellery" className="text-sm uppercase tracking-wide hover:text-primary transition-colors">Jewellery</Link>
            <Link to="/category/clothing" className="text-sm uppercase tracking-wide hover:text-primary transition-colors">Clothing</Link>
            <Link to="/category/accessories" className="text-sm uppercase tracking-wide hover:text-primary transition-colors">Accessories</Link>
            <Link to="/new-arrivals" className="text-sm uppercase tracking-wide text-accent-dark hover:text-primary transition-colors font-medium">New</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-text-main hover:text-primary transition-colors hidden sm:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="/account" className="text-text-main hover:text-primary transition-colors hidden sm:block">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/wishlist" className="text-text-main hover:text-primary transition-colors">
              <Heart size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/cart" className="text-text-main hover:text-primary transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-primary text-secondary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-wide py-2 border-b border-gray-50">Shop All</Link>
            <Link to="/category/jewellery" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-wide py-2 border-b border-gray-50">Jewellery</Link>
            <Link to="/category/clothing" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-wide py-2 border-b border-gray-50">Clothing</Link>
            <Link to="/category/accessories" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-wide py-2 border-b border-gray-50">Accessories</Link>
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" className="flex-1 justify-center"><Search size={16} className="mr-2"/> Search</Button>
              <Button variant="outline" className="flex-1 justify-center"><User size={16} className="mr-2"/> Account</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
