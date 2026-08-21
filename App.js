import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Categories from "./Categories";
import ProductsPage from "./ProductsPage";
import Check from "./Check";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/check" element={<Check />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;