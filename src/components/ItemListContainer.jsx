import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { fetchProducts } from "../data/products";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      if (categoryId) {
        setProducts(res.filter((p) => p.category === categoryId));
      } else {
        setProducts(res);
      }
    });
  }, [categoryId]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;


