import Image from 'next/image';

const categories = [
  { id: '1', label: 'Coats', image: '/images/categories/coats.jpg' },
  { id: '2', label: 'Knitwear', image: '/images/categories/knit.jpg' },
  { id: '3', label: 'Dresses', image: '/images/categories/dresses.jpg' },
  { id: '4', label: 'Trousers', image: '/images/categories/trousers.jpg' },
  { id: '5', label: 'Boots', image: '/images/categories/boots.jpg' },
  { id: '6', label: 'Bags', image: '/images/categories/bags.jfif' },
];

export default function CategoryGrid() {
  return (
    <div className="categories-section-bg">
      <div className="category-grid container">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <Image
              src={cat.image}
              alt={cat.label}
              width={200}       
              height={233}      
              priority={false}  
              className="category-image"
            />
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


