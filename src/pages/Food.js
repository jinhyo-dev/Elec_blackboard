import React, { useState, useEffect } from 'react';
import '../styles/pages.css';
import '../styles/Food.css';
import $ from "jquery";
//나 디자인 못해먹겠음 ㅋㅋ 급식정보 표시될때 replace 써서 이쁘게 보이게 해주셈
export default function Food() {
  const [breakfast, setBreakfast] = useState("")
  const [lunch, setLunch] = useState("")
  const [dinner, setDinner] = useState("")

  let today = new Date()
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  today = year + '-' + month + '-' + day
  const [date, setDate] = useState(today)
  const delStr = /[^0-9]/g
  
  const checkDate = () => {
    var week =['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    console.log(date.replace(delStr, ''))
    console.log(today)
    console.log(day)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{ showMeal() }, [date])
  const showMeal = () => {
    var xhr = new XMLHttpRequest();
    var target = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=99a1b8c7095144abae21e03b2a2f65f3&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=R10&SD_SCHUL_CODE=8750767&MLSV_YMD=${date.replace(delStr, '')}`;
    xhr.open("GET", target);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log(date)
          let loadedJSON = JSON.parse(xhr.responseText);
          let Bre, Lun, Din
          try {
            Bre = loadedJSON.mealServiceDietInfo[1].row[0].DDISH_NM
            Bre = Bre.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
            Bre = Bre.replace(/[0-9]/g, "")
            Bre = Bre.replace(/\./g,'')
            Bre = Bre.replace( /[a-z]/gi, '')
            setBreakfast(Bre.replace(/\*/g,''))
          } catch (error) {
            setBreakfast("404 : 아침 급식정보가 없어요 ㅠㅅㅠ")
          }
          try {
            Lun = loadedJSON.mealServiceDietInfo[1].row[1].DDISH_NM
            Lun = Lun.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
            Lun = Lun.replace(/[0-9]/g, "")
            Lun = Lun.replace(/\./g,'')
            Lun = Lun.replace( /[a-z]/gi, '')
            setLunch(Lun.replace(/\*/g,''))
          } catch (error) {
            setLunch("404 : 점심 급식정보가 없어요 ㅠㅅㅠ")
          }
          try {
            Din = loadedJSON.mealServiceDietInfo[1].row[2].DDISH_NM
            Din = Din.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "\n")
            Din = Din.replace(/[0-9]/g, "")
            Din = Din.replace(/\./g,'')
            Din = Din.replace( /[a-z]/gi, '')
            setDinner(Din.replace(/\*/g,''))
          } catch (error) {
            setDinner("404 : 저녁 급식정보가 없어요 ㅠㅅㅠ")
          }

          console.log('아침\n', Bre)
          console.log('점심\n', Lun)
          console.log('저녁\n', Din)

        } else {
          alert("fail to load");
        }
      }
    }
  }
  return (
    <div className='Food'>
      <div className='foodTable'>
        {date} 의 급식정보<br /><br />
        <div className='cardBox'>
          <div className='card'>
            아침<br /> {breakfast} 
          </div>
          <div className='card'>
            점심<br /> {lunch}
          </div>
          <div className='card'>
            저녁<br /> {dinner}
        </div>
        </div>
        <input type='date' onChange={(e) => setDate(e.target.value) > showMeal()} min="2022-03-02" max="2022-07-30" id='date'></input>
        <button onClick={ checkDate } >day chack test</button>
        <button onClick={ showMeal }>meal</button>
      </div>
    </div>
  )
}