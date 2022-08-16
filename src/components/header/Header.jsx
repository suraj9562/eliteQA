import Styles from "./header.module.css";
import logo from "./../../assets/icons/logo.svg";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={Styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? Styles.active : Styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) => (isActive ? Styles.active : Styles.link)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? Styles.active : Styles.link)}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? Styles.active : Styles.link)}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
