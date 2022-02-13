import React from 'react';
import '../styles/pages.css';

export default function food() {
  return (
    <div className='Food'>
      <table className='FoodTable'>
        <thead>
          <th>날짜</th>
          <th>아침</th>
          <th>점심</th>
          <th>저녁</th>
        </thead>
        <tr>
          <td>2월 13일</td>
          <td>girl</td>
          <td>girl2</td>
          <td>girl3</td>
        </tr>
      </table>
    </div>
  )
}
