function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>FootWear</h2>
          <p>
            Step into style. Discover premium sneakers, fresh drops, and
            exclusive footwear.
          </p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">◎</a>
            <a href="#">▶</a>
          </div>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h4>Shop</h4>
          <a href="#">New Arrivals</a>
          <a href="#">Nike</a>
          <a href="#">Adidas</a>
          <a href="#">Jordan</a>
          <a href="#">Sale</a>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h4>Help</h4>
          <a href="#">Contact Us</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Size Guide</a>
          <a href="#">FAQs</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>

          <p>Get updates about new arrivals and exclusive offers.</p>

          <div className="email-box">
            <input type="email" placeholder="Your email address" />
            <button>→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FootWear. All rights reserved.</p>

        <div>
          <span>Made for sneaker lovers</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
