// import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";

import { render } from 'react-dom'
import Products from "./components/products";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Layout from "./components/layout"
import "./App.css";
import React from 'react'
window.React = React

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  return(  
  <div className="App">
    {/* <Navigation /> */}
    <Layout />
  </div>)
};

export default App;
