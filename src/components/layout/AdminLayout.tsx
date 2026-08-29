import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from 'lucide-react';

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-text-main font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200 flex flex-col items-center">
          <span className="font-serif text-2xl tracking-widest text-primary leading-none uppercase">Sona</span>
          <span className="font-sans text-[0.6rem] tracking-[0.2em] text-accent mt-1 uppercase">Admin</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/admin" className="flex items-center px-4 py-3 text-primary bg-primary/5 rounded-md font-medium">
            <LayoutDashboard size={18} className="mr-3" /> Dashboard
          </Link>
          <Link to="/admin/products" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
            <Package size={18} className="mr-3" /> Products
          </Link>
          <Link to="/admin/orders" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
            <ShoppingCart size={18} className="mr-3" /> Orders
          </Link>
          <Link to="/admin/customers" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
            <Users size={18} className="mr-3" /> Customers
          </Link>
          <Link to="/admin/settings" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary rounded-md transition-colors">
            <Settings size={18} className="mr-3" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <Link to="/" className="flex items-center px-4 py-3 text-text-light hover:bg-gray-50 hover:text-primary rounded-md transition-colors w-full">
            <LogOut size={18} className="mr-3" /> Back to Store
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-lg font-serif text-primary">Admin Portal</h1>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>

    </div>
  );
};
