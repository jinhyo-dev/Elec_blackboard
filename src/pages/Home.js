import React, { useState } from 'react';
import '../styles/clock.css';
import '../styles/Home.css';
import '../styles/pages.css';
function Home() {
  const [timer, setTimer] = useState('00:00 (load)')

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

  return <div className='middle-page'>
    <h1 className='time'>{timer}</h1>
    <p>here is home</p>
    <a href='/Notice'>test go notice</a>
    <a href='/Food'> test go food</a>
  </div>;
}

export default Home;