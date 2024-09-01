import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../UserComponent/Home/Home";
import About from "../../UserComponent/About/About";
import Footer from "../../UserComponent/footer/Footer";
import Topbar from "../../UserComponent/Topbar/Topbar";
import Navbar from "../../UserComponent/Navbar/Navbar";
import Product from "../../UserComponent/product/Product";
import ProductDetails from "../../UserComponent/productDetails/ProductDetails";
import Contact from "../../UserComponent/contact/Contact";

const UserNavigation = () => {
  return (
    <>
      <Topbar />
      <Navbar />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/productDetails/:_id" element={<ProductDetails/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

   
      <Footer />
    </>
  );
};

export default UserNavigation;
