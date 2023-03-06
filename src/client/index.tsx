import React from "react";
import ReactDOM from "react-dom/client";
import Favicon from 'react-favicon';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './webpage/components/App';
import Homepage from './webpage/components/Homepage';
import Docs from './webpage/components/Docs';
import AboutUs from './webpage/components/AboutUs';
import Demo from './webpage/components/homepageComponents/Demo'

const root = ReactDOM.createRoot(
    document.getElementById("root")!
);

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/demo" element={<Demo />} />
      </Route>
    </Routes>
  </Router>
);

root.render (
  <div>
    <Favicon url='https://www.lightql.com/6feb0ea439b5cb6ee74291fa3e2e45d2.png' />
    {router}
  </div>
);

// changes made during ts transition:
  // split up BrowserRouter import into Router, routes, and route from react-router-dom
  // changed createBrowserRouter to BrowserRouter
  // added '!' to root var to TS knows the value will never be null or undefined
  // replaced previous tsx with new {router} inside render statement