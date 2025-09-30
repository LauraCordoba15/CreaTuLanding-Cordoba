import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { fetchProductById } from "../data/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  if (!product) {
    return <p className="text-center my-5">Cargando producto...</p>;
  }

  return (
    <div className="container my-5">
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
