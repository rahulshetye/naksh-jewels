export default function ProductCard({ product, onAdd }) {
  return (
    <div style={cardStyle}>
      <div style={imageStyle}>
        💍
      </div>

      <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
      <p style={{ fontWeight: "600", margin: "6px 0" }}>
        ₹{product.price.toLocaleString()}
      </p>

      <button style={buttonStyle} onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const imageStyle = {
  height: "120px",
  background: "linear-gradient(135deg, #f5d38e, #d4af37)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "48px",
};

const buttonStyle = {
  marginTop: "12px",
  padding: "10px",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #d4af37, #f5d38e)",
  fontWeight: "600",
};
