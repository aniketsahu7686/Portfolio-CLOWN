import React from 'react';
import "./index.css" 
import { ReactDOM } from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from './App';

import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();


