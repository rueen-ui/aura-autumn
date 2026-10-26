'use client';

import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function CartIndicator() {
  const { items } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentCount = isMounted
    ? (Array.isArray(items) ? items : []).reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <Link 
      href="/cart" 
      className="cart-link" 
      aria-label="Корзина"
    >
      <ShoppingBag size={24} />
      {currentCount > 0 && (
        <span className="cart-count">{currentCount}</span>
      )}
    </Link>
  );
}
