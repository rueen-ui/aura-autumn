import Header from '@/components/layout/Header';
import AboutPhilosophy from '@/components/AboutPhilosophy';

export const metadata = {
  title: 'About AURA Autumn — Our Philosophy & Values',
  description:
    'Discover the values behind AURA Autumn: craftsmanship, seasonal minimalism, and sustainable sourcing. Learn how we create timeless seasonal collections.',
};

export default function AboutPage() {
  return (
    <>
      <Header variant="dark" />
      <AboutPhilosophy />
    </>
  );
}



