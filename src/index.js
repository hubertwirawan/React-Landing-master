import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// import * as serviceWorker from './serviceWorker';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useRoutes,
// } from "react-router-dom";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
