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
    var day = "20220303";
    var target = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=99a1b8c7095144abae21e03b2a2f65f3&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&MLSV_YMD=${today}`;
    // xhr.open("GET", target + "/MLSV_YMD=" + day);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          let loadedJSON = JSON.parse(xhr.responseText);
          console.log(loadedJSON.mealServiceDietInfo[1].row[0].DDISH_NM)//아침
          console.log(loadedJSON.mealServiceDietInfo[1].row[1].DDISH_NM)//점심
          console.log(loadedJSON.mealServiceDietInfo[1].row[2].DDISH_NM)//저녁

        } else {
          alert("fail to load");
        }
      }
    }
  }
  return (
    <div className='Food'>
      <input type='date' onChange={(e) => setDate(e.target.value)}></input>
      <button onClick={() => { checkDate(), showMeal() }}>yes</button>
    </div>
  )
}