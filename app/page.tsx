import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import Bestsellers from '@/components/home/Bestsellers';
import { StickyHeader } from '@/components/layout/StickyHeader';

export default function Home() {
  return (
    <StickyHeader variant="light">
      <Hero />
      <CategoryGrid />
      <Bestsellers />
    </StickyHeader>
  );
}


