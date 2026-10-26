import Link from 'next/link';
import { CartIndicator } from './CartIndicator'; 

interface HeaderProps {
  variant?: 'dark' | 'light';
  className?: string; 
}

export default function Header({ variant, className }: HeaderProps) {
  const headerClassName = [
    'site-header',
    variant === 'dark' ? 'header-dark' : '',
    className || ''
  ]
    .filter(Boolean) 
    .join(' ');

  return (
    <header className={headerClassName}>
      <div className="header-container">
        <Link href="/" className="logo">
          AURA
        </Link>

        <nav className="nav-links">
          <Link href="/new-in" className="nav-link">NEW IN</Link>
          <Link href="/shop" className="nav-link">SHOP</Link>
          <Link href="/about" className="nav-link">ABOUT</Link>
        </nav>

        <CartIndicator />
      </div>
    </header>
  );
}



















