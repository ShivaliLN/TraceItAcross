// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterProduct from './components/RegisterProduct';
import ProductHistory from './components/ProductHistory';
import './styles.css';  // Importing the styles

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterProduct />} />
          <Route path="/history" element={<ProductHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
