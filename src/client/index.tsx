import React from "react";
import ReactDOM from "react-dom/client";
import Favicon from 'react-favicon';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './webpage/components/App';
import Homepage from './webpage/components/Homepage';
import Docs from './webpage/components/Docs';
import AboutUs from './webpage/components/AboutUs';
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
  <div>
    <Favicon url='https://www.lightql.com/6feb0ea439b5cb6ee74291fa3e2e45d2.png' />
    <RouterProvider router={router} />
  </div>
);