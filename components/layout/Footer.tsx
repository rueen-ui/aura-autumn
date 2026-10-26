import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-title">AURA Autumn</h4>
            <p className="footer-text">
              Modern essentials for the season.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/new-in">New in</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Support</h4>
            <p className="footer-text">hello@aura-autumn.com</p>
            <p className="footer-text mt-1">Copenhagen, Strandgade 12</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} AURA Autumn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}



