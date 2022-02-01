// import React, { useState } from 'react';
import './styles/app.css';
import Footer from './components/footer'
import DarkMode from './components/DarkMode'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Notice from './pages/Notice';
function App() {
  return (
    <div className="main">
      <DarkMode />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notice" element={<Notice/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
