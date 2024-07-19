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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stiky" element={<Stiky />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
