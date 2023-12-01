//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import Styles from 'Styles.css'

//ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<App />
 //</React.StrictMode>,
//)

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);