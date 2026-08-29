import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlistStore } from '@/store/useWishlistStore';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export const Wishlist = () => {
  const { items } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-serif text-primary mb-6">Wishlist</h1>
        <p className="text-text-light mb-8">Save your favourite styles here. Your wishlist is currently empty.</p>
        <Link to="/shop">
          <Button className="tracking-widest uppercase">Explore Collection</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Breadcrumbs */}
      <div className="text-xs uppercase tracking-widest text-text-light mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-primary font-medium">Wishlist</span>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-serif text-primary mb-2">My Wishlist</h1>
        <p className="text-text-light text-sm">{items.length} {items.length === 1 ? 'item' : 'items'} saved</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
