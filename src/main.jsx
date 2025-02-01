import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import './index.css'
import './navbar.css'
import './footer.css'
import './stylesStiky.css'

import About from '@/pages/About';
import Stiky from '@/pages/Stiky';
import CarouselPage from '@/pages/CarousePage';
import ResizableSidebarPage from '@/pages/ResizableSidebar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stiky" element={<Stiky />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/resizable-sidebar" element={<ResizableSidebarPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
