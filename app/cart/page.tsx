import Header from '@/components/layout/Header';
import CartItemsClient from '@/components/cart/CartItemsClient';
import Summary from '@/components/cart/Summary';

export default async function CartPage() {
  return (
    <main className="shop-layout">
      <Header variant="dark" />

      <section className="cart-items-section">
        <h2 className="cart-title">Your Cart</h2>
        <CartItemsClient />
      </section>

      <aside className="cart-summary-wrapper">
        <Summary />
      </aside>
    </main>
  );
}



