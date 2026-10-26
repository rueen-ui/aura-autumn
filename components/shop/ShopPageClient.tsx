'use client';

import { useSearchParams } from 'next/navigation';
import FiltersSidebar from './FiltersSidebar';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';
import type { Product } from '@/lib/types';
import { useState } from 'react';

interface ShopPageClientProps {
  products: Product[];
}

export default function ShopPageClient({ products }: ShopPageClientProps) {
  const searchParams = useSearchParams();
  
  const category = searchParams.get('category') || '';
  const priceRaw = searchParams.get('price') || ''; 
  const sort = searchParams.get('sort') || 'default';

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  let minPrice = 0;
  let maxPrice = Infinity;

  if (priceRaw) {
    const parts = priceRaw.split('-');
    minPrice = Number(parts[0]) || 0;
    maxPrice = Number(parts[1]) || Infinity;
  }

  let filtered = products.filter((product) => {
    if (category && product.category !== category) return false;
    
    if (product.price < minPrice || product.price > maxPrice) return false;

    return true;
  });

  if (sort === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="shop-layout mt20">
      <FiltersSidebar />
      <main className="products-area">
        <div className="shop-header">
          <h1>Catalog</h1>
          <span className="product-count">{filtered.length} items</span>
        </div>

        <ProductGrid products={filtered} onOpenModal={setActiveProduct} />
      </main>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          isOpen={true}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </div>
  );
}







