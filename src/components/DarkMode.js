import React from 'react';
import '../styles/DarkMode.css';

export default function DarkMode() {

  const darkmode = () => {
    const checkbox = document.querySelector('.check');
    const main = document.querySelect('.aaa')

    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        main.style.color = 'yellow'
      } else {
        main.style.color = 'blue'
      }
    });

  }

  return (
    <div>
      <label class="switch-button">
        <input className='check' type="checkbox" onClick={darkmode}/>
        <span class="onoff-switch"></span>
      </label>
      <div className="aaa">색상변경</div>
    </div>
  )
}
