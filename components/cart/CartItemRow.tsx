'use client';

import { useCartStore } from '@/lib/store/cartStore';
import Image from 'next/image';

interface CartItemRowProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartItemRow({ id, name, price, image, quantity }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <article className="aura-cart-row">
      <div className="aura-image-wrapper">
        <Image
          src={image}
          alt={name}
          width={140}
          height={140}
          className="aura-image"
        />
      </div>

      <div className="aura-cart-info-and-actions">
        <div className="aura-cart-info">
          <h4 className="aura-name">{name}</h4>
          <p className="aura-price">${price.toFixed(2)}</p>
        </div>

        <div className="aura-cart-actions">
          <div className="aura-cart-controls">
            <button
              onClick={() => updateQuantity(id, quantity - 1)} 
              type="button"
              className="aura-qty-btn"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="aura-display">{quantity}</span>
            <button
              onClick={() => updateQuantity(id, quantity + 1)}
              type="button"
              className="aura-qty-btn"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(id)}
            type="button"
            className="aura-remove-btn"
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}










