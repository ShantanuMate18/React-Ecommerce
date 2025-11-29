import ProductCard from "../components/ProductCard";

function Home({ products, addToCart }) {
  return (
    <main className="page">
      <h2 className="page-title">Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}  
          />
        ))}

        {products.length === 0 && (
          <p>No products found. Try a different search.</p>
        )}
      </div>
    </main>
  );
}

export default Home;
