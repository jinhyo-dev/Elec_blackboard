import React, { useState } from 'react';
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
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
