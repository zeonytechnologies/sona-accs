import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Product } from '@/lib/mockData';

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          if (state.items.find(item => item.id === product.id)) return state;
          return { items: [...state.items, product] };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        }));
      },
      isInWishlist: (productId) => {
        return get().items.some(item => item.id === productId);
      }
    }),
    {
      name: 'sona-wishlist-storage',
    }
  )
);
