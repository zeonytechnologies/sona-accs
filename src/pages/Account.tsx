import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ChevronRight, Package, User, MapPin, Heart, LogOut } from 'lucide-react';

export const Account = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Breadcrumbs */}
      <div className="text-xs uppercase tracking-widest text-text-light mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-primary font-medium">My Account</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-serif text-primary mb-8">My Account</h1>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex flex-col space-y-2">
            <Link to="/account" className="flex items-center px-4 py-3 bg-primary/5 text-primary border-l-2 border-primary font-medium transition-colors">
              <User size={18} className="mr-3" /> Profile
            </Link>
            <Link to="/account/orders" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-gray-200">
              <Package size={18} className="mr-3" /> Orders
            </Link>
            <Link to="/wishlist" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-gray-200">
              <Heart size={18} className="mr-3" /> Wishlist
            </Link>
            <Link to="/account/addresses" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-gray-200">
              <MapPin size={18} className="mr-3" /> Addresses
            </Link>
            <button className="flex items-center px-4 py-3 text-red-500 hover:bg-red-50 transition-colors border-l-2 border-transparent w-full text-left mt-4">
              <LogOut size={18} className="mr-3" /> Logout
            </button>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="font-serif text-2xl text-primary mb-6">Profile Information</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-light mb-1">Full Name</label>
                  <div className="p-3 bg-gray-50 rounded text-text-main">Guest User</div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-light mb-1">Email</label>
                  <div className="p-3 bg-gray-50 rounded text-text-main">guest@example.com</div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-light mb-1">Mobile</label>
                  <div className="p-3 bg-gray-50 rounded text-text-main">+91 ----------</div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="tracking-widest uppercase text-xs">Edit Profile</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
