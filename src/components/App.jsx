import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Recipes from "./recipes/Recipes";
import "./styles.css";

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <Recipes/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;