import React, { useState } from 'react';
import '../styles/pages.css';
import '../styles/Food.css';
import $ from "jquery";

export default function Food() {
  const [breakfast, setBreakfast] = useState("")
  const [lunch, setLunch] = useState("")
  const [dinner, setDinner] = useState("")

  let today = new Date()
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  today = year + '-' + month + '-' + day
  const [date, setDate] = useState("")
  const delStr = /[^0-9]/g
  
  const checkDate = () => {
    console.log(date.replace(delStr, ''))
    console.log(today)
  }

  const showMeal = () => {
  var xhr = new XMLHttpRequest();
  var target = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=99a1b8c7095144abae21e03b2a2f65f3&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&MLSV_YMD=${date.replace(delStr, '')}`;
  xhr.open("GET", target);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        console.log(date)
        let loadedJSON = JSON.parse(xhr.responseText);
        let Bre = loadedJSON.mealServiceDietInfo[1].row[0].DDISH_NM
        Bre = Bre.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
        Bre = Bre.replace(/[0-9]/g, "")
        Bre = Bre.replace(/\./g,'')
        Bre = Bre.replace( /[a-z]/gi, '')
        setBreakfast(Bre.replace(/\*/g,''))
        console.log('아침\n', Bre)

        let Lun = loadedJSON.mealServiceDietInfo[1].row[1].DDISH_NM
        Lun = Lun.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
        Lun = Lun.replace(/[0-9]/g, "")
        Lun = Lun.replace(/\./g,'')
        Lun = Lun.replace( /[a-z]/gi, '')
        setLunch(Lun.replace(/\*/g,''))
        console.log('점심\n', Lun)

        let Din = loadedJSON.mealServiceDietInfo[1].row[2].DDISH_NM
        Din = Din.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
        Din = Din.replace(/[0-9]/g, "")
        Din = Din.replace(/\./g,'')
        Din = Din.replace( /[a-z]/gi, '')
        setDinner(Din.replace(/\*/g,''))
        console.log('저녁\n', Din)

      } else {
        alert("fail to load");
      }
    }
  }
  }
  return (
    <div className='Food'>
      <input type='date' onChange={(e) => setDate(e.target.value)} min="2022-03-02" max="2022-07-30" id='date'></input>
      <button onClick={ checkDate }>yes</button>
      <button onClick={ showMeal }>meal</button>
      <div className='foodTable'>
        아침<br /> {breakfast} <br /> <br />
        점심<br /> {lunch} <br /> <br />
        저녁<br /> {dinner}
      </div>
    </div>
  )
}