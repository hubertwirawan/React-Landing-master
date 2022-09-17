// import { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";
// import React from 'react'
// import { render } from 'react-dom'
// import Products from "./components/products";
// window.React = React

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Products from './components/products';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/products" element={<Products />}></Route>
    </Routes>
    // </BrowserRouter>
  );

  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  // return (
  //   <div>
  //     <Navigation />
  //     <Header data={landingPageData.Header} />
  //     <Features data={landingPageData.Features} />
  //     <About data={landingPageData.About} />
  //     <Services data={landingPageData.Services} />
  //     <Gallery data={landingPageData.Gallery}/>
  //     <Testimonials data={landingPageData.Testimonials} />
  //     {/* <Team data={landingPageData.Team} /> */}
  //     <Products/>
  //     <Contact data={landingPageData.Contact} />
  //   </div>
  // );
};

export default App;
