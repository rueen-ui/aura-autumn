import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import ShopPageClient from '../../components/shop/ShopPageClient';
import { productsData } from '../../components/shop/productsData';

export default function Shop() {
  return (
    <>
      <Header variant="dark" />
      <Suspense fallback={<div>Загрузка магазина...</div>}>
        <ShopPageClient products={productsData} />
      </Suspense>
    </>
  );
}



