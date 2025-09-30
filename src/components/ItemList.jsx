import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
};

export default ItemList;
