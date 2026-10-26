import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import ProductCardActions from './ProductCardActions';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const firstSize = product.sizes[0] || 'One Size';
  const restSizes = Math.max(0, product.sizes.length - 1);

  const getStockBadge = () => {
    if (product.stock === undefined) return null;
    if (product.stock <= 3)
      return <span className="stock-badge low">Only {product.stock} left</span>;
    return <span className="stock-badge">In stock</span>;
  };

  const getSaleBlock = () => {
    if (!product.isSale || !product.discountPercent) return null;
    const oldPrice = product.price;
    const newPrice = Math.round(product.price * (1 - product.discountPercent / 100));
    return (
      <div className="sale-block">
        <span className="price-old">${oldPrice}</span>
        <span className="price-new">${newPrice}</span>
        <span className="discount-tag">{product.discountPercent}% OFF</span>
      </div>
    );
  };

  const renderSizePreview = () => (
    <div className="size-preview">
      <span>{firstSize}</span>
      {restSizes > 0 && <span className="size-more">+{restSizes} sizes</span>}
    </div>
  );

  return (
    <article className="product-card aura-autumn-card">
      <Link
        href={`/product/${product.id}`}
        className="card-link-overlay"
        aria-label={`View ${product.name}`}
      >
        <div className="card-badges">
          {product.isNew && <span className="badge-new">New</span>}
          {product.isSale && <span className="badge-sale">Sale</span>}
        </div>

        <div className="product-image-wrapper">
          <Image
            src={product.image}
            alt={`Product image of ${product.name}`}
            width={400}
            height={400}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>

          {product.color && (
            <div className="product-color">
              <span className="dot" style={{ backgroundColor: product.color.hex }}></span>
              {product.color.name}
            </div>
          )}

          {renderSizePreview()}

          <div className="price-block">
            {getSaleBlock() || <span className="product-price">${product.price}</span>}
          </div>

          {getStockBadge()}
        </div>
      </Link>

      <ProductCardActions product={product} onOpenModal={onOpenModal} />
    </article>
  );
}












