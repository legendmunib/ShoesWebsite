import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          FootWear
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className="home-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/Shop" className="shop-link">
              Shop
            </NavLink>
          </li>

          <li className="mobile-hidden">
            <NavLink to="/New">New</NavLink>
          </li>

          <li className="mobile-hidden">
            <NavLink to="/Brands">Brands</NavLink>
          </li>

          <li className="mobile-hidden">
            <NavLink to="/Sale">Sale</NavLink>
          </li>

          <li className="mobile-hidden">
            <NavLink to="/About-us">About Us</NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="menu-toggle" aria-label="Menu">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="24"
              height="24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Profile */}
          {/* <button
            className="icon-btn"
            aria-label="Account"
            onClick={() => setShowLogin(true)}
          > */}

          <button
            className="icon-btn"
            aria-label="Account"
            onClick={() => (window.location.href = "/Login")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </button>

          <button className="icon-btn cart-wrap" aria-label="Cart, 2 items">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span className="cart-badge">2</span>
          </button>
        </div>
      </nav>

      {/* Login page/popup later */}
      {showLogin && (
        <div className="login-placeholder">
          <div className="login-placeholder-box">
            <button onClick={() => setShowLogin(false)}>×</button>
            <h2>Login</h2>
            <p>Login form will be added here.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
