import React from 'react';
import { Package, ShoppingCart, IndianRupee, TrendingUp } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-serif text-primary mb-6">Dashboard Overview</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-light mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-text-main">₹1,24,500</h3>
            </div>
            <div className="p-3 bg-primary/10 text-primary rounded-full">
              <IndianRupee size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-light mb-1">Total Orders</p>
              <h3 className="text-2xl font-bold text-text-main">142</h3>
            </div>
            <div className="p-3 bg-accent/10 text-accent-dark rounded-full">
              <ShoppingCart size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-light mb-1">Total Products</p>
              <h3 className="text-2xl font-bold text-text-main">356</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-500 rounded-full">
              <Package size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-light mb-1">Growth</p>
              <h3 className="text-2xl font-bold text-text-main">+14.5%</h3>
            </div>
            <div className="p-3 bg-green-50 text-green-500 rounded-full">
              <TrendingUp size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders (Mock) */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-serif text-lg text-primary">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase tracking-widest text-text-light bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 font-medium text-primary">SA-2026-00142</td>
                <td className="px-6 py-4">Priya Sharma</td>
                <td className="px-6 py-4 text-text-light">Today, 10:45 AM</td>
                <td className="px-6 py-4 font-medium">₹3,499</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-primary">SA-2026-00141</td>
                <td className="px-6 py-4">Anita Kumar</td>
                <td className="px-6 py-4 text-text-light">Yesterday</td>
                <td className="px-6 py-4 font-medium">₹1,299</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Shipped</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-primary">SA-2026-00140</td>
                <td className="px-6 py-4">Meera Reddy</td>
                <td className="px-6 py-4 text-text-light">Yesterday</td>
                <td className="px-6 py-4 font-medium">₹8,500</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
