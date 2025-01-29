import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to={'/'} className="header__logo-link">
        <h1 className="header__logo">K-Mart</h1>
      </Link>

      {/* Search Bar */}
      <div className="header__search">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="header__search-input"
        />
        <button className="header__search-button">Tìm</button>
      </div>

      {/* Navigation Menu */}
      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul className="header__nav-list">
          <Link to={'/product-page'} className="header__nav-link">
            <li className="header__nav-item">Danh mục sản phẩm</li>
          </Link>
          <Link to={'/promotion'} className="header__nav-link">
            <li className="header__nav-item">Khuyến mãi</li>
          </Link>
          <Link to={'/support'} className="header__nav-link">
            <li className="header__nav-item">Hỗ trợ</li>
          </Link>
          <Link to={'/account'} className="header__nav-link">
            <li className="header__nav-item">Tài khoản</li>
          </Link>
        </ul>
      </nav>

      {/* Cart Icon */}
      <div className="header__cart">
        <Link to={'/cart'} className="header__cart-link">
          <span className="header__cart-icon">🛒</span>
          <span className="header__cart-count">3</span>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="header__hamburger" onClick={toggleMenu}>
        <span className="header__hamburger-icon">&#9776;</span>
      </div>
    </header>
  );
};

export default Header;