import React, { useState } from 'react';
import Footer from './components/footer'
import DarkMode from './components/DarkMode'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Food from './pages/Food';
import Notice from './pages/Notice';
function App() {
  const [mode, setMode] = useState(false)
  return (
    <>
      <div className="main">
        <DarkMode />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Food" element={<Food/>} />
          <Route path="/Notice" element={<Notice/>} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}
  
export default App;