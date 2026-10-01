import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Loja React
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/carrinho" className="cart-link">
          Carrinho
          <span className="badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
