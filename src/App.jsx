import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { products as productsData } from "./data/products";

function App() {  
  const [cart, setCart] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const filteredProducts = productsData.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar
        cartCount={cart.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home products={filteredProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails products={productsData} addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </>
  );
}

export default App;