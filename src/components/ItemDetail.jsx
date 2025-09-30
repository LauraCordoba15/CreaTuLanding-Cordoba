// src/components/ItemDetail.jsx
import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [addedQty, setAddedQty] = useState(0);

  const handleAdd = (qty) => {
    addItem(item, qty);
    setAddedQty(qty);
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <img src={item.image} alt={item.title} className="img-fluid rounded" />
      </div>
      <div className="col-md-7">
        <h3>{item.title}</h3>
        <p className="text-muted">${item.price}</p>
        <p>{item.description}</p>

        <div className="mb-3">
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        </div>

        {addedQty > 0 && (
          <div className="alert alert-success">
            Has agregado <strong>{addedQty}</strong> unidad(es) de{" "}
            <strong>{item.title}</strong>.
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

