//! 3 - Navegação entre páginas
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* 
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
       */}
      {/*//! 9 - Link ativo  */}
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
