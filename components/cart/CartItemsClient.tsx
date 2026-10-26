'use client';

import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import CartItemRow from './CartItemRow';

export default function CartItemsClient() {
  const { items } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="aura-loading">Loading cart...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="aura-cart-list empty">
        <h3>Your cart is empty</h3>
        <p>Add some items to get started.</p>
      </div>
    );
  }

  return (
    <ul className="aura-cart-list">
      {items.map((item) => (
        <li key={item.id} className="aura-cart-item">
          <CartItemRow {...item} />
        </li>
      ))}
    </ul>
  );
}






