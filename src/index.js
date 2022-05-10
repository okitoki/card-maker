import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import "./css/index.css";
import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);