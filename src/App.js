import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Error from "./Error";
import Gallery from "./Gallery";
import Shop from "./Shop";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
