import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { type Product } from '@/lib/mockData';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount = product.sale_price && product.sale_price < product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.price - product.sale_price!) / product.price) * 100) 
    : 0;

  return (
    <div className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Link to={`/product/${product.slug}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.is_new_arrival && (
            <span className="bg-primary text-secondary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
              New
            </span>
          )}
          {hasDiscount && (
            <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
          <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-white text-primary hover:bg-primary hover:text-white" title="Quick View">
            <Eye size={18} />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-white text-primary hover:bg-primary hover:text-white" title="Add to Wishlist">
            <Heart size={18} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-center">
        <p className="text-xs text-accent-dark uppercase tracking-widest mb-1">{product.category}</p>
        <Link to={`/product/${product.slug}`} className="hover:text-primary transition-colors">
          <h3 className="font-serif text-lg text-text-main line-clamp-1">{product.name}</h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-center space-x-2">
          {hasDiscount ? (
            <>
              <span className="text-primary font-medium">₹{product.sale_price}</span>
              <span className="text-gray-400 line-through text-sm">₹{product.price}</span>
            </>
          ) : (
            <span className="text-primary font-medium">₹{product.price}</span>
          )}
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full text-xs tracking-widest uppercase">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
