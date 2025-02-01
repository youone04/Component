import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Ambil semua folder dalam `pages/`
const pagesContext = require.context("./pages", true, /index\.jsx$/);
const routes = pagesContext.keys().map((path) => {
  const folderName = path.match(/^\.\/(.*?)\/index\.jsx$/)[1]; // Ambil nama folder
  const Component = pagesContext(path).default;
  return { path: folderName === "home" ? "/" : `/${folderName.toLowerCase()}`, Component };
});

export default function App() {
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
