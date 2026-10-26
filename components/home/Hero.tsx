import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <h1>Autumn Essentials</h1>
          <p>Timeless pieces. Rich textures. Effortless everyday style.</p>
          <Link href="/shop" className="btn">Shop the Edit</Link>
        </div>
      </div>
    </section>
  )
}





