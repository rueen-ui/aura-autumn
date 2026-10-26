import Image from 'next/image';
import Link from 'next/link';
import { productsData } from './shop/productsData';

export default function NewInGrid() {
  return (
    <section className="new-in-section">
      <div className="container">
        <h2 className="">New In</h2>
        
        <div className="product-grid">
          {productsData.map((item) => (
            <article key={item.id} className="product-card aura-card">
              <Link href={`/product/${item.id}`} className="product-link" passHref>
                <div className="product-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    priority={false}
                    className="product-image aura-image"
                  />
                </div>
                
                <div className="product-info">
                  <div className="product-name aura-name">{item.name}</div>
                  <div className="product-price aura-price">${item.price}</div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
