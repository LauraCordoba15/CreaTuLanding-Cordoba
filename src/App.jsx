import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a RunFast Store!" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Categoría seleccionada" />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
