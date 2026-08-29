import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
      <CheckCircle2 size={64} className="mx-auto text-green-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">Checkout Flow</h1>
      <p className="text-text-light mb-8">
        This is a placeholder for the checkout flow where users would enter their shipping address and select a payment method (e.g. Cash on Delivery or Razorpay).
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg text-left mb-8">
        <h3 className="font-serif text-lg text-primary mb-4">Implementation Note:</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-text-main">
          <li>Collect User Details (Name, Phone, Address)</li>
          <li>Select Delivery Method (Home Delivery / Store Pickup)</li>
          <li>Select Payment (COD / Online)</li>
          <li>Create Order in Supabase DB</li>
        </ul>
      </div>

      <Link to="/shop">
        <Button className="tracking-widest uppercase">Return to Shop</Button>
      </Link>
    </div>
  );
};
