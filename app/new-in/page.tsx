import Header from '@/components/layout/Header';
import NewInGrid from '@/components/NewInGrid';

export const metadata = {
  title: 'New In — AURA Autumn Collection',
  description:
    'Discover the latest arrivals from AURA Autumn. Premium materials, refined silhouettes, and seasonal essentials for a timeless autumn wardrobe.',
};

export default function NewInPage() {
  return (
    <>
      <Header variant="dark" />
      <NewInGrid />
    </>
  );
}

