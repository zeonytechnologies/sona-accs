import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import { Button } from '@/components/ui/Button';
import { Heart, MessageCircle, Share2, ChevronRight, Truck, RefreshCcw, Check } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

export const ProductDetails = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.slug === productSlug);
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const addItemToCart = useCartStore(state => state.addItem);
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlistStore();

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const hasDiscount = product.sale_price && product.sale_price < product.price;
  const isWishlisted = isInWishlist(product.id);

  const handleWhatsAppOrder = () => {
    const message = `Hello Sona Accessories 👋\n\I am interested in this product:\n\nProduct: ${product.name}\nPrice: ₹${product.sale_price || product.price}\n\nPlease confirm availability.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeWishlist(product.id);
    } else {
      addWishlist(product);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      
      {/* Breadcrumbs */}
      <div className="text-xs uppercase tracking-widest text-text-light mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-primary font-medium line-clamp-1">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Product Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 shrink-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`aspect-[4/5] w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover object-center" />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[4/5] bg-gray-50 rounded-md overflow-hidden relative">
            <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover object-center" />
            {hasDiscount && (
              <span className="absolute top-4 left-4 bg-accent text-white text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-sm">
                Sale
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-xs text-accent-dark uppercase tracking-widest mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            {hasDiscount ? (
              <>
                <span className="text-2xl text-primary font-medium">₹{product.sale_price}</span>
                <span className="text-lg text-gray-400 line-through">₹{product.price}</span>
              </>
            ) : (
              <span className="text-2xl text-primary font-medium">₹{product.price}</span>
            )}
          </div>

          <div className="prose prose-sm text-text-light mb-8">
            <p>{product.description}</p>
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col space-y-4 mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm font-medium uppercase tracking-widest">Quantity</span>
              <div className="flex items-center border border-gray-200 rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-500 hover:text-primary transition-colors"
                >-</button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-500 hover:text-primary transition-colors"
                >+</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                onClick={handleAddToCart}
                className={`w-full text-xs tracking-widest uppercase h-12 transition-colors ${isAdded ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
              >
                {isAdded ? <><Check size={16} className="mr-2"/> Added to Cart</> : 'Add to Cart'}
              </Button>
              <Button 
                variant="outline" 
                onClick={toggleWishlist}
                className={`w-full text-xs tracking-widest uppercase h-12 ${isWishlisted ? 'border-primary text-primary bg-primary/5' : ''}`}
              >
                <Heart size={16} className={`mr-2 ${isWishlisted ? 'fill-primary' : ''}`} /> 
                {isWishlisted ? 'Saved' : 'Wishlist'}
              </Button>
            </div>
            
            <Button onClick={handleWhatsAppOrder} className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] text-xs tracking-widest uppercase h-12 mt-2">
              <MessageCircle size={16} className="mr-2" /> Order on WhatsApp
            </Button>
          </div>

          {/* Trust Features */}
          <div className="space-y-4 text-sm text-text-main">
            <div className="flex items-center space-x-3">
              <Truck size={20} className="text-accent" />
              <span>Free shipping on orders over ₹1500</span>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCcw size={20} className="text-accent" />
              <span>Easy 7-day returns</span>
            </div>
            <div className="flex items-center space-x-3">
              <Share2 size={20} className="text-accent" />
              <span>Share this product</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
