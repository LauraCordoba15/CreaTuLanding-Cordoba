import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-3">{greeting}</h2>
      <p className="text-muted">
        Encuentra los mejores tenis para running, ropa deportiva y accesorios para tus entrenamientos.
      </p>
    </div>
  );
};

export default ItemListContainer;
