import ProductCard from './ProductCard';
import type { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export default function ProductGrid({ products, onOpenModal }: ProductGridProps) {
  if (!products.length) {
    return <p className="no-products">No items found for the selected filters.</p>;
  }

  return (
    <div className="product-grid-wrapper">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onOpenModal={onOpenModal} />
      ))}
    </div>
  );
}





