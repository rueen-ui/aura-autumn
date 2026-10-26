'use client';
import { useCartStore } from '@/lib/store/cartStore';
import type { Product } from '@/lib/types';

interface ProductCartButtonProps {
  product: Product;
  selectedSize: string | null;
  selectedColor: string;
}

export default function ProductCartButton({
  product,
  selectedSize,
  selectedColor,
}: ProductCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const isDisabled = !selectedSize;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };

    addItem(cartItem);
  };

  return (
    <button
      className="add-to-cart-btn"
      onClick={handleAddToCart}
      disabled={isDisabled}
      aria-label={isDisabled ? 'Select a size first' : 'Add to Cart'}
    >
      {isDisabled ? 'Select a size first' : 'Add to Cart'}
    </button>
  );
}
