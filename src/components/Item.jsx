import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {/* Imagen del producto */}
        <img
          src={item.image}
          alt={item.title}
          className="card-img-top img-fluid rounded"
        />

        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="text-muted">${item.price}</p>

          {/* Botón para ir al detalle */}
          <Link to={`/item/${item.id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
