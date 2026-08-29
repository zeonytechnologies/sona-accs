import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-widest text-secondary leading-none uppercase">Sona</span>
              <span className="font-sans text-[0.6rem] tracking-[0.2em] text-accent mt-1 uppercase">Accessories</span>
            </div>
            <p className="text-sm text-secondary/80 leading-relaxed max-w-xs">
              Jewellery, fashion and accessories for every occasion. Discover elegance curated just for you.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="flex items-center text-secondary/80 hover:text-accent transition-colors text-sm">
                Instagram <ExternalLink size={14} className="ml-1" />
              </a>
              <a href="#" className="flex items-center text-secondary/80 hover:text-accent transition-colors text-sm">
                Facebook <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm text-secondary/80">
              <li><Link to="/category/jewellery" className="hover:text-accent transition-colors">Jewellery</Link></li>
              <li><Link to="/category/clothing" className="hover:text-accent transition-colors">Clothing</Link></li>
              <li><Link to="/category/accessories" className="hover:text-accent transition-colors">Accessories</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/best-sellers" className="hover:text-accent transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-sm text-secondary/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition-colors">Return Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg tracking-wider">Visit Us</h4>
            <ul className="space-y-3 text-sm text-secondary/80">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-0.5 shrink-0 text-accent" />
                <span>Sona Accessories<br/>Dharmapuri, Tamil Nadu<br/>India</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 shrink-0 text-accent" />
                <span>hello@sonaaccessories.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Sona Accessories. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
