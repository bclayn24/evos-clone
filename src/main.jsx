import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "/src/assets/styles/global.css";
import App from "/src/App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
