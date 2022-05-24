import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import App from "./app";
import "./css/index.css";
import "./css/reset.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <BrowserRouter >
      <App/>
    </BrowserRouter >
);