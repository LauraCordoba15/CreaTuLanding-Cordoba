import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="text-white text-decoration-none d-flex align-items-center">
      <i className="bi bi-cart3 fs-5"></i>
      {totalItems > 0 && (
        <span className="badge bg-danger ms-2">{totalItems}</span>
      )}
    </Link>
  );
};

export default CartWidget;

