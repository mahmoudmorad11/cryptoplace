import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CointContextProvider from "../src/context/coinContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CointContextProvider>
      <App />
    </CointContextProvider>
  </BrowserRouter>
);
