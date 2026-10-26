import Image from 'next/image';
import type { Product } from '@/lib/types';

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="main-image-wrapper">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="main-image"
      />
    </div>
  );
}
