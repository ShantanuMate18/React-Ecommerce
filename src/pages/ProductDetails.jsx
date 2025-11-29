import { useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="page">
        <h2>Product Not Found</h2>
      </main>
    );
  }

  return (
    <main className="page product-detail-page">

      <div className="detail-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-info">

        <h2>{product.name}</h2>

        <p className="detail-price">₹ {product.price}</p>

        {}
        <p className="detail-desc">
          {product.description}
        </p>

        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetails;