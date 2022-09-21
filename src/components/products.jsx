import React from "react";
import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { ListProduct } from "./listproduct";

import JsonData from "../data/data.json";


const Products = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation/>
      <ListProduct data={landingPageData.Gallery}/>
    </div>


    // <h1>hello</h1>
  );
};

export default Products;