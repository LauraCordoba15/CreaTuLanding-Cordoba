import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={Logo}
            alt="RunFast Store Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold">RunFast Store</span>
        </Link>

        {/* Botón toggler para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/tenis">
                Tenis Running
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/ropa">
                Ropa Deportiva
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/accesorios">
                Accesorios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/nutricion">
                Nutrición
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/ofertas">
                Ofertas
              </NavLink>
            </li>
          </ul>

          {/* Carrito de compras */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

