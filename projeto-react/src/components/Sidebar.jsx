import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="logo">
        <h1>P</h1>
        <h2>Pinterest</h2>
      </NavLink> 
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/" className="active">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              <span>Início</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/explorar">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              <span>Explorar</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/criados">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              <span>Criados</span>
            </NavLink>
          </li>
        </ul>
        <a href="#">
          <i className="fa-solid fa-plus"></i>
          <span>Criar</span>
        </a>
      </nav>
      <div className="profile">
        <h1 className="profile-image">N</h1>
        <div>
          <h2 className="profile-name">Seu nome</h2>
          <h2 className="profile-text">Seu perfil</h2>
        </div>
      </div>
    </aside>
  );
}
