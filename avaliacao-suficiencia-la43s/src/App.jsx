import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { useCart } from "./hooks/useCart";

import products from "./data/products.json";

function App() {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
    totalItems,
  } = useCart();

  return (
    <>
      <Navbar totalItems={totalItems} />

      <Routes>
        <Route
          path="/"
          element={<Home products={products} onAdd={addToCart} />}
        />

        <Route
          path="/carrinho"
          element={
            <CartPage
              cart={cart}
              onRemove={removeFromCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              total={total}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
