import React from "react";
import CartWidget from "./CartWidget";
import Logo from "../assets/Logo.png"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img 
            src={Logo} 
            alt="RunFast Store Logo" 
            width="40" 
            height="40" 
            className="me-2"
          />
          <span className="fw-bold">RunFast Store</span>
        </a>


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
              <a className="nav-link" href="#tenis">Tenis Running</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ropa">Ropa Deportiva</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#accesorios">Accesorios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nutricion">Nutrición</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ofertas">Ofertas</a>
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

