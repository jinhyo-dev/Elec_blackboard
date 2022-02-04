import React from 'react';
import '../styles/DarkMode.css';

export default function DarkMode() {

  const darkmode = () => {
    const checkbox = document.querySelector('.check')
    const body = document.body
    const time = document.querySelector('.time')
    const setMode = document.querySelector('.setMode')
    const footer = document.querySelector('.footer')

    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        footer.style.backgroundColor = '#ccc'
        body.style.backgroundColor = 'white'
        time.style.color = 'black'
        setMode.innerHTML = 'Light Mode'
        setMode.style.color = 'black'
        body.style.transition = 'width 1s, height 1s, background-color 1s, transform 1s'
      } else {
        body.style.backgroundColor = '#34373c'
        time.style.color = 'white'
        setMode.innerHTML = 'Dark Mode'
        setMode.style.color = 'white'
        footer.style.backgroundColor = '#f5f5f5'
      }
    })

  }

  return (
    <div>
      <div className="setMode" style={{ color: 'white' }}>Dark Mode</div>
      <label class="switch-button">
        <input className='check' type="checkbox" onClick={darkmode}/>
        <span class="onoff-switch"></span>
      </label>
    </div>
  )
}
