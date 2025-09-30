import React, { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(prev => (prev < stock ? prev + 1 : prev));
  };

  const decrement = () => {
    setCount(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <div className="input-group" style={{ width: 140 }}>
        <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
        <input type="text" className="form-control text-center" value={count} readOnly />
        <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
      </div>
      <button className="btn btn-success" onClick={handleAdd} disabled={stock === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
