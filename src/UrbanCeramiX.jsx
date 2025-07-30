import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Glossy White Wall Tile",
    description: "Elegant ceramic wall tile with a glossy finish, perfect for modern bathrooms.",
    price: "Ksh 1,200 per m²",
    image: "https://source.unsplash.com/300x200/?ceramic,white",
  },
  {
    id: 2,
    name: "Matte Grey Floor Tile",
    description: "Durable matte ceramic tile suitable for high-traffic areas.",
    price: "Ksh 1,500 per m²",
    image: "https://source.unsplash.com/300x200/?ceramic,grey",
  },
  {
    id: 3,
    name: "Decorative Mosaic Tile",
    description: "Vibrant mosaic patterns ideal for accent walls and backsplashes.",
    price: "Ksh 2,000 per m²",
    image: "https://source.unsplash.com/300x200/?ceramic,mosaic",
  },
];

export default function UrbanCeramiX() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <header style={{ padding: "20px", backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd" }}>
        <h1>Urban CeramiX</h1>
        <div>
          <button onClick={() => setShowCheckout(true)} style={{ position: "relative" }}>
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Premium Ceramics for Modern Spaces</h2>
        <p>Explore our wide range of tiles, sanitary ware, and decorative ceramics tailored for both homes and businesses.</p>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "10px", width: "300px", padding: "20px", backgroundColor: "#fff" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </section>

      {showCheckout && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "10px", width: "90%", maxWidth: "500px" }}>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    {item.name}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
            )}

            {cart.length > 0 && (
              <>
                <h3>Checkout Details</h3>
                <input type="text" placeholder="Full Name" style={{ width: "100%", marginBottom: "10px" }} />
                <input type="text" placeholder="Phone Number" style={{ width: "100%", marginBottom: "10px" }} />
                <input type="text" placeholder="Delivery Address" style={{ width: "100%", marginBottom: "10px" }} />
                <button style={{ width: "100%", marginTop: "10px" }}>Place Order</button>
              </>
            )}

            <button onClick={() => setShowCheckout(false)} style={{ marginTop: "20px", display: "block", width: "100%" }}>Close</button>
          </div>
        </div>
      )}

      <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #ddd", marginTop: "40px" }}>
        &copy; 2025 Urban CeramiX. All rights reserved.
      </footer>
    </div>
  );
}