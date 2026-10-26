'use client';
import { useState } from 'react';
import type { Product } from '@/lib/types';

interface ProductOptionsProps {
  product: Product;
  selectedSize: string | null;
  selectedColor: string;
  onSizeChange: (size: string | null) => void;
  onColorChange: (color: string) => void;
}

export default function ProductOptions({
  product,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: ProductOptionsProps) {
  const currentPrice = product.isSale && product.discountPercent
    ? product.price * (1 - (product.discountPercent || 0) / 100)
    : product.price;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currentPrice);

  const originalPrice = product.isSale ? product.price : null;
  const formattedOriginal = originalPrice
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(originalPrice)
    : null;

  return (
    <>
      <span className="product-badge">
        {product.isNew && <span className="badge-new">New</span>}
        {product.isSale && (
          <span className="badge-sale">
            -{product.discountPercent}%
          </span>
        )}
      </span>

      <h1 className="product-title">{product.name}</h1>
      <p className="product-category">{product.category}</p>

      <div className="price-block">
        <span className="current-price">{formattedPrice}</span>
        {formattedOriginal && (
          <span className="original-price">{formattedOriginal}</span>
        )}
      </div>

      {product.rating !== undefined && (
        <div className="rating-block">
          <span>★ {product.rating.toFixed(1)} ({product.reviewsCount})</span>
        </div>
      )}

      <div className="options-section">
        <div className="option-group">
          <label className="option-label">Size</label>
          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => onSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {product.color && (
          <div className="option-group">
            <label className="option-label">Color</label>
            <div className="color-options">
              <div
                className="color-swatch"
                style={{ backgroundColor: product.color.hex }}
                aria-label={product.color.name}
                title={product.color.name}
              />
              <span className="color-name">{product.color.name}</span>
            </div>
          </div>
        )}
      </div>

      <div className="stock-info">
        In stock: {product.stock} items
      </div>
    </>
  );
}
