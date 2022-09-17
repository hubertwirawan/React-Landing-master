import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Products from './products';


const Layout = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/home' element={<Home />}></Route>
      <Route exact path='/products' element={<Products />}></Route>
    </Routes>
  );
};

export default Layout;
