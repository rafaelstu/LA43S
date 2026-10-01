import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({ products, onAdd }) {
  return (
    <main className="container">
      <h1>Produtos</h1>

      <section className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </section>
    </main>
  );
}

export default Home;
