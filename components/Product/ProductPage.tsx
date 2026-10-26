'use client';
import { useState } from 'react';
import ProductImage from './ProductImage';
import ProductOptions from './ProductOptions';
import ProductCartButton from './ProductCartButton';
import type { Product } from '@/lib/types';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes[0] || null
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.color?.name || ''
  );

  return (
    <main className="product-page-main">
      <section className="product-container">
        <div className="product-gallery-col">
          <ProductImage product={product} />
        </div>

        <div className="product-info-col">
          <ProductOptions
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
          />

          <ProductCartButton
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />

          <div className="product-details">
            <h3>Details</h3>
            <p>
              Premium materials and timeless design. Made with attention to detail and sustainable sourcing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
