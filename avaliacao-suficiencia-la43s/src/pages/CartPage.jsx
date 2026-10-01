import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import "./CartPage.css";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

function CartPage({ cart, onRemove, onIncrease, onDecrease, total }) {
  if (!cart.length) {
    return (
      <main className="container">
        <h1>Carrinho</h1>

        <div className="empty-cart">
          <p>O carrinho está vazio.</p>

          <Link to="/">Voltar para a Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="cart-page-title">
        <ShoppingCart size={55} />
        <div>
          <h1>Carrinho</h1>
          <span>Revise os itens adicionados ao seu carrinho</span>
        </div>
      </div>

      <div className="content">
        <div>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                onRemove={onRemove}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                total={total}
              />
            );
          })}
        </div>
        <CartTotal cartItems={cart.length} total={total} />
      </div>
    </main>
  );
}

export default CartPage;
