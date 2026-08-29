import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '@/components/ui/ProductCard';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '@/lib/mockData';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Shop = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products by category if categorySlug is present
  const category = MOCK_CATEGORIES.find(c => c.slug === categorySlug);
  const products = category 
    ? MOCK_PRODUCTS.filter(p => p.category === category.name)
    : MOCK_PRODUCTS;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      
      {/* Breadcrumbs */}
      <div className="text-xs uppercase tracking-widest text-text-light mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        {category ? (
          <>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-primary font-medium">{category.name}</span>
          </>
        ) : (
          <span className="text-primary font-medium">Shop</span>
        )}
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
          {category ? category.name : 'All Collection'}
        </h1>
        <div className="w-16 h-0.5 bg-accent mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="text-xs uppercase tracking-widest">
            <Filter size={16} className="mr-2"/> Filters
          </Button>
          <div className="flex items-center text-xs uppercase tracking-widest text-text-light">
            Sort <ChevronDown size={14} className="ml-1"/>
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
          <div className="sticky top-24 space-y-8">
            
            {/* Categories */}
            <div>
              <h3 className="font-serif text-lg text-primary mb-4 border-b border-gray-100 pb-2">Categories</h3>
              <ul className="space-y-3 text-sm text-text-main">
                <li>
                  <Link to="/shop" className={`hover:text-primary transition-colors ${!category ? 'text-primary font-medium' : ''}`}>All Collection</Link>
                </li>
                {MOCK_CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <Link to={`/category/${cat.slug}`} className={`hover:text-primary transition-colors ${category?.slug === cat.slug ? 'text-primary font-medium' : ''}`}>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter (Mock) */}
            <div>
              <h3 className="font-serif text-lg text-primary mb-4 border-b border-gray-100 pb-2">Price</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm text-text-main cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span>Under ₹1000</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-text-main cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span>₹1000 - ₹2000</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-text-main cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span>Over ₹2000</span>
                </label>
              </div>
            </div>

            {/* Stock Status (Mock) */}
            <div>
              <h3 className="font-serif text-lg text-primary mb-4 border-b border-gray-100 pb-2">Availability</h3>
              <label className="flex items-center space-x-2 text-sm text-text-main cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span>In Stock Only</span>
              </label>
            </div>

          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Toolbar */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-gray-100 text-sm text-text-light">
            <p>Showing {products.length} products</p>
            <div className="flex items-center space-x-2">
              <span>Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-primary font-medium focus:ring-0 cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20 text-text-light">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
