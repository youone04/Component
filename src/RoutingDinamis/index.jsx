import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Ambil semua folder dalam `pages/`
const pages = import.meta.glob("../pages/*/index.jsx", { eager: true });

// Generate routes berdasarkan nama folder
const routes = Object.keys(pages).map((path) => {
  const folderName = path.match(/\.\/pages\/(.*?)\//)[1]; // Ambil nama folder
  const Component = pages[path].default;
  return { path: folderName === "Home" ? "/" : `/${folderName.toLowerCase()}`, Component };
});

export default function RoutingDinamis() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}
