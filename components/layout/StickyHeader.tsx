'use client';

import { useEffect, useState } from 'react';
import Header from './Header';

export function StickyHeader({ 
  variant = 'light', 
  children 
}: { 
  variant?: 'dark' | 'light'; 
  children: React.ReactNode 
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 20;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header 
        variant={variant} 
        className={isScrolled ? 'scrolled' : undefined} 
      />
      {children}
    </>
  );
}

