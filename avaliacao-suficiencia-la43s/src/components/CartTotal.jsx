import { ArrowLeft, CreditCard, Package, ShoppingCart } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import "./CartTotal.css";
import { Link } from "react-router-dom";

function CartTotal({ cartItems, total }) {
  return (
    <div className="cart-total">
      <div className="cart-total-title">
        <ShoppingCart />
        Resumo da compra
      </div>

      <div className="cart-total-items">
        <Package />
        <span>{cartItems} itens no carrinho</span>
      </div>

      <div className="cart-info">
        <span>Frete</span>
        <span>Grátis</span>
      </div>

      <div className="cart-info">
        <span>Subtotal (produtos)</span>
        <strong>{formatCurrency(total)}</strong>
      </div>

      <div className="cart-total-info">
        <span>Total:</span> {formatCurrency(total)}
      </div>

      <div className="cart-total-buttons">
        <button type="button" className="cart-total-action finalizar">
          <CreditCard />
          <span>Finalizar compra</span>
        </button>
        <button type="button" className="cart-total-action voltar">
          <ArrowLeft />
          <Link to="/">Continuar comprando</Link>
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
