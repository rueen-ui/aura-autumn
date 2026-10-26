import Image from 'next/image';
import { productsData } from '../shop/productsData';

export default function Bestsellers() {
  return (
    <section className="bestsellers-section">
      <div className="container">
        <h2 className="section-title">Bestsellers</h2>
        <div className="product-grid">
          {productsData.map((item) => (
            <article key={item.id} className="product-card">
              <div className="product-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}       
                  height={400}      
                  priority={false}   
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <div className="product-name">{item.name}</div>
                <div className="product-price aura-price">${item.price}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

