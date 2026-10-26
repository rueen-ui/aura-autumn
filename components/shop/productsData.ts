import type { Product } from '@/lib/types';

export const productsData: Product[] = [
  {
    id: 'bs-1',
    name: 'Cashmere Scarf',
    price: 89,
    image: '/images/products/scarf.webp',
    category: 'Accessories',
    sizes: ['One Size'],
    stock: 12,
    color: { name: 'Warm Beige', hex: '#F5E6D3' },
    rating: 4.8,
    reviewsCount: 37,
    isNew: true,
  },
  {
    id: 'bs-2',
    name: 'Wool Coat',
    price: 249,
    image: '/images/products/coat.jpg',
    category: 'Coats',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 3,
    color: { name: 'Charcoal', hex: '#36414b' },
    isSale: true,
    discountPercent: 15,
  },
  {
    id: 'bs-3',
    name: 'Leather Boots',
    price: 169,
    image: '/images/products/boots.jpg',
    category: 'Shoes',
    sizes: ['38', '39', '40', '41', '42'],
    stock: 8,
    color: { name: 'Dark Brown', hex: '#5e4033' },
  },
  {
    id: 'bs-4',
    name: 'Ribbed Sweater',
    price: 79,
    image: '/images/products/sweater.jpg',
    category: 'Knitwear',
    sizes: ['S', 'M', 'L'],
    stock: 22,
    color: { name: 'Oatmeal', hex: '#d4c9b8' },
  },
];


