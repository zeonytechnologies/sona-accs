import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { Home } from '@/pages/Home';
import { Shop } from '@/pages/Shop';
import { ProductDetails } from '@/pages/ProductDetails';
import { Cart } from '@/pages/Cart';
import { Wishlist } from '@/pages/Wishlist';
import { Account } from '@/pages/Account';
import { Checkout } from '@/pages/Checkout';
import { SplashScreen } from '@/components/ui/SplashScreen';

// Admin Imports
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Dashboard } from '@/pages/admin/Dashboard';

function App() {
  const [appReady, setAppReady] = useState(false);

  return (
    <BrowserRouter>
      {!appReady && <SplashScreen onComplete={() => setAppReady(true)} />}
      
      <Routes>
        {/* Customer Storefront Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="category/:categorySlug" element={<Shop />} />
          <Route path="product/:productSlug" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="account" element={<Account />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<div className="p-6">Products Management Coming Soon</div>} />
          <Route path="orders" element={<div className="p-6">Orders Management Coming Soon</div>} />
          <Route path="customers" element={<div className="p-6">Customers Management Coming Soon</div>} />
          <Route path="settings" element={<div className="p-6">Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
