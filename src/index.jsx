import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Biography from "./pages/Biography";
import Record from "./pages/Record";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/biography",
    element: <Biography />,
  },
  {
    path: "/record",
    element: <Record />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
