export default function CartDrawer({
  open,
  cart,
  onClose,
  onRemove,
  onUpdate,
  total,
}) {
  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={drawer}>
        {/* Header */}
        <div style={header}>
          <h3>Shopping Cart</h3>
          <button onClick={onClose} style={closeBtn}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {cart.length === 0 && (
            <p style={{ opacity: 0.6 }}>Your cart is empty</p>
          )}

          {cart.map((item) => (
            <div key={item.id} style={itemRow}>
              <div>
                <strong>{item.name}</strong>
                <p style={{ margin: "4px 0", opacity: 0.7 }}>
                  ₹{item.price.toLocaleString()}
                </p>

                <div style={qtyBox}>
                  <button onClick={() => onUpdate(item.id, -1)} style={qtyBtn}>−</button>
                  <span style={{ minWidth: 20, textAlign: "center" }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => onUpdate(item.id, 1)} style={qtyBtn}>+</button>
                </div>
              </div>

              <button onClick={() => onRemove(item.id)} style={removeBtn}>
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={footer}>
          <div style={totalRow}>
            <span>Total</span>
            <strong>₹{total.toLocaleString()}</strong>
          </div>

          <button style={checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

/* ========== STYLES ========== */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "flex-end",
};

const drawer = {
  width: "360px",
  height: "100%",
  background: "#fff",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  boxShadow: "-10px 0 30px rgba(0,0,0,0.2)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const closeBtn = {
  background: "#eee",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
};

const itemRow = {
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 0",
  borderBottom: "1px solid #eee",
};

const qtyBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "6px",
};

const qtyBtn = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  background: "#f4f4f4",
  fontWeight: "600",
};

const removeBtn = {
  background: "transparent",
  color: "#b00020",
  fontSize: "12px",
};

const footer = {
  borderTop: "1px solid #ddd",
  paddingTop: "16px",
};

const totalRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
  fontSize: "16px",
};

const checkoutBtn = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #d4af37, #f5d38e)",
  fontWeight: "600",
  fontSize: "15px",
};
