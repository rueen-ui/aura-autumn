'use client';

import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store/cartStore';

export default function Summary() {
  const { items, itemCount, totalPrice } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const displayCount = isMounted ? itemCount : 0;
  const displayTotal = isMounted ? totalPrice : 0;

  return (
    <div className="aura-summary-block">
      <h3 className="aura-summary-title">Order Summary</h3>
      
      <p className="aura-summary-items">
        {displayCount} item{displayCount !== 1 ? 's' : ''}
      </p>

      <div className="aura-summary-total">
        <span className="aura-total-label">Total:</span>
        <span className="aura-total-amount">${displayTotal.toFixed(2)}</span>
      </div>

      <button className="aura-checkout-btn">Proceed to Checkout</button>
    </div>
  );
}


