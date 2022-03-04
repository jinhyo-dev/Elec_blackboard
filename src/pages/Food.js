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
        // console.log(loadedJSON.mealServiceDietInfo[1].row[0])
        let breakfast = loadedJSON.mealServiceDietInfo[1].row[0].DDISH_NM
        breakfast = breakfast.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
        breakfast = breakfast.replace(/[0-9]/g, "")
        breakfast = breakfast.replace(/\./g,'')
        breakfast = breakfast.replace(/\*/g,'')
        // document.write(`<div className="breakfast">${breakfast}</div>`)
        console.log('아침\n', breakfast)

        let lunch = loadedJSON.mealServiceDietInfo[1].row[1].DDISH_NM
        lunch = lunch.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
        lunch = lunch.replace(/[0-9]/g, "")
        lunch = lunch.replace(/\./g,'')
        lunch = lunch.replace(/\*/g,'')
        // document.write(`<div className="lunch">${lunch}</div>`)
        console.log('점심\n', lunch)

        let dinner = loadedJSON.mealServiceDietInfo[1].row[2].DDISH_NM
        dinner = dinner.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
        dinner = dinner.replace(/[0-9]/g, "")
        dinner = dinner.replace(/\./g,'')
        dinner = dinner.replace(/\*/g,'')
        // document.write(`<div className="dinner">${dinner}</div>`)
        console.log('저녁\n', dinner)

      } else {
        alert("fail to load");
      }
    }
  }
  }
  return (
    <div className='Food'>
      <input type='date' onChange={(e) => setDate(e.target.value)}></input>
      <button onClick={ checkDate }>yes</button>
      <button onClick={ showMeal }>meal</button>
    </div>
  )
}