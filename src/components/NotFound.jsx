import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h2>404 - Página no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe.</p>
      <Link to="/" className="btn btn-primary">Ir al catálogo</Link>
    </div>
  );
};

export default NotFound;
