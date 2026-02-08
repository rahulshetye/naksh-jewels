import { useEffect, useState, useContext } from "react";
import { fetchProducts } from "../api/products";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    totalAmount,
    totalItems,
  } = useContext(CartContext);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <header style={header}>
        <h2>Naksh Jewels</h2>
        <button style={cartBtn} onClick={() => setCartOpen(true)}>
          🛒 {totalItems}
        </button>
      </header>

      <div style={grid}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={() => addToCart(p)}
          />
        ))}
      </div>

      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onUpdate={updateQty}
        total={totalAmount}
      />
    </div>
  );
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
};

const cartBtn = {
  background: "#111",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
};
