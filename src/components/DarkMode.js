import React from 'react';
import '../styles/DarkMode.css';

export default function DarkMode() {

  const darkmode = () => {
    const checkbox = document.querySelector('.check');
    const body = document.body
    const time = document.querySelector('.time');

    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        body.style.backgroundColor = 'black'
        time.style.color = 'white'
      } else {
        body.style.backgroundColor = 'white'
        time.style.color = 'black'
      }
    });

  }

  return (
    <div>
      <label class="switch-button">
        <input className='check' type="checkbox" onClick={darkmode}/>
        <span class="onoff-switch"></span>
      </label>
    </div>
  )
}
