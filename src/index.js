import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AllProperties from "./Properties/AllProperties";
import AllProperty from "./Property/AllProperty";
import AllContact from "./Contact/AllContact";
import AllProducts from "./Products/AllProducts";
import ScrollToTop from "react-scroll-to-top";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "properties",
    element: <AllProperties/>
  },

  {
    path: "property",
    element: <AllProperty/>
  },
  
  {
    path: "contact",
    element: <AllContact/>
  },
  {
    path: "products",
    element: <AllProducts/>
  },
  
]);

createRoot(document.getElementById("root")).render(

  <><RouterProvider router={router} />
  <ScrollToTop smooth /></>

);

