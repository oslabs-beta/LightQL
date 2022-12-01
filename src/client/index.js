import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './webpage/components/App';
import Homepage from './webpage/components/Homepage.js';
import Docs from './webpage/components/Docs.js';
import AboutUs from './webpage/components/AboutUs.js';
import Demo from './webpage/components/homepageComponents/Demo'

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/homepage",
          element: <Homepage />
        },
        {
            path: "/docs",
            element: <Docs />
        },
        {
            path: "/aboutus",
            element: <AboutUs />
        },
        {
            path: "/demo",
            element: <Demo />
        },
      ],
    },
]);

root.render (
    <RouterProvider router={router} />
);