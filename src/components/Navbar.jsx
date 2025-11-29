import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  cartCount,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory
}) {
  const [isOpen, setIsOpen] = useState(false);

  
  const categories = ["Men", "Women", "Kids", "Electronics", "Home & Living"];

  return (
    <header className="navbar">
      {}
      <div className="nav-left">
        {}
        <Link to="/" className="logo">
          E-Commerce
        </Link>

        {}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`nav-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(cat);
                setIsOpen(false);
              }}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {}
      <div className="nav-right">
        {}
        <input
          type="text"
          className="search-input"
          placeholder="Search products…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {}
        <NavLink to="/cart" className="cart-link">
          <span role="img" aria-label="cart">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
