import React, { useState } from 'react'
import '../styles/pages.css'

export default function Food() {
  let today = new Date()
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  today = year + month + day
  const [date, setDate] = useState("")
  const delStr = /[^0-9]/g
  const checkDate = () => {
    console.log(date.replace(delStr, ''))
    console.log(today)
  }
  return (
    <div className='Food'>
      <input type='date' onChange={(e) => setDate(e.target.value)}></input>
      <button onClick={checkDate}>yes</button>
    </div>
  )
}