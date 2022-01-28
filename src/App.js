import React, { useState } from 'react';
import './styles/app.css';
import Footer from './components/footer'

function App() {
  const [timer, setTimer] = useState('00:00:00')

  const currentTimer = () => {
    const date = new Date()
    const tmp_day = String(date).toUpperCase()
    const day = tmp_day.substring(0,3)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    setTimer (`${hours}:${minutes} (${day})`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <div className="main">
      <h1 className='time'>{timer}</h1>
      <Footer />
    </div>
  );
}

export default App;
