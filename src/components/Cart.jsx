import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container text-center my-5">
        <h3>Tu carrito está vacío</h3>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3>Carrito de compras</h3>
      <ul className="list-group mb-3">
        {cart.map(prod => (
          <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6>{prod.title}</h6>
              <small className="text-muted">Cantidad: {prod.quantity}</small>
            </div>
            <div>
              <span className="me-3 fw-bold">${prod.price * prod.quantity}</span>
              <button className="btn btn-sm btn-danger" onClick={() => removeItem(prod.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        <button className="btn btn-success">Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
