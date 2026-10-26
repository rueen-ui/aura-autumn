import { notFound } from 'next/navigation';
import ProductPage from '@/components/Product/ProductPage';
import Header from '@/components/layout/Header';
import { productsData } from '@/components/shop/productsData';

type Product = typeof productsData[number];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) notFound();

  const description = `${product.name} — ${product.category}. Elegant shoes from AURA Autumn.`;

  return {
    title: `${product.name} | AURA Autumn`,
    description,
    openGraph: {
      title: product.name,
      images: [product.image],
      locale: 'en_US',
    },
  };
}

export default async function ProductRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <>
      <Header variant="dark" />
      <ProductPage product={product} />
    </>
  );
}


















