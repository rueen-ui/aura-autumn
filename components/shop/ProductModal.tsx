'use client';

import React from 'react';
import { useState } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import type { Product, ProductColor } from '@/lib/types';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product.color ?? null
  );

  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!selectedSize) return;

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor: selectedColor ?? product.color ?? null,
    };

    addItem(cartItem);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{product.name}</h2>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="color-section">
            <h4 className="section-title">Color</h4>
            <div className="color-swatches">
              {(product.color ? [product.color] : []).map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  className={`color-swatch ${selectedColor?.hex === c.hex ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(c)}
                  aria-pressed={selectedColor?.hex === c.hex}
                >
                  <span className="sr-only">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="size-section">
            <h4 className="section-title">Size</h4>
            <div className="size-buttons">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <p className="modal-total">
              Selected: {selectedSize || '—'} / {selectedColor?.name || '—'}
            </p>

            <button
              type="button"
              onClick={handleAddToCart}
              className="add-to-cart-btn modal-action"
              disabled={!selectedSize}
            >
              <span className="btn-text">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}







