import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink end to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar
