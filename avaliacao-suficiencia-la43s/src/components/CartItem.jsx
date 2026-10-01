import "./CartItem.css";
import { formatCurrency } from "../utils/formatCurrency";
import { Minus, Plus, Trash } from "lucide-react";

function CartItem({ product, onRemove, onIncrease, onDecrease }) {
  return (
    <article className="cart-item">
      <img src={product.imagem} alt={product.nome} />

      <div className="cart-item-info">
        <div className="cart-item-description">
          <div className="cart-item-basic-info">
            <h2>{product.nome}</h2>
            <p>{product.descricao}</p>
          </div>
          <strong>{formatCurrency(product.preco)}</strong>
        </div>
      </div>
      <div className="quantity">
        <button
          type="button"
          className="cart-button"
          disabled={product.quantidade <= 1}
          onClick={() => onDecrease(product.id)}
        >
          <Minus size={20} />
        </button>

        <span>{product.quantidade}</span>

        <button
          type="button"
          className="cart-button"
          onClick={() => onIncrease(product.id)}
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="cart-item-info">
        <div className="cart-subtotal">
          <div className="cart-item-basic-info">
            <p>Subtotal</p>
          </div>
          <strong>{formatCurrency(product.preco * product.quantidade)}</strong>
        </div>
      </div>
      <button
        type="button"
        className="cart-button remover"
        onClick={() => onRemove(product)}
      >
        <Trash size={20} />
      </button>
    </article>
  );
}

export default CartItem;
