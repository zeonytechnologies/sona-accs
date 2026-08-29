import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { Trash2, MessageCircle, ChevronRight } from 'lucide-react';

export const Cart = () => {
  const { items, updateQuantity, removeItem, getTotals } = useCartStore();
  const { subtotal, total, itemCount } = getTotals();

  const handleWhatsAppOrder = () => {
    let message = `Hello Sona Accessories 👋\n\nI would like to order:\n\n`;
    items.forEach((item, index) => {
      const price = item.product.sale_price || item.product.price;
      message += `${index + 1}. ${item.product.name} (x${item.quantity}) - ₹${price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${total}\n\nPlease confirm availability and delivery details.`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-serif text-primary mb-6">Shopping Bag</h1>
        <p className="text-text-light mb-8">Your shopping bag is waiting for something beautiful.</p>
        <Link to="/shop">
          <Button className="tracking-widest uppercase">Continue Shopping</Button>
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
        <span className="text-primary font-medium">Cart</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-serif text-primary mb-8">Shopping Bag ({itemCount})</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Cart Items */}
        <div className="flex-1">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs tracking-widest uppercase text-text-light">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          <div className="divide-y divide-gray-100">
            {items.map((item) => {
              const price = item.product.sale_price || item.product.price;
              
              return (
                <div key={item.product.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6 flex gap-4">
                    <Link to={`/product/${item.product.slug}`} className="w-24 h-32 shrink-0 bg-gray-50 rounded-sm overflow-hidden">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover object-center" />
                    </Link>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] text-accent-dark uppercase tracking-widest mb-1">{item.product.category}</p>
                      <Link to={`/product/${item.product.slug}`} className="hover:text-primary transition-colors font-serif text-lg text-text-main line-clamp-2">
                        {item.product.name}
                      </Link>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="mt-3 text-xs text-red-500 hover:text-red-700 flex items-center w-fit"
                      >
                        <Trash2 size={14} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price (Mobile hidden) */}
                  <div className="hidden md:block col-span-2 text-center text-text-main">
                    ₹{price}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                    <div className="flex items-center border border-gray-200 rounded-md bg-white">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 text-gray-500 hover:text-primary transition-colors"
                      >-</button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-500 hover:text-primary transition-colors"
                      >+</button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:block md:text-right font-medium text-primary">
                    <span className="md:hidden text-text-light text-sm">Total:</span>
                    ₹{price * item.quantity}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h2 className="font-serif text-2xl text-primary mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 text-sm">
              <div className="flex justify-between">
                <span className="text-text-light">Subtotal</span>
                <span className="font-medium text-text-main">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Shipping</span>
                <span className="text-accent text-xs tracking-wider uppercase">Calculated at checkout</span>
              </div>
            </div>

            <div className="flex justify-between mb-8 items-end">
              <span className="text-text-main font-medium tracking-wide">Estimated Total</span>
              <span className="text-2xl font-serif text-primary">₹{total}</span>
            </div>

            <div className="space-y-4">
              <Link to="/checkout" className="block w-full">
                <Button className="w-full tracking-widest uppercase h-12">
                  Proceed to Checkout
                </Button>
              </Link>
              <Button onClick={handleWhatsAppOrder} className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] tracking-widest uppercase h-12">
                <MessageCircle size={16} className="mr-2" /> Order on WhatsApp
              </Button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};
