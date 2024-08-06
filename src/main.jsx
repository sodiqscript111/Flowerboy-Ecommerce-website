import { CartProvider } from "./contexts/cart.context";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Create a root.
const root = createRoot(document.getElementById("root"));

// Initial render
root.render(
  <BrowserRouter>
  <CartProvider> 
  <App />
  </CartProvider>
   
  </BrowserRouter>
);
