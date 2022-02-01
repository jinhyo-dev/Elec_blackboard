import React, { useState } from 'react';
import './styles/app.css';
import Footer from './components/footer'
import DarkMode from './components/DarkMode'
// import Navbar from './components/Navbar'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Food from './pages/Food'
import Notice from './pages/Notice'

function App() {
  return (
    <div className="main">

      <DarkMode />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Food' element={<Food/>} />
          <Route path='/Notice' element={<Notice/>} />
        </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
