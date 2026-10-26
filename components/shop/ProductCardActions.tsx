'use client';

import type { Product } from '@/lib/types';

interface ProductCardActionsProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCardActions({ product, onOpenModal }: ProductCardActionsProps) {
  const handleOpenModal = () => {
    onOpenModal(product);
  };

  const firstSize = product.sizes[0] || 'One Size';
  const restSizes = Math.max(0, product.sizes.length - 1);

  const renderSizeSelect = () => (
    <div className="size-preview">
      <span>{firstSize}</span>
      {restSizes > 0 && (
        <span className="size-more" onClick={handleOpenModal}>
          +{restSizes} sizes
        </span>
      )}
    </div>
  );

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="add-to-cart-btn overlay-only shop-card"
        aria-label="Select size and color"
      >
        <span className="btn-text">Select & Add</span>
      </button>
    </>
  );
}





