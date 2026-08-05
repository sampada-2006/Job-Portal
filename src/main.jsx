import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/*import App from "./App.jsx";*/
import "./styles/global.css";
import "./styles/variables.css";

import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
);
