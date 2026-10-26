import { create } from 'zustand';
import { CartItem, CartStore } from '../types';

const computeTotals = (items: CartItem[]) => {
  let itemCount = 0;
  let totalPrice = 0;

  for (const i of items) {
    itemCount += i.quantity;
    totalPrice += i.price * i.quantity;
  }

  return { itemCount, totalPrice };
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [], 
  itemCount: 0,
  totalPrice: 0,

  loadFromStorage: () => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem('aura-cart-store');
      if (saved) {
        const parsed = JSON.parse(saved);
        const validItems = Array.isArray(parsed) ? parsed : [];
        const totals = computeTotals(validItems);
        
        set({ 
          items: validItems, 
          itemCount: totals.itemCount, 
          totalPrice: totals.totalPrice 
        });
      }
    } catch (e) {
      console.warn('[CART STORE] LocalStorage corrupted, resetting to empty', e);
      set({ items: [], itemCount: 0, totalPrice: 0 });
    }
  },

  addItem: (item) => {
    const { items } = get();
    const existing = items.find((i) => i.id === item.id);

    let newItems: CartItem[];
    if (existing) {
      newItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      newItems = [...items, { ...item, quantity: 1 }];
    }

    const totals = computeTotals(newItems);
    set({ items: newItems, itemCount: totals.itemCount, totalPrice: totals.totalPrice });
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('aura-cart-store', JSON.stringify(newItems));
    }
  },

  updateQuantity: (id, newQuantity) => {
    if (newQuantity <= 0) {
      get().removeItem(id);
      return;
    }
    const { items } = get();
    const updatedItems = items.map((i) =>
      i.id === id ? { ...i, quantity: newQuantity } : i
    );
    const totals = computeTotals(updatedItems);
    set({ items: updatedItems, itemCount: totals.itemCount, totalPrice: totals.totalPrice });

    if (typeof window !== 'undefined') {
      localStorage.setItem('aura-cart-store', JSON.stringify(updatedItems));
    }
  },

  removeItem: (id) => {
    const { items } = get();
    const filteredItems = items.filter((i) => i.id !== id);
    const totals = computeTotals(filteredItems);
    set({ items: filteredItems, itemCount: totals.itemCount, totalPrice: totals.totalPrice });

    if (typeof window !== 'undefined') {
      localStorage.setItem('aura-cart-store', JSON.stringify(filteredItems));
    }
  },
}));












