import { formatCurrency } from "../utils/formatCurrency";
import "./ProductCard.css";

function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <img src={product.imagem} alt={product.nome} />

      <div className="product-card-content">
        <h2>{product.nome}</h2>

        <p>{product.descricao}</p>

        <strong>{formatCurrency(product.preco)}</strong>

        <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
      </div>
    </article>
  );
}

export default ProductCard;
