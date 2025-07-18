import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Лого + Название */}
        <div className="logo-title">
          <img
            src="https://static.wixstatic.com/media/f3c9b4_8ecf733c7fe84c5b81667923b520feca~mv2.png/v1/fill/w_168,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20NSL_white_small_sign%20only.png"
            alt="Novosealand Logo"
            className="header-logo"
          />
          <h1 className="company-name">Novosealand</h1>
        </div>

        {/* Контакты */}
        <div className="contact-info">
          <a href="mailto:info@novosealand.com" className="email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 13.065L2 6.5V18h20V6.5l-10 6.565zm0-2.13L20 5H4l8 5.935z"/>
            </svg>
            <span>info@novosealand.com</span>
          </a>
          <a href="tel:+380935272052" className="phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.24 1.05l-2.2 2.2z"/>
            </svg>
            <span>+380 93 527 2052</span>
          </a>
        </div>

        {/* Бургер */}
        <button className={`burger-menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Навигация */}
      <div className={`navbar-wrapper ${menuOpen ? "open" : ""}`}>
        <nav className="navbar">
          <a href="#about" className="nav-item" onClick={closeMenu}>About</a>
          <a href="#gallery" className="nav-item" onClick={closeMenu}>Gallery</a>
          <a href="#ourbusiness" className="nav-item" onClick={closeMenu}>Our Business</a>
          <a href="#services" className="nav-item" onClick={closeMenu}>Services</a>
          <a href="#presence" className="nav-item" onClick={closeMenu}>Coverage</a>
          <a href="#testimonials" className="nav-item" onClick={closeMenu}>Testimonials</a>
          <a href="#contacts" className="nav-item" onClick={closeMenu}>Contacts</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
