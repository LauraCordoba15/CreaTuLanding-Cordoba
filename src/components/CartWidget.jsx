import React from "react";

const CartWidget = () => {
  return (
    <a href="#cart" className="text-white text-decoration-none d-flex align-items-center">
      {/* Icono de carrito de Bootstrap Icons */}
      <i className="bi bi-cart3 fs-5"></i>
      {/* Badge con número de items */}
      <span className="badge bg-danger ms-2">2</span>
    </a>
  );
};

export default CartWidget;
