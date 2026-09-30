import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/">
        <h1>P</h1>
        <h2>Pinterest</h2>
      </NavLink>
    </aside>
  );
}
